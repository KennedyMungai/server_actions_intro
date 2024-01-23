import { addGrudge } from '@/actions/createGrudge'
import SubmitButton from '@/components/SubmitButton'
import { sql } from '@vercel/postgres'

export default async function Home() {
	const { rows } = await sql`SELECT * FROM Grudges;`

	return (
		<main className='min-h-screen flex items-center justify-center bg-slate-600'>
			<div className='w-full max-w-md bg-gray-700 rounded-xl shadow-md'>
				<form action={addGrudge} className='space-y-4 p-4'>
					<label
						htmlFor='grudgeName'
						className='block text-sm font-medium text-gray-300'
					>
						Name Of Grudge
					</label>
					<input
						type='text'
						name='grudgeName'
						id='grudgeName'
						placeholder='Enter Grudge'
						className='w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
					/>
				</form>
        <SubmitButton />
				<div className='mt-4 p-4 h-[30vh] overflow-y-scroll scrollbar-hide'>
					{rows.map((grudge, index) => (
						<div
							key={index}
							className='text-white bg-gray-600 p-2 rounded-md mt-2 shadow'
						>
							{grudge.name}
						</div>
					))}
				</div>
			</div>
		</main>
	)
}
