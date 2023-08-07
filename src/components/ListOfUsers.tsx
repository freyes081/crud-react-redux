import {
	Card,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeaderCell,
	TableRow,
} from "@tremor/react";

const users: {
	id: string;
	name: string;
	email: string;
	github: string;
}[] = [
	{
		id: "1",
		name: "Peter Doe",
		email: "peter@doe",
		github: "peter",
	},
	{
		id: "2",
		name: "John Doe",
		email: "john@doe",
		github: "john",
	},
	{
		id: "3",
		name: "Max Doe",
		email: "max@doe",
		github: "max",
	},
];

export function LisOfUsers() {
	return (
		<Card>
			<Table>
				<TableHead>
					<TableRow>
						<TableHeaderCell>ID</TableHeaderCell>
						<TableHeaderCell>Nombre</TableHeaderCell>
						<TableHeaderCell>Email</TableHeaderCell>
						<TableHeaderCell>Acciones</TableHeaderCell>
					</TableRow>
				</TableHead>

				<TableBody>
					{users.map((item) => (
						<TableRow key={item.id}>
							<TableCell>{item.id}</TableCell>
							<TableCell>{item.name}</TableCell>
							<TableCell>{item.email}</TableCell>
							<TableCell>Acciones</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Card>
	);
}
