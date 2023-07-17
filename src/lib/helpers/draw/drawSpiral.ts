import { getRandomBool } from '$lib/helpers/random';

const drawSpiral = (
	ctx: CanvasRenderingContext2D,
	{ x, y }: Coord,
	width: number,
	height: number
) => {
	ctx.beginPath();
	// ctx.moveTo(x, y);
	const isClockwise = getRandomBool();
	const isFlip = getRandomBool();

	const swirls = 2;
	const radius = Math.min(width, height) / 2;
	const maxAngle = swirls * Math.PI * 2;
	const totalPoints = 360; // 360 * swirls
	const startAngle = isClockwise ? 0 : maxAngle;
	const angleIncrement = (isClockwise ? maxAngle : -maxAngle) / totalPoints;

	for (let i = 0; i <= totalPoints; i++) {
		const angle = startAngle + i * angleIncrement;
		const spiralRadius = radius - i * (radius / totalPoints);
		const a = x - width / 2 + radius + spiralRadius * Math.cos(angle + (isFlip ? Math.PI : 0));
		const b = y - height / 2 + radius + spiralRadius * Math.sin(angle + (isFlip ? Math.PI : 0));
		ctx.lineTo(a, b);
	}

	ctx.stroke();
};

export default drawSpiral;
