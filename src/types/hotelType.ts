export interface HotelList {
    hotels: Array<HotelData>
}

interface Title {
    "starCount"?: number,
    "headline": string,
    "locationLabel"?: string
}

export interface HotelData {
    "id": string,
    "slug": string,
    "image"?: {
        "src": string,
        "alt": string
    },
    "tileTitle": Title,
    "tileDetails"?: {
        "capacityLabel"?: string,
        "hasHygieneCertificate"?: boolean,
        "ratings": Array<number>,
        "grade"?: {
            "points": number,
            "label": string
        }
    },
    "detailsUrl": string
    "price": string
}

export interface HotelSelection {
    id: string;
    slug: string;
    tileTitle: Title
    detailsUrl: string;

}