import { useMemo } from 'react';

const useAzerbaijaniNormalization = () => {
    const azLatinToCyrillicMap = {
        "ə": "e",
        "ç": "c",
        "ğ": "g",
        "ı": "i",
        "ö": "o",
        "ş": "s",
        "ü": "u"
    };

    const normalizeAzerbaijani = (text) => {
        return text.replace(/[əçğıöüş]/g, char => azLatinToCyrillicMap[char] || char).toLowerCase();
    };

    return normalizeAzerbaijani;
};

export default useAzerbaijaniNormalization;
