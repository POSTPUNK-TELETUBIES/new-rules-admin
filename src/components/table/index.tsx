import React, { useMemo } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { MRT_ColumnDef } from 'material-react-table';

interface Rule {
  codigo: string;
  regla: string;
  tipo: string;
  severidad: string;
  e_actual: string;
  fecha: string;
}

const data: Rule[] = [
  {
    codigo: 'R01',
    regla: 'Regla 1',
    tipo: 'Bug',
    severidad: 'Major',
    e_actual: 'activado',
    fecha: '20-10-2023',
  },
  {
    codigo: 'R02',
    regla: 'Regla 2',
    tipo: 'Vulnerability',
    severidad: 'Critical',
    e_actual: 'desactivado',
    fecha: '08-05-2023',
  },
];

export default function App() {
  const columns = useMemo<MRT_ColumnDef<Rule>[]>(
    () => [
      {
        accessorKey: 'codigo',
        header: 'Codigo',
      },
      {
        accessorKey: 'regla',
        header: 'Regla',
      },
      {
        accessorKey: 'tipo',
        header: 'Tipo',
      },
      {
        accessorKey: 'severidad',
        header: 'Severidad',
      },
      {
        accessorKey: 'e_actual',
        header: 'E.Actual',
      },
      {
        accessorKey: 'fecha',
        header: 'Fecha',
      },

    ],
    [],
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      enableRowSelection
      enableColumnOrdering
      enableGlobalFilter
    />
  );
}
