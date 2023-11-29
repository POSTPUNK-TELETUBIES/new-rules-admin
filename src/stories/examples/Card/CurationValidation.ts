import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export const schema = yup
    .object()
    .shape({
        explanation: yup
            .string()
            .required('Es requerido')
            .max(200, '200 caracteres como maximo'),
    })

export const resolver = yupResolver(schema);