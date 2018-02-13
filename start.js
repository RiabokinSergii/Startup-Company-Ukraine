let _modPath;
const scope = GetRootScope();

exports.initialize = (modPath) =>{
    _modPath = modPath;

    Database.languages.push({ name: 'Ukrainian', key: 'ua', path: _modPath + 'ua.json' });
};

exports.onUnsubscribe = done => {
    scope.options.language = 'en';
    scope.saveOptions();
    done();
};
