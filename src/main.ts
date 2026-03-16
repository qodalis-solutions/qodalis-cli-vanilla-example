import '@xterm/xterm/css/xterm.css';
import { CliEngine } from '@qodalis/cli';
import { guidModule } from '@qodalis/cli-guid';
import { filesModule } from '@qodalis/cli-files';
import { usersModule } from '@qodalis/cli-users';

const container = document.getElementById('terminal')!;

const engine = new CliEngine(container, {});

engine.registerModules([
    guidModule,
    filesModule,
    usersModule,
]);

engine.start();
