{
	const css = `a.icu-test {
	color: unset !important;
	position: relative;
	display: block;
	border-bottom: none !important;
	}

	a.icu-test:hover::after { opacity: 1; }

	a.icu-test::after {
	position: absolute;
	right: 1px;
	top: -4px;
	margin: 0;
	opacity: 0;
	transition: opacity .25s;
	content: "↯";
	font-size: 2em;
	font-weight: bolder;
	color: #fd9768;
}`;

	window.addEventListener("DOMContentLoaded", () => {
		const icus = document.querySelectorAll("code.language-icu");

		let cssInject = false;

		for (const code of icus) {
			const link = document.createElement("a");
			link.classList.add("icu-test");
			link.setAttribute("aria-label", "Запустить код в редакторе");
			link.href = `https://format-message.github.io/icu-message-format-for-translators/editor.html?m=${encodeURIComponent(code.innerText)}`;
			link.target = "_blank";
			code.parentElement.appendChild(link);
			link.appendChild(code);
			cssInject = true;
		}

		if (cssInject) {
			const style = document.createElement("style");
			style.type = "text/css";
			style.appendChild(document.createTextNode(css));
			document.head.appendChild(style);
		}
	});
}