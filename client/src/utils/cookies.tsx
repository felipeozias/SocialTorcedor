export function getCookie(nameCookie: string): string | null {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.indexOf(nameCookie + "=") == 0) {
            return cookie.substring(nameCookie.length + 1, cookie.length);
        }
    }
    return null;
}

export const getToken = getCookie("token");
