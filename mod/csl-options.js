import { Options, OptionType } from '/core/ui/options/model-options.js';
import { CategoryType } from '/core/ui/options/options-helpers.js';

// needs to load before adding new options to Mods category
import '/core/ui/options/options.js';  

const MOD_OPTIONS_GROUP = 'choose_starting_layers';

Options.setupModOptions({ namespace: 'tbq-csl' });

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
