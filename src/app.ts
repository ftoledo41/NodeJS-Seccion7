import { envs } from "./config/plugins/envs.plugin";
import { Server } from "./presentation/server";
import "dotenv/config";

(async () => {
  main();
})();

function main() {
  Server.start();
  console.log(envs.PORT);
}
