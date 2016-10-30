/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var import0 = require('../../../src/app/app.component');
var import1 = require('@angular/core/src/linker/view');
var import3 = require('@angular/core/src/linker/element');
var import4 = require('@angular/core/src/linker/view_utils');
var import6 = require('@angular/core/src/linker/view_type');
var import7 = require('@angular/core/src/change_detection/change_detection');
var import8 = require('@angular/core/src/metadata/view');
var import9 = require('@angular/core/src/linker/component_factory');
var import10 = require('./app.component.css.shim');
var import11 = require('../../node_modules/ng2-responsive/responsive/responsive.ngfactory');
var import12 = require('../../node_modules/ng2-responsive/responsive-window/responsive-window.ngfactory');
var import13 = require('../../node_modules/ng2-responsive/bootstrap/bootstrap-directives.ngfactory');
var import14 = require('../../node_modules/ng2-responsive/devices/devices-directives.ngfactory');
var import15 = require('../../node_modules/ng2-responsive/pixelratio/pixelratio-directives.ngfactory');
var import16 = require('../../node_modules/ng2-responsive/useragent/useragent.ngfactory');
var import17 = require('@angular/core/src/linker/template_ref');
var import18 = require('ng2-responsive/config/config');
var import19 = require('@angular/core/src/linker/element_ref');
var import20 = require('ng2-responsive/responsive/responsive');
var import21 = require('ng2-responsive/responsive-window/responsive-window');
var import22 = require('ng2-responsive/bootstrap/bootstrap-directives');
var import23 = require('ng2-responsive/devices/devices-directives');
var import24 = require('ng2-responsive/pixelratio/pixelratio-directives');
var import25 = require('ng2-responsive/useragent/useragent');
var Wrapper_AppComponent = (function () {
    function Wrapper_AppComponent() {
        this.changed = false;
        this.context = new import0.AppComponent();
    }
    Wrapper_AppComponent.prototype.detectChangesInternal = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    return Wrapper_AppComponent;
}());
exports.Wrapper_AppComponent = Wrapper_AppComponent;
var renderType_AppComponent_Host = null;
var _View_AppComponent_Host0 = (function (_super) {
    __extends(_View_AppComponent_Host0, _super);
    function _View_AppComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_AppComponent_Host0, renderType_AppComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_AppComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('my-app', rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_AppComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._AppComponent_0_4 = new Wrapper_AppComponent();
        this._appEl_0.initComponent(this._AppComponent_0_4.context, [], compView_0);
        compView_0.create(this._AppComponent_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_AppComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.AppComponent) && (0 === requestNodeIndex))) {
            return this._AppComponent_0_4.context;
        }
        return notFoundResult;
    };
    _View_AppComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._AppComponent_0_4.detectChangesInternal(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_AppComponent_Host0;
}(import1.AppView));
function viewFactory_AppComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_AppComponent_Host === null)) {
        (renderType_AppComponent_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_AppComponent_Host0(viewUtils, parentInjector, declarationEl);
}
exports.AppComponentNgFactory = new import9.ComponentFactory('my-app', viewFactory_AppComponent_Host0, import0.AppComponent);
var styles_AppComponent = [import10.styles];
var renderType_AppComponent = null;
var _View_AppComponent0 = (function (_super) {
    __extends(_View_AppComponent0, _super);
    function _View_AppComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_AppComponent0, renderType_AppComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_AppComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'main', null);
        this._text_1 = this.renderer.createText(this._el_0, '\n', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'img', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'background-image');
        this.renderer.setElementAttribute(this._el_2, 'src', '../assets/images/background-responsive-directives.jpg');
        this._text_3 = this.renderer.createText(this._el_0, '\n', null);
        this._el_4 = this.renderer.createElement(this._el_0, 'div', null);
        this.renderer.setElementAttribute(this._el_4, 'class', 'site-wrapper');
        this.renderer.setElementAttribute(this._el_4, 'style', 'min-height:700px;');
        this._text_5 = this.renderer.createText(this._el_4, '\n\n  ', null);
        this._el_6 = this.renderer.createElement(this._el_4, 'div', null);
        this.renderer.setElementAttribute(this._el_6, 'class', 'site-wrapper-inner');
        this._text_7 = this.renderer.createText(this._el_6, '\n\n    ', null);
        this._el_8 = this.renderer.createElement(this._el_6, 'div', null);
        this.renderer.setElementAttribute(this._el_8, 'class', 'cover-container');
        this._text_9 = this.renderer.createText(this._el_8, '\n\n      ', null);
        this._el_10 = this.renderer.createElement(this._el_8, 'div', null);
        this.renderer.setElementAttribute(this._el_10, 'class', 'masthead clearfix');
        this._text_11 = this.renderer.createText(this._el_10, '\n        ', null);
        this._el_12 = this.renderer.createElement(this._el_10, 'div', null);
        this.renderer.setElementAttribute(this._el_12, 'class', 'inner');
        this._text_13 = this.renderer.createText(this._el_12, '\n          ', null);
        this._el_14 = this.renderer.createElement(this._el_12, 'nav', null);
        this._text_15 = this.renderer.createText(this._el_14, '\n            ', null);
        this._el_16 = this.renderer.createElement(this._el_14, 'ul', null);
        this.renderer.setElementAttribute(this._el_16, 'class', 'nav masthead-nav');
        this._text_17 = this.renderer.createText(this._el_16, '\n              ', null);
        this._el_18 = this.renderer.createElement(this._el_16, 'li', null);
        this._el_19 = this.renderer.createElement(this._el_18, 'a', null);
        this.renderer.setElementAttribute(this._el_19, 'href', 'https://github.com/ManuCutillas/responsive-directives-angular2');
        this._text_20 = this.renderer.createText(this._el_19, 'Github', null);
        this._text_21 = this.renderer.createText(this._el_16, '\n              ', null);
        this._el_22 = this.renderer.createElement(this._el_16, 'li', null);
        this._el_23 = this.renderer.createElement(this._el_22, 'a', null);
        this.renderer.setElementAttribute(this._el_23, 'href', 'https://www.npmjs.com/package/responsive-directives-angular2');
        this._text_24 = this.renderer.createText(this._el_23, 'NPM', null);
        this._text_25 = this.renderer.createText(this._el_16, '\n              ', null);
        this._el_26 = this.renderer.createElement(this._el_16, 'li', null);
        this._el_27 = this.renderer.createElement(this._el_26, 'a', null);
        this.renderer.setElementAttribute(this._el_27, 'href', 'https://github.com/ManuCutillas/responsive-directives-angular2/issues');
        this._text_28 = this.renderer.createText(this._el_27, 'issues', null);
        this._text_29 = this.renderer.createText(this._el_16, '\n            ', null);
        this._text_30 = this.renderer.createText(this._el_14, '\n          ', null);
        this._text_31 = this.renderer.createText(this._el_12, '\n        ', null);
        this._text_32 = this.renderer.createText(this._el_10, '\n      ', null);
        this._text_33 = this.renderer.createText(this._el_8, '\n\n      ', null);
        this._el_34 = this.renderer.createElement(this._el_8, 'div', null);
        this.renderer.setElementAttribute(this._el_34, 'class', 'inner cover');
        this._text_35 = this.renderer.createText(this._el_34, '\n        ', null);
        this._el_36 = this.renderer.createElement(this._el_34, 'img', null);
        this.renderer.setElementAttribute(this._el_36, 'class', 'rd-logo');
        this.renderer.setElementAttribute(this._el_36, 'src', '../assets/images/logo-responsive.png');
        this._text_37 = this.renderer.createText(this._el_34, '\n        ', null);
        this._el_38 = this.renderer.createElement(this._el_34, 'p', null);
        this.renderer.setElementAttribute(this._el_38, 'class', 'lead introduction');
        this._text_39 = this.renderer.createText(this._el_38, 'Superset of RESPONSIVE DIRECTIVES to show or hide items according to the size of the device screen and another features in Angular 2', null);
        this._text_40 = this.renderer.createText(this._el_34, '\n      ', null);
        this._text_41 = this.renderer.createText(this._el_8, '\n        ', null);
        this._anchor_42 = this.renderer.createTemplateAnchor(this._el_8, null);
        this._appEl_42 = new import3.AppElement(42, 8, this, this._anchor_42);
        this._TemplateRef_42_5 = new import17.TemplateRef_(this._appEl_42, viewFactory_AppComponent1);
        this._Responsive_42_6 = new import11.Wrapper_Responsive(this._TemplateRef_42_5, this.parentInjector.get(import18.ResponsiveState), this._appEl_42.vcRef);
        this._text_43 = this.renderer.createText(this._el_8, '\n        ', null);
        this._anchor_44 = this.renderer.createTemplateAnchor(this._el_8, null);
        this._appEl_44 = new import3.AppElement(44, 8, this, this._anchor_44);
        this._TemplateRef_44_5 = new import17.TemplateRef_(this._appEl_44, viewFactory_AppComponent2);
        this._Responsive_44_6 = new import11.Wrapper_Responsive(this._TemplateRef_44_5, this.parentInjector.get(import18.ResponsiveState), this._appEl_44.vcRef);
        this._text_45 = this.renderer.createText(this._el_8, '\n        ', null);
        this._text_46 = this.renderer.createText(this._el_8, '\n        ', null);
        this._el_47 = this.renderer.createElement(this._el_8, 'div', null);
        this.renderer.setElementAttribute(this._el_47, 'style', 'position:absolute; width:100%;');
        this._ResponsiveWindow_47_3 = new import12.Wrapper_ResponsiveWindow(this.parentInjector.get(import18.ResponsiveState), new import19.ElementRef(this._el_47));
        this._text_48 = this.renderer.createText(this._el_47, '\n              ', null);
        this._anchor_49 = this.renderer.createTemplateAnchor(this._el_47, null);
        this._appEl_49 = new import3.AppElement(49, 47, this, this._anchor_49);
        this._TemplateRef_49_5 = new import17.TemplateRef_(this._appEl_49, viewFactory_AppComponent3);
        this._Responsive_49_6 = new import11.Wrapper_Responsive(this._TemplateRef_49_5, this.parentInjector.get(import18.ResponsiveState), this._appEl_49.vcRef);
        this._text_50 = this.renderer.createText(this._el_47, '\n        ', null);
        this._text_51 = this.renderer.createText(this._el_8, '\n\n      ', null);
        this._el_52 = this.renderer.createElement(this._el_8, 'div', null);
        this.renderer.setElementAttribute(this._el_52, 'class', 'mastfoot');
        this._text_53 = this.renderer.createText(this._el_52, '\n        ', null);
        this._el_54 = this.renderer.createElement(this._el_52, 'div', null);
        this.renderer.setElementAttribute(this._el_54, 'class', 'inner follow');
        this._text_55 = this.renderer.createText(this._el_54, '\n          ', null);
        this._el_56 = this.renderer.createElement(this._el_54, 'p', null);
        this._text_57 = this.renderer.createText(this._el_56, 'Please give me a star on ', null);
        this._el_58 = this.renderer.createElement(this._el_56, 'a', null);
        this.renderer.setElementAttribute(this._el_58, 'href', 'https://github.com/ManuCutillas/responsive-directives-angular2');
        this._text_59 = this.renderer.createText(this._el_58, 'Github', null);
        this._text_60 = this.renderer.createText(this._el_56, ', Follow me on ', null);
        this._el_61 = this.renderer.createElement(this._el_56, 'a', null);
        this.renderer.setElementAttribute(this._el_61, 'href', 'https://twitter.com/ManuCutillas');
        this._text_62 = this.renderer.createText(this._el_61, '@ManuCutillas', null);
        this._text_63 = this.renderer.createText(this._el_56, '.', null);
        this._text_64 = this.renderer.createText(this._el_54, '\n        ', null);
        this._text_65 = this.renderer.createText(this._el_52, '\n      ', null);
        this._text_66 = this.renderer.createText(this._el_8, '\n       ', null);
        this._el_67 = this.renderer.createElement(this._el_8, 'responsiveSizeInfo', null);
        this._appEl_67 = new import3.AppElement(67, 8, this, this._el_67);
        this._ResponsiveSizeInfo_67_5 = new import13.Wrapper_ResponsiveSizeInfo(this.parentInjector.get(import18.ResponsiveState), this._appEl_67.vcRef);
        this._text_68 = this.renderer.createText(this._el_8, '\n       ', null);
        this._el_69 = this.renderer.createElement(this._el_8, 'deviceInfo', null);
        this._appEl_69 = new import3.AppElement(69, 8, this, this._el_69);
        this._DeviceInfo_69_5 = new import14.Wrapper_DeviceInfo(this.parentInjector.get(import18.ResponsiveState), this._appEl_69.vcRef);
        this._text_70 = this.renderer.createText(this._el_8, '\n       ', null);
        this._el_71 = this.renderer.createElement(this._el_8, 'orientationInfo', null);
        this._appEl_71 = new import3.AppElement(71, 8, this, this._el_71);
        this._OrientationInfo_71_5 = new import14.Wrapper_OrientationInfo(this.parentInjector.get(import18.ResponsiveState), this._appEl_71.vcRef);
        this._text_72 = this.renderer.createText(this._el_8, '\n       ', null);
        this._el_73 = this.renderer.createElement(this._el_8, 'pixelratioInfo', null);
        this._appEl_73 = new import3.AppElement(73, 8, this, this._el_73);
        this._PixelRatioInfo_73_5 = new import15.Wrapper_PixelRatioInfo(this.parentInjector.get(import18.ResponsiveState), this._appEl_73.vcRef);
        this._text_74 = this.renderer.createText(this._el_8, '\n       ', null);
        this._el_75 = this.renderer.createElement(this._el_8, 'userAgentInfo', null);
        this._UserAgentInfo_75_3 = new import16.Wrapper_UserAgentInfo(this.parentInjector.get(import18.ResponsiveState));
        this._text_76 = this.renderer.createText(this._el_8, '\n    ', null);
        this._text_77 = this.renderer.createText(this._el_6, '\n  ', null);
        this._text_78 = this.renderer.createText(this._el_4, '\n', null);
        this._text_79 = this.renderer.createText(this._el_0, '\n', null);
        this._text_80 = this.renderer.createText(parentRenderNode, '\n', null);
        this._arr_0 = import4.pureProxy2(function (p0, p1) {
            return [
                p0,
                p1
            ];
        });
        this._map_0 = import4.pureProxy1(function (p0) {
            return { bootstrap: p0 };
        });
        this._arr_1 = import4.pureProxy2(function (p0, p1) {
            return [
                p0,
                p1
            ];
        });
        this._map_1 = import4.pureProxy1(function (p0) {
            return { bootstrap: p0 };
        });
        var subscription_0 = this._Responsive_44_6.context.changes.subscribe(this.eventHandler(this._handle_changes_44_0.bind(this)));
        this._map_2 = import4.pureProxy3(function (p0, p1, p2) {
            return {
                window: p0,
                min: p1,
                max: p2
            };
        });
        this._map_3 = import4.pureProxy1(function (p0) {
            return { sizes: p0 };
        });
        var disposable_0 = this.renderer.listen(this._el_67, 'statechanges', this.eventHandler(this._handle_statechanges_67_0.bind(this)));
        var subscription_1 = this._ResponsiveSizeInfo_67_5.context.statechanges.subscribe(this.eventHandler(this._handle_statechanges_67_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_69, 'device', this.eventHandler(this._handle_device_69_0.bind(this)));
        var subscription_2 = this._DeviceInfo_69_5.context.device.subscribe(this.eventHandler(this._handle_device_69_0.bind(this)));
        var disposable_2 = this.renderer.listen(this._el_71, 'orientation', this.eventHandler(this._handle_orientation_71_0.bind(this)));
        var subscription_3 = this._OrientationInfo_71_5.context.orientation.subscribe(this.eventHandler(this._handle_orientation_71_0.bind(this)));
        var disposable_3 = this.renderer.listen(this._el_73, 'pixelratio', this.eventHandler(this._handle_pixelratio_73_0.bind(this)));
        var subscription_4 = this._PixelRatioInfo_73_5.context.pixelratio.subscribe(this.eventHandler(this._handle_pixelratio_73_0.bind(this)));
        var disposable_4 = this.renderer.listen(this._el_75, 'info', this.eventHandler(this._handle_info_75_0.bind(this)));
        var subscription_5 = this._UserAgentInfo_75_3.context.info.subscribe(this.eventHandler(this._handle_info_75_0.bind(this)));
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._el_18,
            this._el_19,
            this._text_20,
            this._text_21,
            this._el_22,
            this._el_23,
            this._text_24,
            this._text_25,
            this._el_26,
            this._el_27,
            this._text_28,
            this._text_29,
            this._text_30,
            this._text_31,
            this._text_32,
            this._text_33,
            this._el_34,
            this._text_35,
            this._el_36,
            this._text_37,
            this._el_38,
            this._text_39,
            this._text_40,
            this._text_41,
            this._anchor_42,
            this._text_43,
            this._anchor_44,
            this._text_45,
            this._text_46,
            this._el_47,
            this._text_48,
            this._anchor_49,
            this._text_50,
            this._text_51,
            this._el_52,
            this._text_53,
            this._el_54,
            this._text_55,
            this._el_56,
            this._text_57,
            this._el_58,
            this._text_59,
            this._text_60,
            this._el_61,
            this._text_62,
            this._text_63,
            this._text_64,
            this._text_65,
            this._text_66,
            this._el_67,
            this._text_68,
            this._el_69,
            this._text_70,
            this._el_71,
            this._text_72,
            this._el_73,
            this._text_74,
            this._el_75,
            this._text_76,
            this._text_77,
            this._text_78,
            this._text_79,
            this._text_80
        ], [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3,
            disposable_4
        ], [
            subscription_0,
            subscription_1,
            subscription_2,
            subscription_3,
            subscription_4,
            subscription_5
        ]);
        return null;
    };
    _View_AppComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import17.TemplateRef) && (42 === requestNodeIndex))) {
            return this._TemplateRef_42_5;
        }
        if (((token === import20.Responsive) && (42 === requestNodeIndex))) {
            return this._Responsive_42_6.context;
        }
        if (((token === import17.TemplateRef) && (44 === requestNodeIndex))) {
            return this._TemplateRef_44_5;
        }
        if (((token === import20.Responsive) && (44 === requestNodeIndex))) {
            return this._Responsive_44_6.context;
        }
        if (((token === import17.TemplateRef) && (49 === requestNodeIndex))) {
            return this._TemplateRef_49_5;
        }
        if (((token === import20.Responsive) && (49 === requestNodeIndex))) {
            return this._Responsive_49_6.context;
        }
        if (((token === import21.ResponsiveWindow) && ((47 <= requestNodeIndex) && (requestNodeIndex <= 50)))) {
            return this._ResponsiveWindow_47_3.context;
        }
        if (((token === import22.ResponsiveSizeInfo) && (67 === requestNodeIndex))) {
            return this._ResponsiveSizeInfo_67_5.context;
        }
        if (((token === import23.DeviceInfo) && (69 === requestNodeIndex))) {
            return this._DeviceInfo_69_5.context;
        }
        if (((token === import23.OrientationInfo) && (71 === requestNodeIndex))) {
            return this._OrientationInfo_71_5.context;
        }
        if (((token === import24.PixelRatioInfo) && (73 === requestNodeIndex))) {
            return this._PixelRatioInfo_73_5.context;
        }
        if (((token === import25.UserAgentInfo) && (75 === requestNodeIndex))) {
            return this._UserAgentInfo_75_3.context;
        }
        return notFoundResult;
    };
    _View_AppComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0 = this._map_0(this._arr_0('xs', 'lg'));
        this._Responsive_42_6.check_responsive(currVal_0, throwOnChange, false);
        this._Responsive_42_6.detectChangesInternal(this, this._anchor_42, throwOnChange);
        var currVal_2 = this._map_1(this._arr_1('xs', 'lg'));
        this._Responsive_44_6.check_responsive(currVal_2, throwOnChange, false);
        this._Responsive_44_6.detectChangesInternal(this, this._anchor_44, throwOnChange);
        var currVal_3 = 'parent';
        this._ResponsiveWindow_47_3.check_name(currVal_3, throwOnChange, false);
        this._ResponsiveWindow_47_3.detectChangesInternal(this, this._el_47, throwOnChange);
        var currVal_4 = this._map_3(this._map_2('parent', 900, 1400));
        this._Responsive_49_6.check_responsive(currVal_4, throwOnChange, false);
        this._Responsive_49_6.detectChangesInternal(this, this._anchor_49, throwOnChange);
        this._ResponsiveSizeInfo_67_5.detectChangesInternal(this, this._el_67, throwOnChange);
        this._DeviceInfo_69_5.detectChangesInternal(this, this._el_69, throwOnChange);
        this._OrientationInfo_71_5.detectChangesInternal(this, this._el_71, throwOnChange);
        this._PixelRatioInfo_73_5.detectChangesInternal(this, this._el_73, throwOnChange);
        this._UserAgentInfo_75_3.detectChangesInternal(this, this._el_75, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_AppComponent0.prototype.destroyInternal = function () {
        this._Responsive_42_6.context.ngOnDestroy();
        this._Responsive_44_6.context.ngOnDestroy();
        this._Responsive_49_6.context.ngOnDestroy();
        this._ResponsiveWindow_47_3.context.ngOnDestroy();
        this._ResponsiveSizeInfo_67_5.context.ngOnDestroy();
        this._DeviceInfo_69_5.context.ngOnDestroy();
        this._OrientationInfo_71_5.context.ngOnDestroy();
        this._PixelRatioInfo_73_5.context.ngOnDestroy();
        this._UserAgentInfo_75_3.context.ngOnDestroy();
    };
    _View_AppComponent0.prototype._handle_changes_44_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.listenchanges($event) !== false);
        return (true && pd_0);
    };
    _View_AppComponent0.prototype._handle_statechanges_67_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.mystates($event) !== false);
        return (true && pd_0);
    };
    _View_AppComponent0.prototype._handle_device_69_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.thisdevice($event) !== false);
        return (true && pd_0);
    };
    _View_AppComponent0.prototype._handle_orientation_71_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.thisorientation($event) !== false);
        return (true && pd_0);
    };
    _View_AppComponent0.prototype._handle_pixelratio_73_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.thispixelratio($event) !== false);
        return (true && pd_0);
    };
    _View_AppComponent0.prototype._handle_info_75_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.thisUserAgent($event) !== false);
        return (true && pd_0);
    };
    return _View_AppComponent0;
}(import1.AppView));
function viewFactory_AppComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_AppComponent === null)) {
        (renderType_AppComponent = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.Emulated, styles_AppComponent, {}));
    }
    return new _View_AppComponent0(viewUtils, parentInjector, declarationEl);
}
exports.viewFactory_AppComponent0 = viewFactory_AppComponent0;
var _View_AppComponent1 = (function (_super) {
    __extends(_View_AppComponent1, _super);
    function _View_AppComponent1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_AppComponent1, renderType_AppComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_AppComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'div', null);
        this._el_1 = this.renderer.createElement(this._el_0, 'div', null);
        this.renderer.setElementAttribute(this._el_1, 'class', 'lead text-inf');
        this._text_2 = this.renderer.createText(this._el_1, '*Writing the documentation of this demo.', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._el_1,
            this._text_2
        ], [], []);
        return null;
    };
    return _View_AppComponent1;
}(import1.AppView));
function viewFactory_AppComponent1(viewUtils, parentInjector, declarationEl) {
    return new _View_AppComponent1(viewUtils, parentInjector, declarationEl);
}
var _View_AppComponent2 = (function (_super) {
    __extends(_View_AppComponent2, _super);
    function _View_AppComponent2(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_AppComponent2, renderType_AppComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_AppComponent2.prototype.createInternal = function (rootSelector) {
        this.init([], [], [], []);
        return null;
    };
    return _View_AppComponent2;
}(import1.AppView));
function viewFactory_AppComponent2(viewUtils, parentInjector, declarationEl) {
    return new _View_AppComponent2(viewUtils, parentInjector, declarationEl);
}
var _View_AppComponent3 = (function (_super) {
    __extends(_View_AppComponent3, _super);
    function _View_AppComponent3(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_AppComponent3, renderType_AppComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_AppComponent3.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'p', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'fill');
        this.renderer.setElementAttribute(this._el_0, 'style', 'color:white;font-size:20px;');
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return null;
    };
    return _View_AppComponent3;
}(import1.AppView));
function viewFactory_AppComponent3(viewUtils, parentInjector, declarationEl) {
    return new _View_AppComponent3(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=app.component.ngfactory.js.map