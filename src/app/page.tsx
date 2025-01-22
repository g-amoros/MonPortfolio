import Background from '../components/ui/animated-grid-pattern';
import Card from '../components/ui/card';
import Profile from './profile';

export default function Home() {
	return (
		<>
			<Background />
			<div className='flex'>
				<Profile />
				<div className='p-12 h-screen w-2/3'>
					<div className='flex flex-wrap gap-8 w-full justify-between'>
						<div className="h-[20rem] w-[20rem]">
							<Card width={100} height={100} >a</Card>
						</div>
						<div className="h-[20rem] w-[20rem]">
							<Card width={100} height={100} >a</Card>
						</div>
						<div className="h-[20rem] w-[20rem]">
							<Card width={100} height={100} >a</Card>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
