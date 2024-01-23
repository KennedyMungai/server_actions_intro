'use server'

import { sql } from "@vercel/postgres"


export async function addGrudge(formData: FormData) {
    const name = formData.get('grudgeName')

    try {
        if (!name) throw new Error('Grudge Needs a name')
        await sql`INSERT INTO Grudges (Name) VALUES (${name})`
    } catch (error) {
        console.log(error)
        return { status: 500 }
    }

    return { status: 200 }
}