import configureStore from "./src/store/configureStore";
import { fetchProjects } from "./src/store/actions/projectActions.js";
import * as R from 'ramda';

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
						<a href="${prj.link}"> <h3 class="project-title">${prj.name || '-'}</h3></a>
						<p class="project-description">${prj.description || '-'}</p>
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

