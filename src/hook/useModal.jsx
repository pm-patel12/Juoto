import { useRef, useCallback } from 'react';

export function useModal() {
    const modalInstances = useRef(new Map());

    const getModalInstance = useCallback((modalId) => {
        let instance = modalInstances.current.get(modalId);
        if (!instance) {
            const el = document.getElementById(modalId);
            if (el) {
                const backdrop = el.getAttribute('data-bs-backdrop') || 'true';
                const keyboard = el.getAttribute('data-bs-keyboard') !== 'false';
                // eslint-disable-next-line no-undef
                instance = new bootstrap.Modal(el, {
                    backdrop: backdrop === 'static' ? 'static' : backdrop,
                    keyboard,
                });
                modalInstances.current.set(modalId, instance);
            }
        }
        return instance;
    }, []);

    const openModal = useCallback((modalId) => {
        const instance = getModalInstance(modalId);
        if (instance) instance.show();
    }, [getModalInstance]);

    const closeModal = useCallback((modalId) => {
        const instance = getModalInstance(modalId);
        if (instance) instance.hide();
    }, [getModalInstance]);

    return { openModal, closeModal };
}
