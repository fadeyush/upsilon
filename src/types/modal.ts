export interface ModalProps {
    children: React.ReactNode;
    visible: boolean;
    setVisible: (e: boolean) => void;
    className?: string;
}