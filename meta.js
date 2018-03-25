const path = require('path');
const {spawn, execSync} = require('child_process');
let yon;
try {
    execSync('yarn -v');
    yon = 'yarn';
} catch (e) {
    yon = 'npm';
}

let gitConfig;
try {
    gitConfig = require('git-config').sync();
} catch (e) {
    gitConfig = {github: null}
}

function kebabToCamel(name) {
    name = name.replace(/[-_](\w)/g, (match, p1) => p1.toUpperCase());
    name = name.replace(/^\w/, (match) => match.toUpperCase());
    return name
}

module.exports = {
    prompts: {
        name: {
            type: 'string',
            required: true,
            message: `Plugin name`
        },
        library: {
            type: 'string',
            required: true,
            message: 'Library name',
            default(answers) {
                return answers.name ? kebabToCamel(answers.name) : null
            }
        },
        description: {
            type: 'string',
            required: false,
            message: 'Plugin description',
            default(answers) {
                return `Awesome ${answers.library} for Vue.js`
            }
        },
        version: {
            type: 'string',
            required: false,
            message: 'Current version',
            default: '0.0.0'
        },
        author: {
            type: 'string',
            message: 'Author'
        },
        githubAccount: {
            type: 'string',
            required: false,
            message: 'GitHub Account',
            default: gitConfig.github && gitConfig.github.user
        },
    },
    helpers: {
        nowYear() {
            return new Date().getFullYear()
        },
        authorFullNameFrom(author) {
            const startPosition = author.indexOf('<');
            return author.slice(0, startPosition - 1)
        },
        authorEmailFrom(author) {
            const startPosition = author.indexOf('<');
            const endPosition = author.indexOf('>');
            return author.slice(startPosition + 1, endPosition)
        }
    },
    skipInterpolation: 'src/**/*.vue',
    // "completeMessage": "To get started:\n\n  cd {{destDirName}}\n  yarn install\n  yarn run dev",
    complete: function (data, {chalk}) {
        const green = chalk.green;
        const cwd = path.join(process.cwd(), data['inPlace'] ? '' : data['destDirName']);
        console.log(`${chalk.yellow('Installing dependency using ' + yon + '...')}`);
        runCommand(yon, ['install'], {
            cwd,
        }).then(() => {
            console.log(`${green('To get started:')}`);
            console.log(`  cd ${data['destDirName']}`);
            console.log(`  ${yon} start`);
        }).catch(e => {
            console.log(chalk.red('Error:'), e)
        });
    },
};

function runCommand(cmd, args, options) {
    return new Promise((resolve, reject) => {
        const spwan = spawn(
            cmd,
            args,
            Object.assign(
                {
                    cwd: process.cwd(),
                    stdio: 'inherit',
                    shell: true,
                },
                options
            )
        );
        spwan.on('exit', () => {
            resolve()
        })
    })
}
