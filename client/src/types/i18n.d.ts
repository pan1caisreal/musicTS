// src/types/react-i18next.d.ts
import "react-i18next";
import enTranslation from "./locales/en.json";
import ruTranslation from "./locales/ru.json";

declare module "react-i18next" {
    type DefaultResources = typeof enTranslation;
    interface Resources extends DefaultResources {}

    interface CustomTypeOptions {
        defaultNS: "common";
        resources: typeof enTranslation;
    }

    interface TFunctionKeys {
        'musicTs': string;
        'Profile': string;
        'LikeSong': string;
        'MyPlaylists': string;
        'LikeAlbum': string;
        'Search': string;
        'Logout': string;
        'Login': string;
        'Registration': string;
        'About': string;
    }
}
