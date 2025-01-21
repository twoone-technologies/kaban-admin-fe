export type Realtor = {
    rating: number,
    realtor_pic: string | null,
    verification_status: keyof typeof verificationStatus,
    bio: string,
    company: string,
    createdAt: string,
    id: string,
    kyc: {
        government_id: string,
        realtor_certification: string,
    } | null,
    mobile_number: string,
    office_address: string,
    position: string,
    service_area: string,
    socials: {
        facebook: string,
        instagram: string,
        linkedin: string,
        twitter: string,
        youtube: string,
        tiktok: string,
    } | Record<string, string>,
    specialty: string,
    updatedAt: string,
    user: {
        email: string,
        full_name: string
        id: string,
        role: string,
        _id: string,
    },
    whatsapp_number: string,
    _id: string,
}


export const verificationStatus = {
    0: 'not verified',
    1: 'pending',
    2: 'verified',
}