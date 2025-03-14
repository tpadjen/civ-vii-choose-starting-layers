import { extendOptions } from '/api/options/extend-options.js';
import { Options, OptionType } from '/core/ui/options/model-options.js';
import { CategoryType } from '/core/ui/options/options-helpers.js';

// needs to load before adding new options to Mods category
import '/core/ui/options/options.js';

extendOptions({ namespace: 'tbq-csl' });
const MOD_OPTIONS_GROUP = 'choose_starting_layers';

export const showHexGridsOption = Options.addModOption({
    id: 'show-hexgrids',
    category: CategoryType.Mods,
    group: MOD_OPTIONS_GROUP,
    type: OptionType.Checkbox,
    defaultValue: true,
    label: "LOC_MOD_CSL_SHOW_HEXGRID_ON_LOAD_OPTION",
    description: "LOC_MOD_CSL_SHOW_HEXGRID_ON_LOAD_OPTION_DESC",
});

export const showYieldsOption = Options.addModOption({
    id: 'show-yields',
    category: CategoryType.Mods,
    group: MOD_OPTIONS_GROUP,
    type: OptionType.Checkbox,
    defaultValue: false,
    label: "LOC_MOD_CSL_SHOW_YIELDS_ON_LOAD_OPTION",
    description: "LOC_MOD_CSL_SHOW_YIELDS_ON_LOAD_OPTION_DESC",
});
