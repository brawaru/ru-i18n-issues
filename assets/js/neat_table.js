window.addEventListener("DOMContentLoaded", () => {
	const tables = document.getElementsByTagName("table");

	for (const table of tables) {
		if (table.dataset.noNeat != null) continue;

		const head = table.getElementsByTagName("thead")[0];
		const body = table.getElementsByTagName("tbody")[0];

		if (!head || !body) continue;

		let columns;

		{
			const colOverride = table.dataset.neatColsOverride;

			if (colOverride) {
				columns = colOverride.split(",");
			} else {
				columns = [];

				for (const elem of table.getElementsByTagName("th")) {
					columns.push(elem.innerText);
				}
			}
		}

		for (const tr of table.getElementsByTagName("tr")) {
			const tds = tr.getElementsByTagName("td");

			for (let i = 0, l = tds.length; i < l; i++) {
				const td = tds[i];

				if (!td.dataset.column) td.dataset.column = columns[i];

				if (td.innerText === " ") td.dataset.empty = 1;
			}
		}
	}
});