import { ReactNode } from 'react';

interface ModalType {
    children?: ReactNode;
    isOpen: boolean;
    toggle: () => void;
}

export type { ModalType };
