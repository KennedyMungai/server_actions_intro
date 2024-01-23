export default function Home() {
	return (
		<main className='min-h-screen'>
			<div className='w-full max-w-md bg-gray-700 rounded-xl shadow-md'>
				<form action={addGrudge} className="space-y-4 p-4">
					<label htmlFor='grudgeName' className="block text-sm font-medium text-gray-300">Name Of Grudge</label>
					<input
						type='text'
						name='grudgeName'
						id='grudgeName'
						placeholder='Enter Grudge'
            className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
					/>
					<button type='submit'>Add Grudge</button>
				</form>
			</div>
		</main>
	)
}
