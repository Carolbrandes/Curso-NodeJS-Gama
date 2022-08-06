import express from 'express'

// import controllers
import {authController} from '../controllers/authController'
import {PacientesController} from '../controllers/PacientesController'
import {PsicologosController} from '../controllers/PsicologosController'
import {AtendimentosController} from '../controllers/AtendimentosController'

// import middlewares
import {auth} from '../middlewares/auth'

// import validations
import {validateCreate} from '../validations/psicologos/create'
import { validateCreate as validatePaciente } from '../validations/pacientes/create'
import { validateCreate as validateAtendimento } from '../validations/atendimentos/create'
import {loginValidate} from '../validations/auth/login'



const routes = express.Router()


// pacientes
routes.get('/pacientes', auth, PacientesController.getAllPacientes)
routes.post('/pacientes', auth, validatePaciente, PacientesController.postNewPaciente)
routes.put('/pacientes/:id', auth, PacientesController.updatePaciente)
routes.delete('/pacientes/:id', auth, PacientesController.deletePaciente)

// psicologos
routes.get('/psicologos', auth, PsicologosController.getAllPsicologos)
routes.post('/psicologos', validateCreate, PsicologosController.postNewPsicologo)
routes.put('/psicologos/:id', auth, PsicologosController.updatePsicologo)
routes.delete('/psicologos/:id', auth, PsicologosController.deletePsicologo)

// atendimentos
routes.get('/atendimentos', auth, AtendimentosController.getAllAtendimentos)
routes.post('/atendimentos', auth, validateAtendimento, AtendimentosController.postNewAtendimento)
routes.put('/atendimentos/:id', auth, AtendimentosController.updateAtendimento)
routes.delete('/atendimentos/:id', auth, AtendimentosController.deletePaciente)


routes.post('/login', loginValidate, authController.login)



export default routes