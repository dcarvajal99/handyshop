import React from 'react';
import { Tabs } from 'flowbite-react';
import { HiAdjustments, HiClipboardList, HiUserCircle } from 'react-icons/hi';
import { MdDashboard } from 'react-icons/md';
import DatosMiCuenta from './DatosMiCuenta';
import ContainerMyCards from './cards/ContainerCards';
import TableCompras from './miscompras/TableCompras';

export default function TabMiCuenta() {
    return (
        <Tabs.Group aria-label="Default tabs">
            <Tabs.Item active icon={HiUserCircle} title="Mi Perfil">
                <DatosMiCuenta />
            </Tabs.Item>
            <Tabs.Item icon={MdDashboard} title="Mis servicios">
                <ContainerMyCards />
            </Tabs.Item>
            <Tabs.Item icon={HiClipboardList} title="Mis compras">
                <TableCompras />
            </Tabs.Item>
            <Tabs.Item icon={HiAdjustments} disabled title="Configuración de cuenta">
                <TableCompras />
            </Tabs.Item>
        </Tabs.Group>
    );
}