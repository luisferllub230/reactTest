define(["jquery"], function ($) {

    var hasStorage = window.Storage || false;

    var labelsApiLocation = root_directory + 'api/labels/',
        labelFinderRegexp = /\{\{%([0-9A-z_]*)}}/ig,
        label_prefix = 'extranet_label_',
        labels = {},
        labelsPromise;

    function loadLabels() {

        if (hasStorage && window.sessionStorage.extranet_has_labels) {
            return $.when(null);
        } else {
            var getLabelsPromise = $.getJSON(labelsApiLocation);
            getLabelsPromise.then(saveLabels);
            return $.when(getLabelsPromise);
        }
    }

    function saveLabels(new_labels) {

        for (var prop in new_labels) {

            if (hasStorage) {
                window.sessionStorage.setItem(label_prefix + prop, new_labels[prop]);
            } else {
                labels[label_prefix + prop] = new_labels[prop];
            }
        }

        if (hasStorage) {
            window.sessionStorage.extranet_has_labels = true;
        }
    }

    function replaceLabelsAfterPromise(template) {
        return labelsPromise.then(replaceLabels.bind(this, template));
    }

    function replaceLabels(template) {
        return template.toString().replace(labelFinderRegexp, findLabel);
    }

    function findLabel(fullMatch, labelName) {
        if (hasStorage && window.sessionStorage.getItem(label_prefix + labelName) !== null) {
            return window.sessionStorage.getItem(label_prefix + labelName);
        } else if (labels.hasOwnProperty(label_prefix + labelName)) {
            return labels[label_prefix + labelName];
        } else {
            return fullMatch;
        }
    }

    labelsPromise = loadLabels();

    return {
        labelsPromise: labelsPromise,
        replaceLabels: replaceLabelsAfterPromise
    };
});
