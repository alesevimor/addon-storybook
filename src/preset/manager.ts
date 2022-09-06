import { addons, types } from "@storybook/addons";
import { ADDON_ID, TOOL_ID, PANEL_ID, TAB_ID } from "../constants";
import { Tab } from "../views/Tab";

// Register the addon
addons.register(ADDON_ID, () => {
	// Register the tool
	/*
		addons.add(TOOL_ID, {
			type: types.TOOL,
			title: "Doc stencil tool",
			match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
			render: Tool,
		}); 
	*/

	// Register the panel
	/*
		addons.add(PANEL_ID, {
			type: types.PANEL,
			title: "Doc stencil panel",
			match: ({ viewMode }) => viewMode === "story",
			render: Panel,
		});
	*/

	// Register the tab
	addons.add(TAB_ID, {
		type: types.TAB,
		title: "Docs page",
		//👇 Checks the current route for the story
		route: ({ storyId }) => `/myaddon/${storyId}`,
		//👇 Shows the Tab UI element in myaddon view mode
		match: ({ viewMode }) => viewMode === "myaddon",
		render: Tab,
	});
});
