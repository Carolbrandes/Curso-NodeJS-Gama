import {Pacientes} from "./Pacientes";
import {Psicologos} from "./Psicologos";
import {Atendimentos} from "./Atendimentos";

Pacientes.belongsToMany(Psicologos, {
  foreignKey: "produto_id",
  through: Atendimentos,
});

Psicologos.belongsToMany(Pacientes, {
  foreignKey: "categoria_id",
  through: Atendimentos,
});

export {Pacientes, Psicologos, Atendimentos}
