interface Profile {
    id: string
    created_at: string
    username: string
    user_id: string
    cpf: string | null
    birthdate: string | null
    first_access: boolean
    plan: string
    whatsapp: string | null
    valid_until: string | null
    asaas_cid: string | null
    user_email: string | null
    is_confirming_whatsapp: boolean
    confirmation_code: string | null
    confirmation_code_expires_at: string | null
}
