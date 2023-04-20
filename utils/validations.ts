export const validateEmail = (email: string) => {
    const match: RegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return match.test(String(email).toLowerCase());
};

export const validateName = (name: string) => {
    const match: RegExp = /^[^\d🙂-🙏!@#$%^*()]+$/u;
    const trimmedName: string = name.trim();

    if (trimmedName.length < 2) return false;

    if (!match.test(trimmedName)) return false;

    return true;
};

export const validateMessage = (message: string) => {
    const trimmedMessage: string = message.trim();

    if (trimmedMessage.length < 2) return false;

    return true;
}