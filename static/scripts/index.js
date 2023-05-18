import configureStore from "./src/store/configureStore.js";
import { fetchProjects } from "./src/store/actions/ProjectActions.js";
import languages from './lib/lang-colors.json';

const langToColor = (lang) => languages[lang] && languages[lang].color || 'grey';

const store = configureStore({});
store.subscribe(() => {
	const currentState = store.getState();
	if (currentState.projects && 
		currentState.projects.data && 
		currentState.projects.data.length
	) {
		const prjsHtml = currentState.projects.data.reduce((acc, prj) => 
			acc + `
				<div class="card">
					<div class="project">
                        <a style="color: black; text-decoration: none;" href="${prj.link}"> <h3 class="project-title">${prj.name || '-'}</h3></a>
                        <div style="display: block;">
                            <a class="prj-langs-container" style="display: inline-block;">
                            ${
                                prj.langs.reduce((acc, lang) => acc + `
                                    <span 
                                        class="prj-lang-dot"
                                        style="background-color: ${langToColor(lang)}; height: 15px; width: 15px; border-radius: 50%; display: inline-block;"
                                    >
                                    </span>
                                    <span>
                                    ${lang}
                                    </span>
                                `, '')
                            }
                            </a>
                        </div>
						<p class="project-description" style="opacity: 90%; display: block; height: 30px;">${prj.description || '-'}</p>
						<div class="project-meta">
							<p class="project-meta-info"> ${prj.contributor_count || '-'} </p>
							<img class="icon" src="/public/img/contributors.png"></img>
							<p class="project-meta-info"> ${prj.commits || '-'} </p>
							<img class="icon" src="/public/img/commit.png"></img>
						</div>
					</div>
				</div>
			`, '<div class="projects-container">') + '</div>';
		document.getElementById('projects').innerHTML = prjsHtml;
	}
});
store.dispatch(fetchProjects());

