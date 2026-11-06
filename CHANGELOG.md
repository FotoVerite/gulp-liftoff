# Changelog

## 1.0.0 (2026-11-06)


### ⚠ BREAKING CHANGES

* Normalize repository, dropping Node <22.15.0 ([#137](https://github.com/FotoVerite/gulp-liftoff/issues/137))
* Define `configFiles` with an array to prioritize configs ([#133](https://github.com/FotoVerite/gulp-liftoff/issues/133))
* Populate additional preload modules with `configFiles` ([#131](https://github.com/FotoVerite/gulp-liftoff/issues/131))
* Lookup `configPath` in `configFiles` ([#128](https://github.com/FotoVerite/gulp-liftoff/issues/128))
* Support `extends` syntax in config files ([#103](https://github.com/FotoVerite/gulp-liftoff/issues/103))
* Normalize repository, dropping node <10.13 support ([#118](https://github.com/FotoVerite/gulp-liftoff/issues/118))
* call `env.completion` inside execute to allow additional configuration ([#106](https://github.com/FotoVerite/gulp-liftoff/issues/106))
* Rename `opts.require` to `opts.preload`
* Rename events to be more specific
* Remove launch API
* Avoid emitting `requireFail` events if any loader succeeds
* Remove node 0.8, add node 0.12 to CI
* Rework nodeFlags, renaming to v8flags, which might be a callback
* Update deps
* Simplify & rename options
* Remove option parsing
* Remove `addExtension` in favor of `extension` option
* Use liftoff instance as context for launch callback
* Rename configLocationFlag to configPathFlag
* Support node 0.8+
* Updating node engine version to >= 0.10.16
* Remove semver check between local & global installs
* Check semver between local & global installs
* Rename preloadOpt to preloadFlag
* Rename cwdOpt to cwdFlag
* Only accept single moduleName
* Rename localDeps to moduleName
* Drastic API improvements
* Remove the example implementation & move it to the Hacker project

### Features

* Accept a callback for launch function ([bc8e5ab](https://github.com/FotoVerite/gulp-liftoff/commit/bc8e5ab9e722867f6d01e337a43d1409a2dc3987))
* Add beforeRequire event ([65f350d](https://github.com/FotoVerite/gulp-liftoff/commit/65f350d0140f91467252f58489b5e13bc19f169e))
* Add prepare/execute methods, deprecate launch method ([#98](https://github.com/FotoVerite/gulp-liftoff/issues/98)) ([a9d07b1](https://github.com/FotoVerite/gulp-liftoff/commit/a9d07b18524bf21446023bb6e144a200f0468fd0))
* Add processTitle ([bc8e5ab](https://github.com/FotoVerite/gulp-liftoff/commit/bc8e5ab9e722867f6d01e337a43d1409a2dc3987))
* Add support for addExtension option ([4e9dce9](https://github.com/FotoVerite/gulp-liftoff/commit/4e9dce9be733bd639a01a1955c3f0158b93e186c))
* Add support for completions ([6a1b4c1](https://github.com/FotoVerite/gulp-liftoff/commit/6a1b4c1a755b43a3f46ef5a8f19ddc314d5ca448))
* Add support for compound extensions ([639867e](https://github.com/FotoVerite/gulp-liftoff/commit/639867eafd5e7d64350cfd3e876a1f2a86ada767))
* Add support for nodeFlags ([0ff9209](https://github.com/FotoVerite/gulp-liftoff/commit/0ff9209cf55633f00f527f70ec7206f00c94cdfb))
* Allow multiple local deps ([821b158](https://github.com/FotoVerite/gulp-liftoff/commit/821b15881ab5501d20f38a96cd34007e274cf5c4))
* Check semver between local & global installs ([4d29e2c](https://github.com/FotoVerite/gulp-liftoff/commit/4d29e2c18d71dd6d714c6b5c97fcb1a2f2a9c5f6))
* Define `configFiles` with an array to prioritize configs ([#133](https://github.com/FotoVerite/gulp-liftoff/issues/133)) ([55123fc](https://github.com/FotoVerite/gulp-liftoff/commit/55123fcb0b679aa8739a966c791e2bc1c20cdac6))
* Drastic API improvements ([5865a1b](https://github.com/FotoVerite/gulp-liftoff/commit/5865a1b2f703f84b7b576971057b5ae10252b7bd))
* Enable to config to specify forced flags in app launch ([0f4dd50](https://github.com/FotoVerite/gulp-liftoff/commit/0f4dd5057ba9b476dde058022b901ce92ae188b8))
* Initial implementation ([df54671](https://github.com/FotoVerite/gulp-liftoff/commit/df54671c077a98bf2de8f49dc34ac53132a9bc3d))
* Leverage rechoir & interpret to support fallbacks for autoloading modules ([02d5f65](https://github.com/FotoVerite/gulp-liftoff/commit/02d5f65c3e6366bb1e23ae1fb339641498a2db88))
* Lookup `configPath` in `configFiles` ([#128](https://github.com/FotoVerite/gulp-liftoff/issues/128)) ([5301335](https://github.com/FotoVerite/gulp-liftoff/commit/5301335a9f2dea21c5802a05eb9f8abdfbbeed51))
* Only accept single moduleName ([6a1b4c1](https://github.com/FotoVerite/gulp-liftoff/commit/6a1b4c1a755b43a3f46ef5a8f19ddc314d5ca448))
* Pass environment as first argument to launch callback ([d555b81](https://github.com/FotoVerite/gulp-liftoff/commit/d555b8105ca1bd8c46d2bebf58b013ae61180406))
* Populate additional preload modules with `configFiles` ([#131](https://github.com/FotoVerite/gulp-liftoff/issues/131)) ([fad21a9](https://github.com/FotoVerite/gulp-liftoff/commit/fad21a98d1a9b263f320a2258fef94328687a5a0))
* Remove `addExtension` in favor of `extension` option ([45418f4](https://github.com/FotoVerite/gulp-liftoff/commit/45418f402566ba64a3db8607f6770f45678af66e))
* Remove lodash ([9fd2985](https://github.com/FotoVerite/gulp-liftoff/commit/9fd2985ad698ce2360c993eabd4899b1dd1003bf))
* Remove option parsing ([fa3d53f](https://github.com/FotoVerite/gulp-liftoff/commit/fa3d53f4fcbca37a7179814964f80d455e789ba4))
* Remove the example implementation & move it to the Hacker project ([341cfca](https://github.com/FotoVerite/gulp-liftoff/commit/341cfca961522e5dad8b033bc886db0dc8cf7fab))
* Rename `opts.require` to `opts.preload` ([596926a](https://github.com/FotoVerite/gulp-liftoff/commit/596926a177df254726715ffed7bc4b344e87bef0))
* Rename configLocationFlag to configPathFlag ([c412955](https://github.com/FotoVerite/gulp-liftoff/commit/c412955e1f29fc6bf87475c6d3eaf7e01dfa20bb))
* Rename cwdOpt to cwdFlag ([6a1b4c1](https://github.com/FotoVerite/gulp-liftoff/commit/6a1b4c1a755b43a3f46ef5a8f19ddc314d5ca448))
* Rename events to be more specific ([cbb8456](https://github.com/FotoVerite/gulp-liftoff/commit/cbb8456e0273505d1ba237060aaebb7b79c26112))
* Rename localDeps to moduleName ([6a1b4c1](https://github.com/FotoVerite/gulp-liftoff/commit/6a1b4c1a755b43a3f46ef5a8f19ddc314d5ca448))
* Rename preloadOpt to preloadFlag ([6a1b4c1](https://github.com/FotoVerite/gulp-liftoff/commit/6a1b4c1a755b43a3f46ef5a8f19ddc314d5ca448))
* Require local package & improve logging ([b563637](https://github.com/FotoVerite/gulp-liftoff/commit/b563637f9191547fdb1c531f31fae87474d945a7))
* Rework nodeFlags, renaming to v8flags, which might be a callback ([10a3940](https://github.com/FotoVerite/gulp-liftoff/commit/10a3940c2f6b10843fd88e8fea66e5adac27ba60))
* Simplify & rename options ([fa3d53f](https://github.com/FotoVerite/gulp-liftoff/commit/fa3d53f4fcbca37a7179814964f80d455e789ba4))
* Support `extends` syntax in config files ([#103](https://github.com/FotoVerite/gulp-liftoff/issues/103)) ([68c9db7](https://github.com/FotoVerite/gulp-liftoff/commit/68c9db7fc4f26b7b9e3e91f8e8c6374d1a9dbb1f))
* Support development against yourself ([742e5ba](https://github.com/FotoVerite/gulp-liftoff/commit/742e5ba92ccaf51d5e1d77b4a36eaee7c4f8d721))
* Support multiple config files ([33907aa](https://github.com/FotoVerite/gulp-liftoff/commit/33907aa0086ac27b552b700edd967aadef0a9c7d))
* Support node 0.8+ ([c412955](https://github.com/FotoVerite/gulp-liftoff/commit/c412955e1f29fc6bf87475c6d3eaf7e01dfa20bb))
* Support preloading modules based on extension ([45418f4](https://github.com/FotoVerite/gulp-liftoff/commit/45418f402566ba64a3db8607f6770f45678af66e))
* Support split cwd and configfile locations ([c412955](https://github.com/FotoVerite/gulp-liftoff/commit/c412955e1f29fc6bf87475c6d3eaf7e01dfa20bb))
* Use liftoff instance as context for launch callback ([c412955](https://github.com/FotoVerite/gulp-liftoff/commit/c412955e1f29fc6bf87475c6d3eaf7e01dfa20bb))


### Bug Fixes

* Avoid calling buildEnvironment until ready ([461ad3f](https://github.com/FotoVerite/gulp-liftoff/commit/461ad3f75224e9fe399a4d1137db6a6ca32cc298))
* Avoid emitting `requireFail` events if any loader succeeds ([a2477d3](https://github.com/FotoVerite/gulp-liftoff/commit/a2477d396807d23bcfc1a60f76d5a010f2840434))
* Avoid passing a null value to existsSync ([#134](https://github.com/FotoVerite/gulp-liftoff/issues/134)) ([1c54ffb](https://github.com/FotoVerite/gulp-liftoff/commit/1c54ffb39dfd798c58fc036701edcb6d5234027c))
* Avoid searching for the root of the module twice ([b640c56](https://github.com/FotoVerite/gulp-liftoff/commit/b640c5677dec22e0d8d9fac84b474811cb48c46e))
* Avoid wrapping error in an error ([c0dddec](https://github.com/FotoVerite/gulp-liftoff/commit/c0dddecadc1f9adb7a112102bbfdc854b1baab1a))
* call `env.completion` inside execute to allow additional configuration ([#106](https://github.com/FotoVerite/gulp-liftoff/issues/106)) ([2a1fc4b](https://github.com/FotoVerite/gulp-liftoff/commit/2a1fc4b632e55effcd45ab3c48bd7aba0ce049bf))
* Change timing of loader requires to avoid duplicate logging ([4a6ad90](https://github.com/FotoVerite/gulp-liftoff/commit/4a6ad90ce5a392d1cdd5b53e33506b6fd1f5f41b))
* Coerce preloads into array before attempting to push more ([b6ab42a](https://github.com/FotoVerite/gulp-liftoff/commit/b6ab42adad942fc0937a9d7f47ae0888a98b22e5))
* Correctly set cwd to configBase when developing against self ([c0f0ea7](https://github.com/FotoVerite/gulp-liftoff/commit/c0f0ea73782166ecf362744a0845b53e9239a375))
* Default to index.js when modulePackage has no main property ([b7c5a19](https://github.com/FotoVerite/gulp-liftoff/commit/b7c5a19b2249a09bab8080e2b5738e2cb7dbc4ce))
* Detect config extension using basename instead of full path ([9126234](https://github.com/FotoVerite/gulp-liftoff/commit/9126234228206b00fd1512f806bdd5c6708929dd))
* Disallow non-string `configPath` overrides ([#130](https://github.com/FotoVerite/gulp-liftoff/issues/130)) ([6bcd381](https://github.com/FotoVerite/gulp-liftoff/commit/6bcd381f328463ff78a43b5b8af3fe6c62bf3bdb))
* Handle configName lookup for user-specified config files ([f6fd81b](https://github.com/FotoVerite/gulp-liftoff/commit/f6fd81b64fd7dd76ab2f3b53cd763bbdb5ac9b83))
* Ignore cwdFlag / configPathFlag when value is not string ([f8d2786](https://github.com/FotoVerite/gulp-liftoff/commit/f8d2786d576a8d6e4b1293b62fa411972b4eb983))
* Increase test timeout to solve failing windows tests ([6c370b4](https://github.com/FotoVerite/gulp-liftoff/commit/6c370b46272ec9278d01fb0b0bb6a35e4e8de8e9))
* Look for local module in cwd if no config was found. ([c3350dd](https://github.com/FotoVerite/gulp-liftoff/commit/c3350ddefd81147fd8ce45081ebf0c7caf79729e))
* Make sure v8 value flags are passed when respawning ([79f8b6a](https://github.com/FotoVerite/gulp-liftoff/commit/79f8b6a558d208e1155a499dfd8754d6441ddcbd))
* Null out modulePath if it isn't for the right module ([56a68b0](https://github.com/FotoVerite/gulp-liftoff/commit/56a68b03fcf6c9dcd1d4fe1d40349003d198c376))
* Only resolve symbolic links if necessary ([8d701bd](https://github.com/FotoVerite/gulp-liftoff/commit/8d701bd865485ed9ed27c63b98256b3246ba7f86))
* Properly handle some async tests ([eb507da](https://github.com/FotoVerite/gulp-liftoff/commit/eb507da29933db1085f44a95abe9a248dbeb54f0))
* Properly require external modules ([030a871](https://github.com/FotoVerite/gulp-liftoff/commit/030a871c065f7e0368199911e63a99f5ae34069f))
* Refactor for simplification of findConfig ([08e61f5](https://github.com/FotoVerite/gulp-liftoff/commit/08e61f50044d37613c0c2d5a16051fe3969b3b79))
* Remove debugging comment ([b701488](https://github.com/FotoVerite/gulp-liftoff/commit/b701488ed35a49bd96cf0b80c4e1cbf9312204ef))
* Remove semver check between local & global installs ([6155cb6](https://github.com/FotoVerite/gulp-liftoff/commit/6155cb66cd320ae72584a54d31c7b7f3128279cf))
* Remove unused semver dependency ([418c4de](https://github.com/FotoVerite/gulp-liftoff/commit/418c4de7c4c8c2a0fce315022c25062ea1296c10))
* Revert to 1.0.0 behavior ([3fce7f2](https://github.com/FotoVerite/gulp-liftoff/commit/3fce7f2dc226aa2eb23d98f6019924d6d42702ad))
* Rollback findup-sync until we fix it ([e7b2c7a](https://github.com/FotoVerite/gulp-liftoff/commit/e7b2c7a38ad73922e231bc44a9ea8cc16194d4ec))
* Search for config file in order extensions were provided ([7cbab70](https://github.com/FotoVerite/gulp-liftoff/commit/7cbab70b24e3c457abd7fef5b801acfedef553f6))
* Send flags in respawn event ([61cca9e](https://github.com/FotoVerite/gulp-liftoff/commit/61cca9eb445c2762344314ada846fb21582e3f1f))
* Set configBase to the directory of the symlink ([1c76c99](https://github.com/FotoVerite/gulp-liftoff/commit/1c76c9974135cd24e7d62e45b0738b3f65be66ce))
* Set cwd to configBase if cwd wasn't provided explictly ([45a6c74](https://github.com/FotoVerite/gulp-liftoff/commit/45a6c74c29afa739c1d79bd67802c91b417aa76f))
* Support loading from NODE_PATH ([a3b28ca](https://github.com/FotoVerite/gulp-liftoff/commit/a3b28cad15d5168a2e5b9cc4281ba4e0ccbaa86e))
* Traverse symlinks for configPath ([dfd9f24](https://github.com/FotoVerite/gulp-liftoff/commit/dfd9f242cd9cb216e1d6770f340b355fc9648875))
* Update npmignore to avoid publishing artwork ([bc3c58a](https://github.com/FotoVerite/gulp-liftoff/commit/bc3c58afc824af2c53c5ce8cdc8af3ee8ccb8377))
* Update rechoir to support dots in config name ([33a6286](https://github.com/FotoVerite/gulp-liftoff/commit/33a62869bc2474d4168f17f611dadbd66cc6adac))
* updates ([a635c98](https://github.com/FotoVerite/gulp-liftoff/commit/a635c98716e1465e28a768565bfd98cc887503b2))
* Use fileSearch when establishing modulePath ([2e1c776](https://github.com/FotoVerite/gulp-liftoff/commit/2e1c77675883ced13216996bc54ab3e31442775b))
* Use tilde version range for sinon ([dd94fd5](https://github.com/FotoVerite/gulp-liftoff/commit/dd94fd5d7418033e45d9466ddef402693527cd90))
* When developing against self, set cwd ([5d6e549](https://github.com/FotoVerite/gulp-liftoff/commit/5d6e549930edda9db9313c52bb1c162def6aee78))


### Miscellaneous Chores

* Normalize repository, dropping node &lt;10.13 support ([#118](https://github.com/FotoVerite/gulp-liftoff/issues/118)) ([d671e76](https://github.com/FotoVerite/gulp-liftoff/commit/d671e7600bd96f3c6c23697575436e89fa407c99))
* Normalize repository, dropping Node &lt;22.15.0 ([#137](https://github.com/FotoVerite/gulp-liftoff/issues/137)) ([c6e2562](https://github.com/FotoVerite/gulp-liftoff/commit/c6e2562606cf36b775616c254f3da33d646c5ab0))
* Remove launch API ([dea6860](https://github.com/FotoVerite/gulp-liftoff/commit/dea68609a669195f8d59df2164a5f4ba6e680004))
* Remove node 0.8, add node 0.12 to CI ([8061a11](https://github.com/FotoVerite/gulp-liftoff/commit/8061a1176db260c57b0e93c9fe7a0e91b74ddb5a))
* Update deps ([c23952b](https://github.com/FotoVerite/gulp-liftoff/commit/c23952be9c162f11c34376da246fa0e9c16cf75d))
* Updating node engine version to &gt;= 0.10.16 ([1c7fd26](https://github.com/FotoVerite/gulp-liftoff/commit/1c7fd269dd5c56ba6068475d42fd134245950596))

### [5.0.1](https://www.github.com/gulpjs/liftoff/compare/v5.0.0...v5.0.1) (2025-06-01)


### Bug Fixes

* Avoid passing a null value to existsSync ([#134](https://www.github.com/gulpjs/liftoff/issues/134)) ([1c54ffb](https://www.github.com/gulpjs/liftoff/commit/1c54ffb39dfd798c58fc036701edcb6d5234027c))

## [5.0.0](https://www.github.com/gulpjs/liftoff/compare/v4.0.0...v5.0.0) (2024-03-16)


### ⚠ BREAKING CHANGES

* Define `configFiles` with an array to prioritize configs (#133)
* Populate additional preload modules with `configFiles` (#131)
* Lookup `configPath` in `configFiles` (#128)

### Features

* Define `configFiles` with an array to prioritize configs ([#133](https://www.github.com/gulpjs/liftoff/issues/133)) ([55123fc](https://www.github.com/gulpjs/liftoff/commit/55123fcb0b679aa8739a966c791e2bc1c20cdac6))
* Lookup `configPath` in `configFiles` ([#128](https://www.github.com/gulpjs/liftoff/issues/128)) ([5301335](https://www.github.com/gulpjs/liftoff/commit/5301335a9f2dea21c5802a05eb9f8abdfbbeed51))
* Populate additional preload modules with `configFiles` ([#131](https://www.github.com/gulpjs/liftoff/issues/131)) ([fad21a9](https://www.github.com/gulpjs/liftoff/commit/fad21a98d1a9b263f320a2258fef94328687a5a0))


### Bug Fixes

* Disallow non-string `configPath` overrides ([#130](https://www.github.com/gulpjs/liftoff/issues/130)) ([6bcd381](https://www.github.com/gulpjs/liftoff/commit/6bcd381f328463ff78a43b5b8af3fe6c62bf3bdb))

## [4.0.0](https://www.github.com/gulpjs/liftoff/compare/v3.1.0...v4.0.0) (2021-11-22)


### ⚠ BREAKING CHANGES

* Support `extends` syntax in config files (#103)
* Normalize repository, dropping node <10.13 support (#118)
* call `env.completion` inside execute to allow additional configuration (#106)
* Rename `opts.require` to `opts.preload`
* Rename events to be more specific
* Remove launch API

### Features

* Add beforeRequire event ([65f350d](https://www.github.com/gulpjs/liftoff/commit/65f350d0140f91467252f58489b5e13bc19f169e))
* Rename `opts.require` to `opts.preload` ([596926a](https://www.github.com/gulpjs/liftoff/commit/596926a177df254726715ffed7bc4b344e87bef0))
* Rename events to be more specific ([cbb8456](https://www.github.com/gulpjs/liftoff/commit/cbb8456e0273505d1ba237060aaebb7b79c26112))
* Support `extends` syntax in config files ([#103](https://www.github.com/gulpjs/liftoff/issues/103)) ([68c9db7](https://www.github.com/gulpjs/liftoff/commit/68c9db7fc4f26b7b9e3e91f8e8c6374d1a9dbb1f))


### Bug Fixes

* call `env.completion` inside execute to allow additional configuration ([#106](https://www.github.com/gulpjs/liftoff/issues/106)) ([2a1fc4b](https://www.github.com/gulpjs/liftoff/commit/2a1fc4b632e55effcd45ab3c48bd7aba0ce049bf))
* Update rechoir to support dots in config name ([33a6286](https://www.github.com/gulpjs/liftoff/commit/33a62869bc2474d4168f17f611dadbd66cc6adac))


### Miscellaneous Chores

* Normalize repository, dropping node <10.13 support ([#118](https://www.github.com/gulpjs/liftoff/issues/118)) ([d671e76](https://www.github.com/gulpjs/liftoff/commit/d671e7600bd96f3c6c23697575436e89fa407c99))
* Remove launch API ([dea6860](https://www.github.com/gulpjs/liftoff/commit/dea68609a669195f8d59df2164a5f4ba6e680004))
