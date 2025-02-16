import pgPromise from 'pg-promise'

const pgp = pgPromise()
const db = pgp('postgresql://dba:dba@paybank-db:5432/UserDB')

export async function obterCodigo2FA() {
    const query = `
        select code
        from public."TwoFactorCode"
        order by id desc
        limit 1;    
    `
    const result = await db.oneOrNone(query)
    return result.code
}