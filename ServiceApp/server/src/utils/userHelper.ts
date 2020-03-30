import yargs from 'yargs';
import { generateNewWallet, fundWallet } from './walletHelper';
import { createNewUser } from './credentialHelper';

const createUser = async () => {
    const { name, role = '', location = '' } = argv;
    if (name && (role === 'SR' || role === 'SP')) {
        createNewUser(name, role, location);
    } else {
        console.log('Params are missing or wrong');
        return;
    }
};

const createNewWallet = async () => {
    const wallet = generateNewWallet();
    await fundWallet(wallet)
};



const argv = yargs
    .usage('Create new user or wallet')
    .example('$0 --create user --role SR --name user-SR-123 --location 47.934438,10.340688')
    .required('create', 'Mode must be provided').describe('create', 'Create new user or wallet. Options: ["user", "wallet"]')
    .describe('role', 'Define user role. Options: ["SR", "SP"]')
    .describe('name', 'Define user name')
    .describe('location', 'Define location')
    .describe('paymentQueue', 'Define if cloud-based payment queue should be used to speed up multiple payments')
    .help('help')
    .argv;

if (argv.create === 'user') {
    createUser();
} else if (argv.create === 'wallet') {
    createNewWallet();
} else {
    console.log('Wrong mode. Possible modes: ["user", "wallet"]');
}