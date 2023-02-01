import { SystemUserProxy } from './classes/system-user-proxy';

async function clientCode(): Promise<void> {
  const user = new SystemUserProxy('Luiz', 'João Pedro');
  console.log('Isso vai levar 2 segundos');
  console.log(await user.getAddresses());

  console.log('Isso vai se repetir (CACHE)');
  for (let i = 0; i < 5; i++) {
    console.log(await user.getAddresses());
  }
}

(async () => await clientCode())();