import React from 'react';
import { Tabs } from 'flowbite-react';
import { HiAdjustments, HiClipboardList, HiUserCircle } from 'react-icons/hi';
import { MdDashboard } from 'react-icons/md';
import DatosMiCuenta from './DatosMiCuenta';
import ContainerMyCards from './cards/ContainerCards';

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
                <p>
                    This is
                    <span className="font-medium text-gray-800 dark:text-white">
                        Dashboard tab's associated content
                    </span>
                    .
                    Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                    control the content visibility and styling.
                </p>
            </Tabs.Item>
            <Tabs.Item icon={HiAdjustments} disabled title="Configuración de cuenta">
                <p>
                    This is
                    <span className="font-medium text-gray-800 dark:text-white">
                        Settings tab's associated content
                    </span>
                    .
                    Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                    control the content visibility and styling.
                </p>
            </Tabs.Item>
            <Tabs.Item disabled title="Disabled">
                <p>Disabled content</p>
            </Tabs.Item>
        </Tabs.Group>
    );
}