import { useRef, useCallback } from "react";

export function useModal() {
  const modalInstances = useRef(new Map());

  const getModalInstance = useCallback((modalId) => {
    const el = document.getElementById(modalId);
    if (!el) return null;

    // Always use Bootstrap's built-in safe method
    // This ensures instance is created if missing, or reused if exists
    // eslint-disable-next-line no-undef
    const instance = bootstrap.Modal.getOrCreateInstance(el, {
      backdrop:
        el.getAttribute("data-bs-backdrop") === "static"
          ? "static"
          : el.getAttribute("data-bs-backdrop") || true,
      keyboard: el.getAttribute("data-bs-keyboard") !== "false",
    });

    modalInstances.current.set(modalId, instance);
    return instance;
  }, []);

  const openModal = useCallback(
    (modalId) => {
      const instance = getModalInstance(modalId);
      if (instance) instance.show();
    },
    [getModalInstance]
  );

  const closeModal = useCallback(
    (modalId) => {
      const instance = getModalInstance(modalId);
      if (instance) instance.hide();
    },
    [getModalInstance]
  );

  return { openModal, closeModal };
}
