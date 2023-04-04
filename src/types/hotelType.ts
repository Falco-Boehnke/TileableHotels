export interface HotelList {
    hotels: Array<HotelData>
}

export interface HotelData {
    "id": string,
    "slug": string,
    "image"?: {
        "src": string,
        "alt": string
    },
    "tileTitle": {
        "starCount"?: number,
        "headline": string,
        "locationLabel"?: string
    },
    "tileDetails"?: {
        "capacityLabel"?: string,
        "hasHygieneCertificate"?: boolean,
        "grade"?: {
            "points": number,
            "label": string
        }
    },
    "detailsUrl": string
    "price": string
}