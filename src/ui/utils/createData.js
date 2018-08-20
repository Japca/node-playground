let id = 0;
const createData =(name, calories, fat, carbs, protein) => {
	id += 1;
	return { id, name, calories, fat, carbs, protein };
}

export default createData;