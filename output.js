//Sun Apr 05 2026 13:30:51 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
(function () {
  const _0x4b6be4 = typeof chrome !== "undefined" ? chrome : typeof browser !== "undefined" ? browser : null;
  const _0x34d4ab = "eePendingLicenseUiContext";
  const _0x529688 = "hx0SeenProFeatureUpsell";
  let _0x4ec493 = {};
  let _0x3c9cec = "zh_CN";
  const _0x432696 = typeof globalThis !== "undefined" ? globalThis.HawkEyeProFeatureMeta : null;
  function _0x850dc(_0x465a7c, _0x119a7d) {
    if (_0x4ec493 && _0x4ec493[_0x465a7c]) {
      let _0x41ade8 = _0x4ec493[_0x465a7c];
      if (Array.isArray(_0x119a7d)) {
        _0x119a7d.forEach((_0x2681b3, _0x2cfce9) => {
          _0x41ade8 = _0x41ade8.replace(new RegExp("\\$" + (_0x2cfce9 + 1), "g"), String(_0x2681b3));
        });
      } else {
        _0x119a7d != null && (_0x41ade8 = _0x41ade8.replace(/\$1/g, String(_0x119a7d)));
      }
      return _0x41ade8;
    }
    return _0x4b6be4 && _0x4b6be4.i18n ? _0x4b6be4.i18n.getMessage(_0x465a7c, _0x119a7d) || _0x465a7c : _0x465a7c;
  }
  const _0x46ea0e = document.getElementById("eeModal");
  const _0x29b9f5 = document.getElementById("eeModalTitle");
  const _0x5a7288 = document.getElementById("eeModalBody");
  const _0x4a56f7 = document.getElementById("eeModalInput");
  const _0x52a1e2 = document.getElementById("eeModalOk");
  const _0xb4c151 = document.getElementById("eeModalCancel");
  let _0x4ee9a5 = null;
  let _0x23f911 = null;
  const _0x1ed301 = [];
  function _0x42361c(_0x55c517) {
    if (typeof _0x55c517 === "function") {
      _0x1ed301.push(_0x55c517);
    }
  }
  function _0x110133() {
    while (_0x1ed301.length) {
      const _0x1f4cef = _0x1ed301.pop();
      try {
        _0x1f4cef();
      } catch (_0x55fa60) {}
    }
  }
  function _0x2f6ad3() {
    {
      if (!_0x46ea0e) {
        return;
      }
      _0x110133();
      _0x46ea0e.classList.add("hidden");
      _0x46ea0e.setAttribute("aria-hidden", "true");
      if (_0x4a56f7) {
        _0x4a56f7.classList.add("hidden");
      }
      if (_0x5a7288) {
        _0x5a7288.classList.remove("ee-modal-body--html");
      }
      _0x4ee9a5 = null;
      _0x23f911 = null;
    }
  }
  function _0x9bb0bd({
    title: _0xe6ca0e,
    message: _0x43a3c4,
    html: _0x372af7,
    mode: _0x3b4295,
    defaultValue: _0x4e5524,
    okText: _0x1f9691,
    cancelText: _0x44a9ed
  }) {
    {
      if (!_0x46ea0e) {
        return Promise.resolve(null);
      }
      if (_0x29b9f5) {
        _0x29b9f5.textContent = _0xe6ca0e || "";
      }
      if (_0x5a7288) {
        {
          if (_0x372af7 != null) {
            _0x5a7288.innerHTML = String(_0x372af7 || "");
            _0x5a7288.classList.add("ee-modal-body--html");
          } else {
            {
              _0x5a7288.textContent = _0x43a3c4 || "";
              _0x5a7288.classList.remove("ee-modal-body--html");
            }
          }
        }
      }
      if (_0x52a1e2) {
        _0x52a1e2.textContent = _0x1f9691 || _0x850dc("ok") || "OK";
      }
      if (_0xb4c151) {
        _0xb4c151.textContent = _0x44a9ed || _0x850dc("cancel") || "Cancel";
      }
      const _0x4a21c0 = _0x3b4295 === "prompt";
      const _0x31f825 = _0x3b4295 === "confirm";
      if (_0xb4c151) {
        _0xb4c151.style.display = _0x31f825 || _0x4a21c0 ? "" : "none";
      }
      if (_0x4a56f7) {
        if (_0x4a21c0) {
          {
            _0x4a56f7.classList.remove("hidden");
            _0x4a56f7.value = _0x4e5524 == null ? "" : String(_0x4e5524);
          }
        } else {
          _0x4a56f7.classList.add("hidden");
          _0x4a56f7.value = "";
        }
      }
      _0x46ea0e.classList.remove("hidden");
      _0x46ea0e.setAttribute("aria-hidden", "false");
      return new Promise((_0x4ed542, _0x5a3228) => {
        {
          _0x4ee9a5 = _0x4ed542;
          _0x23f911 = _0x5a3228;
          setTimeout(() => {
            const _0x36fea4 = _0x4a21c0 ? _0x4a56f7 : _0x52a1e2;
            try {
              _0x36fea4 && _0x36fea4.focus && _0x36fea4.focus();
            } catch (_0x4378f7) {}
            if (_0x4a21c0 && _0x4a56f7 && _0x4a56f7.select) {
              try {
                _0x4a56f7.select();
              } catch (_0x5b1350) {}
            }
          }, 0);
        }
      });
    }
  }
  function _0x34a884(_0x59c034, _0x2bc332) {
    return _0x9bb0bd({
      title: _0x2bc332 || _0x850dc("extName") || "Notice",
      message: _0x59c034 || "",
      mode: "alert"
    }).then(() => true);
  }
  function _0x2c72ac(_0x2f20a8, _0x35278f) {
    {
      return _0x9bb0bd({
        title: _0x35278f || _0x850dc("extName") || "Confirm",
        message: _0x2f20a8 || "",
        mode: "confirm"
      });
    }
  }
  function _0x112826(_0x1f035f) {
    if (_0x432696 && typeof _0x432696.normalizeLicenseUiRequest === "function") {
      return _0x432696.normalizeLicenseUiRequest(_0x1f035f, _0x3c9cec);
    }
    if (!_0x1f035f) {
      return null;
    }
    if (typeof _0x1f035f === "string") {
      const _0x8865fd = String(_0x1f035f || "").trim();
      return _0x8865fd ? {
        context: _0x8865fd
      } : null;
    }
    if (typeof _0x1f035f !== "object") {
      return null;
    }
    const _0x50a6e3 = typeof _0x1f035f.context === "string" ? _0x1f035f.context.trim() : "";
    if (!_0x50a6e3) {
      return null;
    }
    return {
      context: _0x50a6e3,
      featureKey: typeof _0x1f035f.featureKey === "string" ? _0x1f035f.featureKey.trim() : "",
      featureLabel: typeof _0x1f035f.featureLabel === "string" ? _0x1f035f.featureLabel.trim() : "",
      tooltip: typeof _0x1f035f.tooltip === "string" ? _0x1f035f.tooltip.trim() : "",
      description: typeof _0x1f035f.description === "string" ? _0x1f035f.description.trim() : ""
    };
  }
  function _0x2c12e4(_0x7f684d) {
    if (_0x432696 && typeof _0x432696.resolveFeatureInfo === "function") {
      {
        return _0x432696.resolveFeatureInfo(_0x7f684d, _0x3c9cec);
      }
    }
    return _0x112826(_0x7f684d || {
      context: "pro_feature"
    }) || {
      context: "pro_feature"
    };
  }
  function _0x1dd15e(_0x23d385) {
    if (!_0x23d385 || !_0x23d385.getAttribute) {
      return "";
    }
    const _0x158055 = _0x53f032 => String(_0x53f032 || "").replace(/\s+/g, " ").replace(/^[^A-Za-z0-9\u4e00-\u9fa5]+/, "").trim();
    const _0x4503c0 = _0x158055(_0x23d385.getAttribute("aria-label") || "");
    if (_0x4503c0 && _0x4503c0 !== "button") {
      return _0x4503c0;
    }
    return _0x158055(_0x23d385.textContent || "");
  }
  function _0x2a486d(_0x314c00) {
    {
      if (!_0x314c00 || _0x314c00.nodeType !== 1 || !_0x314c00.getAttribute) {
        return _0x2c12e4(_0x314c00);
      }
      const _0x4a9bdd = String(_0x314c00.getAttribute("data-pro-feature") || "").trim() || "pro_feature";
      if (_0x4a9bdd === "codec_pro") {
        return _0x2c12e4(_0x314c00);
      }
      const _0x5759a0 = _0x1dd15e(_0x314c00);
      return _0x2c12e4({
        context: _0x4a9bdd,
        featureKey: _0x4a9bdd,
        featureLabel: _0x5759a0
      });
    }
  }
  function _0x386b50(_0x5ebe8f) {
    const _0x485cb2 = _0x5ebe8f && _0x5ebe8f.featureKey ? String(_0x5ebe8f.featureKey) : "pro_feature";
    const _0x4f282f = _0x5ebe8f && _0x5ebe8f.featureLabel ? String(_0x5ebe8f.featureLabel) : "";
    return _0x485cb2 + "::" + _0x4f282f;
  }
  function _0x5e5897() {
    try {
      const _0x1a8322 = sessionStorage.getItem(_0x529688);
      const _0x23aaa5 = _0x1a8322 ? JSON.parse(_0x1a8322) : [];
      return new Set(Array.isArray(_0x23aaa5) ? _0x23aaa5.map(_0xabaa6 => String(_0xabaa6 || "")).filter(Boolean) : []);
    } catch (_0x5d88ef) {
      return new Set();
    }
  }
  function _0x487799(_0xff11f3) {
    {
      return _0x5e5897().has(_0x386b50(_0xff11f3));
    }
  }
  function _0x18c43(_0x489a27) {
    try {
      const _0x2f3c69 = _0x5e5897();
      _0x2f3c69.add(_0x386b50(_0x489a27));
      sessionStorage.setItem(_0x529688, JSON.stringify(Array.from(_0x2f3c69)));
    } catch (_0x3d5c55) {}
  }
  function _0x27b468(_0x402df8) {
    {
      return String(_0x402df8 == null ? "" : _0x402df8).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
    }
  }
  function _0x2be838(_0x364736) {
    {
      const _0x5839a4 = _0x364736 && _0x364736.featureLabel ? _0x364736.featureLabel : _0x850dc("licenseFeatureGenericName") || "专业功能";
      const _0x5c5798 = _0x364736 && (_0x364736.description || _0x364736.tooltip) ? _0x364736.description || _0x364736.tooltip : _0x850dc("licenseProfessionalFeatureHint") || "";
      const _0x4b8100 = _0x850dc("licenseFeatureCurrentLabel") || "当前功能";
      const _0x29d899 = _0x850dc("licenseFeatureCommunityUpgradePrompt") || "社区版暂不支持该功能，购买专业版激活码后可继续使用。";
      return "<div class=\"ee-pro-upsell\"><div class=\"ee-pro-upsell__badge\">PRO</div><div class=\"ee-pro-upsell__label\">" + _0x27b468(_0x4b8100) + "：" + _0x27b468(_0x5839a4) + "</div>" + "<p class=\"ee-pro-upsell__description\">" + _0x27b468(_0x5c5798) + "</p>" + "<p class=\"ee-pro-upsell__foot\">" + _0x27b468(_0x29d899) + "</p>" + "</div>";
    }
  }
  function _0x5e0234(_0x23b57a) {
    const _0x2d11ac = _0x2c12e4(_0x23b57a);
    const _0x4ad4b4 = _0x2d11ac && _0x2d11ac.featureLabel ? _0x2d11ac.featureLabel : _0x850dc("licenseFeatureGenericName") || "专业功能";
    const _0x4ab137 = (_0x850dc("proGateTitle") || "社区版暂不支持「$1」").replace("$1", _0x4ad4b4);
    return _0x9bb0bd({
      title: _0x4ab137,
      html: _0x2be838(_0x2d11ac),
      mode: "confirm",
      okText: _0x850dc("proGateUpgradeNow") || "立即升级专业版",
      cancelText: _0x850dc("proGateMaybeLater") || "稍后再说"
    }).catch(() => null);
  }
  let _0x5d16b4 = null;
  function _0x3ceb35() {
    if (_0x5d16b4 && _0x5d16b4.ownerDocument) {
      return _0x5d16b4;
    }
    const _0x4c44ca = document.createElement("div");
    _0x4c44ca.className = "hx0-pro-tooltip hidden";
    _0x4c44ca.setAttribute("role", "tooltip");
    document.body.appendChild(_0x4c44ca);
    _0x5d16b4 = _0x4c44ca;
    return _0x4c44ca;
  }
  function _0xdaab54() {
    const _0x42f22a = _0x3ceb35();
    _0x42f22a.classList.add("hidden");
  }
  function _0x2136e7(_0x58df08) {
    {
      const _0x180e11 = _0x3ceb35();
      if (_0x180e11.classList.contains("hidden")) {
        return;
      }
      const _0x4e9551 = 14;
      const _0x387d35 = _0x180e11.getBoundingClientRect();
      let _0x783672 = (_0x58df08 && typeof _0x58df08.clientX === "number" ? _0x58df08.clientX : 0) + 14;
      let _0x3bf6b0 = (_0x58df08 && typeof _0x58df08.clientY === "number" ? _0x58df08.clientY : 0) + 18;
      const _0xf8bd7a = Math.max(_0x4e9551, window.innerWidth - _0x387d35.width - _0x4e9551);
      const _0x5dd024 = Math.max(_0x4e9551, window.innerHeight - _0x387d35.height - _0x4e9551);
      _0x783672 = Math.min(Math.max(_0x4e9551, _0x783672), _0xf8bd7a);
      _0x3bf6b0 = Math.min(Math.max(_0x4e9551, _0x3bf6b0), _0x5dd024);
      _0x180e11.style.left = _0x783672 + "px";
      _0x180e11.style.top = _0x3bf6b0 + "px";
    }
  }
  function _0x31cb28(_0x4aec77) {
    {
      if (!_0x4aec77 || !_0x4aec77.closest) {
        return null;
      }
      return _0x4aec77.closest("[data-pro-feature]");
    }
  }
  function _0x2e5225(_0x29cd75) {
    if (!_0x29cd75 || !_0x29cd75.closest) {
      return null;
    }
    return _0x29cd75.closest(".codec-menu__item[data-codec-tooltip], [data-pro-feature]");
  }
  function _0xe270cb(_0x133c17) {
    if (!_0x133c17 || !_0x133c17.dataset) {
      return "";
    }
    const _0x2e0aeb = !!(_0x133c17.classList && _0x133c17.classList.contains("pro-feature-locked") && _0x133c17.hasAttribute("data-pro-feature") && !_0x39b242());
    if (_0x2e0aeb) {
      const _0x330aff = _0x2a486d(_0x133c17);
      return String(_0x330aff && (_0x330aff.tooltip || _0x330aff.description) || _0x133c17.dataset.proTooltip || _0x133c17.dataset.proDescription || "").trim();
    }
    return String(_0x133c17.dataset.codecTooltip || "").trim();
  }
  function _0x6b8806(_0x5b84e9, _0xb18ce1) {
    const _0x3b2b31 = _0xe270cb(_0x5b84e9);
    if (!_0x3b2b31) {
      {
        _0xdaab54();
        return;
      }
    }
    const _0x22cf63 = _0x3ceb35();
    _0x22cf63.textContent = _0x3b2b31;
    _0x22cf63.classList.remove("hidden");
    _0x2136e7(_0xb18ce1);
  }
  function _0x42e4eb() {
    document.addEventListener("pointerover", _0x327fa7 => {
      {
        const _0x17257d = _0x2e5225(_0x327fa7.target);
        if (!_0x17257d) {
          {
            _0xdaab54();
            return;
          }
        }
        _0x6b8806(_0x17257d, _0x327fa7);
      }
    }, true);
    document.addEventListener("pointermove", _0x6b9567 => {
      {
        const _0x282218 = _0x2e5225(_0x6b9567.target);
        if (!_0x282218) {
          {
            _0xdaab54();
            return;
          }
        }
        _0x6b8806(_0x282218, _0x6b9567);
      }
    }, true);
    document.addEventListener("pointerout", _0x4dbbd6 => {
      const _0x45859d = _0x2e5225(_0x4dbbd6.target);
      const _0x43eb22 = _0x2e5225(_0x4dbbd6.relatedTarget);
      if (_0x45859d && _0x45859d === _0x43eb22) {
        return;
      }
      _0xdaab54();
    }, true);
    window.addEventListener("scroll", _0xdaab54, true);
    window.addEventListener("blur", _0xdaab54);
  }
  let _0x187e38 = false;
  function _0x39b242() {
    return !!_0x187e38;
  }
  function _0x3f66c6(_0x14335d) {
    if (!_0x4b6be4 || !_0x4b6be4.storage || !_0x4b6be4.storage.local) {
      return;
    }
    try {
      {
        const _0x288214 = _0x112826(_0x14335d);
        if (_0x288214) {
          _0x4b6be4.storage.local.set({
            [_0x34d4ab]: Object.assign({}, _0x288214, {
              requestedAt: Date.now()
            })
          });
          return;
        }
        _0x4b6be4.storage.local.remove ? _0x4b6be4.storage.local.remove(_0x34d4ab) : _0x4b6be4.storage.local.set({
          [_0x34d4ab]: null
        });
      }
    } catch (_0x58048a) {}
  }
  function _0x321c5b(_0x20b5f1) {
    const _0xe1381a = _0x112826(_0x20b5f1 || {
      context: "pro_feature"
    }) || {
      context: "pro_feature"
    };
    _0x3f66c6(_0xe1381a);
    let _0x4c1aff = false;
    if (_0xe1381a && _0x4b6be4 && _0x4b6be4.runtime && _0x4b6be4.runtime.sendMessage) {
      try {
        _0x4b6be4.runtime.sendMessage({
          type: "OPEN_EXTENSION_POPUP_FALLBACK",
          context: _0xe1381a
        }, () => {});
        _0x4c1aff = true;
      } catch (_0x17c706) {}
    }
    try {
      {
        !_0x4c1aff && _0x4b6be4 && _0x4b6be4.action && _0x4b6be4.action.openPopup && (_0x4b6be4.action.openPopup(() => {}), _0x4c1aff = true);
      }
    } catch (_0x36d748) {}
    try {
      {
        !_0x4c1aff && _0x4b6be4 && _0x4b6be4.browserAction && _0x4b6be4.browserAction.openPopup && (_0x4b6be4.browserAction.openPopup(() => {}), _0x4c1aff = true);
      }
    } catch (_0x3ee1ea) {}
    if (!_0x4c1aff && _0x4b6be4 && _0x4b6be4.runtime && _0x4b6be4.runtime.sendMessage) {
      try {
        _0x4b6be4.runtime.sendMessage({
          type: "REQUEST_LICENSE_UI",
          context: _0xe1381a
        }, () => {});
        _0x4c1aff = true;
      } catch (_0x3f361d) {}
    }
    if (!_0x4c1aff) {
      _0x34a884(_0x850dc("licenseOpenPopupInstruction"), _0x850dc("extName") || "Hx0 HawkEye");
    }
  }
  function _0x3e8fd4(_0xd163c9) {
    if (_0x39b242()) {
      return true;
    }
    _0x321c5b(_0x2a486d(_0xd163c9 || {
      context: "pro_feature"
    }));
    return false;
  }
  function _0xd671d8(_0x272a2c) {
    const _0xe9d957 = _0x2a486d(_0x272a2c || {
      context: "pro_feature"
    });
    if (_0x39b242()) {
      return Promise.resolve(true);
    }
    _0x243c62();
    _0xdaab54();
    if (_0x487799(_0xe9d957)) {
      {
        _0x321c5b(_0xe9d957);
        return Promise.resolve(false);
      }
    }
    _0x18c43(_0xe9d957);
    return _0x5e0234(_0xe9d957).then(_0x49d5f9 => {
      {
        if (_0x49d5f9) {
          _0x321c5b(_0xe9d957);
        }
        return false;
      }
    });
  }
  function _0x18561b() {
    const _0x3d5752 = !_0x39b242();
    try {
      document.body.classList.toggle("ee-license-gated", _0x3d5752);
    } catch (_0x29cf22) {}
    document.querySelectorAll("[data-pro-feature]").forEach(_0x5f0282 => {
      if (!_0x5f0282) {
        return;
      }
      const _0x3a4312 = _0x2a486d(_0x5f0282);
      !Object.prototype.hasOwnProperty.call(_0x5f0282.dataset || {}, "defaultTitle") && (_0x5f0282.dataset.defaultTitle = _0x5f0282.getAttribute("title") || "");
      _0x5f0282.classList.toggle("pro-feature-locked", _0x3d5752);
      if (_0x5f0282.dataset) {
        {
          _0x5f0282.dataset.proTooltip = _0x3a4312.tooltip || "";
          _0x5f0282.dataset.proLabel = _0x3a4312.featureLabel || "";
          _0x5f0282.dataset.proDescription = _0x3a4312.description || "";
          _0x5f0282.dataset.proLockBadge = "PRO";
        }
      }
      if (_0x3d5752) {
        _0x5f0282.removeAttribute("title");
      } else {
        _0x5f0282.dataset.defaultTitle ? _0x5f0282.setAttribute("title", _0x5f0282.dataset.defaultTitle) : _0x5f0282.removeAttribute("title");
      }
      _0x5f0282.setAttribute("aria-disabled", _0x3d5752 ? "true" : "false");
    });
    if (_0x48f941) {
      const _0x22f81c = _0x2c12e4(_0x48f941);
      _0x48f941.classList.toggle("pro-feature-locked", _0x3d5752);
      _0x48f941.classList.toggle("toolbar-toggle-switch--locked", _0x3d5752);
      _0x48f941.setAttribute("aria-disabled", _0x3d5752 ? "true" : "false");
      _0x48f941.dataset && (_0x48f941.dataset.proTooltip = _0x22f81c.tooltip || "", _0x48f941.dataset.proLabel = _0x22f81c.featureLabel || "", _0x48f941.dataset.proDescription = _0x22f81c.description || "", _0x48f941.dataset.proLockBadge = "PRO");
      if (_0x3d5752) {
        _0x48f941.removeAttribute("title");
      } else {
        _0x48f941.dataset && _0x48f941.dataset.defaultTitle && _0x48f941.setAttribute("title", _0x48f941.dataset.defaultTitle);
      }
    }
  }
  function _0x45d1fb() {
    if (!_0x4b6be4 || !_0x4b6be4.storage || !_0x4b6be4.storage.local) {
      return;
    }
    _0x4b6be4.storage.local.get(["eeLicenseFeaturesUnlocked"], _0x301309 => {
      _0x187e38 = !!(_0x301309 && _0x301309.eeLicenseFeaturesUnlocked);
      _0x18561b();
    });
  }
  function _0x41f248() {
    try {
      {
        if (_0x3a0472 === "intercept") {
          _0x25a62d("history");
        }
      }
    } catch (_0x1c8676) {}
    try {
      _0x2f943c && !_0x2f943c.classList.contains("hidden") && _0x2f943c.classList.add("hidden");
    } catch (_0xe1a109) {}
    _0x2e87fe();
    try {
      if (Array.isArray(_0x33d5a5)) {
        _0x33d5a5 = _0x33d5a5.filter(_0xe9c2dd => !_0x6a3eb1(_0xe9c2dd));
        _0x33d5a5.forEach(_0x5c6fd3 => {
          if (!_0x5c6fd3) {
            return;
          }
          delete _0x5c6fd3.aiJudgeResultText;
          delete _0x5c6fd3.aiMeta;
        });
        !_0x33d5a5.length && _0x29a5ad({
          id: "send_0",
          title: _0x850dc("replayDraft") || "Draft",
          requestRaw: "",
          responseRaw: "",
          statusText: "-"
        });
        _0x4f1326();
        if (_0x158eac && _0x33d5a5.some(_0x40fd7f => _0x40fd7f.id === _0x158eac)) {
          _0x6d2f22(_0x158eac);
        } else {
          _0x33d5a5[0] && _0x33d5a5[0].id && _0x6d2f22(_0x33d5a5[0].id);
        }
      }
    } catch (_0x42d74e) {}
    try {
      {
        _0x39c18b && _0x39c18b.dataset && _0x39c18b.dataset.viewMode === "ai" && (_0x39c18b.dataset.viewMode = "pretty", _0x50f57b(_0x1898fa && _0x1898fa.querySelector(".replay-resp-toggle"), "pretty"), _0x5d3ef2(_0x39c18b, "pretty", false));
        _0x3025ed && _0x3025ed.dataset && _0x3025ed.dataset.viewMode === "ai" && (_0x3025ed.dataset.viewMode = "pretty", _0x50f57b(_0x2f943c && _0x2f943c.querySelector(".fuzz-resp-toggle"), "pretty"), _0x5d3ef2(_0x3025ed, "pretty", false));
      }
    } catch (_0x4d2b84) {}
  }
  let _0x17beeb = false;
  let _0x7f2651 = false;
  function _0x1601ea() {
    const _0x30ebfb = typeof HAWK_EYE_CONSTANTS !== "undefined" ? HAWK_EYE_CONSTANTS : {};
    const _0x1accdb = _0x30ebfb.USER_POLICY || {};
    return {
      key: _0x1accdb.STORAGE_KEY || "eeUserPolicyAckV2",
      version: _0x1accdb.VERSION || "2026.03"
    };
  }
  function _0x29e36d() {
    _0x3f66c6("");
    let _0x5afd56 = false;
    try {
      _0x4b6be4 && _0x4b6be4.action && _0x4b6be4.action.openPopup && (_0x4b6be4.action.openPopup(() => {}), _0x5afd56 = true);
    } catch (_0x21e303) {}
    try {
      !_0x5afd56 && _0x4b6be4 && _0x4b6be4.browserAction && _0x4b6be4.browserAction.openPopup && (_0x4b6be4.browserAction.openPopup(() => {}), _0x5afd56 = true);
    } catch (_0x4ed7c7) {}
    if (!_0x5afd56 && _0x4b6be4 && _0x4b6be4.runtime && _0x4b6be4.runtime.sendMessage) {
      try {
        _0x4b6be4.runtime.sendMessage({
          type: "OPEN_EXTENSION_POPUP_FALLBACK"
        }, () => {});
        _0x5afd56 = true;
      } catch (_0x390f8e) {}
    }
    if (!_0x5afd56 && _0x4b6be4 && _0x4b6be4.runtime && _0x4b6be4.runtime.sendMessage) {
      {
        try {
          _0x4b6be4.runtime.sendMessage({
            type: "REQUEST_LICENSE_UI"
          }, () => {});
          _0x5afd56 = true;
        } catch (_0x2a541e) {}
      }
    }
    if (!_0x5afd56) {
      _0x34a884(_0x850dc("policySideOpenPopupInstruction"), _0x850dc("extName") || "Hx0 HawkEye");
    }
  }
  function _0x4778bb() {
    {
      const _0x561e7d = _0x1601ea();
      if (!_0x4b6be4 || !_0x4b6be4.storage || !_0x4b6be4.storage.local) {
        _0x7f2651 = true;
        return;
      }
      try {
        document.body.classList.add("policy-check-pending");
      } catch (_0x1fe329) {}
      _0x4b6be4.storage.local.get([_0x561e7d.key], _0x4a07be => {
        _0x17beeb = !!(_0x4a07be && _0x4a07be[_0x561e7d.key] === _0x561e7d.version);
        _0x7f2651 = true;
        try {
          document.body.classList.remove("policy-check-pending");
        } catch (_0x164595) {}
        const _0x542093 = document.getElementById("userPolicySideOverlay");
        _0x542093 && (_0x542093.classList.toggle("hidden", _0x17beeb), _0x542093.setAttribute("aria-hidden", _0x17beeb ? "true" : "false"));
      });
    }
  }
  function _0x283e5f(_0x50405d, _0x322e23, _0x61930e) {
    return _0x9bb0bd({
      title: _0x61930e || _0x850dc("extName") || "Prompt",
      message: _0x50405d || "",
      mode: "prompt",
      defaultValue: _0x322e23
    });
  }
  function _0x35d00b(_0x504b9e) {
    return String(_0x504b9e || _0x3c9cec || "").toLowerCase().startsWith("en");
  }
  function _0x5c7ab1(_0x29c10c, _0x4ec5f9) {
    const _0xf21464 = Number(_0x4ec5f9) > 0 ? Number(_0x4ec5f9) : 600;
    const _0x444148 = String(_0x29c10c == null ? "" : _0x29c10c).replace(/\r/g, "").trim();
    return _0x444148.length > _0xf21464 ? _0x444148.slice(0, _0xf21464) : _0x444148;
  }
  function _0x2cc3a9(_0x4f283f, _0x2c32e0, _0x2e401b) {
    {
      const _0xce5161 = _0x5c7ab1(_0x2c32e0 || "");
      if (!_0xce5161) {
        return String(_0x4f283f || "");
      }
      return String(_0x4f283f || "") + "\n\n" + (_0x2e401b ? "User additional context / focus:\n" + _0xce5161 + "\n\nPlease keep the original task and output format, and prioritize the points above when analyzing." : "用户补充说明 / 关注重点：\n" + _0xce5161 + "\n\n请在保持原有任务目标与输出格式的前提下，优先结合以上补充信息进行分析。");
    }
  }
  function _0x165698(_0x398bc3) {
    {
      const _0x548fd8 = _0x398bc3 && typeof _0x398bc3 === "object" ? _0x398bc3 : {};
      const _0x4c2a44 = !!_0x548fd8.isEn;
      const _0xcbbb5f = Array.isArray(_0x548fd8.fieldOptions) ? _0x548fd8.fieldOptions.filter(Boolean) : [];
      const _0x20a084 = String(_0x548fd8.defaultTargetRef || _0xcbbb5f[0] && _0xcbbb5f[0].ref || "");
      if (!_0x46ea0e || !_0x5a7288 || !_0x29b9f5 || !_0x52a1e2) {
        return Promise.resolve({
          targetRef: _0x20a084,
          extraPrompt: ""
        });
      }
      _0x29b9f5.textContent = _0x548fd8.title || (_0x4c2a44 ? "AI Analysis Options" : "AI 分析选项");
      if (_0x52a1e2) {
        _0x52a1e2.textContent = _0x548fd8.okText || (_0x4c2a44 ? "Analyze" : "开始分析");
      }
      if (_0xb4c151) {
        _0xb4c151.textContent = _0x548fd8.cancelText || _0x850dc("cancel") || "Cancel";
      }
      if (_0xb4c151) {
        _0xb4c151.style.display = "";
      }
      if (_0x4a56f7) {
        {
          _0x4a56f7.classList.add("hidden");
          _0x4a56f7.value = "";
        }
      }
      const _0x6383f1 = document.createElement("div");
      _0x6383f1.className = "ee-ai-assist-config";
      const _0x44cab3 = String(_0x548fd8.tip || "").trim();
      const _0x10ab39 = _0x548fd8.placeholder || (_0x4c2a44 ? "Optional: add extra context, known code clues, suspected algorithm, or specific focus." : "可选填写补充说明，例如已知代码线索、怀疑的算法、希望重点关注的字段或验证方向。");
      const _0x2f37ff = _0x548fd8.noteHint || (_0x4c2a44 ? "Leave empty to run the default analysis flow directly." : "留空则直接按默认分析流程执行。");
      const _0x54b476 = _0x548fd8.fieldLabel || (_0x4c2a44 ? "Target field" : "分析字段");
      const _0xc3a22b = _0x548fd8.noteLabel || (_0x4c2a44 ? "Additional context" : "补充说明");
      _0x6383f1.innerHTML = "" + (_0x44cab3 ? "<div class=\"ee-target-tip\">" + _0x47f251(_0x44cab3) + "</div>" : "") + (_0xcbbb5f.length ? "<div class=\"ee-ai-assist-row\"><label for=\"eeAiAssistTarget\">" + _0x47f251(_0x54b476) + "</label>" + "<select id=\"eeAiAssistTarget\" class=\"ee-ai-assist-select\">" + _0xcbbb5f.map(_0x2f6363 => {
        {
          const _0x840910 = String(_0x2f6363 && _0x2f6363.ref || "");
          const _0x58f8f2 = String(_0x2f6363 && _0x2f6363.label || _0x840910 || "-");
          const _0x35f85e = _0x840910 === _0x20a084 ? " selected" : "";
          return "<option value=\"" + _0x47f251(_0x840910) + "\"" + _0x35f85e + ">" + _0x47f251(_0x58f8f2) + "</option>";
        }
      }).join("") + "</select>" + "</div>" : "") + "<div class=\"ee-ai-assist-row ee-ai-assist-row-stack\">" + "<label for=\"eeAiAssistNote\">" + _0x47f251(_0xc3a22b) + "</label>" + "<textarea id=\"eeAiAssistNote\" class=\"ee-ai-assist-text\" rows=\"4\" placeholder=\"" + _0x47f251(_0x10ab39) + "\"></textarea>" + "</div>" + "<div class=\"ee-target-tip\">" + _0x47f251(_0x2f37ff) + "</div>";
      _0x5a7288.innerHTML = "";
      _0x5a7288.appendChild(_0x6383f1);
      _0x46ea0e.classList.remove("hidden");
      _0x46ea0e.setAttribute("aria-hidden", "false");
      return new Promise(_0x1cb5b8 => {
        const _0x50ec52 = _0x6383f1.querySelector("#eeAiAssistTarget");
        const _0x345a46 = _0x6383f1.querySelector("#eeAiAssistNote");
        let _0x3fe015 = false;
        const _0xb76eef = {
          targetRef: _0x50ec52 ? String(_0x50ec52.value || _0x20a084 || "") : _0x20a084,
          extraPrompt: _0x5c7ab1(_0x345a46 ? _0x345a46.value : "")
        };
        const _0x17259f = () => {
          _0xb76eef.targetRef = _0x50ec52 ? String(_0x50ec52.value || _0x20a084 || "") : _0x20a084;
          _0xb76eef.extraPrompt = _0x5c7ab1(_0x345a46 ? _0x345a46.value : "");
        };
        const _0x32c2ad = () => {
          try {
            _0x52a1e2 && _0x52a1e2.removeEventListener("pointerdown", _0x3c3934, true);
          } catch (_0x276e2f) {}
          try {
            {
              _0x52a1e2 && _0x52a1e2.removeEventListener("mousedown", _0x3c3934, true);
            }
          } catch (_0x1409bd) {}
          try {
            _0x52a1e2 && _0x52a1e2.removeEventListener("click", _0x5a5adb, true);
          } catch (_0x531df7) {}
          try {
            _0xb4c151 && _0xb4c151.removeEventListener("click", _0xc8d62c, true);
          } catch (_0x609f7c) {}
          try {
            _0x46ea0e && _0x46ea0e.removeEventListener("click", _0x2406b6, true);
          } catch (_0x4e4ff5) {}
          try {
            document.removeEventListener("keydown", _0x1fb645, true);
          } catch (_0x401bda) {}
          try {
            _0x50ec52 && _0x50ec52.removeEventListener("input", _0x17259f);
          } catch (_0x3ef6da) {}
          try {
            {
              _0x50ec52 && _0x50ec52.removeEventListener("change", _0x17259f);
            }
          } catch (_0x4d3fba) {}
          try {
            _0x345a46 && _0x345a46.removeEventListener("input", _0x17259f);
          } catch (_0x5306b5) {}
          try {
            _0x345a46 && _0x345a46.removeEventListener("change", _0x17259f);
          } catch (_0x3ce393) {}
          try {
            _0x345a46 && _0x345a46.removeEventListener("blur", _0x17259f, true);
          } catch (_0x5cb1d4) {}
          try {
            {
              _0x345a46 && _0x345a46.removeEventListener("compositionend", _0x17259f);
            }
          } catch (_0x428b2a) {}
        };
        const _0x28be8a = _0x440405 => {
          if (_0x3fe015) {
            return;
          }
          _0x3fe015 = true;
          _0x32c2ad();
          _0x2f6ad3();
          _0x1cb5b8(_0x440405);
        };
        const _0x3c3934 = () => {
          try {
            if (_0x345a46 && document.activeElement === _0x345a46 && typeof _0x345a46.blur === "function") {
              {
                _0x345a46.blur();
              }
            }
          } catch (_0xfaa489) {}
          _0x17259f();
        };
        const _0x5a5adb = _0x190ea3 => {
          try {
            if (_0x190ea3 && typeof _0x190ea3.preventDefault === "function") {
              _0x190ea3.preventDefault();
            }
            if (_0x190ea3 && typeof _0x190ea3.stopImmediatePropagation === "function") {
              _0x190ea3.stopImmediatePropagation();
            }
          } catch (_0x4688ce) {}
          _0x3c3934();
          _0x28be8a({
            targetRef: _0xb76eef.targetRef,
            extraPrompt: _0xb76eef.extraPrompt
          });
        };
        const _0xc8d62c = _0xf6ef73 => {
          try {
            if (_0xf6ef73 && typeof _0xf6ef73.preventDefault === "function") {
              _0xf6ef73.preventDefault();
            }
            if (_0xf6ef73 && typeof _0xf6ef73.stopImmediatePropagation === "function") {
              _0xf6ef73.stopImmediatePropagation();
            }
          } catch (_0x53da29) {}
          _0x28be8a(null);
        };
        const _0x2406b6 = _0x5446b7 => {
          const _0x4c0e6a = _0x5446b7 && _0x5446b7.target;
          if (!(_0x4c0e6a && _0x4c0e6a.classList && _0x4c0e6a.classList.contains("ee-modal-backdrop"))) {
            return;
          }
          try {
            if (typeof _0x5446b7.preventDefault === "function") {
              _0x5446b7.preventDefault();
            }
            if (typeof _0x5446b7.stopImmediatePropagation === "function") {
              _0x5446b7.stopImmediatePropagation();
            }
          } catch (_0x496e15) {}
          _0x28be8a(null);
        };
        const _0x1fb645 = _0x177d4c => {
          if (!_0x46ea0e || _0x46ea0e.classList.contains("hidden")) {
            return;
          }
          if (!_0x177d4c) {
            return;
          }
          if (_0x177d4c.key === "Escape") {
            try {
              _0x177d4c.preventDefault();
              if (typeof _0x177d4c.stopImmediatePropagation === "function") {
                _0x177d4c.stopImmediatePropagation();
              }
            } catch (_0x584dc1) {}
            _0x28be8a(null);
          }
        };
        try {
          _0x50ec52 && _0x50ec52.addEventListener("input", _0x17259f);
        } catch (_0xc5758) {}
        try {
          _0x50ec52 && _0x50ec52.addEventListener("change", _0x17259f);
        } catch (_0x1166dc) {}
        try {
          _0x345a46 && _0x345a46.addEventListener("input", _0x17259f);
        } catch (_0x427668) {}
        try {
          _0x345a46 && _0x345a46.addEventListener("change", _0x17259f);
        } catch (_0x3dfd13) {}
        try {
          _0x345a46 && _0x345a46.addEventListener("blur", _0x17259f, true);
        } catch (_0x5bc032) {}
        try {
          {
            _0x345a46 && _0x345a46.addEventListener("compositionend", _0x17259f);
          }
        } catch (_0x4cdcc0) {}
        try {
          _0x52a1e2.addEventListener("pointerdown", _0x3c3934, true);
        } catch (_0x351f47) {}
        try {
          _0x52a1e2.addEventListener("mousedown", _0x3c3934, true);
        } catch (_0x1ef0ca) {}
        try {
          _0x52a1e2.addEventListener("click", _0x5a5adb, {
            capture: true
          });
        } catch (_0x3a96b8) {}
        try {
          {
            _0xb4c151 && _0xb4c151.addEventListener("click", _0xc8d62c, {
              capture: true
            });
          }
        } catch (_0x54805b) {}
        try {
          _0x46ea0e && _0x46ea0e.addEventListener("click", _0x2406b6, {
            capture: true
          });
        } catch (_0x255042) {}
        try {
          {
            document.addEventListener("keydown", _0x1fb645, true);
          }
        } catch (_0x1d9d6a) {}
        _0x42361c(_0x32c2ad);
        setTimeout(() => {
          try {
            {
              const _0x13a24c = _0x6383f1.querySelector("#eeAiAssistTarget") || _0x6383f1.querySelector("#eeAiAssistNote") || _0x52a1e2;
              _0x13a24c && _0x13a24c.focus && _0x13a24c.focus();
            }
          } catch (_0x44cd9c) {}
        }, 0);
      });
    }
  }
  function _0x37bc2b(_0x15bc38, _0x5d2f15) {
    if (!_0x46ea0e || !_0x5a7288 || !_0x29b9f5 || !_0x52a1e2) {
      {
        const _0x10d408 = Array.isArray(_0x15bc38) ? _0x15bc38.map(_0x13b244 => String(_0x13b244)).filter(Boolean) : [];
        return Promise.resolve(_0x10d408);
      }
    }
    const _0x461d8c = Array.isArray(_0x15bc38) ? _0x15bc38.map(_0x9fd3b => String(_0x9fd3b)).filter(Boolean) : [];
    if (!_0x461d8c.length) {
      return Promise.resolve(null);
    }
    _0x29b9f5.textContent = _0x850dc("batchReplay") || "Batch replay";
    if (_0x52a1e2) {
      _0x52a1e2.textContent = _0x850dc("ok") || "OK";
    }
    if (_0xb4c151) {
      _0xb4c151.textContent = _0x850dc("cancel") || "Cancel";
    }
    if (_0xb4c151) {
      _0xb4c151.style.display = "";
    }
    _0x4a56f7 && (_0x4a56f7.classList.add("hidden"), _0x4a56f7.value = "");
    const _0x4c7303 = document.createElement("div");
    _0x4c7303.className = "ee-reorder";
    _0x4c7303.innerHTML = "<div class=\"ee-reorder-hint\">" + (_0x850dc("replayOrderDragHint") || "Drag to change replay order.") + "</div>" + "<div class=\"ee-reorder-list\" id=\"eeReorderList\"></div>" + "<div class=\"ee-reorder-footer\">" + "<div class=\"ee-reorder-count\" id=\"eeReorderCount\"></div>" + "<div></div>" + "</div>";
    const _0x409d08 = _0x4c7303.querySelector("#eeReorderList");
    const _0x5a8229 = _0x4c7303.querySelector("#eeReorderCount");
    function _0x48df81() {
      if (!_0x5a8229) {
        return;
      }
      const _0x206f89 = _0x409d08 ? _0x409d08.querySelectorAll(".ee-reorder-item").length : _0x461d8c.length;
      _0x5a8229.textContent = (_0x850dc("selectedCountText") || "$1 selected").replace("$1", String(_0x206f89));
    }
    _0x461d8c.forEach((_0x13559e, _0xabc841) => {
      const _0x302f14 = _0x5d2f15 && _0x5d2f15[_0x13559e] ? _0x5d2f15[_0x13559e] : null;
      const _0x25d3b3 = _0x302f14 && _0x302f14.method ? String(_0x302f14.method).toUpperCase() : "-";
      const _0x1367c2 = _0x302f14 && _0x302f14.url ? String(_0x302f14.url) : _0x13559e;
      const _0x567bea = typeof _0x1e8ea0 !== "undefined" && _0x1e8ea0 && _0x1e8ea0.get ? _0x1e8ea0.get(String(_0x13559e)) || 0 : 0;
      const _0x2d3e7c = _0x302f14 ? _0x137986(_0x302f14) : "";
      const _0x57ee38 = _0x302f14 ? _0x24e589(_0x302f14) : "";
      const _0x2627e9 = document.createElement("div");
      _0x2627e9.className = "ee-reorder-item";
      _0x2627e9.draggable = true;
      _0x2627e9.dataset.id = _0x13559e;
      _0x2627e9.innerHTML = "<div class=\"ee-drag-handle\" aria-hidden=\"true\">≡</div><div class=\"ee-item-main\"><div class=\"ee-item-title\"><span class=\"ee-item-method\">" + _0x47f251(_0x25d3b3) + "</span>" + "<span class=\"ee-item-url\" title=\"" + _0x47f251(_0x1367c2) + "\">" + _0x47f251(_0x1367c2) + "</span>" + "<span class=\"ee-item-expand\" aria-hidden=\"true\">▸</span>" + "</div>" + "<div class=\"ee-item-sub\" title=\"" + _0x47f251(_0x13559e) + "\">" + (_0x567bea ? _0x47f251(_0x850dc("columnNo") || "No.") + ": #" + String(_0x567bea) : "ID: " + _0x47f251(_0x13559e)) + "</div>" + "</div>" + "<div class=\"ee-item-detail\" hidden>" + "<div class=\"ee-detail-section\">" + "<div class=\"ee-detail-head\">" + "<span class=\"ee-detail-title\">" + _0x47f251(_0x850dc("request") || "Request") + "</span>" + "<button type=\"button\" class=\"ee-detail-copy\" data-copy=\"req\">" + _0x47f251(_0x850dc("copy") || "Copy") + "</button>" + "</div>" + "<pre class=\"ee-detail-pre ee-detail-pre-req\"></pre>" + "</div>" + "<div class=\"ee-detail-section\">" + "<div class=\"ee-detail-head\">" + "<span class=\"ee-detail-title\">" + _0x47f251(_0x850dc("response") || "Response") + "</span>" + "<button type=\"button\" class=\"ee-detail-copy\" data-copy=\"resp\">" + _0x47f251(_0x850dc("copy") || "Copy") + "</button>" + "</div>" + "<pre class=\"ee-detail-pre ee-detail-pre-resp\"></pre>" + "</div>" + "</div>";
      try {
        const _0x55b891 = _0x2627e9.querySelector(".ee-detail-pre-req");
        const _0x5d64fa = _0x2627e9.querySelector(".ee-detail-pre-resp");
        if (_0x55b891) {
          try {
            _0x55b891.textContent = _0x233161(_0x2d3e7c || "", "pretty");
          } catch (_0x5f591c) {
            _0x55b891.textContent = _0x2d3e7c || "";
          }
        }
        if (_0x5d64fa) {
          try {
            _0x5d64fa.textContent = _0x233161(_0x57ee38 || "", "pretty");
          } catch (_0x226da0) {
            _0x5d64fa.textContent = _0x57ee38 || "";
          }
        }
      } catch (_0x310f2d) {}
      if (_0x409d08) {
        _0x409d08.appendChild(_0x2627e9);
      }
    });
    _0x48df81();
    let _0x51b60c = null;
    let _0x5708f4 = false;
    let _0x4dfda0 = "";
    function _0x82d7eb(_0x3772c2, _0x52f290) {
      const _0x5c19d6 = [..._0x3772c2.querySelectorAll(".ee-reorder-item:not(.dragging)")];
      return _0x5c19d6.reduce((_0xaa1bd2, _0x474960) => {
        {
          const _0x45fdb8 = _0x474960.getBoundingClientRect();
          const _0x22218e = _0x52f290 - _0x45fdb8.top - _0x45fdb8.height / 2;
          if (_0x22218e < 0 && _0x22218e > _0xaa1bd2.offset) {
            return {
              offset: _0x22218e,
              element: _0x474960
            };
          }
          return _0xaa1bd2;
        }
      }, {
        offset: Number.NEGATIVE_INFINITY,
        element: null
      }).element;
    }
    _0x409d08 && (_0x409d08.addEventListener("mousedown", _0x5059b8 => {
      const _0x185967 = _0x5059b8.target && _0x5059b8.target.closest ? _0x5059b8.target.closest(".ee-drag-handle") : null;
      if (!_0x185967) {
        return;
      }
      const _0x4681e9 = _0x185967.closest(".ee-reorder-item");
      if (!_0x4681e9) {
        return;
      }
      _0x5708f4 = true;
      _0x4dfda0 = _0x4681e9.dataset.id || "";
    }), document.addEventListener("mouseup", () => {
      _0x5708f4 = false;
      _0x4dfda0 = "";
    }, {
      capture: true
    }), _0x409d08.addEventListener("dragstart", _0x523082 => {
      const _0x1b168d = _0x523082.target && _0x523082.target.closest ? _0x523082.target.closest(".ee-reorder-item") : null;
      if (!_0x1b168d) {
        return;
      }
      if (!_0x5708f4 || _0x4dfda0 && _0x1b168d.dataset.id !== _0x4dfda0) {
        try {
          _0x523082.preventDefault();
        } catch (_0x1655f9) {}
        return;
      }
      _0x51b60c = _0x1b168d;
      _0x1b168d.classList.add("dragging");
      try {
        _0x523082.dataTransfer.effectAllowed = "move";
      } catch (_0x3fd691) {}
    }), _0x409d08.addEventListener("dragend", () => {
      if (_0x51b60c) {
        _0x51b60c.classList.remove("dragging");
      }
      _0x51b60c = null;
      _0x5708f4 = false;
      _0x4dfda0 = "";
    }), _0x409d08.addEventListener("dragover", _0x338595 => {
      if (!_0x51b60c) {
        return;
      }
      _0x338595.preventDefault();
      const _0xf1335c = _0x82d7eb(_0x409d08, _0x338595.clientY);
      if (!_0xf1335c) {
        _0x409d08.appendChild(_0x51b60c);
      } else {
        _0x409d08.insertBefore(_0x51b60c, _0xf1335c);
      }
    }), _0x409d08.addEventListener("click", _0x22693e => {
      const _0x3b4d08 = _0x22693e.target && _0x22693e.target.closest ? _0x22693e.target.closest(".ee-detail-copy") : null;
      if (_0x3b4d08) {
        {
          _0x22693e.preventDefault();
          _0x22693e.stopPropagation();
          const _0x571fa7 = _0x3b4d08.closest(".ee-reorder-item");
          if (!_0x571fa7) {
            return;
          }
          const _0x1e157f = _0x3b4d08.getAttribute("data-copy");
          const _0x933ada = _0x1e157f === "resp" ? _0x571fa7.querySelector(".ee-detail-pre-resp") && _0x571fa7.querySelector(".ee-detail-pre-resp").textContent || "" : _0x571fa7.querySelector(".ee-detail-pre-req") && _0x571fa7.querySelector(".ee-detail-pre-req").textContent || "";
          _0x3f2596(_0x933ada || "").then(() => _0x3212e3(_0x3b4d08, _0x850dc("copied") || "Copied", 900)).catch(() => _0x3212e3(_0x3b4d08, _0x850dc("copyFailed") || "Copy failed", 900));
          return;
        }
      }
      if (_0x22693e.target && _0x22693e.target.closest && _0x22693e.target.closest(".ee-drag-handle")) {
        return;
      }
      if (_0x22693e.target && _0x22693e.target.closest && _0x22693e.target.closest(".ee-item-detail")) {
        return;
      }
      if (!(_0x22693e.target && _0x22693e.target.closest && _0x22693e.target.closest(".ee-item-main"))) {
        return;
      }
      const _0x1a7ff6 = _0x22693e.target && _0x22693e.target.closest ? _0x22693e.target.closest(".ee-reorder-item") : null;
      if (!_0x1a7ff6) {
        return;
      }
      const _0x45cec9 = _0x1a7ff6.querySelector(".ee-item-detail");
      if (!_0x45cec9) {
        return;
      }
      const _0x1dbbff = !_0x45cec9.hasAttribute("hidden");
      if (_0x1dbbff) {
        _0x45cec9.setAttribute("hidden", "");
        _0x1a7ff6.classList.remove("expanded");
      } else {
        {
          _0x45cec9.removeAttribute("hidden");
          _0x1a7ff6.classList.add("expanded");
        }
      }
    }));
    _0x5a7288.innerHTML = "";
    _0x5a7288.appendChild(_0x4c7303);
    if (!document.getElementById("eeReplayOrderCss")) {
      const _0xa9a72a = document.createElement("link");
      _0xa9a72a.id = "eeReplayOrderCss";
      _0xa9a72a.rel = "stylesheet";
      _0xa9a72a.href = _0x4b6be4.runtime.getURL("src/sidepanel/replay-order.css");
      document.head.appendChild(_0xa9a72a);
    }
    _0x46ea0e.classList.remove("hidden");
    _0x46ea0e.setAttribute("aria-hidden", "false");
    return new Promise(_0x540bda => {
      {
        _0x4ee9a5 = _0x2304de => _0x540bda(_0x2304de);
        _0x23f911 = _0x2bc339 => _0x540bda(null);
        setTimeout(() => {
          {
            try {
              {
                (_0x409d08 || _0x52a1e2).focus && (_0x409d08 || _0x52a1e2).focus();
              }
            } catch (_0x33bd38) {}
          }
        }, 0);
        const _0xc8566a = _0xcf3dc4 => {
          try {
            if (_0xcf3dc4 && typeof _0xcf3dc4.preventDefault === "function") {
              _0xcf3dc4.preventDefault();
            }
            if (_0xcf3dc4 && typeof _0xcf3dc4.stopImmediatePropagation === "function") {
              _0xcf3dc4.stopImmediatePropagation();
            }
          } catch (_0x17f6e1) {}
          try {
            const _0x1aaa73 = Array.from(_0x409d08.querySelectorAll(".ee-reorder-item")).map(_0x55d72c => _0x55d72c.dataset.id).filter(Boolean);
            _0x540bda(_0x1aaa73);
          } catch (_0x4f0677) {
            _0x540bda(_0x461d8c);
          }
          try {
            _0x52a1e2.removeEventListener("click", _0xc8566a);
          } catch (_0x536e4d) {}
          _0x2f6ad3();
        };
        try {
          _0x52a1e2.addEventListener("click", _0xc8566a, {
            once: true,
            capture: true
          });
        } catch (_0x143524) {}
      }
    });
  }
  _0x46ea0e && _0x46ea0e.addEventListener("click", _0x4972f0 => {
    {
      if (_0x4972f0.target && _0x4972f0.target.classList && _0x4972f0.target.classList.contains("ee-modal-backdrop")) {
        if (_0x23f911) {
          _0x23f911(new Error("dismissed"));
        }
        _0x2f6ad3();
      }
    }
  });
  if (_0x52a1e2) {
    _0x52a1e2.addEventListener("click", () => {
      const _0x25f993 = _0x4a56f7 && !_0x4a56f7.classList.contains("hidden") ? _0x4a56f7.value : true;
      if (_0x4ee9a5) {
        _0x4ee9a5(_0x25f993);
      }
      _0x2f6ad3();
    });
  }
  if (_0xb4c151) {
    _0xb4c151.addEventListener("click", () => {
      if (_0x4ee9a5) {
        _0x4ee9a5(null);
      }
      _0x2f6ad3();
    });
  }
  document.addEventListener("keydown", _0x2d3c7b => {
    if (!_0x46ea0e || _0x46ea0e.classList.contains("hidden")) {
      return;
    }
    if (_0x2d3c7b.key === "Escape") {
      _0x2d3c7b.preventDefault();
      if (_0x4ee9a5) {
        _0x4ee9a5(null);
      }
      _0x2f6ad3();
    } else {
      if (_0x2d3c7b.key === "Enter") {
        if (_0x4a56f7 && !_0x4a56f7.classList.contains("hidden")) {
          _0x2d3c7b.preventDefault();
          if (_0x4ee9a5) {
            _0x4ee9a5(_0x4a56f7.value);
          }
          _0x2f6ad3();
        }
      }
    }
  });
  function _0x5c0fca(_0x5efcfc) {
    const _0x379d51 = _0x5efcfc === "en" ? "en" : "zh_CN";
    _0x3c9cec = _0x5efcfc === "en" ? "en" : "zh_CN";
    try {
      document.documentElement.setAttribute("data-lang", _0x3c9cec);
    } catch (_0x1a5ad4) {}
    const _0x21b715 = _0x4b6be4.runtime.getURL("_locales/" + _0x379d51 + "/messages.json");
    return fetch(_0x21b715).then(_0x19d01c => _0x19d01c.json()).then(_0x13f1bb => {
      const _0x229781 = {};
      Object.keys(_0x13f1bb || {}).forEach(_0x522a4f => {
        _0x229781[_0x522a4f] = _0x13f1bb[_0x522a4f] && _0x13f1bb[_0x522a4f].message ? _0x13f1bb[_0x522a4f].message : _0x522a4f;
      });
      _0x4ec493 = _0x229781;
    }).catch(() => {
      _0x4ec493 = {};
    });
  }
  function _0x4a6633() {
    {
      document.querySelectorAll("[data-i18n]").forEach(_0x501cf3 => {
        const _0x351ad0 = _0x850dc(_0x501cf3.getAttribute("data-i18n"));
        if (_0x501cf3.textContent !== undefined) {
          _0x501cf3.textContent = _0x351ad0;
        }
      });
      document.querySelectorAll("[data-i18n-ph]").forEach(_0xb59216 => {
        _0xb59216.placeholder = _0x850dc(_0xb59216.getAttribute("data-i18n-ph"));
      });
      document.querySelectorAll("[data-i18n-title]").forEach(_0x14892a => {
        const _0x10e25f = _0x850dc(_0x14892a.getAttribute("data-i18n-title"));
        if (_0x10e25f != null) {
          _0x14892a.setAttribute("title", _0x10e25f);
        }
      });
      document.querySelectorAll("[data-i18n-aria-label]").forEach(_0x368f7f => {
        const _0x4acfb4 = _0x850dc(_0x368f7f.getAttribute("data-i18n-aria-label"));
        if (_0x4acfb4 != null) {
          _0x368f7f.setAttribute("aria-label", _0x4acfb4);
        }
      });
      document.querySelectorAll("[data-i18n-label]").forEach(_0x15bf87 => {
        const _0xa0ea82 = _0x850dc(_0x15bf87.getAttribute("data-i18n-label"));
        if (_0xa0ea82 != null) {
          _0x15bf87.setAttribute("label", _0xa0ea82);
        }
      });
      try {
        if (typeof _0x22ff2d === "function") {
          _0x22ff2d();
        }
      } catch (_0x3e033e) {}
      try {
        {
          if (_0xe1460a) {
            document.title = _0x850dc("standalonePageTitle");
          }
        }
      } catch (_0x58bfdd) {}
    }
  }
  _0x42e4eb();
  const _0xe1460a = (() => {
    try {
      return new URLSearchParams(location.search || "").get("standalone") === "1";
    } catch (_0x2e9a4c) {
      return false;
    }
  })();
  try {
    if (_0xe1460a) {
      document.documentElement.classList.add("ee-standalone");
    }
  } catch (_0x1b7b5e) {}
  const _0xebda08 = typeof HAWK_EYE_CONSTANTS !== "undefined" ? HAWK_EYE_CONSTANTS : {
    MESSAGE: {}
  };
  _0x4b6be4.runtime.sendMessage({
    type: _0xebda08.MESSAGE.BADGE_RESET || "BADGE_RESET"
  });
  function _0x723e05(_0x4950c5) {
    {
      if (_0xe1460a) {
        return;
      }
      try {
        const _0x51f8f6 = _0xebda08.MESSAGE.SIDEPANEL_VISIBILITY || "SIDEPANEL_VISIBILITY";
        _0x4b6be4.windows && _0x4b6be4.windows.getCurrent ? _0x4b6be4.windows.getCurrent(_0x34cccd => {
          const _0x55f6e4 = _0x34cccd && _0x34cccd.id != null ? _0x34cccd.id : undefined;
          _0x4b6be4.runtime.sendMessage({
            type: _0x51f8f6,
            visible: _0x4950c5,
            windowId: _0x55f6e4
          });
        }) : _0x4b6be4.runtime.sendMessage({
          type: _0x51f8f6,
          visible: _0x4950c5
        });
      } catch (_0x5e97f0) {}
    }
  }
  try {
    {
      if (!_0xe1460a) {
        _0x723e05(true);
      }
    }
  } catch (_0xd6d13a) {}
  _0x4b6be4.runtime.onMessage.addListener(_0xe63ec0 => {
    if (_0xe63ec0 && _0xe63ec0.type === (_0xebda08.MESSAGE.CLOSE_SIDEPANEL || "CLOSE_SIDEPANEL")) {
      {
        try {
          window.close();
        } catch (_0x376998) {}
        return;
      }
    }
    if (_0xe63ec0 && _0xe63ec0.type === (_0xebda08.MESSAGE.SIDEPANEL_DATA_CHANGED || "SIDEPANEL_DATA_CHANGED")) {
      const _0x3688ba = String(_0xe63ec0.reason || "");
      if (_0x3688ba === "intercept_released" || _0x3688ba === "intercept_dropped") {
        _0x14eb9c("intercept");
        return;
      }
      if (_0x3688ba === "record_deleted") {
        _0x14eb9c(_0x3a0472 === "history" ? "history" : "intercept");
        return;
      }
      _0x3e0206();
    }
  });
  window.addEventListener("beforeunload", () => {
    _0x723e05(false);
  });
  window.addEventListener("pagehide", _0x59c699 => {
    if (_0x59c699.persisted) {
      return;
    }
    _0x723e05(false);
  });
  const _0x45bd18 = document.getElementById("recordList");
  const _0x19dac0 = document.getElementById("emptyState");
  const _0x51e2aa = document.getElementById("searchInput");
  const _0x135714 = document.getElementById("clearBtn");
  const _0xa5818e = document.getElementById("batchActions");
  const _0x352d91 = document.getElementById("selectedSummary");
  const _0x378bec = document.getElementById("batchMoreBtn");
  const _0x12b6e1 = document.getElementById("batchOpsMenu");
  const _0x33f4e8 = document.getElementById("selectAllCheckbox");
  const _0xb5ab8e = document.getElementById("batchExportBtn");
  const _0x531db7 = document.getElementById("batchDeleteBtn");
  const _0x48c42a = document.getElementById("batchAiBtn");
  const _0x47c42f = document.getElementById("batchDarkLinkBtn");
  const _0x4b2878 = document.getElementById("batchReplayBtn");
  const _0x1655e8 = document.getElementById("interceptReleaseAllBtn");
  const _0xb86fc2 = document.getElementById("interceptDropAllBtn");
  const _0x30a66a = document.getElementById("filterTabs");
  const _0x3b3dbf = document.getElementById("hostFilter");
  const _0x61a31c = document.getElementById("methodFilter");
  const _0x5220db = document.getElementById("statusFilter");
  const _0x29f48f = document.getElementById("sensitiveFilterWrap");
  const _0x15a85a = document.getElementById("sensitiveFilter");
  const _0x5d5c4b = document.getElementById("scopeToggle");
  const _0x12a1dc = document.getElementById("sortSelect");
  const _0x57e6c9 = document.getElementById("refreshBtn");
  const _0x33f2bd = document.getElementById("refreshPageBtn");
  const _0x5bc7b3 = document.getElementById("fullscreenBtn");
  const _0x52bd48 = document.getElementById("viewTabs");
  const _0x3a3237 = document.getElementById("interceptWrap");
  const _0x167354 = document.getElementById("interceptEmpty");
  const _0xd7a0ab = document.getElementById("interceptList");
  const _0x52cf77 = document.getElementById("interceptToggleRow");
  const _0x48f941 = document.getElementById("interceptToggle");
  const _0x3d608c = document.getElementById("proxyFilterPanel");
  const _0x148c89 = document.getElementById("proxyFilterToggle");
  const _0x28196b = document.getElementById("proxyFilterUpstreamInput");
  const _0x14004 = document.getElementById("proxyFilterSyncBtn");
  const _0x3b9aa8 = document.getElementById("proxyFilterRulesInput");
  const _0x4e7739 = document.getElementById("proxyFilterStatus");
  const _0x1898fa = document.getElementById("replayModal");
  const _0x47d2d8 = document.getElementById("replayModalClose");
  const _0x1073d3 = document.getElementById("replayRequestEditor");
  const _0x39c18b = document.getElementById("replayResponseViewer");
  const _0xfcb094 = document.getElementById("replayRespStatus");
  const _0x563c89 = document.getElementById("replayRespStatusBar");
  const _0x47f045 = document.getElementById("replayReqStatusBar");
  const _0x3d8a13 = document.getElementById("replayHistoryTabs");
  const _0x12d68c = document.getElementById("replaySendBtn");
  const _0x24f815 = document.getElementById("replayDomBtn");
  const _0x3819bb = document.getElementById("replayAiGenBtn");
  const _0x75e3bc = document.getElementById("replayAiClearBtn");
  const _0x1cb8b2 = document.getElementById("replayCloneTabBtn");
  const _0x3ed608 = document.getElementById("replayToggleMethodBtn");
  const _0x216123 = document.getElementById("replayFuzzToggleBtn");
  const _0x2f943c = document.getElementById("replayFuzzModal");
  const _0xc43b1f = document.getElementById("replayFuzzModalClose");
  const _0x2b9f36 = {
    replay: null,
    fuzz: null
  };
  const _0x465916 = document.getElementById("replayFuzzPanel");
  const _0x353b32 = document.getElementById("fuzzAddMarkerBtn");
  const _0x2ca848 = document.getElementById("fuzzStartBtn");
  const _0x1a4598 = document.getElementById("fuzzDomBtn");
  const _0x1779e1 = document.getElementById("fuzzStopBtn");
  const _0x9cf3cc = document.getElementById("fuzzResetBtn");
  const _0x889ae9 = document.getElementById("fuzzAiPayloadBtn");
  const _0x489be6 = document.getElementById("fuzzPayloadInput");
  const _0x10a231 = document.getElementById("fuzzResultTbody");
  const _0xc41ff8 = document.getElementById("fuzzDetailRequest");
  const _0x3025ed = document.getElementById("fuzzDetailResponse");
  const _0x2896ab = document.getElementById("fuzzPayloadCount");
  const _0x22bbed = document.getElementById("fuzzCopyRequest");
  const _0x26650f = document.getElementById("fuzzCopyResponse");
  const _0x12823c = document.getElementById("microFuzzConcurrency");
  const _0x5b808c = document.getElementById("microFuzzThrottleMs");
  const _0x58d8c2 = document.getElementById("replayCopyRequest");
  const _0x57c129 = document.getElementById("replayCopyResponse");
  const _0x45957b = document.getElementById("cryptoEncodeTrigger");
  const _0xa7cbc = document.getElementById("cryptoEncodeScope");
  const _0x487a10 = document.getElementById("replayUndoBtn");
  const _0x311d1c = document.getElementById("replayRedoBtn");
  const _0x4dfdbb = document.getElementById("replayTargetPill");
  const _0x144e2e = document.getElementById("replayTargetText");
  const _0x4528b0 = document.getElementById("replayTargetEditBtn");
  let _0x5af9fa = false;
  let _0x170fd0 = [];
  let _0x373eb9 = null;
  let _0x12c10d = "asc";
  let _0x6a6200 = false;
  let _0x83370e = "disabled";
  let _0x171509 = "";
  let _0x516e9b = "";
  let _0x4f896d = null;
  let _0x59b777 = true;
  let _0x2503e9 = "./\\=<>?+&:;\"'{}|\\^#";
  let _0x5bc376 = 3;
  let _0x59da29 = 0;
  let _0x110290 = false;
  let _0x4aa589 = null;
  let _0x4dd67a = null;
  let _0x13d260 = null;
  const _0x450193 = new WeakMap();
  function _0x375449(_0x21b143) {
    if (!_0x21b143) {
      return null;
    }
    const _0x2294ef = Math.max(0, Number(_0x21b143.start || 0));
    const _0x13d984 = Math.max(_0x2294ef, Number(_0x21b143.end == null ? _0x2294ef : _0x21b143.end));
    return {
      start: _0x2294ef,
      end: _0x13d984
    };
  }
  function _0x447463(_0x536a98, _0x20ab0b) {
    {
      if (!_0x536a98) {
        return;
      }
      if (!_0x20ab0b || !_0x20ab0b.range) {
        {
          _0x450193.delete(_0x536a98);
          return;
        }
      }
      _0x450193.set(_0x536a98, {
        range: _0x375449(_0x20ab0b.range)
      });
    }
  }
  function _0x529f19(_0x3d61b1) {
    {
      if (!_0x3d61b1) {
        return null;
      }
      const _0x223dc4 = _0x450193.get(_0x3d61b1);
      if (!_0x223dc4 || !_0x223dc4.range) {
        return null;
      }
      return {
        range: _0x375449(_0x223dc4.range)
      };
    }
  }
  const _0xfc7663 = [{
    key: "community",
    labelKey: "cryptoEncodeSectionCommunity",
    fallbackLabel: "社区版基础功能",
    groups: [{
      key: "community_encrypt",
      labelKey: "cryptoEncodeGroupEncrypt",
      fallbackLabel: "加密"
    }, {
      key: "community_codec",
      labelKey: "cryptoEncodeGroupCodec",
      fallbackLabel: "编码 / 解码"
    }]
  }, {
    key: "pro",
    labelKey: "cryptoEncodeSectionPro",
    fallbackLabel: "专业版高级功能",
    groups: [{
      key: "pro_hash",
      labelKey: "cryptoEncodeGroupHash",
      fallbackLabel: "摘要 / 哈希"
    }, {
      key: "pro_codec",
      labelKey: "cryptoEncodeGroupProCodec",
      fallbackLabel: "编码 / 解码"
    }, {
      key: "pro_data",
      labelKey: "cryptoEncodeGroupData",
      fallbackLabel: "数据处理"
    }]
  }];
  const _0x5aa741 = [{
    key: "md5",
    label: "MD5",
    section: "community",
    group: "community_encrypt",
    scopes: ["selection", "params", "url"],
    tooltipKey: "codecTipMd5",
    fallbackTooltip: "生成当前文本的 MD5 摘要（小写十六进制）。"
  }, {
    key: "sm3",
    label: "SM3",
    section: "community",
    group: "community_encrypt",
    scopes: ["selection", "params", "url"],
    tooltipKey: "codecTipSm3",
    fallbackTooltip: "生成当前文本的 SM3 摘要，适合国密场景。"
  }, {
    key: "sha1",
    label: "SHA-1",
    section: "community",
    group: "community_encrypt",
    scopes: ["selection", "params", "url"],
    tooltipKey: "codecTipSha1",
    fallbackTooltip: "生成当前文本的 SHA-1 摘要（小写十六进制）。"
  }, {
    key: "sha256",
    label: "SHA-256",
    section: "community",
    group: "community_encrypt",
    scopes: ["selection", "params", "url"],
    tooltipKey: "codecTipSha256",
    fallbackTooltip: "生成当前文本的 SHA-256 摘要（小写十六进制）。"
  }, {
    key: "rot13",
    label: "ROT13",
    section: "community",
    group: "community_encrypt",
    scopes: ["selection", "params", "url"],
    tooltipKey: "codecTipRot13",
    fallbackTooltip: "对英文字母做 ROT13 变换，非字母字符保持不变。"
  }, {
    key: "b32enc",
    labelKey: "cryptoEncodeOptBase32Enc",
    fallbackLabel: "Base32 编码",
    section: "community",
    group: "community_codec",
    scopes: ["selection", "params", "url"],
    tooltipKey: "codecTipBase32Enc",
    fallbackTooltip: "将当前文本编码为 Base32，适合密钥与令牌等文本传输场景。"
  }, {
    key: "b32dec",
    labelKey: "cryptoEncodeOptBase32Dec",
    fallbackLabel: "Base32 解码",
    section: "community",
    group: "community_codec",
    scopes: ["selection", "params", "url"],
    tooltipKey: "codecTipBase32Dec",
    fallbackTooltip: "将 Base32 内容还原为普通文本，输入不合法时会给出提示。"
  }, {
    key: "b64enc",
    labelKey: "cryptoEncodeOptBase64Enc",
    fallbackLabel: "Base64 编码",
    section: "community",
    group: "community_codec",
    scopes: ["selection", "params", "url"],
    tooltipKey: "codecTipBase64Enc",
    fallbackTooltip: "将当前文本编码为 Base64。"
  }, {
    key: "b64dec",
    labelKey: "cryptoEncodeOptBase64Dec",
    fallbackLabel: "Base64 解码",
    section: "community",
    group: "community_codec",
    scopes: ["selection", "params", "url"],
    tooltipKey: "codecTipBase64Dec",
    fallbackTooltip: "将 Base64 内容还原为普通文本，输入不合法时会给出提示。"
  }, {
    key: "urlenc",
    labelKey: "cryptoEncodeOptUrlEnc",
    fallbackLabel: "URL 编码",
    section: "community",
    group: "community_codec",
    scopes: ["selection", "params", "url"],
    tooltipKey: "codecTipUrlEnc",
    fallbackTooltip: "按 URL 组件编码规则转义当前内容。"
  }, {
    key: "urldec",
    labelKey: "cryptoEncodeOptUrlDec",
    fallbackLabel: "URL 解码",
    section: "community",
    group: "community_codec",
    scopes: ["selection", "params", "url"],
    tooltipKey: "codecTipUrlDec",
    fallbackTooltip: "还原已编码的 URL 内容，输入不合法时会给出提示。"
  }, {
    key: "hexenc",
    labelKey: "cryptoEncodeOptHexEnc",
    fallbackLabel: "Hex 编码",
    section: "community",
    group: "community_codec",
    scopes: ["selection", "params", "url"],
    tooltipKey: "codecTipHexEnc",
    fallbackTooltip: "将当前文本编码为十六进制字符串。"
  }, {
    key: "hexdec",
    labelKey: "cryptoEncodeOptHexDec",
    fallbackLabel: "Hex 解码",
    section: "community",
    group: "community_codec",
    scopes: ["selection", "params", "url"],
    tooltipKey: "codecTipHexDec",
    fallbackTooltip: "将十六进制字符串还原为普通文本，输入不合法时会给出提示。"
  }, {
    key: "sha512",
    label: "SHA-512",
    section: "pro",
    group: "pro_hash",
    requiresPro: true,
    scopes: ["selection", "params", "url"],
    tooltipKey: "codecProTipSha512",
    fallbackTooltip: "更高强度的摘要算法，适合更完整的签名与校验场景。"
  }, {
    key: "hmacsha256",
    label: "HMAC-SHA256",
    section: "pro",
    group: "pro_hash",
    requiresPro: true,
    scopes: ["selection", "params", "url"],
    tooltipKey: "codecProTipHmacSha256",
    fallbackTooltip: "基于密钥生成摘要，适合接口签名与校验。"
  }, {
    key: "b64urlenc",
    labelKey: "cryptoEncodeOptBase64UrlEnc",
    fallbackLabel: "Base64URL 编码",
    section: "pro",
    group: "pro_codec",
    requiresPro: true,
    scopes: ["selection", "params", "url"],
    tooltipKey: "codecProTipBase64UrlEnc",
    fallbackTooltip: "适用于 JWT 和 URL-safe 场景的 Base64 变体。"
  }, {
    key: "b64urldec",
    labelKey: "cryptoEncodeOptBase64UrlDec",
    fallbackLabel: "Base64URL 解码",
    section: "pro",
    group: "pro_codec",
    requiresPro: true,
    scopes: ["selection", "params", "url"],
    tooltipKey: "codecProTipBase64UrlDec",
    fallbackTooltip: "解析 JWT 等常见 URL-safe Base64 内容。"
  }, {
    key: "unicodeenc",
    labelKey: "cryptoEncodeOptUnicodeEnc",
    fallbackLabel: "Unicode 编码",
    section: "pro",
    group: "pro_codec",
    requiresPro: true,
    scopes: ["selection", "params", "url"],
    tooltipKey: "codecProTipUnicodeEnc",
    fallbackTooltip: "将文本转换为 \\\\uXXXX 形式。"
  }, {
    key: "unicodedec",
    labelKey: "cryptoEncodeOptUnicodeDec",
    fallbackLabel: "Unicode 解码",
    section: "pro",
    group: "pro_codec",
    requiresPro: true,
    scopes: ["selection", "params", "url"],
    tooltipKey: "codecProTipUnicodeDec",
    fallbackTooltip: "解析 \\\\uXXXX 形式文本。"
  }, {
    key: "htmlenc",
    labelKey: "cryptoEncodeOptHtmlEnc",
    fallbackLabel: "HTML 编码",
    section: "pro",
    group: "pro_codec",
    requiresPro: true,
    scopes: ["selection", "params", "url"],
    tooltipKey: "codecProTipHtmlEnc",
    fallbackTooltip: "对 HTML 特殊字符进行转义。"
  }, {
    key: "htmldec",
    labelKey: "cryptoEncodeOptHtmlDec",
    fallbackLabel: "HTML 解码",
    section: "pro",
    group: "pro_codec",
    requiresPro: true,
    scopes: ["selection", "params", "url"],
    tooltipKey: "codecProTipHtmlDec",
    fallbackTooltip: "将 HTML 实体还原为普通文本。"
  }, {
    key: "jsonpretty",
    labelKey: "cryptoEncodeOptJsonPretty",
    fallbackLabel: "JSON 格式化",
    section: "pro",
    group: "pro_data",
    requiresPro: true,
    scopes: ["selection", "params"],
    tooltipKey: "codecProTipJsonPretty",
    fallbackTooltip: "把 JSON 结构整理为易读格式。"
  }, {
    key: "jsoncompact",
    labelKey: "cryptoEncodeOptJsonCompact",
    fallbackLabel: "JSON 压缩",
    section: "pro",
    group: "pro_data",
    requiresPro: true,
    scopes: ["selection", "params"],
    tooltipKey: "codecProTipJsonCompact",
    fallbackTooltip: "将 JSON 压缩为单行内容。"
  }, {
    key: "jsonescape",
    labelKey: "cryptoEncodeOptJsonEscape",
    fallbackLabel: "JSON 转义",
    section: "pro",
    group: "pro_data",
    requiresPro: true,
    scopes: ["selection", "params"],
    tooltipKey: "codecProTipJsonEscape",
    fallbackTooltip: "将文本转成 JSON 字符串安全格式。"
  }, {
    key: "jsonunescape",
    labelKey: "cryptoEncodeOptJsonUnescape",
    fallbackLabel: "JSON 反转义",
    section: "pro",
    group: "pro_data",
    requiresPro: true,
    scopes: ["selection", "params"],
    tooltipKey: "codecProTipJsonUnescape",
    fallbackTooltip: "还原 JSON 字符串中的转义内容。"
  }, {
    key: "jwtparse",
    labelKey: "cryptoEncodeOptJwtParse",
    fallbackLabel: "JWT 解析",
    section: "pro",
    group: "pro_data",
    requiresPro: true,
    scopes: ["selection", "params"],
    tooltipKey: "codecProTipJwtParse",
    fallbackTooltip: "解析 token 的 header、payload 和 signature。"
  }, {
    key: "tsconvert",
    labelKey: "cryptoEncodeOptTimestampConvert",
    fallbackLabel: "时间戳转换",
    section: "pro",
    group: "pro_data",
    requiresPro: true,
    scopes: ["selection", "params"],
    tooltipKey: "codecProTipTimestampConvert",
    fallbackTooltip: "在时间戳与可读时间之间快速转换。"
  }, {
    key: "ai_logic_guess",
    labelKey: "cryptoEncodeOptAiLogicGuess",
    fallbackLabel: "加密逻辑智能分析",
    section: "pro",
    group: "pro_data",
    requiresPro: true,
    scopes: ["selection", "params", "url"],
    tooltipKey: "codecProTipAiLogicGuess",
    fallbackTooltip: "结合字段形态、请求上下文与同页 JS/HTML 线索，分析可能的编码、摘要、签名或加密链路。"
  }];
  const _0xa85f4b = Object.create(null);
  _0x5aa741.forEach(_0x203872 => {
    _0xa85f4b[_0x203872.key] = _0x203872;
  });
  function _0x9bd96d() {
    if (!_0x353b32 || !_0x1073d3) {
      return;
    }
    const _0x32f4f7 = _0x307492(_0x1073d3) || "";
    const _0x55aab4 = (_0x32f4f7.match(/§/g) || []).length;
    const _0x26d2d4 = _0x55aab4 >= 2;
    _0x353b32.textContent = _0x26d2d4 ? _0x850dc("microFuzzClearInjection") || "Clear injection mark (§)" : _0x850dc("microFuzzMarkInjection") || "Mark injection point (§)";
    _0x353b32.classList.toggle("fuzz-injection-clear-mode", _0x26d2d4);
  }
  function _0x2545e1(_0x40e4bd) {
    const _0x17401e = _0x40e4bd && Number(_0x40e4bd.uiColUrlW);
    Number.isFinite(_0x17401e) && _0x17401e >= 160 && _0x17401e <= 720 && document.documentElement.style.setProperty("--col-url-w", String(Math.round(_0x17401e)) + "px");
  }
  function _0x331035() {
    const _0x407335 = Array.from(document.querySelectorAll(".col-resizer[data-col=\"url\"]"));
    if (!_0x407335.length) {
      return;
    }
    _0x407335.forEach(_0x4c5467 => {
      _0x4c5467.addEventListener("mousedown", _0x41524d => {
        _0x41524d.preventDefault();
        _0x41524d.stopPropagation();
        const _0x405efa = _0x41524d.clientX;
        const _0x50836e = getComputedStyle(document.documentElement);
        const _0x51ea87 = parseFloat(_0x50836e.getPropertyValue("--col-url-w")) || 240;
        function _0x4fb79d(_0x3e63a7) {
          {
            const _0x216e6f = _0x3e63a7.clientX - _0x405efa;
            const _0x155b2c = Math.max(160, Math.min(720, Math.round(_0x51ea87 + _0x216e6f)));
            document.documentElement.style.setProperty("--col-url-w", _0x155b2c + "px");
          }
        }
        function _0x3b2c3c(_0x3c43d6) {
          {
            document.removeEventListener("mousemove", _0x4fb79d, true);
            document.removeEventListener("mouseup", _0x3b2c3c, true);
            const _0x45efd4 = getComputedStyle(document.documentElement);
            const _0x46a92e = parseFloat(_0x45efd4.getPropertyValue("--col-url-w")) || 240;
            try {
              _0x4b6be4.storage.local.set({
                uiColUrlW: Math.round(_0x46a92e)
              });
            } catch (_0x4c7540) {}
            _0x2e6a95();
          }
        }
        document.addEventListener("mousemove", _0x4fb79d, true);
        document.addEventListener("mouseup", _0x3b2c3c, true);
      });
    });
  }
  function _0x192fa2() {
    const _0x2a1f71 = document.getElementById("listWrap");
    if (_0x3a0472 === "history") {
      return _0x2a1f71;
    }
    const _0x300b17 = document.getElementById("interceptWrap");
    return _0x300b17 || _0x2a1f71;
  }
  function _0x3917b0(_0x18fe0d) {
    const _0x4777bc = [];
    function _0x4c88cc(_0x3bb401) {
      const _0x556d20 = Math.floor(Number(_0x3bb401) || 0);
      if (_0x556d20 > 0) {
        _0x4777bc.push(_0x556d20);
      }
    }
    try {
      {
        _0x18fe0d && _0x18fe0d.getBoundingClientRect && _0x4c88cc(_0x18fe0d.getBoundingClientRect().width);
      }
    } catch (_0x499e61) {}
    try {
      _0x4c88cc(_0x18fe0d && _0x18fe0d.clientWidth);
    } catch (_0x94995a) {}
    try {
      _0x4c88cc(document.documentElement.getBoundingClientRect().width);
    } catch (_0x546c56) {}
    try {
      _0x4c88cc(document.documentElement.clientWidth);
    } catch (_0x12c30b) {}
    try {
      _0x4c88cc(document.body && document.body.clientWidth);
    } catch (_0x4e9c41) {}
    try {
      _0x4c88cc(window.innerWidth);
    } catch (_0x3aece7) {}
    if (!_0x4777bc.length) {
      return 0;
    }
    return Math.min.apply(null, _0x4777bc);
  }
  function _0xd0b162(_0x215d10, _0x56cc28, _0x2ce1a5) {
    if (!_0x215d10 || !_0x56cc28) {
      return;
    }
    const _0x1663a5 = _0x215d10.querySelector(".detail-inline-columns");
    const _0x48eb22 = _0x215d10.querySelector(".detail-inline-left");
    const _0x304134 = _0x215d10.querySelector(".detail-inline-right");
    const _0x1b25f4 = _0x215d10.querySelector(".detail-inline-divider");
    const _0x274964 = _0x215d10.querySelector(".inline-hit-summary");
    const _0xec8d57 = _0x215d10.querySelector(".detail-inline-actions");
    if (!_0x1663a5 || !_0x48eb22 || !_0x304134 || !_0x1b25f4) {
      return;
    }
    const _0xa7cdf3 = window.getComputedStyle(_0x215d10);
    const _0x28d699 = parseFloat(_0xa7cdf3.paddingLeft || "0") || 0;
    const _0x3c1089 = parseFloat(_0xa7cdf3.paddingRight || "0") || 0;
    const _0xadb32e = 1;
    const _0x3103ae = _0x2ce1a5 ? 16 : 4;
    const _0x2617df = 0;
    const _0x559d71 = Math.max(0, _0x56cc28 - _0x28d699 - _0x3c1089);
    const _0x39827d = Math.max(0, _0x559d71 - _0x2617df);
    const _0x3b8bd8 = Math.max(0, Math.floor((_0x39827d - _0xadb32e - _0x3103ae * 2) / 2));
    _0x215d10.style.setProperty("--ee-inline-leading-gutter", _0x2617df + "px");
    _0x215d10.style.setProperty("--ee-inline-inner-width", _0x559d71 + "px");
    _0x215d10.style.setProperty("--ee-inline-content-width", _0x39827d + "px");
    _0x1663a5.style.setProperty("display", "grid", "important");
    _0x1663a5.style.setProperty("grid-template-columns", _0x3b8bd8 + "px " + _0xadb32e + "px " + _0x3b8bd8 + "px", "important");
    _0x1663a5.style.setProperty("align-items", "stretch", "important");
    _0x1663a5.style.setProperty("width", _0x39827d + "px", "important");
    _0x1663a5.style.setProperty("max-width", _0x39827d + "px", "important");
    _0x1663a5.style.setProperty("min-width", "0", "important");
    _0x1663a5.style.setProperty("overflow", "hidden", "important");
    _0x1663a5.style.setProperty("column-gap", _0x3103ae + "px", "important");
    _0x1663a5.style.setProperty("row-gap", "0", "important");
    _0x1663a5.style.setProperty("margin-left", _0x2617df + "px", "important");
    _0x1663a5.style.setProperty("margin-right", "0", "important");
    [_0x48eb22, _0x304134].forEach(_0x1539d9 => {
      _0x1539d9.style.flex = "0 0 auto";
      _0x1539d9.style.width = "100%";
      _0x1539d9.style.maxWidth = "100%";
      _0x1539d9.style.minWidth = "0";
      _0x1539d9.style.overflow = "hidden";
    });
    _0x1b25f4.style.flex = "0 0 1px";
    _0x1b25f4.style.width = _0xadb32e + "px";
    _0x1b25f4.style.minWidth = _0xadb32e + "px";
    _0x1b25f4.style.margin = "0";
    _0x1b25f4.style.alignSelf = "stretch";
    [_0x274964, _0xec8d57].forEach(_0x4a8518 => {
      {
        if (!_0x4a8518) {
          return;
        }
        _0x4a8518.style.width = _0x559d71 + "px";
        _0x4a8518.style.maxWidth = _0x559d71 + "px";
        _0x4a8518.style.minWidth = "0";
        _0x4a8518.style.boxSizing = "border-box";
        _0x4a8518.style.overflow = "hidden";
      }
    });
    _0x274964 && (_0x274964.style.display = _0x274964.style.display === "none" ? "none" : "flex", _0x274964.style.flexWrap = "wrap", _0x274964.style.alignItems = "flex-start", _0x274964.style.whiteSpace = "normal");
    _0xec8d57 && (_0xec8d57.style.flexWrap = "wrap", _0xec8d57.style.alignItems = "flex-start");
    _0x215d10.querySelectorAll(".detail-inline-left .pane-search-row, .detail-inline-right .pane-search-row").forEach(_0x3058f3 => {
      {
        _0x3058f3.style.setProperty("margin-top", "0", "important");
      }
    });
  }
  function _0x1b9ae5(_0x4266b9) {
    {
      if (!_0x4266b9) {
        return;
      }
      const _0x1cf6e4 = _0x192fa2();
      if (!_0x1cf6e4) {
        return;
      }
      const _0x590eff = _0x1cf6e4.querySelector(".record-header-row");
      const _0x3e7c3c = _0x1cf6e4.querySelector(".list-inner");
      const _0x4f914c = document.querySelector(".toolbar");
      const _0x46d659 = document.documentElement.classList.contains("ee-standalone");
      const _0x332987 = _0x3917b0(_0x1cf6e4);
      const _0x1c9062 = _0x1cf6e4.clientWidth || 0;
      const _0x4a1c9b = _0x4266b9.clientWidth || Math.floor(_0x4266b9.getBoundingClientRect && _0x4266b9.getBoundingClientRect().width || 0) || 0;
      let _0x5e7cff;
      _0x46d659 ? _0x5e7cff = _0x4a1c9b || _0x590eff && _0x590eff.clientWidth || _0x3e7c3c && _0x3e7c3c.clientWidth || _0x1c9062 || 0 : _0x5e7cff = _0x1c9062 || _0x332987 || _0x4f914c && _0x4f914c.clientWidth || document.documentElement.clientWidth || 0;
      if (_0x5e7cff <= 0) {
        return;
      }
      if (_0x46d659) {
        const _0x434551 = _0x4a1c9b || _0x1c9062 || 0;
        if (_0x434551 > 0) {
          _0x5e7cff = Math.min(_0x5e7cff, _0x434551);
        }
      }
      if (!_0x46d659) {
        const _0x53cfe1 = _0x1c9062 || _0x332987 || 0;
        if (_0x53cfe1 > 0) {
          _0x5e7cff = Math.min(_0x5e7cff, _0x53cfe1);
        }
      }
      if (_0x46d659) {
        _0x4266b9.style.width = "";
        _0x4266b9.style.maxWidth = "";
      } else {
        _0x4266b9.style.width = _0x5e7cff + "px";
        _0x4266b9.style.maxWidth = _0x5e7cff + "px";
        _0x4266b9.style.minWidth = "0";
        _0x4266b9.style.overflowX = "hidden";
        try {
          if (_0x1cf6e4.scrollLeft) {
            _0x1cf6e4.scrollLeft = 0;
          }
        } catch (_0x32af9e) {}
      }
      _0xd0b162(_0x4266b9, _0x5e7cff, _0x46d659);
    }
  }
  function _0x2e6a95() {
    if (!_0x24ce8b) {
      return;
    }
    const _0x379b2c = document.querySelector(".record-item[data-id=\"" + _0x24ce8b + "\"]");
    if (!_0x379b2c) {
      return;
    }
    const _0x2733c7 = _0x379b2c.querySelector(".record-detail-inline");
    if (!_0x2733c7 || _0x2733c7.style.display !== "block") {
      return;
    }
    _0x1b9ae5(_0x2733c7);
  }
  function _0x5d5247() {
    {
      if (!_0x489be6 || !_0x2896ab) {
        return;
      }
      const _0x3055f1 = String(_0x489be6.value || "");
      const _0x35b8b5 = _0x3055f1.split(/\r?\n/).filter(_0x1f8c35 => _0x1f8c35.trim() !== "").length;
      _0x2896ab.textContent = _0x850dc("microFuzzPayloadCount", String(_0x35b8b5)) || String(_0x35b8b5) + " Payloads";
    }
  }
  function _0x5f2ad2(_0x18ef00) {
    const _0x170fca = String(_0x18ef00 || "");
    const _0xa259f9 = new Set();
    for (let _0x5ef292 = 0; _0x5ef292 < _0x170fca.length; _0x5ef292++) {
      _0xa259f9.add(_0x170fca[_0x5ef292]);
    }
    return _0xa259f9;
  }
  function _0x1add2a(_0x45b210, _0x3e7340) {
    const _0x8389f2 = String(_0x45b210 == null ? "" : _0x45b210);
    if (!_0x8389f2) {
      return _0x8389f2;
    }
    if (!_0x3e7340 || !_0x3e7340.size) {
      return _0x8389f2;
    }
    let _0x501174 = "";
    for (let _0x3aaabe = 0; _0x3aaabe < _0x8389f2.length; _0x3aaabe++) {
      const _0x58da3d = _0x8389f2[_0x3aaabe];
      if (_0x3e7340.has(_0x58da3d)) {
        _0x501174 += encodeURIComponent(_0x58da3d);
      } else {
        _0x501174 += _0x58da3d;
      }
    }
    return _0x501174;
  }
  function _0x5b5767(_0xff91d6) {
    let _0x4774ae = "";
    for (let _0x24f9e = 0; _0x24f9e < _0xff91d6.length; _0x24f9e++) {
      _0x4774ae += _0xff91d6[_0x24f9e].toString(16).padStart(2, "0");
    }
    return _0x4774ae;
  }
  function _0x1d02e9(_0x2c3a81) {
    const _0x1f718c = String(_0x2c3a81 || "").trim().replace(/^0x/i, "").replace(/\s+/g, "");
    if (!_0x1f718c) {
      return new Uint8Array();
    }
    if (_0x1f718c.length % 2 !== 0) {
      throw new Error("Invalid hex length");
    }
    const _0x379daa = new Uint8Array(_0x1f718c.length / 2);
    for (let _0x467482 = 0; _0x467482 < _0x1f718c.length; _0x467482 += 2) {
      const _0x323005 = parseInt(_0x1f718c.slice(_0x467482, _0x467482 + 2), 16);
      if (!Number.isFinite(_0x323005)) {
        throw new Error("Invalid hex");
      }
      _0x379daa[_0x467482 / 2] = _0x323005;
    }
    return _0x379daa;
  }
  function _0x16d793(_0x31ba35) {
    return new TextEncoder().encode(String(_0x31ba35 == null ? "" : _0x31ba35));
  }
  function _0x35ac25(_0x55b483) {
    return new TextDecoder().decode(_0x55b483);
  }
  function _0x3edc42() {
    return true;
  }
  function _0x2aedbf() {
    return _0x39b242();
  }
  function _0x5dfb0e(_0x4d095d) {
    return Object.prototype.hasOwnProperty.call(_0xa85f4b, _0x4d095d) ? _0xa85f4b[_0x4d095d] : null;
  }
  function _0x4d19e7(_0x1e9e70, _0x3d2377) {
    if (_0x1e9e70) {
      return _0x850dc(_0x1e9e70) || _0x3d2377 || "";
    }
    return _0x3d2377 || "";
  }
  function _0x5f25b0(_0x4278a6) {
    return _0x4278a6 ? _0x4d19e7(_0x4278a6.labelKey, _0x4278a6.label || _0x4278a6.fallbackLabel || "") : "";
  }
  function _0x29af24(_0x4625b8) {
    return _0x4625b8 ? _0x4d19e7(_0x4625b8.tooltipKey, _0x4625b8.tooltip || _0x4625b8.fallbackTooltip || "") : "";
  }
  function _0x4d0b99(_0x596cfa, _0x470e42) {
    const _0x41f894 = _0x5dfb0e(_0x596cfa);
    const _0x424667 = String(_0x470e42 || "selection");
    if (!_0x41f894 || !Array.isArray(_0x41f894.scopes) || !_0x41f894.scopes.length) {
      return _0x424667 === "selection";
    }
    return _0x41f894.scopes.indexOf(_0x424667) >= 0;
  }
  function _0x5d42b0(_0x26cfcd) {
    {
      return "<button type=\"button\" class=\"crypto-encode-trigger inline-crypto-trigger\" data-side=\"" + _0x47f251(_0x26cfcd) + "\" aria-haspopup=\"menu\" aria-expanded=\"false\">" + _0x47f251(_0x850dc("cryptoEncodeLabel") || "Crypto & Encode") + "</button>";
    }
  }
  function _0x173e9b(_0x3f9465) {
    return "<select class=\"crypto-encode-scope inline-crypto-scope\" data-side=\"" + _0x47f251(_0x3f9465) + "\">" + "<option value=\"selection\">" + _0x47f251(_0x850dc("cryptoEncodeScopeSelection") || "Selection") + "</option>" + "<option value=\"params\">" + _0x47f251(_0x850dc("cryptoEncodeScopeParams") || "Param values") + "</option>" + "<option value=\"url\">" + _0x47f251(_0x850dc("cryptoEncodeScopeUrl") || "URL line") + "</option>" + "</select>";
  }
  function _0x181768() {
    if (_0x4aa589 && _0x4aa589.ownerDocument) {
      return _0x4aa589;
    }
    const _0x30b28e = document.createElement("div");
    _0x30b28e.className = "codec-menu hidden";
    _0x30b28e.setAttribute("role", "menu");
    _0x30b28e.setAttribute("aria-hidden", "true");
    _0x30b28e.addEventListener("click", _0x54464c => {
      const _0x47d6bb = _0x54464c.target && _0x54464c.target.closest ? _0x54464c.target.closest(".codec-menu__item") : null;
      if (!_0x47d6bb) {
        return;
      }
      if (_0x47d6bb.classList.contains("pro-feature-locked")) {
        {
          _0x54464c.preventDefault();
          _0x54464c.stopPropagation();
          void _0xd671d8(_0x47d6bb);
          return;
        }
      }
      const _0x1182cd = String(_0x47d6bb.getAttribute("data-codec-action") || "");
      const _0x5252eb = _0x13d260;
      _0x243c62();
      if (!_0x1182cd || !_0x5252eb) {
        return;
      }
      void _0x4bb8d2(_0x1182cd, _0x5252eb);
    });
    document.body.appendChild(_0x30b28e);
    _0x4aa589 = _0x30b28e;
    return _0x30b28e;
  }
  function _0x243c62() {
    _0x4dd67a && _0x4dd67a.setAttribute && _0x4dd67a.setAttribute("aria-expanded", "false");
    _0xdaab54();
    if (_0x4aa589) {
      {
        _0x4aa589.classList.add("hidden");
        _0x4aa589.setAttribute("aria-hidden", "true");
      }
    }
    _0x4dd67a = null;
    _0x13d260 = null;
  }
  function _0x9f97c2(_0x1ef216) {
    const _0x50e591 = _0x181768();
    if (!_0x1ef216) {
      return;
    }
    const _0x216498 = _0x1ef216.getBoundingClientRect();
    const _0x566fef = Math.min(410, Math.max(340, _0x50e591.offsetWidth || 380));
    const _0x4cf2cf = 12;
    let _0xd5b0a = _0x216498.left;
    let _0x20dc23 = _0x216498.bottom + 8;
    if (_0xd5b0a + _0x566fef + _0x4cf2cf > window.innerWidth) {
      _0xd5b0a = window.innerWidth - _0x566fef - _0x4cf2cf;
    }
    if (_0xd5b0a < _0x4cf2cf) {
      _0xd5b0a = _0x4cf2cf;
    }
    const _0x4cb006 = _0x50e591.offsetHeight || 320;
    if (_0x20dc23 + _0x4cb006 + _0x4cf2cf > window.innerHeight) {
      {
        _0x20dc23 = Math.max(_0x4cf2cf, _0x216498.top - _0x4cb006 - 8);
      }
    }
    _0x50e591.style.left = Math.round(_0xd5b0a) + "px";
    _0x50e591.style.top = Math.round(Math.max(_0x4cf2cf, _0x20dc23)) + "px";
    _0x50e591.style.width = _0x566fef + "px";
  }
  function _0x3fba74() {
    const _0x1b28bf = _0x2aedbf();
    return _0xfc7663.map(_0x1d9238 => {
      {
        const _0x13b1c1 = _0x1d9238.groups.map(_0x5070b9 => {
          {
            const _0x76b4da = _0x5aa741.filter(_0x2dd3b7 => _0x2dd3b7.section === _0x1d9238.key && _0x2dd3b7.group === _0x5070b9.key);
            if (!_0x76b4da.length) {
              return "";
            }
            const _0x5a5acf = _0x76b4da.map(_0x4419e0 => {
              const _0x5a536e = !!_0x4419e0.requiresPro && !_0x1b28bf;
              const _0x16eb48 = _0x5f25b0(_0x4419e0);
              const _0x180734 = _0x29af24(_0x4419e0);
              const _0x478e67 = ["type=\"button\"", "class=\"codec-menu__item" + (_0x4419e0.requiresPro ? " codec-menu__item--pro" : "") + (_0x5a536e ? " pro-feature-locked" : "") + "\"", "data-codec-action=\"" + _0x47f251(_0x4419e0.key) + "\"", "data-codec-tooltip=\"" + _0x47f251(_0x180734) + "\""];
              if (_0x4419e0.requiresPro) {
                _0x478e67.push("data-pro-feature=\"codec_pro\"");
                _0x478e67.push("data-pro-label=\"" + _0x47f251(_0x16eb48) + "\"");
                _0x478e67.push("data-pro-tooltip=\"" + _0x47f251(_0x180734) + "\"");
                _0x478e67.push("data-pro-description=\"" + _0x47f251(_0x180734) + "\"");
                _0x478e67.push("data-pro-lock-badge=\"PRO\"");
                _0x478e67.push("data-codec-tier=\"pro\"");
              }
              if (_0x5a536e) {
                _0x478e67.push("aria-disabled=\"true\"");
              }
              return "<button " + _0x478e67.join(" ") + ">" + "<span class=\"codec-menu__item-label\">" + _0x47f251(_0x16eb48) + "</span>" + "</button>";
            }).join("");
            return "<div class=\"codec-menu__group\"><div class=\"codec-menu__group-title\">" + _0x47f251(_0x4d19e7(_0x5070b9.labelKey, _0x5070b9.fallbackLabel)) + "</div>" + "<div class=\"codec-menu__group-items\">" + _0x5a5acf + "</div>" + "</div>";
          }
        }).join("");
        return "<section class=\"codec-menu__section codec-menu__section--" + _0x47f251(_0x1d9238.key) + "\">" + "<div class=\"codec-menu__section-title\">" + _0x47f251(_0x4d19e7(_0x1d9238.labelKey, _0x1d9238.fallbackLabel)) + "</div>" + _0x13b1c1 + "</section>";
      }
    }).join("");
  }
  function _0x244212(_0x37fe9e, _0x3ef2a5) {
    const _0x365425 = _0x181768();
    if (!_0x37fe9e) {
      return;
    }
    if (_0x4dd67a === _0x37fe9e && _0x13d260 && !_0x365425.classList.contains("hidden")) {
      _0x243c62();
      return;
    }
    const _0x1b9b3c = _0x3ef2a5 && Object.prototype.hasOwnProperty.call(_0x3ef2a5, "selectionSnapshot") ? _0x3ef2a5.selectionSnapshot : _0x529f19(_0x37fe9e);
    _0x13d260 = Object.assign({}, _0x3ef2a5 || {}, _0x1b9b3c && _0x1b9b3c.range ? {
      selectionSnapshot: {
        range: _0x375449(_0x1b9b3c.range)
      }
    } : {});
    _0x4dd67a = _0x37fe9e;
    _0x365425.innerHTML = _0x3fba74();
    _0x365425.classList.remove("hidden");
    _0x365425.setAttribute("aria-hidden", "false");
    _0x37fe9e.setAttribute("aria-expanded", "true");
    _0x9f97c2(_0x37fe9e);
  }
  function _0x433e25() {
    document.addEventListener("click", _0x15ba85 => {
      if (!_0x4aa589 || _0x4aa589.classList.contains("hidden")) {
        return;
      }
      const _0xd28979 = _0x15ba85.target;
      if (_0x4aa589.contains(_0xd28979)) {
        return;
      }
      if (_0x4dd67a && _0x4dd67a.contains && _0x4dd67a.contains(_0xd28979)) {
        return;
      }
      _0x243c62();
    }, true);
    document.addEventListener("keydown", _0x151762 => {
      if (_0x151762.key === "Escape") {
        _0x243c62();
      }
    }, true);
    window.addEventListener("resize", _0x243c62);
    window.addEventListener("blur", _0x243c62);
  }
  _0x433e25();
  function _0x1afca2(_0x41b623) {
    const _0x82425f = _0x16d793(_0x41b623);
    let _0x2bbfec = "";
    for (let _0xbf894a = 0; _0xbf894a < _0x82425f.length; _0xbf894a++) {
      _0x2bbfec += String.fromCharCode(_0x82425f[_0xbf894a]);
    }
    return btoa(_0x2bbfec);
  }
  function _0x2137bd(_0x29679f) {
    const _0x381ba3 = atob(String(_0x29679f || "").trim());
    const _0x3c6353 = new Uint8Array(_0x381ba3.length);
    for (let _0x12bf2b = 0; _0x12bf2b < _0x381ba3.length; _0x12bf2b++) {
      _0x3c6353[_0x12bf2b] = _0x381ba3.charCodeAt(_0x12bf2b) & 255;
    }
    return _0x35ac25(_0x3c6353);
  }
  function _0x5b846c(_0x480ed8) {
    return String(_0x480ed8 || "").replace(/[a-zA-Z]/g, _0x98dc94 => {
      const _0x225f55 = _0x98dc94 <= "Z" ? 65 : 97;
      const _0x4e2895 = _0x98dc94.charCodeAt(0) - _0x225f55;
      return String.fromCharCode((_0x4e2895 + 13) % 26 + _0x225f55);
    });
  }
  const _0x7e28ff = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
  function _0xe43403(_0x1a742e) {
    const _0x49cb10 = _0x16d793(_0x1a742e);
    let _0x9f6fc9 = 0;
    let _0x35e8e5 = 0;
    let _0x2b762d = "";
    for (let _0x1c78e6 = 0; _0x1c78e6 < _0x49cb10.length; _0x1c78e6++) {
      {
        _0x35e8e5 = _0x35e8e5 << 8 | _0x49cb10[_0x1c78e6];
        _0x9f6fc9 += 8;
        while (_0x9f6fc9 >= 5) {
          _0x2b762d += _0x7e28ff[_0x35e8e5 >>> _0x9f6fc9 - 5 & 31];
          _0x9f6fc9 -= 5;
        }
      }
    }
    if (_0x9f6fc9 > 0) {
      _0x2b762d += _0x7e28ff[_0x35e8e5 << 5 - _0x9f6fc9 & 31];
    }
    while (_0x2b762d.length % 8 !== 0) {
      _0x2b762d += "=";
    }
    return _0x2b762d;
  }
  function _0x3b022b(_0x3e72a7) {
    const _0x511456 = String(_0x3e72a7 || "").trim().replace(/\s+/g, "").replace(/=+$/g, "").toUpperCase();
    if (!_0x511456) {
      return "";
    }
    let _0x1b5ae6 = 0;
    let _0x219cd1 = 0;
    const _0x51eaba = [];
    for (let _0x2de69d = 0; _0x2de69d < _0x511456.length; _0x2de69d++) {
      const _0x2ffff9 = _0x7e28ff.indexOf(_0x511456[_0x2de69d]);
      if (_0x2ffff9 < 0) {
        throw new Error(_0x850dc("codecInvalidBase32") || "Base32 内容不合法。");
      }
      _0x219cd1 = _0x219cd1 << 5 | _0x2ffff9;
      _0x1b5ae6 += 5;
      _0x1b5ae6 >= 8 && (_0x51eaba.push(_0x219cd1 >>> _0x1b5ae6 - 8 & 255), _0x1b5ae6 -= 8);
    }
    return _0x35ac25(new Uint8Array(_0x51eaba));
  }
  function _0x284209(_0x3c09e6) {
    return _0x1afca2(_0x3c09e6).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
  }
  function _0x151fb3(_0x29ba63) {
    {
      const _0x3db7e9 = String(_0x29ba63 || "").trim().replace(/-/g, "+").replace(/_/g, "/");
      if (!/^[A-Za-z0-9+/]*={0,2}$/.test(_0x3db7e9)) {
        throw new Error(_0x850dc("codecInvalidBase64Url") || "Base64URL 内容不合法。");
      }
      const _0x3d21b7 = _0x3db7e9 + "===".slice((_0x3db7e9.length + 3) % 4);
      try {
        return _0x2137bd(_0x3d21b7);
      } catch (_0x27ae76) {
        throw new Error(_0x850dc("codecInvalidBase64Url") || "Base64URL 内容不合法。");
      }
    }
  }
  function _0x2dbd9b(_0x14354a) {
    return String(_0x14354a == null ? "" : _0x14354a).split("").map(_0x4b2964 => {
      return "\\u" + _0x4b2964.charCodeAt(0).toString(16).padStart(4, "0");
    }).join("");
  }
  function _0x16ab55(_0x254334) {
    {
      const _0x3f509b = String(_0x254334 == null ? "" : _0x254334);
      if (/\\u(?![0-9a-fA-F]{4})/.test(_0x3f509b)) {
        throw new Error(_0x850dc("codecInvalidUnicode") || "Unicode 转义内容不合法。");
      }
      return _0x3f509b.replace(/\\u([0-9a-fA-F]{4})/g, (_0x22c639, _0x50911c) => String.fromCharCode(parseInt(_0x50911c, 16)));
    }
  }
  function _0x52fd94(_0x2a5098) {
    return String(_0x2a5098 == null ? "" : _0x2a5098).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  function _0x4bf452(_0x45a762) {
    const _0x3ab5f1 = String(_0x45a762 == null ? "" : _0x45a762);
    const _0xb59960 = document.createElement("textarea");
    _0xb59960.innerHTML = _0x3ab5f1;
    return _0xb59960.value;
  }
  function _0x3261aa(_0xd2a925) {
    return JSON.stringify(JSON.parse(String(_0xd2a925 == null ? "" : _0xd2a925)), null, 2);
  }
  function _0x3c57f8(_0x81509d) {
    return JSON.stringify(JSON.parse(String(_0x81509d == null ? "" : _0x81509d)));
  }
  function _0x117dc7(_0x1d6d9e) {
    return JSON.stringify(String(_0x1d6d9e == null ? "" : _0x1d6d9e)).slice(1, -1);
  }
  function _0x516575(_0x5e7a73) {
    {
      const _0x5bcf4d = String(_0x5e7a73 == null ? "" : _0x5e7a73).replace(/(?<!\\)"/g, "\\\"");
      return JSON.parse("\"" + _0x5bcf4d + "\"");
    }
  }
  function _0x1bdb44(_0x6c98cd) {
    const _0x262bde = String(_0x6c98cd == null ? "" : _0x6c98cd).trim();
    let _0x2b93b5 = _0x262bde;
    const _0x5a0c5e = _0x262bde.match(/[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+(?:\.[A-Za-z0-9_-]*)?/);
    if (_0x5a0c5e && _0x5a0c5e[0]) {
      _0x2b93b5 = _0x5a0c5e[0];
    } else {
      if (/\s/.test(_0x262bde)) {
        const _0x2a3e42 = _0x262bde.replace(/\s+/g, "");
        const _0x4012f8 = _0x2a3e42.match(/[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+(?:\.[A-Za-z0-9_-]*)?/);
        if (_0x4012f8 && _0x4012f8[0]) {
          _0x2b93b5 = _0x4012f8[0];
        }
      }
    }
    const _0x2a254c = _0x2b93b5.split(".");
    if (_0x2a254c.length < 2) {
      throw new Error(_0x850dc("codecInvalidJwt") || "JWT 内容不合法。");
    }
    const _0x3ee0b8 = _0xf35749 => {
      const _0x2f1040 = _0x151fb3(_0xf35749);
      try {
        return JSON.stringify(JSON.parse(_0x2f1040), null, 2);
      } catch (_0x39d870) {
        {
          return _0x2f1040;
        }
      }
    };
    const _0x1d2a8a = _0x3ee0b8(_0x2a254c[0]);
    const _0x28b775 = _0x3ee0b8(_0x2a254c[1]);
    const _0x4fcc08 = _0x2a254c[2] || "";
    return ["Header:", _0x1d2a8a, "", "Payload:", _0x28b775, "", "Signature:", _0x4fcc08 || "(empty)"].join("\n");
  }
  function _0x1eb931(_0x52a9b9) {
    {
      return String(_0x52a9b9).padStart(2, "0");
    }
  }
  function _0xb3f9fd(_0x5b577e) {
    {
      return [_0x5b577e.getFullYear(), "-", _0x1eb931(_0x5b577e.getMonth() + 1), "-", _0x1eb931(_0x5b577e.getDate()), " ", _0x1eb931(_0x5b577e.getHours()), ":", _0x1eb931(_0x5b577e.getMinutes()), ":", _0x1eb931(_0x5b577e.getSeconds())].join("");
    }
  }
  function _0x41e5ab(_0x512bd5) {
    let _0x4e72a2 = String(_0x512bd5 == null ? "" : _0x512bd5).trim();
    if (!_0x4e72a2) {
      throw new Error(_0x850dc("codecInvalidTimestamp") || "无法识别时间戳或时间文本。");
    }
    let _0x53a2d2 = null;
    let _0x458d45 = _0x4e72a2;
    if (!/^\d{10}$/.test(_0x4e72a2) && !/^\d{13}$/.test(_0x4e72a2)) {
      const _0x432895 = _0x4e72a2.match(/(?:^|[^\d])(\d{13}|\d{10})(?!\d)/);
      if (_0x432895 && _0x432895[1]) {
        _0x4e72a2 = _0x432895[1];
      }
    }
    if (/^\d{10}$/.test(_0x4e72a2)) {
      _0x53a2d2 = new Date(Number(_0x4e72a2) * 1000);
      _0x458d45 = "Unix seconds";
    } else {
      if (/^\d{13}$/.test(_0x4e72a2)) {
        _0x53a2d2 = new Date(Number(_0x4e72a2));
        _0x458d45 = "Unix milliseconds";
      } else {
        let _0x48c8ff = _0x4e72a2;
        /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/.test(_0x48c8ff) && (_0x48c8ff = _0x48c8ff.replace(" ", "T"));
        const _0x4b477c = Date.parse(_0x48c8ff);
        if (Number.isNaN(_0x4b477c)) {
          throw new Error(_0x850dc("codecInvalidTimestamp") || "无法识别时间戳或时间文本。");
        }
        _0x53a2d2 = new Date(_0x4b477c);
        _0x458d45 = "Readable time";
      }
    }
    if (!(_0x53a2d2 instanceof Date) || Number.isNaN(_0x53a2d2.getTime())) {
      throw new Error(_0x850dc("codecInvalidTimestamp") || "无法识别时间戳或时间文本。");
    }
    return ["Input: " + _0x458d45, "ISO: " + _0x53a2d2.toISOString(), "Local: " + _0xb3f9fd(_0x53a2d2), "Unix (s): " + String(Math.floor(_0x53a2d2.getTime() / 1000)), "Unix (ms): " + String(_0x53a2d2.getTime())].join("\n");
  }
  async function _0x53caff(_0x47d190, _0x18a9b9) {
    {
      const _0x146a1b = await crypto.subtle.importKey("raw", _0x16d793(_0x18a9b9), {
        name: "HMAC",
        hash: "SHA-256"
      }, false, ["sign"]);
      const _0x29b77b = await crypto.subtle.sign("HMAC", _0x146a1b, _0x16d793(_0x47d190));
      return _0x5b5767(new Uint8Array(_0x29b77b));
    }
  }
  async function _0x366629(_0x55e56e) {
    if (_0x55e56e !== "hmacsha256") {
      return {};
    }
    const _0x4caa71 = await _0x283e5f(_0x850dc("codecHmacKeyPrompt") || "请输入 HMAC Key", "", _0x850dc("codecHmacKeyTitle") || "HMAC-SHA256");
    if (_0x4caa71 == null) {
      return null;
    }
    if (String(_0x4caa71).length === 0) {
      _0x34a884(_0x850dc("codecNeedHmacKey") || "请输入 HMAC Key。");
      return null;
    }
    return {
      hmacKey: String(_0x4caa71)
    };
  }
  function _0x2afee4(_0x246a1e) {
    const _0x1922e0 = _0x16d793(_0x246a1e);
    const _0x634b0f = [1937774191, 1226093241, 388252375, 3666478592, 2842636476, 372324522, 3817729613, 2969243214];
    const _0x893d69 = (_0x2cb722, _0x28dd50) => (_0x2cb722 << _0x28dd50 | _0x2cb722 >>> 32 - _0x28dd50) >>> 0;
    const _0x267af4 = _0x20eef6 => (_0x20eef6 ^ _0x893d69(_0x20eef6, 9) ^ _0x893d69(_0x20eef6, 17)) >>> 0;
    const _0xffdad6 = _0x3edbb9 => (_0x3edbb9 ^ _0x893d69(_0x3edbb9, 15) ^ _0x893d69(_0x3edbb9, 23)) >>> 0;
    const _0x357296 = (_0x31fbb5, _0x18209d, _0x4f8065, _0x26fc29) => (_0x26fc29 <= 15 ? _0x31fbb5 ^ _0x18209d ^ _0x4f8065 : _0x31fbb5 & _0x18209d | _0x31fbb5 & _0x4f8065 | _0x18209d & _0x4f8065) >>> 0;
    const _0x12404c = (_0x34a07a, _0x58037d, _0x4d3369, _0x3b68ba) => (_0x3b68ba <= 15 ? _0x34a07a ^ _0x58037d ^ _0x4d3369 : _0x34a07a & _0x58037d | ~_0x34a07a & _0x4d3369) >>> 0;
    const _0x378507 = _0x5aec4a => (_0x5aec4a <= 15 ? 2043430169 : 2055708042) >>> 0;
    const _0x1fda21 = _0x1922e0.length * 8;
    const _0xedd322 = (448 - (_0x1fda21 + 1) % 512 + 512) % 512;
    const _0x4b0269 = 1 + _0xedd322 / 8 + 8;
    const _0x38e8f5 = new Uint8Array(_0x1922e0.length + _0x4b0269);
    _0x38e8f5.set(_0x1922e0, 0);
    _0x38e8f5[_0x1922e0.length] = 128;
    const _0x15901c = new DataView(_0x38e8f5.buffer);
    const _0xed0a7 = Math.floor(_0x1fda21 / 4294967296);
    const _0x3a5eff = _0x1fda21 >>> 0;
    _0x15901c.setUint32(_0x38e8f5.length - 8, _0xed0a7 >>> 0);
    _0x15901c.setUint32(_0x38e8f5.length - 4, _0x3a5eff);
    const _0x4544af = new Uint32Array(68);
    const _0x1fe123 = new Uint32Array(64);
    let _0x826084 = _0x634b0f.slice();
    const _0x2e9578 = new DataView(_0x38e8f5.buffer);
    for (let _0x4abc9b = 0; _0x4abc9b < _0x38e8f5.length; _0x4abc9b += 64) {
      for (let _0xbbec50 = 0; _0xbbec50 < 16; _0xbbec50++) {
        _0x4544af[_0xbbec50] = _0x2e9578.getUint32(_0x4abc9b + _0xbbec50 * 4) >>> 0;
      }
      for (let _0x1bfbfe = 16; _0x1bfbfe < 68; _0x1bfbfe++) {
        _0x4544af[_0x1bfbfe] = (_0xffdad6(_0x4544af[_0x1bfbfe - 16] ^ _0x4544af[_0x1bfbfe - 9] ^ _0x893d69(_0x4544af[_0x1bfbfe - 3], 15)) ^ _0x893d69(_0x4544af[_0x1bfbfe - 13], 7) ^ _0x4544af[_0x1bfbfe - 6]) >>> 0;
      }
      for (let _0x476e99 = 0; _0x476e99 < 64; _0x476e99++) {
        _0x1fe123[_0x476e99] = (_0x4544af[_0x476e99] ^ _0x4544af[_0x476e99 + 4]) >>> 0;
      }
      let [_0x55786b, _0x5098bb, _0x4f6e67, _0x44850e, _0x58de13, _0x2932dc, _0x22dca5, _0x16b44f] = _0x826084;
      for (let _0x4b71bd = 0; _0x4b71bd < 64; _0x4b71bd++) {
        const _0x549bfc = _0x893d69(_0x893d69(_0x55786b, 12) + _0x58de13 + _0x893d69(_0x378507(_0x4b71bd), _0x4b71bd) >>> 0, 7);
        const _0x25291e = (_0x549bfc ^ _0x893d69(_0x55786b, 12)) >>> 0;
        const _0x13caef = _0x357296(_0x55786b, _0x5098bb, _0x4f6e67, _0x4b71bd) + _0x44850e + _0x25291e + _0x1fe123[_0x4b71bd] >>> 0;
        const _0x239238 = _0x12404c(_0x58de13, _0x2932dc, _0x22dca5, _0x4b71bd) + _0x16b44f + _0x549bfc + _0x4544af[_0x4b71bd] >>> 0;
        _0x44850e = _0x4f6e67;
        _0x4f6e67 = _0x893d69(_0x5098bb, 9);
        _0x5098bb = _0x55786b;
        _0x55786b = _0x13caef;
        _0x16b44f = _0x22dca5;
        _0x22dca5 = _0x893d69(_0x2932dc, 19);
        _0x2932dc = _0x58de13;
        _0x58de13 = _0x267af4(_0x239238);
      }
      _0x826084 = [(_0x826084[0] ^ _0x55786b) >>> 0, (_0x826084[1] ^ _0x5098bb) >>> 0, (_0x826084[2] ^ _0x4f6e67) >>> 0, (_0x826084[3] ^ _0x44850e) >>> 0, (_0x826084[4] ^ _0x58de13) >>> 0, (_0x826084[5] ^ _0x2932dc) >>> 0, (_0x826084[6] ^ _0x22dca5) >>> 0, (_0x826084[7] ^ _0x16b44f) >>> 0];
    }
    return _0x826084.map(_0x44426f => _0x44426f.toString(16).padStart(8, "0")).join("");
  }
  async function _0x3bbad9(_0x5073e5, _0x174289) {
    const _0xb699c2 = _0x16d793(_0x174289);
    const _0xb092e5 = await crypto.subtle.digest(_0x5073e5, _0xb699c2);
    return _0x5b5767(new Uint8Array(_0xb092e5));
  }
  function _0x429c27(_0x307abb, _0x2f4fef, _0xeb1b84, _0x2ac82c) {
    const _0x8a27c5 = String(_0x307abb || "");
    const _0x17c7a7 = Math.max(0, Math.min(_0x8a27c5.length, _0x2f4fef | 0));
    const _0x36728a = Math.max(_0x17c7a7, Math.min(_0x8a27c5.length, _0xeb1b84 | 0));
    return _0x8a27c5.slice(0, _0x17c7a7) + String(_0x2ac82c == null ? "" : _0x2ac82c) + _0x8a27c5.slice(_0x36728a);
  }
  async function _0x2c2791(_0x290b95, _0x1cbe21, _0x2bf41e) {
    {
      const _0x5caadf = String(_0x1cbe21 == null ? "" : _0x1cbe21);
      const _0x301b7a = _0x2bf41e || {};
      switch (_0x290b95) {
        case "md5":
          return _0x25c43b(_0x5caadf);
        case "sm3":
          return _0x2afee4(_0x5caadf);
        case "sha1":
          return await _0x3bbad9("SHA-1", _0x5caadf);
        case "sha256":
          return await _0x3bbad9("SHA-256", _0x5caadf);
        case "sha512":
          return await _0x3bbad9("SHA-512", _0x5caadf);
        case "hmacsha256":
          {
            {
              if (!_0x301b7a.hmacKey) {
                throw new Error(_0x850dc("codecNeedHmacKey") || "请输入 HMAC Key。");
              }
              return await _0x53caff(_0x5caadf, _0x301b7a.hmacKey);
            }
          }
        case "rot13":
          return _0x5b846c(_0x5caadf);
        case "b32enc":
          return _0xe43403(_0x5caadf);
        case "b32dec":
          return _0x3b022b(_0x5caadf);
        case "b64enc":
          return _0x1afca2(_0x5caadf);
        case "b64dec":
          try {
            return _0x2137bd(_0x5caadf);
          } catch (_0x367cba) {
            {
              throw new Error(_0x850dc("codecInvalidBase64") || "Base64 内容不合法。");
            }
          }
        case "b64urlenc":
          return _0x284209(_0x5caadf);
        case "b64urldec":
          return _0x151fb3(_0x5caadf);
        case "urlenc":
          return encodeURIComponent(_0x5caadf);
        case "urldec":
          try {
            return decodeURIComponent(String(_0x5caadf || "").replace(/\+/g, "%20"));
          } catch (_0x1f015d) {
            throw new Error(_0x850dc("codecInvalidUrlEncoded") || "URL 编码内容不合法。");
          }
        case "hexenc":
          return _0x5b5767(_0x16d793(_0x5caadf));
        case "hexdec":
          try {
            return _0x35ac25(_0x1d02e9(_0x5caadf));
          } catch (_0x134fe0) {
            {
              throw new Error(_0x850dc("codecInvalidHex") || "Hex 内容不合法。");
            }
          }
        case "unicodeenc":
          return _0x2dbd9b(_0x5caadf);
        case "unicodedec":
          return _0x16ab55(_0x5caadf);
        case "htmlenc":
          return _0x52fd94(_0x5caadf);
        case "htmldec":
          return _0x4bf452(_0x5caadf);
        case "jsonpretty":
          try {
            return _0x3261aa(_0x5caadf);
          } catch (_0x280a5a) {
            {
              throw new Error(_0x850dc("codecInvalidJson") || "JSON 内容不合法。");
            }
          }
        case "jsoncompact":
          try {
            {
              return _0x3c57f8(_0x5caadf);
            }
          } catch (_0x107b9a) {
            throw new Error(_0x850dc("codecInvalidJson") || "JSON 内容不合法。");
          }
        case "jsonescape":
          return _0x117dc7(_0x5caadf);
        case "jsonunescape":
          try {
            return _0x516575(_0x5caadf);
          } catch (_0x1f5a38) {
            throw new Error(_0x850dc("codecInvalidJsonString") || "JSON 字符串内容不合法。");
          }
        case "jwtparse":
          return _0x1bdb44(_0x5caadf);
        case "tsconvert":
          return _0x41e5ab(_0x5caadf);
        case "base64Encode":
          return _0x1afca2(_0x5caadf);
        case "base64Decode":
          try {
            return _0x2137bd(_0x5caadf);
          } catch (_0x2454db) {
            throw new Error(_0x850dc("codecInvalidBase64") || "Base64 内容不合法。");
          }
        case "urlEncode":
          return encodeURIComponent(_0x5caadf);
        case "urlDecode":
          try {
            return decodeURIComponent(String(_0x5caadf || "").replace(/\+/g, "%20"));
          } catch (_0x23ab32) {
            {
              throw new Error(_0x850dc("codecInvalidUrlEncoded") || "URL 编码内容不合法。");
            }
          }
        case "hexEncode":
          return _0x5b5767(_0x16d793(_0x5caadf));
        case "hexDecode":
          try {
            {
              return _0x35ac25(_0x1d02e9(_0x5caadf));
            }
          } catch (_0x134c3d) {
            throw new Error(_0x850dc("codecInvalidHex") || "Hex 内容不合法。");
          }
        default:
          return null;
      }
    }
  }
  function _0x314609(_0xb16611, _0x5a6f3b) {
    const _0x21c8b0 = _0x83e0ec(_0xb16611);
    const _0x68f021 = String(_0x21c8b0.startLine || "");
    const _0x221808 = _0x68f021.trim().match(/^(\S+)\s+(.+?)\s+HTTP\/([0-9.]+)$/i);
    if (!_0x221808) {
      return null;
    }
    const _0x1742dd = _0x221808[1];
    const _0x269069 = _0x221808[3];
    const _0x3bee55 = _0x1742dd + " " + String(_0x5a6f3b || "/") + " HTTP/" + _0x269069;
    const _0x541b33 = Array.isArray(_0x21c8b0.headerLines) ? _0x21c8b0.headerLines : [];
    const _0x532c95 = _0x541b33.join("\n") + "\n\n" + (_0x21c8b0.body || "");
    return _0x3bee55 + "\n" + _0x532c95;
  }
  function _0x2216ca(_0x24943f, _0x9cd66d) {
    {
      const _0x53eca4 = String(_0x24943f || "");
      const _0x3dc8d7 = _0x53eca4.indexOf("?");
      if (_0x3dc8d7 < 0) {
        return {
          next: _0x53eca4,
          changed: false,
          hasQuery: false
        };
      }
      const _0x43eb00 = _0x53eca4.slice(0, _0x3dc8d7 + 1);
      const _0xaf298 = _0x53eca4.slice(_0x3dc8d7 + 1);
      if (!_0xaf298) {
        return {
          next: _0x53eca4,
          changed: false,
          hasQuery: true
        };
      }
      const _0x2a6bc2 = _0xaf298.split("&");
      let _0x408ce7 = false;
      const _0x34d4f4 = _0x2a6bc2.map(_0x169fb0 => {
        const _0x54f9a2 = _0x169fb0.indexOf("=");
        if (_0x54f9a2 < 0) {
          return _0x169fb0;
        }
        const _0x3d4a12 = _0x169fb0.slice(0, _0x54f9a2 + 1);
        const _0x55b82e = _0x169fb0.slice(_0x54f9a2 + 1);
        const _0x3d383a = _0x9cd66d(_0x55b82e);
        if (_0x3d383a !== _0x55b82e) {
          _0x408ce7 = true;
        }
        return _0x3d4a12 + _0x3d383a;
      });
      return {
        next: _0x43eb00 + _0x34d4f4.join("&"),
        changed: _0x408ce7,
        hasQuery: true
      };
    }
  }
  async function _0x2c8800(_0x25de83, _0x4ad5b1) {
    const _0x57148e = String(_0x25de83 || "");
    const _0x27a75c = _0x57148e.indexOf("?");
    if (_0x27a75c < 0) {
      return {
        next: _0x57148e,
        changed: false,
        hasQuery: false
      };
    }
    const _0xabdb2a = _0x57148e.slice(0, _0x27a75c + 1);
    const _0x468150 = _0x57148e.slice(_0x27a75c + 1);
    if (!_0x468150) {
      return {
        next: _0x57148e,
        changed: false,
        hasQuery: true
      };
    }
    const _0x3dfbbf = _0x468150.split("&");
    let _0x43f9d4 = false;
    const _0x4322fb = [];
    for (const _0x51e666 of _0x3dfbbf) {
      const _0x25eb46 = _0x51e666.indexOf("=");
      if (_0x25eb46 < 0) {
        {
          _0x4322fb.push(_0x51e666);
          continue;
        }
      }
      const _0xb154d4 = _0x51e666.slice(0, _0x25eb46 + 1);
      const _0x9d2fe4 = _0x51e666.slice(_0x25eb46 + 1);
      let _0x470f7a = _0x9d2fe4;
      try {
        {
          const _0x1e970c = await _0x4ad5b1(_0x9d2fe4);
          if (_0x1e970c != null) {
            _0x470f7a = String(_0x1e970c);
          }
        }
      } catch (_0x4f5abc) {}
      if (_0x470f7a !== _0x9d2fe4) {
        _0x43f9d4 = true;
      }
      _0x4322fb.push(_0xb154d4 + _0x470f7a);
    }
    return {
      next: _0xabdb2a + _0x4322fb.join("&"),
      changed: _0x43f9d4,
      hasQuery: true
    };
  }
  async function _0xc3264(_0x1dc326, _0x34d4ee, _0x30e2f5) {
    const _0x6af2b4 = String(_0x34d4ee || "");
    const _0x1e26bc = _0x6af2b4.startsWith("/");
    const _0x3c963a = _0x1e26bc ? _0x6af2b4.slice(1) : _0x6af2b4;
    let _0x4cecaa = null;
    _0x1dc326 === "urlenc" ? _0x4cecaa = encodeURIComponent(_0x3c963a).replace(/%2F/gi, "/") : _0x4cecaa = await _0x2c2791(_0x1dc326, _0x3c963a, _0x30e2f5);
    const _0x2d2f36 = _0x4cecaa == null ? _0x3c963a : String(_0x4cecaa);
    return _0x1e26bc ? "/" + _0x2d2f36 : _0x2d2f36;
  }
  async function _0x395cea(_0x522036, _0x5f2e0c, _0x14f3a4) {
    if (!_0x1073d3) {
      return;
    }
    const _0x4bbecc = _0x5f2e0c || "selection";
    const _0xf4ba6b = _0x4bbecc === "selection" ? _0x14f3a4 && _0x14f3a4.selectionSnapshot || _0x203608() : null;
    const _0x3ba368 = await _0x366629(_0x522036);
    if (_0x3ba368 == null) {
      return;
    }
    const _0x255b95 = _0x4bbecc === "selection" ? _0xf4ba6b && _0xf4ba6b.range ? _0x375449(_0xf4ba6b.range) : _0x295787() : null;
    const _0x552228 = _0x1073d3 && _0x1073d3.dataset ? _0x1073d3.dataset.viewMode || _0x1504f6() : _0x1504f6();
    let _0x320138 = "";
    _0x552228 === "raw" ? (_0x320138 = _0x3cb71f(_0x1073d3) || _0x307492(_0x1073d3) || "", _0x9fe1e1(_0x1073d3, _0x320138)) : _0x320138 = _0x307492(_0x1073d3) || _0x3cb71f(_0x1073d3) || "";
    const _0x2307fb = _0x83e0ec(_0x320138);
    const _0x42fc92 = String(_0x2307fb.startLine || "").trim();
    const _0x754231 = _0x42fc92.match(/^(\S+)\s+(.+?)\s+HTTP\/([0-9.]+)$/i);
    const _0x4739c4 = _0x754231 && _0x754231[2] ? _0x754231[2] : "";
    if (_0x4bbecc === "selection") {
      {
        if (!_0x255b95 || _0x255b95.start === _0x255b95.end) {
          _0x34a884(_0x850dc("cryptoEncodeNeedSelection") || "Please select text in the request editor first.");
          return;
        }
        let _0x277ecf = null;
        try {
          _0x277ecf = await _0x2c2791(_0x522036, _0x320138.slice(_0x255b95.start, _0x255b95.end), _0x3ba368);
        } catch (_0x2905a9) {
          _0x34a884((_0x850dc("cryptoEncodeFailedPrefix") || "Failed: ") + String(_0x2905a9 && _0x2905a9.message ? _0x2905a9.message : _0x2905a9 || ""));
          return;
        }
        if (_0x277ecf == null) {
          return;
        }
        const _0x2ba461 = _0x429c27(_0x320138, _0x255b95.start, _0x255b95.end, _0x277ecf);
        _0x381ebc(_0x320138, {
          immediate: true
        });
        _0x381ebc(_0x2ba461, {
          immediate: true
        });
        _0x33da0b(_0x2ba461);
        return;
      }
    }
    if (!_0x754231) {
      {
        _0x34a884(_0x850dc("cryptoEncodeNeedUrlLine") || "No valid request-line URL found for one-click processing.");
        return;
      }
    }
    if (!_0x4d0b99(_0x522036, _0x4bbecc)) {
      _0x34a884(_0x850dc("cryptoEncodeSelectionOnlyScope") || "当前动作仅支持选中文本范围，请先选中文本后再处理。");
      return;
    }
    if (_0x4bbecc === "url") {
      let _0x579c18 = null;
      try {
        _0x579c18 = await _0xc3264(_0x522036, _0x4739c4, _0x3ba368);
      } catch (_0x4c9d7a) {
        {
          _0x34a884((_0x850dc("cryptoEncodeFailedPrefix") || "Failed: ") + String(_0x4c9d7a && _0x4c9d7a.message ? _0x4c9d7a.message : _0x4c9d7a || ""));
          return;
        }
      }
      if (_0x579c18 == null) {
        return;
      }
      const _0x1c9d5c = _0x314609(_0x320138, _0x579c18);
      if (!_0x1c9d5c) {
        return;
      }
      _0x381ebc(_0x320138, {
        immediate: true
      });
      _0x381ebc(_0x1c9d5c, {
        immediate: true
      });
      _0x33da0b(_0x1c9d5c);
      return;
    }
    if (_0x4bbecc === "params") {
      const _0x1b7e10 = await _0x2c8800(_0x4739c4, async _0x331a24 => {
        {
          const _0x222b3a = await _0x2c2791(_0x522036, _0x331a24, _0x3ba368);
          return _0x222b3a == null ? _0x331a24 : String(_0x222b3a);
        }
      });
      if (!_0x1b7e10.hasQuery) {
        _0x34a884(_0x850dc("cryptoEncodeNeedQuery") || "The URL has no query string (?a=1&b=2). Cannot process parameter values only.");
        return;
      }
      const _0x37dc45 = _0x314609(_0x320138, _0x1b7e10.next);
      if (!_0x37dc45) {
        return;
      }
      _0x381ebc(_0x320138, {
        immediate: true
      });
      _0x381ebc(_0x37dc45, {
        immediate: true
      });
      _0x33da0b(_0x37dc45);
      return;
    }
    _0x34a884(_0x850dc("cryptoEncodeUnknownScope") || "Unknown scope.");
  }
  async function _0x3ab0e0(_0x335a40, _0x3fac6f, _0x1962a5, _0x344aac, _0x4a44d2, _0x955ba9) {
    if (!_0x335a40) {
      return;
    }
    const _0x46b916 = _0x335a40.querySelector(_0x1962a5 === "resp" ? ".resp-raw" : ".req-raw");
    if (!_0x46b916) {
      return;
    }
    const _0x2999d5 = _0x4a44d2 || "selection";
    const _0x382cfb = _0x2999d5 === "selection" ? _0x955ba9 && _0x955ba9.selectionSnapshot || _0x27a146(_0x335a40, _0x1962a5) : null;
    const _0x56b934 = await _0x366629(_0x344aac);
    if (_0x56b934 == null) {
      return;
    }
    const _0x31f8f4 = _0x307492(_0x46b916);
    let _0xf4981e = _0x31f8f4;
    try {
      {
        if (_0x2999d5 === "url" || _0x2999d5 === "params") {
          {
            if (!_0x4d0b99(_0x344aac, _0x2999d5)) {
              _0x34a884(_0x850dc("cryptoEncodeSelectionOnlyScope") || "当前动作仅支持选中文本范围，请先选中文本后再处理。");
              return;
            }
            const _0x3a0ed2 = _0x83e0ec(_0x31f8f4);
            if (!_0x3a0ed2 || !_0x3a0ed2.startLine) {
              return;
            }
            const _0x141a80 = String(_0x3a0ed2.startLine || "").trim().match(/^(\S+)\s+(.+?)\s+HTTP\/([0-9.]+)$/i);
            if (!_0x141a80) {
              {
                _0x34a884(_0x850dc("cryptoEncodeNeedUrlLine") || "No valid request-line URL found for one-click processing.");
                return;
              }
            }
            const _0x5ca5ed = _0x141a80[2] || "";
            if (_0x2999d5 === "url") {
              {
                const _0x6d5077 = await _0xc3264(_0x344aac, _0x5ca5ed, _0x56b934);
                const _0x4e5567 = _0x314609(_0x31f8f4, _0x6d5077 == null ? _0x5ca5ed : String(_0x6d5077));
                if (!_0x4e5567) {
                  return;
                }
                _0xf4981e = _0x4e5567;
              }
            } else {
              const _0x12ec07 = await _0x2c8800(_0x5ca5ed, async _0x1bf1bd => {
                {
                  const _0x5772ee = await _0x2c2791(_0x344aac, _0x1bf1bd, _0x56b934);
                  return _0x5772ee == null ? String(_0x1bf1bd || "") : String(_0x5772ee);
                }
              });
              if (!_0x12ec07.hasQuery) {
                _0x34a884(_0x850dc("cryptoEncodeNeedQuery") || "The URL has no query string (?a=1&b=2). Cannot process parameter values only.");
                return;
              }
              const _0x4a7282 = _0x314609(_0x31f8f4, _0x12ec07.next);
              if (!_0x4a7282) {
                return;
              }
              _0xf4981e = _0x4a7282;
            }
          }
        } else {
          const _0x47b72c = _0x382cfb && _0x382cfb.range ? _0x375449(_0x382cfb.range) : _0x55a5eb(_0x46b916);
          if (!_0x47b72c || _0x47b72c.end <= _0x47b72c.start) {
            _0x34a884(_0x850dc("cryptoEncodeNeedSelection") || "Please select some text in the request editor first.");
            return;
          }
          const _0x1ffbc1 = _0x31f8f4.slice(0, _0x47b72c.start);
          const _0x25ca88 = _0x31f8f4.slice(_0x47b72c.start, _0x47b72c.end);
          const _0x2370cf = _0x31f8f4.slice(_0x47b72c.end);
          const _0x3e9af5 = await _0x2c2791(_0x344aac, _0x25ca88, _0x56b934);
          _0xf4981e = _0x1ffbc1 + _0x3e9af5 + _0x2370cf;
        }
      }
    } catch (_0x1a8183) {
      {
        try {
          {
            _0x34a884((_0x850dc("cryptoEncodeFailedPrefix") || "Failed: ") + String(_0x1a8183 && _0x1a8183.message ? _0x1a8183.message : _0x1a8183));
          }
        } catch (_0x1bd733) {}
        return;
      }
    }
    if (_0x3fac6f) {
      _0x40e46a(_0x3fac6f, _0x1962a5, _0xf4981e, {
        immediate: true
      });
    }
    _0x6c37b(_0x335a40, _0x3fac6f, _0x1962a5, _0xf4981e);
  }
  const _0x11e800 = /(encrypt(?:ed|ion)?|crypto|cipher|sign(?:ature)?|nonce|salt|timestamp|passwd|password|pwd|username|login|rsa|aes|des|3des|sm2|sm3|sm4|md5|sha1|sha256|sha512|hmac|base64(?:url)?|hex|token)/ig;
  const _0x14a3f6 = /(?:password|passwd|pwd|username|user_name|login(?:name|id)?|account|sign(?:ature)?|token|nonce|timestamp|salt|secret|cipher|encrypt)/i;
  function _0x190c98(_0x286de0, _0x1cdb64) {
    const _0x3e252f = String(_0x286de0 == null ? "" : _0x286de0);
    const _0x4edeb1 = Number(_0x1cdb64) > 0 ? Number(_0x1cdb64) : 240;
    if (_0x3e252f.length <= _0x4edeb1) {
      return _0x3e252f;
    }
    const _0x3aaef2 = Math.max(24, Math.floor(_0x4edeb1 * 0.68));
    const _0x553a32 = Math.max(12, _0x4edeb1 - _0x3aaef2 - 7);
    return _0x3e252f.slice(0, _0x3aaef2) + " ... " + _0x3e252f.slice(_0x3e252f.length - _0x553a32);
  }
  function _0x46579f(_0x202f97, _0x4491b4) {
    return _0x190c98(String(_0x202f97 == null ? "" : _0x202f97).replace(/\s+/g, " ").trim(), _0x4491b4 || 180);
  }
  function _0x41c482(_0x184799, _0x363b2a) {
    const _0x21a566 = [];
    (_0x184799 || []).forEach(_0xe046f5 => {
      {
        const _0x17f14f = String(_0xe046f5 == null ? "" : _0xe046f5).trim();
        if (!_0x17f14f) {
          return;
        }
        if (_0x21a566.indexOf(_0x17f14f) >= 0) {
          return;
        }
        _0x21a566.push(_0x17f14f);
      }
    });
    return typeof _0x363b2a === "number" && _0x363b2a >= 0 ? _0x21a566.slice(0, _0x363b2a) : _0x21a566;
  }
  function _0x2e051d(_0x1eed13, _0x3bcf14) {
    const _0x19fe8a = String(_0x3bcf14 || "").trim().toLowerCase();
    if (!_0x19fe8a || !_0x1eed13 || typeof _0x1eed13 !== "object") {
      return "";
    }
    const _0x15ec33 = Object.keys(_0x1eed13);
    for (let _0x258e0a = 0; _0x258e0a < _0x15ec33.length; _0x258e0a += 1) {
      {
        if (String(_0x15ec33[_0x258e0a] || "").toLowerCase() === _0x19fe8a) {
          return String(_0x1eed13[_0x15ec33[_0x258e0a]] || "");
        }
      }
    }
    return "";
  }
  function _0x11a37c(_0x3716ed) {
    const _0x544b88 = String(_0x3716ed || "").trim().toLowerCase();
    if (!_0x544b88) {
      return "";
    }
    if (/^\d+\.\d+\.\d+\.\d+$/.test(_0x544b88)) {
      return _0x544b88;
    }
    const _0x594ff5 = _0x544b88.split(".").filter(Boolean);
    if (_0x594ff5.length <= 2) {
      return _0x544b88;
    }
    const _0x25571e = _0x594ff5.slice(-2).join(".");
    const _0x545390 = _0x594ff5[_0x594ff5.length - 1] && _0x594ff5[_0x594ff5.length - 1].length <= 3;
    const _0x5c5d97 = _0x594ff5[_0x594ff5.length - 2] && _0x594ff5[_0x594ff5.length - 2].length <= 3;
    if (_0x594ff5.length >= 3 && _0x545390 && _0x5c5d97) {
      return _0x594ff5.slice(-3).join(".");
    }
    return _0x25571e;
  }
  function _0x31d7bd(_0x3c24e0, _0x44069e) {
    const _0x22f0a5 = String(_0x3c24e0 || "").trim().toLowerCase();
    const _0x34021d = String(_0x44069e || "").trim().toLowerCase();
    if (!_0x22f0a5 || !_0x34021d) {
      return false;
    }
    if (_0x22f0a5 === _0x34021d) {
      return true;
    }
    const _0x215b41 = _0x11a37c(_0x22f0a5);
    const _0x3e00cd = _0x11a37c(_0x34021d);
    return !!_0x215b41 && !!_0x3e00cd && _0x215b41 === _0x3e00cd;
  }
  function _0x49488a(_0x5e54aa) {
    const _0xf2a80e = [];
    if (!_0x5e54aa) {
      return _0xf2a80e;
    }
    _0x11e800.lastIndex = 0;
    let _0x36a976 = _0x11e800.exec(String(_0x5e54aa || ""));
    while (_0x36a976) {
      const _0x341e0a = String(_0x36a976[0] || "").trim().toLowerCase();
      if (_0x341e0a && _0xf2a80e.indexOf(_0x341e0a) < 0) {
        _0xf2a80e.push(_0x341e0a);
      }
      if (_0xf2a80e.length >= 10) {
        break;
      }
      _0x36a976 = _0x11e800.exec(String(_0x5e54aa || ""));
    }
    _0x11e800.lastIndex = 0;
    return _0xf2a80e;
  }
  function _0x563392(_0x4d0f0a) {
    const _0x5f38f4 = String(_0x4d0f0a || "");
    if (!_0x5f38f4) {
      return "";
    }
    _0x11e800.lastIndex = 0;
    const _0xda2d39 = _0x11e800.exec(_0x5f38f4);
    _0x11e800.lastIndex = 0;
    const _0x7b9679 = _0xda2d39 ? _0xda2d39.index : 0;
    const _0x4e986c = Math.max(0, _0x7b9679 - 96);
    const _0xe1691c = Math.min(_0x5f38f4.length, _0x7b9679 + 180);
    return _0x46579f(_0x5f38f4.slice(_0x4e986c, _0xe1691c), 260);
  }
  function _0x55c5bb(_0xd0d3c4, _0x5784e8) {
    const _0xd636f5 = String(_0x5784e8 || "").trim().toLowerCase();
    if (!_0xd636f5 || !Array.isArray(_0xd0d3c4)) {
      return "";
    }
    for (const _0x1af093 of _0xd0d3c4) {
      {
        const _0x35d4ff = Array.isArray(_0x1af093) ? String(_0x1af093[0] || "") : String(_0x1af093 && (_0x1af093.name || _0x1af093[0]) || "");
        if (_0x35d4ff.trim().toLowerCase() !== _0xd636f5) {
          continue;
        }
        return Array.isArray(_0x1af093) ? String(_0x1af093[1] || "") : String(_0x1af093 && (_0x1af093.value || _0x1af093[1]) || "");
      }
    }
    return "";
  }
  function _0x528c31(_0x8995ae) {
    {
      const _0x7b2563 = String(_0x8995ae && _0x8995ae.resourceType || "").toLowerCase();
      if (_0x7b2563 === "html") {
        return true;
      }
      const _0x38d504 = String(_0x8995ae && _0x8995ae.mimeType || "").toLowerCase();
      if (_0x38d504.indexOf("text/html") >= 0) {
        return true;
      }
      const _0x17c67b = _0x55c5bb(_0x8995ae && _0x8995ae.responseHeaders, "content-type").toLowerCase();
      return _0x17c67b.indexOf("text/html") >= 0;
    }
  }
  function _0x7bf2d7(_0x423f30) {
    const _0x510f7e = String(_0x423f30 && _0x423f30.resourceType || "").toLowerCase();
    if (_0x510f7e === "js") {
      return true;
    }
    const _0x40fe6f = String(_0x423f30 && _0x423f30.mimeType || "").toLowerCase();
    if (_0x40fe6f.indexOf("javascript") >= 0 || _0x40fe6f.indexOf("ecmascript") >= 0) {
      return true;
    }
    const _0x322d5e = _0x55c5bb(_0x423f30 && _0x423f30.responseHeaders, "content-type").toLowerCase();
    return _0x322d5e.indexOf("javascript") >= 0 || _0x322d5e.indexOf("ecmascript") >= 0;
  }
  function _0x4c4999(_0x5d6e26) {
    try {
      return new URL(String(_0x5d6e26 || ""), "https://example.invalid").pathname || "";
    } catch (_0x462990) {
      {
        const _0x647ac9 = String(_0x5d6e26 || "");
        const _0x51fce9 = _0x647ac9.split("#")[0].split("?")[0];
        if (!_0x51fce9) {
          return "";
        }
        return _0x51fce9.startsWith("/") ? _0x51fce9 : "/" + _0x51fce9;
      }
    }
  }
  function _0x2cf214(_0x3bfe3a) {
    const _0x1ba421 = _0x4c4999(_0x3bfe3a);
    const _0x44569c = _0x1ba421.split("/").filter(Boolean);
    return _0x44569c.length ? _0x44569c[_0x44569c.length - 1] : "";
  }
  function _0x56440f(_0x1f4d21, _0x169677, _0x2e7ee) {
    {
      const _0xb84b6d = String(_0x1f4d21 || "");
      if (!_0xb84b6d) {
        return {
          snippet: "",
          hits: [],
          score: 0
        };
      }
      const _0x333199 = String(_0x169677 && _0x169677.fieldName || "").trim();
      const _0x57f568 = String(_0x2e7ee && _0x2e7ee.target || "");
      const _0x48c975 = _0x2e051d(_0x2e7ee && _0x2e7ee.headers || {}, "referer");
      const _0x251bd3 = _0x2cf214(_0x57f568);
      const _0xc2d37f = _0x2cf214(_0x48c975);
      const _0x43c325 = [];
      _0x333199 && _0x333199 !== "URL" && _0x333199 !== "(unnamed)" && (_0x43c325.push({
        re: new RegExp("#" + _0x195e54(_0x333199), "i"),
        hit: "#" + _0x333199,
        base: 68
      }), _0x43c325.push({
        re: new RegExp("\\b" + _0x195e54(_0x333199) + "\\b", "i"),
        hit: _0x333199,
        base: 42
      }));
      if (_0x251bd3) {
        _0x43c325.push({
          re: new RegExp(_0x195e54(_0x251bd3), "i"),
          hit: _0x251bd3,
          base: 18
        });
      }
      if (_0xc2d37f) {
        _0x43c325.push({
          re: new RegExp(_0x195e54(_0xc2d37f), "i"),
          hit: _0xc2d37f,
          base: 22
        });
      }
      _0x43c325.push({
        re: /\$\.(?:md5|sha1?|sha256|sha512|sm3|hmac)\s*\(/i,
        hit: "$.md5/sha*",
        base: 58
      });
      _0x43c325.push({
        re: /(?:crypto|encrypt|cipher|sign(?:ature)?|salt|nonce|timestamp)/i,
        hit: "crypto-signals",
        base: 20
      });
      _0x43c325.push({
        re: /\$\.(?:ajax|post|get)\s*\(|fetch\s*\(/i,
        hit: "request-send",
        base: 16
      });
      _0x43c325.push({
        re: /\.val\s*\(/i,
        hit: ".val()",
        base: 12
      });
      let _0x118b5c = null;
      _0x43c325.forEach(_0x5f1d4d => {
        const _0x52a9b4 = _0x5f1d4d.re.exec(_0xb84b6d);
        if (!_0x52a9b4) {
          return;
        }
        const _0x910fd8 = _0x52a9b4.index;
        const _0x28a90a = Math.max(0, _0x910fd8 - 260);
        const _0x3aa764 = Math.min(_0xb84b6d.length, _0x910fd8 + 420);
        const _0x5ec5cc = _0xb84b6d.slice(_0x28a90a, _0x3aa764);
        let _0x1f8376 = _0x5f1d4d.base;
        if (_0x333199 && _0x333199 !== "URL" && _0x333199 !== "(unnamed)") {
          if (new RegExp("#" + _0x195e54(_0x333199), "i").test(_0x5ec5cc)) {
            _0x1f8376 += 30;
          }
          if (new RegExp("\\b" + _0x195e54(_0x333199) + "\\b", "i").test(_0x5ec5cc)) {
            _0x1f8376 += 20;
          }
        }
        if (/\$\.(?:md5|sha1?|sha256|sha512|sm3|hmac)\s*\(/i.test(_0x5ec5cc)) {
          _0x1f8376 += 34;
        }
        if (/var\s+\w+\s*=\s*\$\.(?:md5|sha1?|sha256|sha512|sm3|hmac)\s*\(/i.test(_0x5ec5cc)) {
          _0x1f8376 += 28;
        }
        if (/\$\.(?:ajax|post|get)\s*\(|fetch\s*\(/i.test(_0x5ec5cc)) {
          _0x1f8376 += 10;
        }
        if (/url\s*:\s*["'][^"']+["']/i.test(_0x5ec5cc)) {
          _0x1f8376 += 8;
        }
        if (_0x251bd3 && new RegExp(_0x195e54(_0x251bd3), "i").test(_0x5ec5cc)) {
          _0x1f8376 += 10;
        }
        if (_0xc2d37f && new RegExp(_0x195e54(_0xc2d37f), "i").test(_0x5ec5cc)) {
          _0x1f8376 += 10;
        }
        const _0x4e80ae = _0x41c482(_0x43c325.filter(_0x4c2916 => _0x4c2916.hit && _0x4c2916.re.test(_0x5ec5cc)).map(_0xf77bf1 => _0xf77bf1.hit), 8);
        const _0x3159f8 = {
          score: _0x1f8376,
          hits: _0x4e80ae,
          snippet: _0x4846fc(_0x5ec5cc, 920)
        };
        if (!_0x118b5c || _0x3159f8.score > _0x118b5c.score) {
          _0x118b5c = _0x3159f8;
        }
      });
      return _0x118b5c || {
        snippet: "",
        hits: [],
        score: 0
      };
    }
  }
  function _0x45e979(_0x5e36dc, _0x2b2583, _0x224c15) {
    if (_0x5e36dc === "inline") {
      return "inline:" + String(_0x2b2583 || "(inline)") + "#" + String(_0x224c15 || 0);
    }
    return "js:" + String(_0x2b2583 || "");
  }
  function _0x56c9c0(_0x59c1eb) {
    {
      const _0x39d7dd = String(_0x59c1eb || "").trim();
      if (!_0x39d7dd) {
        return {
          kind: "",
          sourceUrl: "",
          index: 0
        };
      }
      if (_0x39d7dd.indexOf("inline:") === 0) {
        {
          const _0x11aeef = _0x39d7dd.slice(7);
          const _0x501207 = _0x11aeef.lastIndexOf("#");
          return {
            kind: "inline",
            sourceUrl: _0x501207 >= 0 ? _0x11aeef.slice(0, _0x501207) : _0x11aeef,
            index: _0x501207 >= 0 ? parseInt(_0x11aeef.slice(_0x501207 + 1), 10) || 0 : 0
          };
        }
      }
      if (_0x39d7dd.indexOf("js:") === 0) {
        return {
          kind: "js",
          sourceUrl: _0x39d7dd.slice(3),
          index: 0
        };
      }
      return {
        kind: "",
        sourceUrl: _0x39d7dd,
        index: 0
      };
    }
  }
  function _0xcede0a(_0xc8b443, _0x2a20c1, _0x1a47eb, _0x5c4ec7, _0x1226cf) {
    const _0x3bfea7 = String(_0xc8b443 || "");
    if (!_0x3bfea7) {
      return [];
    }
    const _0x276373 = [];
    const _0x365375 = String(_0x2a20c1 && _0x2a20c1.fieldName || "").trim();
    const _0x40415a = _0x2e051d(_0x1a47eb && _0x1a47eb.headers || {}, "referer");
    const _0x19f5a4 = _0x2cf214(_0x1a47eb && _0x1a47eb.target);
    const _0x1a3312 = _0x2cf214(_0x40415a);
    _0x365375 && _0x365375 !== "URL" && _0x365375 !== "(unnamed)" && (_0x276373.push(new RegExp("#" + _0x195e54(_0x365375), "ig")), _0x276373.push(new RegExp("\\b" + _0x195e54(_0x365375) + "\\b", "ig")));
    if (_0x19f5a4) {
      _0x276373.push(new RegExp(_0x195e54(_0x19f5a4), "ig"));
    }
    if (_0x1a3312) {
      _0x276373.push(new RegExp(_0x195e54(_0x1a3312), "ig"));
    }
    _0x276373.push(/\$\.(?:md5|sha1?|sha256|sha512|sm3|hmac)\s*\(/ig);
    _0x276373.push(/(?:encrypt|crypto|cipher|sign(?:ature)?|salt|nonce|timestamp)/ig);
    _0x276373.push(/\$\.(?:ajax|post|get)\s*\(|fetch\s*\(/ig);
    _0x276373.push(/\.val\s*\(/ig);
    const _0x2a4819 = [];
    _0x276373.forEach(_0x2d4d7e => {
      {
        let _0x1ed26e = _0x2d4d7e.exec(_0x3bfea7);
        while (_0x1ed26e) {
          const _0x3a9beb = _0x1ed26e.index;
          if (_0x2a4819.every(_0x91305a => Math.abs(_0x91305a - _0x3a9beb) > 120)) {
            _0x2a4819.push(_0x3a9beb);
          }
          if (_0x2a4819.length >= (Number(_0x5c4ec7) > 0 ? Number(_0x5c4ec7) : 4)) {
            break;
          }
          _0x1ed26e = _0x2d4d7e.exec(_0x3bfea7);
        }
      }
    });
    if (!_0x2a4819.length) {
      return [_0x4846fc(_0x3bfea7, _0x1226cf || 1200)];
    }
    _0x2a4819.sort((_0x469784, _0x3139a2) => _0x469784 - _0x3139a2);
    return _0x2a4819.slice(0, Number(_0x5c4ec7) > 0 ? Number(_0x5c4ec7) : 4).map(_0x4be605 => {
      const _0x59260a = Math.max(0, _0x4be605 - 420);
      const _0x1ef0b8 = Math.min(_0x3bfea7.length, _0x4be605 + 880);
      return _0x4846fc(_0x3bfea7.slice(_0x59260a, _0x1ef0b8), _0x1226cf || 1200);
    }).filter(Boolean);
  }
  function _0x286602(_0x12b36d, _0x5bd1de) {
    const _0x1a0db3 = Array.isArray(_0x12b36d && _0x12b36d.assetCandidates) ? _0x12b36d.assetCandidates : [];
    if (!_0x1a0db3.length) {
      return _0x5bd1de ? "- No candidate assets." : "- 未找到可疑脚本候选。";
    }
    return _0x1a0db3.slice(0, 10).map(_0x452016 => {
      const _0x25e9d7 = ["- " + String(_0x452016.ref || "-")];
      _0x25e9d7.push("  " + (_0x5bd1de ? "kind: " : "类型: ") + (_0x452016.kind === "inline" ? _0x5bd1de ? "inline-script" : "内联脚本" : "js"));
      _0x25e9d7.push("  " + (_0x5bd1de ? "source: " : "来源: ") + String(_0x452016.sourceUrl || "-"));
      if (_0x452016.hits && _0x452016.hits.length) {
        _0x25e9d7.push("  " + (_0x5bd1de ? "hits: " : "命中: ") + _0x452016.hits.join(", "));
      }
      if (_0x452016.excerpt) {
        _0x25e9d7.push("  " + (_0x5bd1de ? "summary: " : "摘要: ") + _0x46579f(_0x452016.excerpt, 260));
      }
      return _0x25e9d7.join("\n");
    }).join("\n");
  }
  function _0x554cd1(_0x1576f0) {
    const _0x523107 = _0x1576f0 && _0x1576f0.triage && typeof _0x1576f0.triage === "object" ? _0x1576f0.triage : null;
    if (!_0x523107) {
      return null;
    }
    return {
      summary: String(_0x523107.summary || ""),
      suspiciousRefs: Array.isArray(_0x523107.suspiciousRefs) ? _0x523107.suspiciousRefs.map(_0x45d8a5 => String(_0x45d8a5 || "").trim()).filter(Boolean) : [],
      rationale: Array.isArray(_0x523107.rationale) ? _0x523107.rationale.map(_0x43e81b => String(_0x43e81b || "").trim()).filter(Boolean) : [],
      nextKeywords: Array.isArray(_0x523107.nextKeywords) ? _0x523107.nextKeywords.map(_0x279f80 => String(_0x279f80 || "").trim()).filter(Boolean) : []
    };
  }
  function _0x4d393b(_0x203041, _0x3147d9, _0x4fc562) {
    const _0x35e30c = Array.isArray(_0x203041 && _0x203041.assetCandidates) ? _0x203041.assetCandidates : [];
    const _0x2f654d = _0x35e30c.map(_0x2aa3fd => String(_0x2aa3fd.ref || ""));
    const _0x1d51c6 = new Set((_0x4fc562 || []).map(_0x164a69 => String(_0x164a69 || "")));
    const _0x41b85d = [];
    (_0x3147d9 && Array.isArray(_0x3147d9.suspiciousRefs) ? _0x3147d9.suspiciousRefs : []).forEach(_0x463048 => {
      const _0x42db98 = String(_0x463048 || "");
      if (!_0x42db98 || _0x1d51c6.has(_0x42db98) || _0x2f654d.indexOf(_0x42db98) < 0 || _0x41b85d.indexOf(_0x42db98) >= 0) {
        return;
      }
      _0x41b85d.push(_0x42db98);
    });
    if (_0x41b85d.length) {
      return _0x41b85d.slice(0, 3);
    }
    for (const _0x386eaf of _0x35e30c) {
      const _0x55ce32 = String(_0x386eaf && _0x386eaf.ref || "");
      if (!_0x55ce32 || _0x1d51c6.has(_0x55ce32)) {
        continue;
      }
      _0x41b85d.push(_0x55ce32);
      if (_0x41b85d.length >= 3) {
        break;
      }
    }
    return _0x41b85d;
  }
  function _0x238732(_0x122255, _0x59fb1f, _0x42fa96, _0x5b5c74) {
    {
      const _0x1ffb0a = Array.isArray(_0x122255 && _0x122255.assetCandidates) ? _0x122255.assetCandidates : [];
      const _0x3075fb = Array.isArray(_0x42fa96) && _0x42fa96.length ? _0x42fa96 : _0x1ffb0a.slice(0, 2).map(_0xf3105a => String(_0xf3105a.ref || ""));
      const _0x1005c6 = [];
      const _0x597fbb = [];
      _0x3075fb.forEach(_0x3b0280 => {
        const _0x1a7e7c = _0x1ffb0a.find(_0x1e1ffa => String(_0x1e1ffa.ref || "") === String(_0x3b0280 || ""));
        if (!_0x1a7e7c) {
          return;
        }
        _0x597fbb.push(String(_0x1a7e7c.ref || ""));
        const _0x5cb8e1 = String(_0x1a7e7c.rawCode != null ? _0x1a7e7c.rawCode : "");
        const _0x1bb458 = _0xcede0a(_0x5cb8e1, _0x59fb1f && _0x59fb1f.focus, _0x59fb1f && _0x59fb1f.requestInfo, 4, _0x1a7e7c.kind === "inline" ? 1400 : 1200);
        const _0x1d05fd = ["- " + String(_0x1a7e7c.ref || "-"), "  " + (_0x5b5c74 ? "kind: " : "类型: ") + (_0x1a7e7c.kind === "inline" ? _0x5b5c74 ? "inline-script" : "内联脚本" : "js"), "  " + (_0x5b5c74 ? "source: " : "来源: ") + String(_0x1a7e7c.sourceUrl || "-")];
        if (_0x1a7e7c.hits && _0x1a7e7c.hits.length) {
          _0x1d05fd.push("  " + (_0x5b5c74 ? "hits: " : "命中: ") + _0x1a7e7c.hits.join(", "));
        }
        if (_0x1a7e7c.excerpt) {
          _0x1d05fd.push("  " + (_0x5b5c74 ? "summary: " : "摘要: ") + _0x46579f(_0x1a7e7c.excerpt, 260));
        }
        _0x1bb458.length && _0x1d05fd.push("  " + (_0x5b5c74 ? "focused code:" : "深度代码片段: ") + "\n" + _0x1bb458.map((_0x5dd46a, _0x504dbe) => "  [" + (_0x504dbe + 1) + "]\n" + _0x5dd46a).join("\n"));
        _0x1005c6.push(_0x1d05fd.join("\n"));
      });
      return {
        refs: _0x597fbb,
        text: _0x1005c6.join("\n\n")
      };
    }
  }
  const _0x530e37 = /(?:\$\.(?:md5|sha1?|sha256|sha512|sm3|hmac)\s*\(|CryptoJS\.(?:MD5|SHA1|SHA256|SHA512|HmacSHA1|HmacSHA256|AES\.encrypt|DES\.encrypt)|\b(?:hex_md5|btoa|atob)\s*\(|\b(?:encrypt|encrypted|sign(?:ature)?|hmac|digest|cipher|base64(?:encode|decode)?)\s*\()/i;
  function _0x324349(_0x45f513) {
    return /^[A-Za-z_$][\w$]*$/.test(String(_0x45f513 || "").trim());
  }
  function _0x59240d(_0x2394e7) {
    return String(_0x2394e7 || "").replace(/\s+/g, " ").replace(/\s*;\s*$/, "").trim();
  }
  function _0x4c3a3(_0x47ba47) {
    const _0x255e89 = String(_0x47ba47 || "");
    const _0x2bec87 = [];
    if (/md5/i.test(_0x255e89)) {
      _0x2bec87.push("MD5");
    }
    if (/sha1/i.test(_0x255e89)) {
      _0x2bec87.push("SHA1");
    }
    if (/sha256/i.test(_0x255e89)) {
      _0x2bec87.push("SHA256");
    }
    if (/sha512/i.test(_0x255e89)) {
      _0x2bec87.push("SHA512");
    }
    if (/sm3/i.test(_0x255e89)) {
      _0x2bec87.push("SM3");
    }
    if (/hmac/i.test(_0x255e89)) {
      _0x2bec87.push("HMAC");
    }
    if (/base64|btoa|atob/i.test(_0x255e89)) {
      _0x2bec87.push("Base64");
    }
    if (/\bAES\b|aes\.encrypt/i.test(_0x255e89)) {
      _0x2bec87.push("AES");
    }
    if (/\bDES\b|des\.encrypt/i.test(_0x255e89)) {
      _0x2bec87.push("DES");
    }
    if (/\bRSA\b|rsa/i.test(_0x255e89)) {
      _0x2bec87.push("RSA");
    }
    return _0x41c482(_0x2bec87, 6);
  }
  function _0x163211(_0x57a08e, _0x4f6578) {
    if (!_0x57a08e || !_0x57a08e.exactFormula) {
      return "";
    }
    const _0x274f5f = [];
    _0x274f5f.push(_0x4f6578 ? "Local exact code-level evidence" : "本地提取的代码级硬证据");
    _0x274f5f.push("- " + (_0x4f6578 ? "matched ref: " : "命中资源：") + (_0x57a08e.refs && _0x57a08e.refs.length ? _0x57a08e.refs.join(", ") : "-"));
    _0x274f5f.push("- " + (_0x4f6578 ? "exact formula: " : "明确公式：") + _0x57a08e.exactFormula);
    (_0x57a08e.exactCodeClues || []).slice(0, 3).forEach(_0x1a5bea => _0x274f5f.push("- " + _0x1a5bea));
    return _0x274f5f.join("\n");
  }
  function _0x51a408(_0x41e561, _0x13b21b, _0x221224) {
    if (!_0x41e561 || !_0x41e561.exactFormula) {
      return null;
    }
    const _0x424b1b = _0x13b21b && _0x13b21b.focus ? _0x13b21b.focus : {};
    const _0x4f9b62 = _0x13b21b && _0x13b21b.requestInfo ? _0x13b21b.requestInfo : {};
    const _0x4ac3ba = String(_0x41e561.target || _0x424b1b.fieldName || _0x424b1b.scopeLabel || "").trim() || (_0x221224 ? "target field" : "目标字段");
    const _0x2e268f = String((_0x4f9b62.method || "-") + " " + (_0x4f9b62.target || _0x4f9b62.url || "-")).trim();
    return {
      analysis: {
        target: _0x4ac3ba,
        assessment: _0x221224 ? "Code-level confirmation: the target field is generated client-side as " + _0x41e561.exactFormula + " before submission." : "代码级确认：目标字段在前端提交前按 " + _0x41e561.exactFormula + " 生成。",
        confidence: _0x221224 ? "high" : "高",
        likelyKinds: Array.isArray(_0x41e561.likelyKinds) ? _0x41e561.likelyKinds : [],
        reasoningChain: Array.isArray(_0x41e561.reasoningChain) ? _0x41e561.reasoningChain : [],
        packetTrail: _0x41c482([_0x2e268f ? (_0x221224 ? "Source request: " : "来源请求：") + _0x2e268f : "", ...(Array.isArray(_0x41e561.packetTrail) ? _0x41e561.packetTrail : [])], 10),
        exactFormula: String(_0x41e561.exactFormula || ""),
        exactCodeClues: Array.isArray(_0x41e561.exactCodeClues) ? _0x41e561.exactCodeClues : [],
        evidence: Array.isArray(_0x41e561.evidence) ? _0x41e561.evidence : [],
        jsClues: Array.isArray(_0x41e561.jsClues) ? _0x41e561.jsClues : [],
        validationSteps: Array.isArray(_0x41e561.validationSteps) ? _0x41e561.validationSteps : [],
        searchKeywords: Array.isArray(_0x41e561.searchKeywords) ? _0x41e561.searchKeywords : []
      }
    };
  }
  function _0x540900(_0xf5a6d4, _0x4db2e1, _0x1f2722, _0x232d19) {
    const _0x3e0091 = _0x51a408(_0x4db2e1, _0x1f2722, _0x232d19);
    if (!_0x3e0091) {
      return _0xf5a6d4;
    }
    const _0x313d34 = _0xf5a6d4 && _0xf5a6d4.analysis && typeof _0xf5a6d4.analysis === "object" ? _0xf5a6d4.analysis : {};
    const _0x15dd16 = _0x3e0091.analysis;
    return {
      analysis: {
        target: String(_0x313d34.target || _0x15dd16.target || ""),
        assessment: String(_0x15dd16.assessment || _0x313d34.assessment || ""),
        confidence: String(_0x15dd16.confidence || _0x313d34.confidence || ""),
        likelyKinds: _0x41c482([].concat(_0x15dd16.likelyKinds || [], _0x313d34.likelyKinds || []), 8),
        reasoningChain: _0x41c482([].concat(_0x15dd16.reasoningChain || [], _0x313d34.reasoningChain || []), 16),
        packetTrail: _0x41c482([].concat(_0x15dd16.packetTrail || [], _0x313d34.packetTrail || []), 16),
        exactFormula: String(_0x15dd16.exactFormula || _0x313d34.exactFormula || ""),
        exactCodeClues: _0x41c482([].concat(_0x15dd16.exactCodeClues || [], _0x313d34.exactCodeClues || []), 12),
        evidence: _0x41c482([].concat(_0x15dd16.evidence || [], _0x313d34.evidence || []), 16),
        jsClues: _0x41c482([].concat(_0x15dd16.jsClues || [], _0x313d34.jsClues || []), 16),
        validationSteps: _0x41c482([].concat(_0x15dd16.validationSteps || [], _0x313d34.validationSteps || []), 16),
        searchKeywords: _0x41c482([].concat(_0x15dd16.searchKeywords || [], _0x313d34.searchKeywords || []), 16)
      }
    };
  }
  function _0x5518fe(_0x596ce1, _0xc15631, _0x47f8aa) {
    {
      const _0x43969a = Array.isArray(_0x596ce1 && _0x596ce1.assetCandidates) ? _0x596ce1.assetCandidates : [];
      const _0x356e70 = _0xc15631 && _0xc15631.focus ? _0xc15631.focus : {};
      const _0x5136f6 = _0xc15631 && _0xc15631.requestInfo ? _0xc15631.requestInfo : {};
      const _0x44e0fb = String(_0x356e70.fieldName || "").trim();
      if (!_0x43969a.length) {
        return null;
      }
      const _0x2ff7b5 = _0x44e0fb.toLowerCase();
      const _0x35d06a = [];
      _0x43969a.forEach(_0x3d4514 => {
        {
          const _0x457eea = String(_0x3d4514 && _0x3d4514.rawCode != null ? _0x3d4514.rawCode : "");
          if (!_0x457eea) {
            return;
          }
          const _0x266953 = _0xcede0a(_0x457eea, _0x356e70, _0x5136f6, 6, _0x3d4514.kind === "inline" ? 1800 : 1500);
          _0x266953.forEach(_0x31ded4 => {
            const _0x398d02 = new Set();
            if (_0x324349(_0x44e0fb)) {
              _0x398d02.add(_0x44e0fb);
            }
            if (_0x44e0fb && _0x44e0fb !== "URL") {
              const _0xec5c9d = [new RegExp("(?:\\b|[\"'])" + _0x195e54(_0x44e0fb) + "(?:[\"'])?\\s*:\\s*([A-Za-z_$][\\w$]*|[^,}\\n]{1,220})", "ig"), new RegExp("(?:append|set)\\s*\\(\\s*[\"']" + _0x195e54(_0x44e0fb) + "[\"']\\s*,\\s*([^\\)\\n]{1,220})\\)", "ig")];
              _0xec5c9d.forEach(_0x307b14 => {
                let _0x2082f7 = _0x307b14.exec(_0x31ded4);
                while (_0x2082f7) {
                  {
                    const _0x3b7a91 = _0x59240d(_0x2082f7[1] || "");
                    if (_0x324349(_0x3b7a91)) {
                      _0x398d02.add(_0x3b7a91);
                    }
                    if (_0x530e37.test(_0x3b7a91)) {
                      {
                        _0x35d06a.push({
                          score: 320 + (_0x3d4514.kind === "inline" ? 30 : 0),
                          ref: String(_0x3d4514.ref || ""),
                          sourceUrl: String(_0x3d4514.sourceUrl || ""),
                          exactFormula: _0x3b7a91,
                          snippet: _0x4846fc(_0x31ded4, 1000)
                        });
                      }
                    }
                    _0x2082f7 = _0x307b14.exec(_0x31ded4);
                  }
                }
              });
            }
            const _0x4a59dd = /(?:var|let|const)?\s*([A-Za-z_$][\w$]*)\s*=\s*([\s\S]{1,260}?);/g;
            let _0x508dc4 = _0x4a59dd.exec(_0x31ded4);
            while (_0x508dc4) {
              {
                const _0x282fe9 = String(_0x508dc4[1] || "").trim();
                const _0x36a2ed = _0x59240d(_0x508dc4[2] || "");
                if (!_0x530e37.test(_0x36a2ed)) {
                  _0x508dc4 = _0x4a59dd.exec(_0x31ded4);
                  continue;
                }
                const _0x13bbb8 = _0x282fe9.toLowerCase();
                const _0x4e7eee = _0x398d02.has(_0x282fe9);
                const _0x5f15ba = !!(_0x44e0fb && (_0x13bbb8 === _0x2ff7b5 || _0x36a2ed.indexOf("#" + _0x44e0fb) >= 0 || new RegExp("\\b" + _0x195e54(_0x44e0fb) + "\\b", "i").test(_0x36a2ed)));
                if (!_0x4e7eee && !_0x5f15ba) {
                  _0x508dc4 = _0x4a59dd.exec(_0x31ded4);
                  continue;
                }
                let _0x2a7a74 = 200;
                if (_0x4e7eee) {
                  _0x2a7a74 += 70;
                }
                if (_0x5f15ba) {
                  _0x2a7a74 += 60;
                }
                if (_0x3d4514.kind === "inline") {
                  _0x2a7a74 += 40;
                }
                if (/\$\.(?:ajax|post|get)\s*\(|fetch\s*\(/i.test(_0x31ded4)) {
                  _0x2a7a74 += 18;
                }
                _0x35d06a.push({
                  score: _0x2a7a74,
                  ref: String(_0x3d4514.ref || ""),
                  sourceUrl: String(_0x3d4514.sourceUrl || ""),
                  exactFormula: _0x36a2ed,
                  varName: _0x282fe9,
                  snippet: _0x4846fc(_0x31ded4, 1000)
                });
                _0x508dc4 = _0x4a59dd.exec(_0x31ded4);
              }
            }
          });
        }
      });
      if (!_0x35d06a.length) {
        return null;
      }
      _0x35d06a.sort((_0x34f84e, _0x2b5a9b) => _0x2b5a9b.score - _0x34f84e.score);
      const _0x412c7a = _0x35d06a[0];
      const _0x4360aa = String(_0x412c7a.exactFormula || "").trim();
      const _0x2ad193 = _0x4c3a3(_0x4360aa);
      const _0x4ea913 = String((_0x5136f6.method || "-") + " " + (_0x5136f6.target || _0x5136f6.url || "-")).trim();
      const _0x123348 = [(_0x47f8aa ? "Source request: " : "来源请求：") + _0x4ea913, (_0x47f8aa ? "Matched resource: " : "命中资源：") + String(_0x412c7a.ref || _0x412c7a.sourceUrl || "-"), (_0x47f8aa ? "Submit field mapping: " : "字段提交映射：") + (_0x44e0fb || _0x412c7a.varName || "-")];
      const _0x305884 = [_0x47f8aa ? "Observed exact code-level assignment for " + (_0x44e0fb || _0x412c7a.varName || "target field") + ": " + _0x4360aa : "在代码中直接观察到 " + (_0x44e0fb || _0x412c7a.varName || "目标字段") + " 的赋值表达式：" + _0x4360aa, _0x47f8aa ? "The matched code window also contains the login submit flow / request send logic, linking the expression to the submitted request." : "命中的代码窗口同时包含登录提交 / 请求发送逻辑，能够把该表达式与最终提交请求关联起来。"];
      return {
        target: _0x44e0fb || _0x412c7a.varName || "",
        refs: _0x41c482([String(_0x412c7a.ref || "")], 3),
        exactFormula: _0x4360aa,
        likelyKinds: _0x2ad193,
        confidence: _0x47f8aa ? "high" : "高",
        assessment: _0x47f8aa ? "Code-level evidence confirms the field is generated as " + _0x4360aa + " before submission." : "代码级证据确认该字段在提交前按 " + _0x4360aa + " 生成。",
        reasoningChain: _0x305884,
        packetTrail: _0x123348,
        exactCodeClues: _0x41c482([String(_0x412c7a.ref || _0x412c7a.sourceUrl || ""), _0x4360aa, _0x4846fc(String(_0x412c7a.snippet || ""), 680)], 6),
        evidence: _0x41c482([_0x47f8aa ? "Exact expression extracted from captured HTML / JS." : "已从抓包 HTML / JS 中提取到明确表达式。", _0x47f8aa ? "The expression is tied to the target field / submission mapping inside the same code window." : "该表达式在同一代码窗口内与目标字段 / 提交映射相关联。"], 6),
        jsClues: _0x41c482([String(_0x412c7a.ref || ""), String(_0x412c7a.sourceUrl || "")], 6),
        validationSteps: _0x41c482([_0x47f8aa ? "Set a breakpoint on the matched inline script / JS line and confirm the computed value equals the submitted field." : "在命中的内联脚本 / JS 行打断点，确认计算结果与提交字段一致。", _0x47f8aa ? "Replay the expression locally with a sample password to verify the resulting MD5 / digest output." : "使用样例密码在本地重算该表达式，验证其 MD5 / 摘要输出是否一致。"], 8),
        searchKeywords: _0x41c482([_0x44e0fb || "", _0x412c7a.varName || "", "$.md5", "#password", "login", "ajax"], 10)
      };
    }
  }
  function _0x537444(_0x1bbfd1, _0x3dc2c6, _0xc02b16, _0x58b45c) {
    const _0x5f4ec1 = _0x58b45c && typeof _0x58b45c === "object" ? _0x58b45c : {};
    const _0x76c3c4 = Array.isArray(_0x5f4ec1.excludeRefs) ? _0x5f4ec1.excludeRefs.map(_0x47ee84 => String(_0x47ee84 || "")).filter(Boolean) : [];
    const _0x2103fd = String(_0x5f4ec1.priorFinding || "").trim();
    const _0xc907b6 = _0x5c7ab1(_0x1bbfd1 && _0x1bbfd1.extraPrompt ? _0x1bbfd1.extraPrompt : "");
    const _0x2b27e6 = _0x1bbfd1 && _0x1bbfd1.focus ? _0x1bbfd1.focus : {};
    const _0x2d45b1 = _0x1bbfd1 && _0x1bbfd1.requestInfo ? _0x1bbfd1.requestInfo : {};
    const _0xecf18f = [];
    if (_0xc02b16) {
      _0xecf18f.push("Task: from the candidate HTML / inline-script / JS clues below, choose the assets most likely to directly produce the target field value.");
      _0xecf18f.push("Prefer exact field references, login submit handlers, inline scripts, and concrete expressions over generic crypto library files.");
      _0xecf18f.push("");
      _0xecf18f.push("- target field: " + (_0x2b27e6.fieldName || "(unknown)"));
      _0xecf18f.push("- target source: " + (_0x2b27e6.fieldSource || "-"));
      _0xecf18f.push("- target value: " + _0x190c98(String(_0x2b27e6.value || ""), 180));
      _0xecf18f.push("- request: " + (_0x2d45b1.method || "-") + " " + (_0x2d45b1.target || _0x2d45b1.url || "-"));
      if (_0x76c3c4.length) {
        _0xecf18f.push("- already inspected refs: " + _0x76c3c4.join(", "));
      }
      _0x2103fd && (_0xecf18f.push(""), _0xecf18f.push("Current finding"), _0xecf18f.push(_0x2103fd));
      _0xc907b6 && (_0xecf18f.push(""), _0xecf18f.push("User additional context / focus"), _0xecf18f.push(_0xc907b6));
      _0xecf18f.push("");
      _0xecf18f.push("Candidate assets");
      _0xecf18f.push(_0x286602(_0x3dc2c6, true));
      _0xecf18f.push("");
      _0xecf18f.push("Output requirements");
      _0xecf18f.push("1. suspiciousRefs: choose up to 3 refs from the list exactly as written.");
      _0xecf18f.push("2. rationale: explain why those refs are most relevant to the final submitted field value.");
      _0xecf18f.push("3. nextKeywords: suggest follow-up keywords/functions worth checking inside those refs.");
    } else {
      _0xecf18f.push("任务：从下面的 HTML / 内联脚本 / JS 候选线索中，筛出最可能直接参与生成目标字段值的脚本。");
      _0xecf18f.push("优先选择：精确字段引用、登录提交事件、内联脚本、具体运算表达式；不要优先选仅提供通用算法能力的库文件。");
      _0xecf18f.push("");
      _0xecf18f.push("- 目标字段：" + (_0x2b27e6.fieldName || "未识别"));
      _0xecf18f.push("- 字段来源：" + (_0x2b27e6.fieldSource || "-"));
      _0xecf18f.push("- 当前值：" + _0x190c98(String(_0x2b27e6.value || ""), 180));
      _0xecf18f.push("- 请求：" + (_0x2d45b1.method || "-") + " " + (_0x2d45b1.target || _0x2d45b1.url || "-"));
      if (_0x76c3c4.length) {
        _0xecf18f.push("- 已深挖的候选：" + _0x76c3c4.join("，"));
      }
      _0x2103fd && (_0xecf18f.push(""), _0xecf18f.push("当前阶段结论"), _0xecf18f.push(_0x2103fd));
      _0xc907b6 && (_0xecf18f.push(""), _0xecf18f.push("用户补充说明 / 关注重点"), _0xecf18f.push(_0xc907b6));
      _0xecf18f.push("");
      _0xecf18f.push("候选脚本");
      _0xecf18f.push(_0x286602(_0x3dc2c6, false));
      _0xecf18f.push("");
      _0xecf18f.push("输出要求");
      _0xecf18f.push("1. suspiciousRefs：从候选列表里原样选择最多 3 个 ref。");
      _0xecf18f.push("2. rationale：说明为什么这些 ref 最可能直接参与最终提交字段值的生成。");
      _0xecf18f.push("3. nextKeywords：给出后续应重点搜索的函数名、关键字或变量名。");
    }
    return _0xecf18f.join("\n");
  }
  function _0x358f80(_0x5d5203, _0x177e4b, _0x2bb21d) {
    if (!_0x5d5203) {
      return "";
    }
    const _0x42ed5d = [];
    _0x42ed5d.push((_0x177e4b ? "Round " : "第 ") + String(_0x2bb21d || 1) + (_0x177e4b ? " triage" : " 轮筛查"));
    if (_0x5d5203.summary) {
      _0x42ed5d.push("- " + (_0x177e4b ? "summary: " : "摘要：") + _0x5d5203.summary);
    }
    if (_0x5d5203.suspiciousRefs && _0x5d5203.suspiciousRefs.length) {
      _0x42ed5d.push("- " + (_0x177e4b ? "selected refs: " : "选中的 ref：") + _0x5d5203.suspiciousRefs.join(", "));
    }
    (_0x5d5203.rationale || []).forEach(_0xd5f561 => _0x42ed5d.push("- " + _0xd5f561));
    return _0x42ed5d.join("\n");
  }
  function _0x29dc63(_0x561141, _0x1de708, _0x8daab5) {
    {
      const _0xe66679 = _0x561141 && _0x561141.analysis && typeof _0x561141.analysis === "object" ? _0x561141.analysis : null;
      if (!_0xe66679) {
        return true;
      }
      if (String(_0xe66679.exactFormula || "").trim()) {
        return false;
      }
      const _0x185844 = Array.isArray(_0x1de708 && _0x1de708.assetCandidates) ? _0x1de708.assetCandidates : [];
      const _0x4c29d3 = _0x185844.filter(_0x2def10 => _0x8daab5.indexOf(String(_0x2def10.ref || "")) < 0);
      return _0x4c29d3.length > 0;
    }
  }
  function _0x3c5759(_0x431900, _0x5cfb06) {
    const _0x295cbb = _0x431900 && _0x431900.analysis && typeof _0x431900.analysis === "object" ? _0x431900.analysis : null;
    if (!_0x295cbb) {
      return "";
    }
    const _0x5a9020 = [];
    if (_0x295cbb.target) {
      _0x5a9020.push((_0x5cfb06 ? "target=" : "对象=") + _0x295cbb.target);
    }
    if (_0x295cbb.exactFormula) {
      _0x5a9020.push((_0x5cfb06 ? "formula=" : "公式=") + _0x295cbb.exactFormula);
    }
    if (_0x295cbb.assessment) {
      _0x5a9020.push((_0x5cfb06 ? "assessment=" : "结论=") + _0x46579f(String(_0x295cbb.assessment || ""), 220));
    }
    return _0x5a9020.join(" | ");
  }
  function _0x134b64(_0x3f5d26) {
    const _0x4a08c5 = String(_0x3f5d26 || "");
    if (!_0x4a08c5) {
      return false;
    }
    let _0x27b273 = 0;
    for (let _0x407cf4 = 0; _0x407cf4 < _0x4a08c5.length; _0x407cf4 += 1) {
      {
        const _0x274322 = _0x4a08c5.charCodeAt(_0x407cf4);
        if (_0x274322 === 9 || _0x274322 === 10 || _0x274322 === 13 || _0x274322 >= 32 && _0x274322 <= 126 || _0x274322 >= 160) {
          _0x27b273 += 1;
        }
      }
    }
    return _0x27b273 / Math.max(1, _0x4a08c5.length) >= 0.82;
  }
  function _0x4e577b(_0x53b275) {
    {
      const _0x5925d1 = String(_0x53b275 == null ? "" : _0x53b275);
      const _0x521f41 = [];
      const _0x35786d = [];
      if (!_0x5925d1) {
        return {
          length: 0,
          signals: ["empty"],
          previews: _0x35786d
        };
      }
      const _0x3e9cb8 = _0x5925d1.length >= 8 && _0x5925d1.length % 2 === 0 && /^[0-9a-f]+$/i.test(_0x5925d1);
      const _0x46f398 = _0x5925d1.length >= 8 && _0x5925d1.length % 4 === 0 && /^[A-Za-z0-9+/]+={0,2}$/.test(_0x5925d1) && !_0x3e9cb8;
      const _0x1150eb = _0x5925d1.length >= 8 && /^[A-Za-z0-9_-]+$/.test(_0x5925d1) && !_0x3e9cb8 && !_0x46f398 && /[_-]/.test(_0x5925d1);
      const _0x3d48d3 = /^[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+$/.test(_0x5925d1);
      const _0x3a0899 = /%[0-9a-f]{2}/i.test(_0x5925d1) || /\+/.test(_0x5925d1);
      const _0x5ebd7b = /^\d{6,}$/.test(_0x5925d1);
      if (_0x3e9cb8) {
        _0x521f41.push("hex-like");
        if (_0x5925d1.length === 32) {
          _0x521f41.push("md5-like");
        } else {
          if (_0x5925d1.length === 40) {
            _0x521f41.push("sha1-like");
          } else {
            if (_0x5925d1.length === 64) {
              _0x521f41.push("sha256-like");
            } else {
              if (_0x5925d1.length === 128) {
                _0x521f41.push("sha512-like");
              }
            }
          }
        }
        try {
          const _0x4ffde8 = _0x35ac25(_0x1d02e9(_0x5925d1));
          if (_0x134b64(_0x4ffde8)) {
            _0x35786d.push("hex->text: " + _0x46579f(_0x4ffde8, 120));
          }
        } catch (_0x112c7a) {}
      }
      if (_0x46f398) {
        {
          _0x521f41.push("base64-like");
          try {
            const _0x1931ec = _0x2137bd(_0x5925d1);
            if (_0x134b64(_0x1931ec)) {
              _0x35786d.push("base64->text: " + _0x46579f(_0x1931ec, 120));
            }
          } catch (_0x427b05) {}
        }
      }
      if (_0x1150eb) {
        _0x521f41.push("base64url-like");
        try {
          const _0x23e8fb = _0x151fb3(_0x5925d1);
          if (_0x134b64(_0x23e8fb)) {
            _0x35786d.push("base64url->text: " + _0x46579f(_0x23e8fb, 120));
          }
        } catch (_0x273e24) {}
      }
      if (_0x3d48d3) {
        _0x521f41.push("jwt-like");
      }
      if (_0x5ebd7b) {
        _0x521f41.push("digits-only");
        if (_0x5925d1.length === 10 || _0x5925d1.length === 13) {
          _0x521f41.push("timestamp-like");
        }
      }
      if (_0x3a0899) {
        _0x521f41.push("url-encoded-like");
        try {
          const _0xb172ff = decodeURIComponent(_0x5925d1.replace(/\+/g, "%20"));
          if (_0xb172ff !== _0x5925d1 && _0x134b64(_0xb172ff)) {
            _0x35786d.push("url-decode: " + _0x46579f(_0xb172ff, 120));
          }
        } catch (_0x2ef4c4) {}
      }
      if (/^[A-Z0-9]+$/.test(_0x5925d1) && _0x5925d1.length >= 12) {
        _0x521f41.push("uppercase-token-like");
      }
      if (/^[a-z0-9]+$/.test(_0x5925d1) && _0x5925d1.length >= 12) {
        _0x521f41.push("lowercase-token-like");
      }
      if (/[\x80-\uffff]/.test(_0x5925d1)) {
        _0x521f41.push("contains-non-ascii");
      }
      const _0x14df11 = /[A-Z]/.test(_0x5925d1);
      const _0x596417 = /[a-z]/.test(_0x5925d1);
      const _0x4fc5a8 = /\d/.test(_0x5925d1);
      const _0x55c1cd = /[^A-Za-z0-9]/.test(_0x5925d1);
      const _0x4a7620 = [];
      if (_0x14df11) {
        _0x4a7620.push("upper");
      }
      if (_0x596417) {
        _0x4a7620.push("lower");
      }
      if (_0x4fc5a8) {
        _0x4a7620.push("digit");
      }
      if (_0x55c1cd) {
        _0x4a7620.push("symbol");
      }
      if (_0x4a7620.length) {
        _0x521f41.push("charset:" + _0x4a7620.join("+"));
      }
      return {
        length: _0x5925d1.length,
        signals: _0x41c482(_0x521f41, 8),
        previews: _0x41c482(_0x35786d, 3)
      };
    }
  }
  function _0x5c0096(_0x257abd, _0x5b3a13) {
    const _0x10d2b3 = String(_0x257abd == null ? "" : _0x257abd);
    return _0x5b3a13 ? _0x190c98(_0x10d2b3, 220) : _0x190c98(_0x10d2b3, 64);
  }
  function _0x80fc82(_0x37c447, _0x359cd9, _0x354259, _0x417ef2) {
    {
      if (!_0x354259 || _0x354259.length >= _0x417ef2) {
        return;
      }
      if (_0x37c447 == null || typeof _0x37c447 === "string" || typeof _0x37c447 === "number" || typeof _0x37c447 === "boolean") {
        _0x354259.push({
          source: "body.json",
          key: _0x359cd9 || "(root)",
          value: _0x37c447 == null ? "null" : String(_0x37c447)
        });
        return;
      }
      if (Array.isArray(_0x37c447)) {
        for (let _0x54e9da = 0; _0x54e9da < _0x37c447.length && _0x54e9da < 8; _0x54e9da += 1) {
          _0x80fc82(_0x37c447[_0x54e9da], (_0x359cd9 || "$") + "[" + _0x54e9da + "]", _0x354259, _0x417ef2);
          if (_0x354259.length >= _0x417ef2) {
            break;
          }
        }
        return;
      }
      if (typeof _0x37c447 === "object") {
        {
          const _0xd811b4 = Object.keys(_0x37c447).slice(0, 24);
          for (let _0x4de2f4 = 0; _0x4de2f4 < _0xd811b4.length; _0x4de2f4 += 1) {
            const _0x9e75a1 = _0xd811b4[_0x4de2f4];
            _0x80fc82(_0x37c447[_0x9e75a1], _0x359cd9 ? _0x359cd9 + "." + _0x9e75a1 : _0x9e75a1, _0x354259, _0x417ef2);
            if (_0x354259.length >= _0x417ef2) {
              break;
            }
          }
        }
      }
    }
  }
  function _0x3ed261(_0x1b605a) {
    const _0x5273e3 = _0x83e0ec(_0x1b605a);
    const _0x4c1814 = String(_0x5273e3.startLine || "").trim();
    const _0xa6c3ce = _0x4c1814.match(/^(\S+)\s+(.+?)\s+HTTP\/[0-9.]+$/i);
    const _0x325245 = (_0xa6c3ce && _0xa6c3ce[1] || _0x4c1814.split(/\s+/)[0] || "GET").toUpperCase();
    const _0x5f89ce = _0xa6c3ce && _0xa6c3ce[2] ? _0xa6c3ce[2] : _0x4c1814.split(/\s+/)[1] || "";
    const _0x4e6081 = _0x233c3e(_0x5273e3.headerLines || []);
    const _0x7f7416 = _0x2e051d(_0x4e6081, "content-type").toLowerCase();
    const _0x11cbed = String(_0x5273e3.body || "");
    const _0x1995a3 = [];
    function _0x39addb(_0x5a2b23, _0x1deff1, _0x4ea8d9) {
      {
        if (!_0x1deff1 && _0x4ea8d9 == null) {
          return;
        }
        _0x1995a3.push({
          source: String(_0x5a2b23 || ""),
          key: String(_0x1deff1 == null ? "" : _0x1deff1),
          value: String(_0x4ea8d9 == null ? "" : _0x4ea8d9)
        });
      }
    }
    try {
      {
        const _0xfd4b5a = _0x5f89ce.indexOf("?");
        if (_0xfd4b5a >= 0) {
          const _0x197673 = _0x5f89ce.slice(_0xfd4b5a + 1);
          _0x197673.split("&").forEach(_0x547291 => {
            if (!_0x547291) {
              return;
            }
            const _0x55bd95 = _0x547291.indexOf("=");
            const _0x187bfb = _0x1181ae(_0x55bd95 >= 0 ? _0x547291.slice(0, _0x55bd95) : _0x547291);
            const _0x386885 = _0x1181ae(_0x55bd95 >= 0 ? _0x547291.slice(_0x55bd95 + 1) : "");
            _0x39addb("query", _0x187bfb, _0x386885);
          });
        }
      }
    } catch (_0x2c8cab) {}
    const _0x1c714e = _0x11cbed.trim();
    const _0x5d8d92 = _0x1c714e && (_0x7f7416.indexOf("application/x-www-form-urlencoded") >= 0 || !_0x7f7416 && /^[^=\n\r]{1,200}=/.test(_0x1c714e));
    if (_0x5d8d92) {
      _0x1c714e.split("&").forEach(_0x595935 => {
        if (!_0x595935) {
          return;
        }
        const _0x2fd351 = _0x595935.indexOf("=");
        const _0x33c14a = _0x1181ae(_0x2fd351 >= 0 ? _0x595935.slice(0, _0x2fd351) : _0x595935);
        const _0x3f1dc6 = _0x1181ae(_0x2fd351 >= 0 ? _0x595935.slice(_0x2fd351 + 1) : "");
        _0x39addb("body.form", _0x33c14a, _0x3f1dc6);
      });
    } else {
      if (_0x1c714e && (_0x7f7416.indexOf("json") >= 0 || /^[\[{]/.test(_0x1c714e))) {
        try {
          const _0x16cb7e = JSON.parse(_0x1c714e);
          _0x80fc82(_0x16cb7e, "", _0x1995a3, 24);
        } catch (_0x65983d) {}
      }
    }
    return {
      packet: _0x5273e3,
      method: _0x325245,
      target: _0x5f89ce,
      headers: _0x4e6081,
      contentType: _0x7f7416,
      body: _0x11cbed,
      candidates: _0x1995a3.slice(0, 24)
    };
  }
  function _0x419c5b(_0x28502a, _0x4f9236, _0x56ab73) {
    const _0x33be8d = String(_0x28502a || "").slice(_0x4f9236.start, _0x4f9236.end);
    const _0x1a6883 = (_0x56ab73 || []).find(_0x253c65 => String(_0x253c65.value || "") === _0x33be8d);
    if (_0x1a6883 && _0x1a6883.key) {
      return _0x1a6883.key;
    }
    const _0x3afbd5 = String(_0x28502a || "").slice(Math.max(0, _0x4f9236.start - 220), _0x4f9236.start);
    let _0x5a8e37 = _0x3afbd5.match(/"([^"\r\n]{1,80})"\s*:\s*$/);
    if (_0x5a8e37 && _0x5a8e37[1]) {
      return _0x5a8e37[1];
    }
    _0x5a8e37 = _0x3afbd5.match(/(?:^|[?&\s,])([A-Za-z0-9_.\-\[\]]{1,80})=$/);
    if (_0x5a8e37 && _0x5a8e37[1]) {
      return _0x5a8e37[1];
    }
    _0x5a8e37 = _0x3afbd5.match(/([A-Za-z0-9_.\-]{1,80})\s*[:=]\s*$/);
    if (_0x5a8e37 && _0x5a8e37[1]) {
      return _0x5a8e37[1];
    }
    return "";
  }
  function _0x1be01f(_0x5f415e) {
    const _0x20978d = String(_0x5f415e || "").trim().toLowerCase();
    if (!_0x20978d) {
      return 0;
    }
    if (/^(?:password|passwd|pwd|loginpassword|login_pwd)$/.test(_0x20978d)) {
      return 220;
    }
    if (/^(?:sign|signature|sig|hmac|mac)$/.test(_0x20978d)) {
      return 200;
    }
    if (/(?:token|access_token|refresh_token|id_token|auth|authorization|bearer)/.test(_0x20978d)) {
      return 188;
    }
    if (/(?:nonce|salt|secret|cipher|encrypt|encrypted|captcha_sig)/.test(_0x20978d)) {
      return 170;
    }
    if (/(?:timestamp|ts|time|rand|random)/.test(_0x20978d)) {
      return 126;
    }
    if (/(?:username|user_name|loginname|login_id|account|mobile|phone|email)/.test(_0x20978d)) {
      return 72;
    }
    return _0x14a3f6.test(_0x20978d) ? 28 : 0;
  }
  function _0x4457c5(_0x47dcd6) {
    {
      const _0x230484 = String(_0x47dcd6 == null ? "" : _0x47dcd6);
      const _0x5f0cf3 = _0x4e577b(_0x230484);
      let _0x2857cb = 0;
      if (_0x230484.length >= 16) {
        _0x2857cb += Math.min(80, Math.floor(_0x230484.length / 2));
      }
      if (_0x5f0cf3.signals.includes("md5-like")) {
        _0x2857cb += 120;
      }
      if (_0x5f0cf3.signals.includes("sha1-like")) {
        _0x2857cb += 118;
      }
      if (_0x5f0cf3.signals.includes("sha256-like")) {
        _0x2857cb += 126;
      }
      if (_0x5f0cf3.signals.includes("sha512-like")) {
        _0x2857cb += 132;
      }
      if (_0x5f0cf3.signals.includes("jwt-like")) {
        _0x2857cb += 118;
      }
      if (_0x5f0cf3.signals.includes("base64-like")) {
        _0x2857cb += 94;
      }
      if (_0x5f0cf3.signals.includes("base64url-like")) {
        _0x2857cb += 102;
      }
      if (_0x5f0cf3.signals.includes("url-encoded-like")) {
        _0x2857cb += 44;
      }
      if (_0x5f0cf3.signals.includes("uppercase-token-like")) {
        _0x2857cb += 56;
      }
      if (_0x5f0cf3.signals.includes("lowercase-token-like")) {
        _0x2857cb += 52;
      }
      if (_0x5f0cf3.signals.includes("digits-only")) {
        _0x2857cb += _0x230484.length >= 10 ? 24 : 8;
      }
      if (_0x5f0cf3.signals.includes("contains-non-ascii")) {
        _0x2857cb -= 10;
      }
      if (_0x230484.length > 6 && _0x230484.length <= 12 && /^[a-z]+$/i.test(_0x230484)) {
        _0x2857cb -= 24;
      }
      return _0x2857cb;
    }
  }
  function _0x26d9c0(_0x1415ab) {
    {
      if (!_0x1415ab || !_0x1415ab.selectionValue) {
        return null;
      }
      const _0x270c3a = String(_0x1415ab.selectionValue || "");
      const _0x159929 = Array.isArray(_0x1415ab.requestInfo && _0x1415ab.requestInfo.candidates) ? _0x1415ab.requestInfo.candidates : [];
      const _0x350e36 = _0x159929.find(_0x19f0e1 => String(_0x19f0e1 && _0x19f0e1.value || "") === _0x270c3a);
      if (_0x350e36) {
        return _0x350e36;
      }
      const _0x5a6c88 = String(_0x1415ab.selectionFieldName || "").trim().toLowerCase();
      if (!_0x5a6c88) {
        return null;
      }
      return _0x159929.find(_0x568955 => String(_0x568955 && _0x568955.key || "").trim().toLowerCase() === _0x5a6c88) || null;
    }
  }
  function _0x5c7639(_0x4ebaa1) {
    const _0x28fd66 = String(_0x4ebaa1 && _0x4ebaa1.source || "").trim().toLowerCase();
    let _0x41d951 = _0x1be01f(_0x4ebaa1 && _0x4ebaa1.key) + _0x4457c5(_0x4ebaa1 && _0x4ebaa1.value);
    if (_0x28fd66 === "body.form") {
      _0x41d951 += 24;
    } else {
      if (_0x28fd66 === "body.json") {
        _0x41d951 += 20;
      } else {
        if (_0x28fd66 === "query") {
          _0x41d951 += 8;
        }
      }
    }
    return _0x41d951;
  }
  function _0x3e68b6(_0x481000) {
    return "candidate:" + String(_0x481000);
  }
  function _0x1b4e2b(_0xddcba5) {
    {
      const _0xa719a8 = String(_0xddcba5 || "").match(/^candidate:(\d+)$/);
      return _0xa719a8 ? parseInt(_0xa719a8[1], 10) : -1;
    }
  }
  function _0x1f3c10(_0x1f5760, _0x33dbf1) {
    const _0x210eca = String(_0x33dbf1 || "selection");
    let _0x501030 = "";
    let _0x3ff36a = {};
    let _0x322cbd = "request";
    const _0x1c5683 = _0x210eca === "selection" ? _0x1f5760 && _0x1f5760.selectionSnapshot || null : null;
    if (_0x1f5760 && _0x1f5760.kind === "replay") {
      _0x501030 = _0x307492(_0x1073d3) || _0x3cb71f(_0x1073d3) || "";
      const _0x4362e3 = _0x33d5a5 && _0x158eac ? _0x33d5a5.find(_0x432fbd => _0x432fbd.id === _0x158eac) : null;
      const _0x901916 = _0x501030 ? _0x2370d2(_0x501030, _0x4ddb66 || "", {
        smartEncodeUrl: false
      }) : null;
      _0x3ff36a = {
        url: _0x901916 && _0x901916.url || _0x4362e3 && _0x4362e3.url || _0x4ddb66 || "",
        sourceUrl: _0x4362e3 && _0x4362e3.sourceUrl || _0x4362e3 && _0x4362e3.url || _0x4ddb66 || "",
        sourceRecordId: _0x4362e3 && _0x4362e3.sourceRecordId ? _0x4362e3.sourceRecordId : "",
        sourceTabId: _0x4362e3 && _0x4362e3.sourceTabId != null ? _0x4362e3.sourceTabId : _0x2dde63,
        sourceTimestamp: _0x4362e3 && _0x4362e3.sourceTimestamp ? _0x4362e3.sourceTimestamp : 0,
        requestId: _0x4362e3 && _0x4362e3.id ? _0x4362e3.id : "send_0"
      };
    } else {
      if (_0x1f5760 && _0x1f5760.kind === "inline") {
        const _0x28f087 = _0x1f5760.inline;
        const _0x4beabf = _0x28f087 ? _0x28f087.querySelector(".req-raw") : null;
        const _0x57e8ea = _0xb31434.find(_0x53593f => String(_0x53593f.id) === String(_0x1f5760.recordId || "")) || _0xa02ab3.find(_0x3782fd => String(_0x3782fd.id) === String(_0x1f5760.recordId || "")) || null;
        _0x501030 = _0x4beabf ? _0x307492(_0x4beabf) || _0x3cb71f(_0x4beabf) || "" : _0x57e8ea ? _0x137986(_0x57e8ea) : "";
        _0x322cbd = _0x1f5760.side === "resp" ? "response" : "request";
        _0x3ff36a = {
          url: _0x57e8ea && _0x57e8ea.url ? String(_0x57e8ea.url) : "",
          sourceUrl: _0x57e8ea && _0x57e8ea.url ? String(_0x57e8ea.url) : "",
          sourceRecordId: _0x1f5760.recordId ? String(_0x1f5760.recordId) : "",
          sourceTabId: _0x57e8ea && _0x57e8ea.tabId != null ? _0x57e8ea.tabId : _0x2dde63,
          sourceTimestamp: _0x57e8ea && _0x57e8ea.timestamp ? Number(_0x57e8ea.timestamp) : 0,
          requestId: _0x1f5760.recordId ? String(_0x1f5760.recordId) : ""
        };
      }
    }
    const _0x33e0d2 = _0x3ed261(_0x501030);
    let _0x35eaec = null;
    let _0x2cef33 = "";
    let _0x480606 = "";
    if (_0x210eca === "selection") {
      _0x35eaec = _0x1c5683 && _0x1c5683.range ? _0x375449(_0x1c5683.range) : null;
      !_0x35eaec && (_0x35eaec = _0x1f5760 && _0x1f5760.kind === "inline" ? _0x55a5eb(_0x1f5760.inline.querySelector(_0x1f5760.side === "resp" ? ".resp-raw" : ".req-raw")) : _0x295787());
      const _0x376c61 = _0x1f5760 && _0x1f5760.kind === "inline" && _0x1f5760.side === "resp" ? _0x307492(_0x1f5760.inline.querySelector(".resp-raw")) || _0x3cb71f(_0x1f5760.inline.querySelector(".resp-raw")) || "" : _0x501030;
      _0x35eaec && _0x35eaec.end > _0x35eaec.start && (_0x2cef33 = String(_0x376c61 || "").slice(_0x35eaec.start, _0x35eaec.end), _0x480606 = _0x322cbd === "request" ? _0x419c5b(_0x501030, _0x35eaec, _0x33e0d2.candidates || []) : _0x419c5b(_0x376c61, _0x35eaec, []));
    }
    return {
      normalizedScope: _0x210eca,
      requestRaw: _0x501030,
      requestInfo: _0x33e0d2,
      sourceMeta: _0x3ff36a,
      packetSide: _0x322cbd,
      selectionRange: _0x35eaec,
      selectionValue: _0x2cef33,
      selectionFieldName: _0x480606
    };
  }
  function _0x167505(_0x219701, _0x5a460f) {
    const _0x50d68b = [];
    const _0x382c1f = Array.isArray(_0x219701 && _0x219701.requestInfo && _0x219701.requestInfo.candidates) ? _0x219701.requestInfo.candidates.map((_0x56aaa2, _0x1c209f) => ({
      item: _0x56aaa2,
      idx: _0x1c209f
    })) : [];
    _0x382c1f.sort((_0x4b556f, _0x190f6b) => _0x5c7639(_0x190f6b.item) - _0x5c7639(_0x4b556f.item));
    _0x382c1f.slice(0, 18).forEach(({
      item: _0x5e3907,
      idx: _0x236dfa
    }) => {
      {
        const _0x85292 = String(_0x5e3907 && _0x5e3907.key || "").trim() || (_0x5a460f ? "(unnamed)" : "未命名字段");
        const _0x26e096 = String(_0x5e3907 && _0x5e3907.source || "").trim() || "-";
        const _0x170ee1 = _0x190c98(String(_0x5e3907 && _0x5e3907.value || ""), 48);
        _0x50d68b.push({
          ref: _0x3e68b6(_0x236dfa),
          label: _0x85292 + " [" + _0x26e096 + "] = " + _0x170ee1
        });
      }
    });
    if (_0x219701 && _0x219701.selectionValue) {
      const _0x5628a2 = _0x26d9c0(_0x219701);
      const _0x3d046c = String(_0x5628a2 && _0x5628a2.key || _0x219701.selectionFieldName || "").trim();
      const _0xe4101f = String(_0x5628a2 && _0x5628a2.source || "selection").trim();
      const _0x5bf7a3 = _0x190c98(String(_0x219701.selectionValue || ""), 48);
      const _0x1c9b8c = String(_0x219701 && _0x219701.packetSide || "request") === "response" ? _0x5a460f ? "response" : "响应" : _0x5a460f ? "request" : "请求";
      _0x50d68b.unshift({
        ref: "selection",
        label: _0x5a460f ? "User-selected field (" + _0x1c9b8c + ")" + (_0x3d046c ? ": " + _0x3d046c + " [" + _0xe4101f + "] = " + _0x5bf7a3 : ": " + _0x5bf7a3) : "用户自选字段（" + _0x1c9b8c + "）" + (_0x3d046c ? "：" + _0x3d046c + " [" + _0xe4101f + "] = " + _0x5bf7a3 : "：" + _0x5bf7a3)
      });
    }
    _0x219701 && _0x219701.requestInfo && _0x219701.requestInfo.target && _0x50d68b.push({
      ref: "url",
      label: _0x5a460f ? "Request URL line" : "请求 URL 行"
    });
    return _0x50d68b;
  }
  function _0x44171e(_0x2d6d0a, _0x4f35c0, _0x24a2ca) {
    if (!Array.isArray(_0x2d6d0a) || !_0x2d6d0a.length) {
      return _0x24a2ca ? "- No parsed request fields." : "- 未解析到可用请求字段。";
    }
    const _0x4574ad = _0x2d6d0a.slice().sort((_0x489c20, _0xd53025) => {
      return _0x5c7639(_0xd53025) - _0x5c7639(_0x489c20);
    });
    return _0x4574ad.slice(0, 12).map(_0x17c3c1 => {
      const _0x32b5d5 = _0x4e577b(_0x17c3c1.value);
      const _0x283cc7 = String(_0x17c3c1.value || "") === String(_0x4f35c0 || "");
      const _0x339f78 = _0x283cc7 ? _0x24a2ca ? "value" : "值" : _0x24a2ca ? "sample" : "样例";
      return "- " + [_0x17c3c1.source || "-", _0x17c3c1.key || "(unnamed)", "len=" + _0x32b5d5.length, _0x32b5d5.signals.length ? "signals=" + _0x32b5d5.signals.join(", ") : "signals=-", _0x339f78 + "=" + _0x5c0096(_0x17c3c1.value, _0x283cc7)].join(" | ");
    }).join("\n");
  }
  function _0xcee45f(_0x49c4d2) {
    const _0x4600a5 = [];
    const _0x422af0 = String(_0x49c4d2 || "");
    if (!_0x422af0) {
      return _0x4600a5;
    }
    const _0x3dba6f = /<script\b[^>]*\bsrc=(["'])([^"']+)\1/ig;
    let _0x49c0c9 = _0x3dba6f.exec(_0x422af0);
    while (_0x49c0c9) {
      {
        const _0x48e7f1 = String(_0x49c0c9[2] || "").trim();
        if (_0x48e7f1 && _0x4600a5.indexOf(_0x48e7f1) < 0) {
          _0x4600a5.push(_0x48e7f1);
        }
        if (_0x4600a5.length >= 12) {
          break;
        }
        _0x49c0c9 = _0x3dba6f.exec(_0x422af0);
      }
    }
    return _0x4600a5;
  }
  function _0x32e415(_0x3c9a0a) {
    const _0x54b37d = [];
    const _0x216df1 = String(_0x3c9a0a || "");
    if (!_0x216df1) {
      return _0x54b37d;
    }
    const _0x5d31ed = /<script\b(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/ig;
    let _0x3899eb = _0x5d31ed.exec(_0x216df1);
    while (_0x3899eb) {
      const _0xa351f9 = String(_0x3899eb[1] || "").trim();
      if (_0xa351f9) {
        _0x54b37d.push(_0xa351f9);
      }
      if (_0x54b37d.length >= 16) {
        break;
      }
      _0x3899eb = _0x5d31ed.exec(_0x216df1);
    }
    return _0x54b37d;
  }
  function _0x4846fc(_0x4fdfae, _0x1fb820) {
    const _0x56028b = String(_0x4fdfae == null ? "" : _0x4fdfae).replace(/\r/g, "").trim();
    const _0x3287d8 = Number(_0x1fb820) > 0 ? Number(_0x1fb820) : 560;
    if (_0x56028b.length <= _0x3287d8) {
      return _0x56028b;
    }
    const _0x1e56ac = Math.max(120, Math.floor(_0x3287d8 * 0.7));
    const _0x575652 = Math.max(60, _0x3287d8 - _0x1e56ac - 12);
    return _0x56028b.slice(0, _0x1e56ac) + "\n/* ... */\n" + _0x56028b.slice(_0x56028b.length - _0x575652);
  }
  async function _0x4c01bc(_0x2cf687, _0x319e4f, _0x5b5401, _0x2d5f10) {
    const _0x34c46f = _0x2cf687 && _0x2cf687.sourceTabId != null ? _0x2cf687.sourceTabId : _0x2dde63;
    const _0x4f9c2c = String(_0x2cf687 && (_0x2cf687.url || _0x2cf687.sourceUrl) || "");
    const _0x46c854 = _0x558ff2(_0x4f9c2c || "");
    const _0x50a931 = Number(_0x2cf687 && _0x2cf687.sourceTimestamp || _0x2cf687 && _0x2cf687.timestamp || 0);
    const _0x340825 = _0x2e051d(_0x319e4f && _0x319e4f.headers || {}, "referer");
    const _0x5beef8 = _0x4c4999(_0x340825);
    const _0x469ff1 = _0x4c4999(_0x4f9c2c);
    let _0x52fe67 = [];
    try {
      {
        if (_0x34c46f != null) {
          const _0x1ac316 = await _0x583d29({
            type: "GET_HISTORY",
            limit: 320,
            tabId: _0x34c46f
          });
          _0x52fe67 = Array.isArray(_0x1ac316 && _0x1ac316.list) ? _0x1ac316.list : [];
        } else {
          if (_0x46c854) {
            {
              const _0x5910b5 = await _0x583d29({
                type: "GET_HISTORY",
                limit: 220,
                host: _0x46c854
              });
              _0x52fe67 = Array.isArray(_0x5910b5 && _0x5910b5.list) ? _0x5910b5.list : [];
            }
          }
        }
      }
    } catch (_0x45eff1) {
      _0x52fe67 = [];
    }
    if (!_0x52fe67.length) {
      return {
        text: _0x2d5f10 ? "No related JS/HTML capture clues were available." : "未找到可用的同页 JS/HTML 抓包线索。",
        scriptSrcs: [],
        jsRecords: []
      };
    }
    const _0x1f3278 = _0x52fe67.filter(_0xca1c40 => _0x528c31(_0xca1c40)).map(_0x15719d => {
      const _0x7c2e50 = String(_0x15719d && _0x15719d.url || "");
      const _0x43f100 = _0x558ff2(_0x7c2e50);
      const _0x470404 = _0x4c4999(_0x7c2e50);
      const _0x2c5fcd = String(_0x15719d && _0x15719d.responseBody || "");
      let _0x51f76d = _0x2c5fcd ? 8 : 0;
      if (_0x340825 && _0x7c2e50 === _0x340825) {
        _0x51f76d += 80;
      }
      if (_0x4f9c2c && _0x7c2e50 === _0x4f9c2c) {
        _0x51f76d += 24;
      }
      if (_0x5beef8 && _0x470404 === _0x5beef8) {
        _0x51f76d += 24;
      }
      if (_0x469ff1 && _0x470404 === _0x469ff1) {
        _0x51f76d += 12;
      }
      if (_0x46c854 && _0x31d7bd(_0x43f100, _0x46c854)) {
        _0x51f76d += 8;
      }
      if (_0x50a931 && _0x15719d && _0x15719d.timestamp && Math.abs(Number(_0x15719d.timestamp) - _0x50a931) <= 180000) {
        _0x51f76d += 6;
      }
      if (_0x5b5401 && _0x5b5401.fieldName && _0x5b5401.fieldName !== "URL" && _0x5b5401.fieldName !== "(unnamed)" && new RegExp("\\b" + _0x195e54(_0x5b5401.fieldName) + "\\b", "i").test(_0x2c5fcd)) {
        _0x51f76d += 14;
      }
      if (_0x49488a(_0x2c5fcd).length) {
        _0x51f76d += 8;
      }
      return Object.assign({}, _0x15719d, {
        __hxScore: _0x51f76d
      });
    }).sort((_0x44a28f, _0x1b8730) => Number(_0x1b8730.__hxScore || 0) - Number(_0x44a28f.__hxScore || 0));
    const _0xf05da5 = _0x1f3278.slice(0, 8);
    const _0x20f4a1 = _0x52fe67.filter(_0x2f83c3 => _0x7bf2d7(_0x2f83c3));
    const _0x33f0bb = _0xf05da5.flatMap(_0x5c7e59 => {
      const _0x56ed53 = String(_0x5c7e59 && _0x5c7e59.responseBody || "");
      return _0x32e415(_0x56ed53).map((_0x1aabd4, _0x15b4bb) => {
        const _0x24cff8 = _0x49488a(_0x1aabd4);
        const _0x5b0a80 = _0x56440f(_0x1aabd4, _0x5b5401, _0x319e4f);
        let _0x4253f8 = _0x24cff8.length * 16;
        if (/\$\.(?:md5|sha1?|sha256|sha512)\s*\(/i.test(_0x1aabd4)) {
          _0x4253f8 += 40;
        }
        if (/(?:password|passwd|pwd)\b/i.test(_0x1aabd4)) {
          _0x4253f8 += 24;
        }
        if (/(?:username|user_name|login|account|vercode)\b/i.test(_0x1aabd4)) {
          _0x4253f8 += 10;
        }
        if (/\$\.(?:ajax|post|get)\s*\(|fetch\s*\(|XMLHttpRequest/i.test(_0x1aabd4)) {
          _0x4253f8 += 8;
        }
        if (_0x4f9c2c && String(_0x5c7e59 && _0x5c7e59.url || "") === _0x4f9c2c) {
          _0x4253f8 += 18;
        }
        if (_0x340825 && String(_0x5c7e59 && _0x5c7e59.url || "") === _0x340825) {
          _0x4253f8 += 48;
        }
        if (_0x46c854 && _0x31d7bd(_0x558ff2(String(_0x5c7e59 && _0x5c7e59.url || "")), _0x46c854)) {
          _0x4253f8 += 5;
        }
        if (_0x50a931 && _0x5c7e59 && _0x5c7e59.timestamp && Math.abs(Number(_0x5c7e59.timestamp) - _0x50a931) <= 180000) {
          _0x4253f8 += 4;
        }
        _0x4253f8 += Number(_0x5b0a80.score || 0);
        return {
          ref: _0x45e979("inline", String(_0x5c7e59 && _0x5c7e59.url || _0x4f9c2c || ""), _0x15b4bb + 1),
          kind: "inline",
          sourceUrl: String(_0x5c7e59 && _0x5c7e59.url || _0x4f9c2c || ""),
          excerpt: _0x5b0a80.snippet || _0x4846fc(_0x1aabd4, 720),
          hits: _0x41c482(_0x24cff8.concat(_0x5b0a80.hits || []), 10),
          score: _0x4253f8,
          index: _0x15b4bb + 1,
          rawCode: _0x1aabd4
        };
      });
    }).filter(_0x2bc3ad => _0x2bc3ad.sourceUrl || _0x2bc3ad.excerpt);
    _0x33f0bb.sort((_0x6065f0, _0x208634) => _0x208634.score - _0x6065f0.score);
    const _0x487c37 = _0x33f0bb.filter(_0xfdae76 => _0xfdae76.score > 0).slice(0, 4);
    const _0x2d28b5 = _0x41c482(_0xf05da5.slice(0, 4).flatMap(_0x21ae85 => _0xcee45f(String(_0x21ae85 && _0x21ae85.responseBody || ""))), 8);
    const _0x40d2dd = _0x20f4a1.map(_0x3f3ffd => {
      const _0x14492c = String(_0x3f3ffd && _0x3f3ffd.url || "");
      const _0x1c63bf = String(_0x3f3ffd && _0x3f3ffd.responseBody || "");
      const _0x4227bb = _0x49488a(_0x14492c);
      const _0x57f50f = _0x49488a(_0x1c63bf);
      const _0x4914c3 = _0x56440f(_0x1c63bf || _0x14492c, _0x5b5401, _0x319e4f);
      let _0x2d206b = _0x4227bb.length * 8 + _0x57f50f.length * 14;
      if (_0x1c63bf) {
        _0x2d206b += 2;
      }
      if (_0x46c854 && _0x31d7bd(_0x558ff2(_0x14492c), _0x46c854)) {
        _0x2d206b += 5;
      }
      if (_0x50a931 && _0x3f3ffd && _0x3f3ffd.timestamp && Math.abs(Number(_0x3f3ffd.timestamp) - _0x50a931) <= 180000) {
        _0x2d206b += 4;
      }
      _0x2d206b += Number(_0x4914c3.score || 0);
      return {
        ref: _0x45e979("js", _0x14492c, 0),
        kind: "js",
        url: _0x14492c,
        excerpt: _0x4914c3.snippet || _0x563392(_0x1c63bf || _0x14492c),
        hits: _0x41c482(_0x4227bb.concat(_0x57f50f).concat(_0x4914c3.hits || []), 8),
        score: _0x2d206b,
        rawCode: _0x1c63bf
      };
    }).filter(_0x106284 => _0x106284.url);
    _0x40d2dd.sort((_0x1d02de, _0x4a7dc3) => _0x4a7dc3.score - _0x1d02de.score);
    const _0x165537 = _0x40d2dd.filter(_0x439819 => _0x439819.score > 0).slice(0, 6);
    const _0x2e233b = !_0x165537.length ? _0x40d2dd.slice(0, 4) : [];
    const _0x4df09b = (_0x165537.length ? _0x165537 : _0x2e233b).map(_0xd096e4 => {
      const _0x24d79f = ["- " + _0xd096e4.url];
      if (_0xd096e4.hits.length) {
        _0x24d79f.push("  " + (_0x2d5f10 ? "hits: " : "命中: ") + _0xd096e4.hits.join(", "));
      }
      if (_0xd096e4.excerpt) {
        _0x24d79f.push("  " + (_0x2d5f10 ? "excerpt: " : "片段: ") + _0xd096e4.excerpt);
      }
      return _0x24d79f.join("\n");
    });
    const _0x415990 = [];
    _0xf05da5.length && _0x415990.push((_0x2d5f10 ? "Prioritized HTML documents:" : "优先关联的 HTML 文档：") + "\n" + _0xf05da5.slice(0, 4).map(_0x2460a5 => {
      const _0x28a866 = String(_0x2460a5 && _0x2460a5.url || "");
      const _0x3fbad1 = [];
      if (_0x340825 && _0x28a866 === _0x340825) {
        _0x3fbad1.push(_0x2d5f10 ? "matches Referer" : "命中 Referer");
      }
      if (_0x4f9c2c && _0x28a866 === _0x4f9c2c) {
        _0x3fbad1.push(_0x2d5f10 ? "matches source URL" : "命中源 URL");
      }
      return "- " + _0x28a866 + (_0x3fbad1.length ? " | " + _0x3fbad1.join(", ") : "");
    }).join("\n"));
    if (_0x2d28b5.length) {
      {
        _0x415990.push((_0x2d5f10 ? "Script src clues from captured HTML:" : "抓包 HTML 中发现的 script src：") + "\n" + _0x2d28b5.map(_0x1341d1 => "- " + _0x1341d1).join("\n"));
      }
    }
    _0x487c37.length && _0x415990.push((_0x2d5f10 ? "Captured inline script clues from HTML:" : "抓包 HTML 中发现的内联脚本线索：") + "\n" + _0x487c37.map(_0x563e43 => {
      const _0x23ba5b = ["- " + (_0x563e43.sourceUrl || (_0x2d5f10 ? "(inline script)" : "（内联脚本）")) + " #" + _0x563e43.index];
      if (_0x563e43.hits.length) {
        _0x23ba5b.push("  " + (_0x2d5f10 ? "hits: " : "命中: ") + _0x563e43.hits.join(", "));
      }
      if (_0x563e43.excerpt) {
        _0x23ba5b.push("  " + (_0x2d5f10 ? "matched code:" : "命中的代码片段: ") + "\n" + _0x563e43.excerpt);
      }
      return _0x23ba5b.join("\n");
    }).join("\n"));
    _0x4df09b.length && _0x415990.push((_0x2d5f10 ? "Captured JS clues:" : "已捕获的 JS 线索：") + "\n" + _0x4df09b.join("\n"));
    if (!_0x415990.length) {
      _0x415990.push(_0x2d5f10 ? "No related JS/HTML capture clues were available." : "未找到可用的同页 JS/HTML 抓包线索。");
    }
    return {
      text: _0x415990.join("\n\n"),
      scriptSrcs: _0x2d28b5,
      jsRecords: _0x165537.length ? _0x165537 : _0x2e233b,
      inlineScripts: _0x487c37,
      assetCandidates: (() => {
        const _0x27346a = _0x487c37.concat(_0x165537.length ? _0x165537 : _0x2e233b);
        const _0x5e297d = new Set();
        return _0x27346a.filter(_0x4c3f8e => {
          const _0x129f69 = String(_0x4c3f8e && _0x4c3f8e.ref || "");
          if (!_0x129f69 || _0x5e297d.has(_0x129f69)) {
            return false;
          }
          _0x5e297d.add(_0x129f69);
          return true;
        }).slice(0, 10);
      })()
    };
  }
  function _0x111fe4(_0x570151, _0x561ff7) {
    const _0x3e9312 = _0x570151 && _0x570151.focus ? _0x570151.focus : {};
    const _0x127c53 = _0x4e577b(_0x3e9312.value || "");
    const _0x2131ec = _0x570151 && _0x570151.requestInfo ? _0x570151.requestInfo : {};
    const _0x56a495 = _0x570151 && _0x570151.sourceMeta ? _0x570151.sourceMeta : {};
    const _0xd24691 = _0x5c7ab1(_0x570151 && _0x570151.extraPrompt ? _0x570151.extraPrompt : "");
    const _0x893f04 = _0x44171e(_0x2131ec.candidates || [], _0x3e9312.value || "", _0x561ff7);
    const _0x515799 = ["- " + (_0x561ff7 ? "length" : "长度") + ": " + String(_0x127c53.length || 0), "- " + (_0x561ff7 ? "signals" : "形态特征") + ": " + (_0x127c53.signals.length ? _0x127c53.signals.join(", ") : _0x561ff7 ? "none" : "无明显特征")];
    _0x127c53.previews.length && _0x127c53.previews.forEach(_0x5bb802 => {
      {
        _0x515799.push("- " + (_0x561ff7 ? "decode preview" : "解码预览") + ": " + _0x5bb802);
      }
    });
    const _0x3cc49f = [];
    if (_0x561ff7) {
      _0x3cc49f.push("Task: infer the likely client-side encoding / digest / signing / crypto logic used for the target field or request fragment.");
      _0x3cc49f.push("Do not claim certainty. If evidence is insufficient, say so clearly and give the most likely verification path.");
      _0x3cc49f.push("");
      _0x3cc49f.push("Target scope");
      _0x3cc49f.push("- packet side: " + (_0x3e9312.packetSide || "request"));
      _0x3cc49f.push("- scope: " + (_0x3e9312.scopeLabel || "selection"));
      _0x3cc49f.push("- field candidate: " + (_0x3e9312.fieldName || "(unknown)"));
      _0x3cc49f.push("- field source: " + (_0x3e9312.fieldSource || "-"));
      _0x3cc49f.push("- target value: " + _0x190c98(String(_0x3e9312.value || ""), 240));
      _0x3cc49f.push("");
      _0x3cc49f.push("Target value fingerprint");
      _0x3cc49f.push(_0x515799.join("\n"));
      _0x3cc49f.push("");
      _0x3cc49f.push("Request overview");
      _0x3cc49f.push("- request id: " + (_0x56a495.requestId || "-"));
      _0x3cc49f.push("- method: " + (_0x2131ec.method || "-"));
      _0x3cc49f.push("- url: " + (_0x2131ec.url || "-"));
      _0x3cc49f.push("- content-type: " + (_0x2131ec.contentType || "-"));
      _0x3cc49f.push("");
      _0x3cc49f.push("Parsed request fields");
      _0x3cc49f.push(_0x893f04);
      _0x3cc49f.push("");
      _0x3cc49f.push("Related JS/HTML clues");
      _0x3cc49f.push(String(_0x570151 && _0x570151.assetContextText || "No related JS/HTML capture clues were available."));
      _0x3cc49f.push("");
      _0x570151 && _0x570151.localEvidenceText && (_0x3cc49f.push("Local exact-code evidence"), _0x3cc49f.push(String(_0x570151.localEvidenceText || "")), _0x3cc49f.push(""));
      _0x570151 && _0x570151.triageNotes && (_0x3cc49f.push("Iterative triage notes"), _0x3cc49f.push(String(_0x570151.triageNotes || "")), _0x3cc49f.push(""));
      _0x570151 && _0x570151.deepContextText && (_0x3cc49f.push("Focused deep-code evidence"), _0x3cc49f.push(String(_0x570151.deepContextText || "")), _0x3cc49f.push(""));
      _0xd24691 && (_0x3cc49f.push("User additional context / focus"), _0x3cc49f.push(_0xd24691), _0x3cc49f.push(""));
      _0x3cc49f.push("Output rules");
      _0x3cc49f.push("1. You must identify the detection target explicitly, such as password / token / sign / username / mixed field.");
      _0x3cc49f.push("2. If HTML or JS contains an explicit assignment or function call for this field, you must prioritize that exact code path and formula instead of stopping at a generic type guess.");
      _0x3cc49f.push("3. Provide a reasoning chain: target field -> source request -> related HTML/JS packet -> matched function / expression -> final submitted value form.");
      _0x3cc49f.push("4. Distinguish clearly between confirmed code-level evidence and inferred possibilities.");
      _0x3cc49f.push("5. If a multi-step chain is likely, describe the most probable order.");
      _0x3cc49f.push("6. Provide concise validation steps and JS search clues.");
      _0x3cc49f.push("7. If a matched code snippet already contains a concrete field-generation expression, exactFormula must preserve that expression or a normalized equivalent, including function names, literal constants, field selectors, and operation order.");
    } else {
      _0x3cc49f.push("任务：推测目标字段或请求片段在前端最可能使用的编码、摘要、签名或加密逻辑。");
      _0x3cc49f.push("不要装作确定；如果证据不足，请明确写出“不足以确认”，并给出最可能的验证路径。");
      _0x3cc49f.push("");
      _0x3cc49f.push("分析对象");
      _0x3cc49f.push("- 包方向：" + (_0x3e9312.packetSide || "request"));
      _0x3cc49f.push("- 作用范围：" + (_0x3e9312.scopeLabel || "选中文本"));
      _0x3cc49f.push("- 字段名候选：" + (_0x3e9312.fieldName || "未识别"));
      _0x3cc49f.push("- 字段来源：" + (_0x3e9312.fieldSource || "-"));
      _0x3cc49f.push("- 当前值：" + _0x190c98(String(_0x3e9312.value || ""), 240));
      _0x3cc49f.push("");
      _0x3cc49f.push("当前值指纹");
      _0x3cc49f.push(_0x515799.join("\n"));
      _0x3cc49f.push("");
      _0x3cc49f.push("请求概览");
      _0x3cc49f.push("- 请求编号：" + (_0x56a495.requestId || "-"));
      _0x3cc49f.push("- 方法：" + (_0x2131ec.method || "-"));
      _0x3cc49f.push("- URL：" + (_0x2131ec.url || "-"));
      _0x3cc49f.push("- Content-Type：" + (_0x2131ec.contentType || "-"));
      _0x3cc49f.push("");
      _0x3cc49f.push("请求字段概览");
      _0x3cc49f.push(_0x893f04);
      _0x3cc49f.push("");
      _0x3cc49f.push("同页 JS/HTML 线索");
      _0x3cc49f.push(String(_0x570151 && _0x570151.assetContextText || "未找到可用的同页 JS/HTML 抓包线索。"));
      _0x3cc49f.push("");
      if (_0x570151 && _0x570151.localEvidenceText) {
        {
          _0x3cc49f.push("本地代码级硬证据");
          _0x3cc49f.push(String(_0x570151.localEvidenceText || ""));
          _0x3cc49f.push("");
        }
      }
      _0x570151 && _0x570151.triageNotes && (_0x3cc49f.push("多轮筛查记录"), _0x3cc49f.push(String(_0x570151.triageNotes || "")), _0x3cc49f.push(""));
      _0x570151 && _0x570151.deepContextText && (_0x3cc49f.push("深度代码证据"), _0x3cc49f.push(String(_0x570151.deepContextText || "")), _0x3cc49f.push(""));
      _0xd24691 && (_0x3cc49f.push("用户补充说明 / 关注重点"), _0x3cc49f.push(_0xd24691), _0x3cc49f.push(""));
      _0x3cc49f.push("输出要求");
      _0x3cc49f.push("1. 必须先明确检测对象，例如 password、token、sign、username 或混合字段。");
      _0x3cc49f.push("2. 如果 HTML/JS 中已经出现了该字段的明确赋值、函数调用或运算表达式，必须优先给出精确代码路径与公式，不能只停留在“像 MD5/像加密”这种泛化判断。");
      _0x3cc49f.push("3. 必须给出推理链：分析对象 -> 来源请求包 -> 关联 HTML/JS 包 -> 命中的函数/表达式 -> 最终提交值的形成方式。");
      _0x3cc49f.push("4. 要区分“代码级确认的事实”和“基于形态/邻近参数的推测”。");
      _0x3cc49f.push("5. 如果怀疑是多步骤，请给出最可能的处理顺序。");
      _0x3cc49f.push("6. 给出建议去哪些 JS 文件、函数名或关键字中验证。");
      _0x3cc49f.push("7. 如果命中的代码片段里已经出现了明确的字段生成表达式，则 exactFormula 必须保留该表达式或其等价归一化写法，并保留函数名、字面量常量、字段选择器和运算顺序。");
    }
    return _0x3cc49f.join("\n");
  }
  function _0x1b397(_0x33b467, _0x49b442, _0x50c8db, _0x3759e2) {
    {
      const _0x3e1f56 = _0x33b467 && _0x33b467.analysis && typeof _0x33b467.analysis === "object" ? _0x33b467.analysis : null;
      if (!_0x3e1f56) {
        return String(_0x49b442 || "").trim() || (_0x3759e2 ? "No analysis result." : "暂无分析结果。");
      }
      const _0x3f8717 = [];
      _0x3f8717.push(_0x3759e2 ? "## Detection Target" : "## 检测对象");
      _0x3f8717.push("- " + (_0x3759e2 ? "Target" : "对象") + ": " + (_0x3e1f56.target || _0x50c8db && _0x50c8db.fieldName || "-"));
      _0x3f8717.push("- " + (_0x3759e2 ? "Confidence" : "置信度") + ": " + (_0x3e1f56.confidence || "-"));
      Array.isArray(_0x3e1f56.likelyKinds) && _0x3e1f56.likelyKinds.length && _0x3f8717.push("- " + (_0x3759e2 ? "Likely types" : "疑似类型") + ": " + _0x3e1f56.likelyKinds.join(" / "));
      if (_0x3e1f56.exactFormula) {
        {
          _0x3f8717.push("- " + (_0x3759e2 ? "Exact formula" : "明确公式") + ": " + _0x3e1f56.exactFormula);
        }
      }
      _0x3f8717.push("");
      _0x3f8717.push(_0x3759e2 ? "## Final Assessment" : "## 最终判断");
      _0x3f8717.push(String(_0x3e1f56.assessment || "").trim() || (_0x3759e2 ? "No clear conclusion." : "暂无明确结论。"));
      _0x3f8717.push("");
      _0x50c8db && Array.isArray(_0x50c8db.iterationNotes) && _0x50c8db.iterationNotes.length && (_0x3f8717.push(_0x3759e2 ? "## Iterative Investigation Trace" : "## 多轮研判过程"), _0x50c8db.iterationNotes.forEach((_0x3e6a1a, _0x546777) => _0x3f8717.push(_0x546777 + 1 + ". " + _0x3e6a1a)), _0x3f8717.push(""));
      _0x3f8717.push(_0x3759e2 ? "## AI Reasoning Chain" : "## AI 加密逻辑推理链");
      Array.isArray(_0x3e1f56.reasoningChain) && _0x3e1f56.reasoningChain.length ? _0x3e1f56.reasoningChain.forEach((_0x1b1eb4, _0x164579) => _0x3f8717.push(_0x164579 + 1 + ". " + _0x1b1eb4)) : _0x3f8717.push("1. " + (_0x3759e2 ? "No explicit reasoning chain returned." : "未返回明确推理链。"));
      _0x3f8717.push("");
      _0x3f8717.push(_0x3759e2 ? "## Packet / Asset Trail" : "## 数据包 / 资源证据链");
      Array.isArray(_0x3e1f56.packetTrail) && _0x3e1f56.packetTrail.length ? _0x3e1f56.packetTrail.forEach(_0xf0f162 => _0x3f8717.push("- " + _0xf0f162)) : _0x3f8717.push("- " + (_0x3759e2 ? "No explicit packet trail returned." : "未返回明确的数据包链路。"));
      _0x3f8717.push("");
      _0x3f8717.push(_0x3759e2 ? "## Key Evidence" : "## 关键依据");
      Array.isArray(_0x3e1f56.evidence) && _0x3e1f56.evidence.length ? _0x3e1f56.evidence.forEach(_0x224e21 => _0x3f8717.push("- " + _0x224e21)) : _0x3f8717.push("- " + (_0x3759e2 ? "No explicit evidence returned." : "未返回明确依据。"));
      _0x3f8717.push("");
      _0x3f8717.push(_0x3759e2 ? "## Exact Code / JS Clues" : "## 精确代码 / JS 线索");
      Array.isArray(_0x3e1f56.exactCodeClues) && _0x3e1f56.exactCodeClues.length && _0x3e1f56.exactCodeClues.forEach(_0x5b423c => _0x3f8717.push("- " + _0x5b423c));
      if (Array.isArray(_0x3e1f56.jsClues) && _0x3e1f56.jsClues.length) {
        _0x3e1f56.jsClues.forEach(_0x1c457a => _0x3f8717.push("- " + _0x1c457a));
      } else {
        if (!(Array.isArray(_0x3e1f56.exactCodeClues) && _0x3e1f56.exactCodeClues.length)) {
          {
            _0x3f8717.push("- " + (_0x3759e2 ? "No explicit JS clues returned." : "未返回明确脚本线索。"));
          }
        }
      }
      _0x3f8717.push("");
      _0x3f8717.push(_0x3759e2 ? "## Analysis Suggestions" : "## 分析建议");
      Array.isArray(_0x3e1f56.validationSteps) && _0x3e1f56.validationSteps.length ? _0x3e1f56.validationSteps.forEach(_0x2d2c22 => _0x3f8717.push("- " + _0x2d2c22)) : _0x3f8717.push("- " + (_0x3759e2 ? "No validation steps returned." : "未返回验证步骤。"));
      _0x3f8717.push("");
      _0x3f8717.push(_0x3759e2 ? "## Suggested Search Keywords" : "## 建议搜索关键字");
      if (Array.isArray(_0x3e1f56.searchKeywords) && _0x3e1f56.searchKeywords.length) {
        _0x3f8717.push(_0x3e1f56.searchKeywords.map(_0x590978 => "`" + String(_0x590978 || "").replace(/`/g, "") + "`").join(" "));
      } else {
        {
          _0x3f8717.push(_0x3759e2 ? "(none)" : "（无）");
        }
      }
      return _0x3f8717.join("\n");
    }
  }
  async function _0x4c0932(_0x4479a1, _0x15c22b) {
    const _0x4dbd1a = arguments.length >= 3 && arguments[2] ? arguments[2] : {};
    const _0x14797f = _0x1f3c10(_0x4479a1, _0x15c22b);
    const _0x96488c = String(_0x14797f && _0x14797f.normalizedScope || _0x15c22b || "selection");
    if (_0x4479a1 && _0x4479a1.kind === "inline" && _0x4479a1.side === "resp" && _0x96488c !== "selection") {
      {
        await _0x34a884(_0x850dc("cryptoEncodeSelectionOnlyScope") || "当前动作仅支持选中文本范围，请先选中文本后再处理。");
        return null;
      }
    }
    const _0x35193b = _0x14797f && _0x14797f.requestRaw ? _0x14797f.requestRaw : "";
    const _0xe400ae = _0x14797f && _0x14797f.sourceMeta ? _0x14797f.sourceMeta : {};
    const _0x549c13 = _0x14797f && _0x14797f.packetSide ? _0x14797f.packetSide : "request";
    const _0x2638a3 = _0x14797f && _0x14797f.requestInfo ? _0x14797f.requestInfo : _0x3ed261(_0x35193b);
    const _0x593700 = String(_0x4dbd1a.targetRef || "").trim();
    const _0x2b460c = _0x5c7ab1(_0x4dbd1a.extraPrompt || "");
    let _0x2dba0b = "";
    let _0x850e45 = "";
    let _0x11d125 = _0x96488c;
    let _0x3fd90a = "";
    if (_0x593700 === "selection" || !_0x593700 && _0x96488c === "selection") {
      if (!(_0x14797f && _0x14797f.selectionRange && _0x14797f.selectionRange.end > _0x14797f.selectionRange.start)) {
        await _0x34a884(_0x850dc("cryptoEncodeNeedSelection") || "Please select some text in the request editor first.");
        return null;
      }
      _0x2dba0b = String(_0x14797f && _0x14797f.selectionValue || "");
      _0x850e45 = String(_0x14797f && _0x14797f.selectionFieldName || "") || (_0x549c13 === "response" ? _0x850dc("cryptoEncodeScopeSelection") || "Selection" : "");
      _0x3fd90a = "selection";
      _0x11d125 = _0x850dc("cryptoEncodeScopeSelection") || "Selection";
    } else {
      if (_0x593700 === "url" || !_0x593700 && _0x96488c === "url") {
        _0x2dba0b = String(_0x2638a3.target || "");
        _0x850e45 = "URL";
        _0x3fd90a = "request-line";
        _0x11d125 = _0x850dc("cryptoEncodeScopeUrl") || "URL line";
        if (!_0x2dba0b) {
          await _0x34a884(_0x850dc("cryptoEncodeNeedUrlLine") || "No valid request-line URL found for one-click processing.");
          return null;
        }
      } else {
        const _0x50ca50 = _0x2638a3.candidates || [];
        if (!_0x50ca50.length) {
          await _0x34a884("当前请求中未解析到可分析的参数字段。");
          return null;
        }
        let _0x4fcaf6 = null;
        const _0x72ccf3 = _0x1b4e2b(_0x593700);
        if (_0x72ccf3 >= 0 && _0x72ccf3 < _0x50ca50.length) {
          _0x4fcaf6 = _0x50ca50[_0x72ccf3];
        }
        if (!_0x4fcaf6) {
          const _0x1f650a = _0x50ca50.slice().sort((_0x284976, _0x2115d4) => _0x5c7639(_0x2115d4) - _0x5c7639(_0x284976));
          _0x4fcaf6 = _0x1f650a[0] || {
            key: "",
            value: "",
            source: ""
          };
        }
        _0x2dba0b = String(_0x4fcaf6 && _0x4fcaf6.value || "");
        _0x850e45 = _0x4fcaf6 && _0x4fcaf6.key || "(unnamed)";
        _0x3fd90a = String(_0x4fcaf6 && _0x4fcaf6.source || "");
        _0x11d125 = _0x850dc("cryptoEncodeScopeParams") || "Param values";
      }
    }
    return {
      packetSide: _0x549c13,
      requestRaw: _0x35193b,
      requestInfo: _0x2638a3,
      sourceMeta: _0xe400ae,
      extraPrompt: _0x2b460c,
      focus: {
        scope: _0x96488c,
        scopeLabel: _0x11d125,
        fieldName: _0x850e45,
        fieldSource: _0x3fd90a,
        value: String(_0x2dba0b || ""),
        packetSide: _0x549c13
      }
    };
  }
  async function _0x38feb5(_0x38806d) {
    const _0x5e8aec = await _0x583d29({
      type: "GET_SETTINGS",
      keys: ["aiProvider", "aiBaseUrl", "aiApiKey", "aiModel", "language"]
    });
    if (!_0x791874(_0x5e8aec) && !String(_0x5e8aec && _0x5e8aec.aiApiKey || "").trim()) {
      return {
        ok: false,
        error: _0x850dc("microFuzzAiNeedApiKey") || "请先在设置中配置 AI 的 API Key。"
      };
    }
    const _0x15f66c = _0x5e8aec && _0x5e8aec.language || (_0x4b6be4.i18n && _0x4b6be4.i18n.getUILanguage ? _0x4b6be4.i18n.getUILanguage() : "") || "zh_CN";
    const _0x1e6808 = String(_0x15f66c || "").toLowerCase().startsWith("en");
    const _0x3beac0 = await _0x4c01bc(_0x38806d.sourceMeta || {}, _0x38806d.requestInfo || {}, _0x38806d.focus || {}, _0x1e6808);
    const _0x28a873 = {
      baseUrl: _0x5e8aec && _0x5e8aec.aiBaseUrl || "https://api.openai.com",
      apiKey: _0x5e8aec && _0x5e8aec.aiApiKey || "",
      model: _0x5e8aec && _0x5e8aec.aiModel || "gpt-4o-mini",
      language: _0x15f66c,
      systemPrompt: _0x1e6808 ? "You are a senior web reverse-engineering and application security analyst. Infer likely client-side field transformation logic from packet context and related JS clues. Stay evidence-driven, avoid certainty when evidence is insufficient, and give actionable verification guidance." : "你是资深 Web 逆向与应用安全分析专家。你的任务是结合数据包上下文与相关 JS 线索，推测字段在前端最可能使用的编码、摘要、签名或加密逻辑。必须基于证据输出；证据不足时要明确说明，并给出可操作的验证路径。"
    };
    const _0xde4b8f = {
      method: _0x38806d.requestInfo.method,
      url: _0x38806d.sourceMeta.url || _0x38806d.requestInfo.target || "",
      target: _0x38806d.requestInfo.target || "",
      contentType: _0x38806d.requestInfo.contentType || "",
      headers: _0x38806d.requestInfo.headers || {},
      candidates: _0x38806d.requestInfo.candidates || []
    };
    const _0x2530f5 = [];
    let _0xa2999f = "";
    let _0x5c52dd = "";
    let _0x4d7d11 = [];
    const _0x5bdc43 = _0x5518fe(_0x3beac0, {
      focus: _0x38806d.focus,
      requestInfo: _0xde4b8f,
      sourceMeta: _0x38806d.sourceMeta
    }, _0x1e6808);
    const _0x4fd10d = _0x163211(_0x5bdc43, _0x1e6808);
    if (_0x3beac0 && Array.isArray(_0x3beac0.assetCandidates) && _0x3beac0.assetCandidates.length) {
      if (_0x5bdc43 && _0x5bdc43.exactFormula) {
        _0x2530f5.push((_0x1e6808 ? "Local exact-code hit: " : "本地命中明确代码：") + _0x5bdc43.exactFormula);
        _0x4d7d11 = Array.isArray(_0x5bdc43.refs) ? _0x5bdc43.refs.slice(0, 3) : [];
      } else {
        const _0x1feb69 = _0x537444({
          focus: _0x38806d.focus,
          requestInfo: _0xde4b8f,
          extraPrompt: _0x38806d.extraPrompt || ""
        }, _0x3beac0, _0x1e6808, {});
        const _0x5b3c4f = await _0x583d29({
          type: "AI_ANALYZE",
          task: "crypto_logic_triage",
          prompt: _0x1feb69,
          config: _0x28a873,
          memoryUrl: _0x38806d.sourceMeta.url || "",
          memoryHost: _0x558ff2(_0x38806d.sourceMeta.url || "")
        });
        const _0x365d33 = _0x5b3c4f && _0x5b3c4f.ok ? _0x554cd1(_0x5b3c4f.parsed || null) : null;
        _0x365d33 && (_0x2530f5.push((_0x1e6808 ? "Round 1 triage selected: " : "第 1 轮筛查选中：") + (_0x365d33.suspiciousRefs && _0x365d33.suspiciousRefs.length ? _0x365d33.suspiciousRefs.join(", ") : _0x1e6808 ? "no explicit refs" : "未明确返回 ref")), _0xa2999f = _0x358f80(_0x365d33, _0x1e6808, 1), _0x4d7d11 = _0x4d393b(_0x3beac0, _0x365d33, []));
      }
      const _0x58314d = _0x238732(_0x3beac0, {
        focus: _0x38806d.focus,
        requestInfo: _0xde4b8f
      }, _0x4d7d11, _0x1e6808);
      _0x5c52dd = _0x58314d.text || "";
      _0x4d7d11 = _0x58314d.refs || _0x4d7d11;
    }
    let _0x580da9 = _0x111fe4({
      focus: _0x38806d.focus,
      sourceMeta: _0x38806d.sourceMeta,
      requestInfo: _0xde4b8f,
      assetContextText: _0x3beac0.text,
      localEvidenceText: _0x4fd10d,
      triageNotes: _0xa2999f,
      deepContextText: _0x5c52dd,
      extraPrompt: _0x38806d.extraPrompt || ""
    }, _0x1e6808);
    let _0x35c6d4 = await _0x583d29({
      type: "AI_ANALYZE",
      task: "crypto_logic_guess",
      prompt: _0x580da9,
      config: _0x28a873,
      memoryUrl: _0x38806d.sourceMeta.url || "",
      memoryHost: _0x558ff2(_0x38806d.sourceMeta.url || "")
    });
    if (!(_0x5bdc43 && _0x5bdc43.exactFormula) && _0x35c6d4 && _0x35c6d4.ok && _0x29dc63(_0x35c6d4.parsed || null, _0x3beac0, _0x4d7d11)) {
      const _0x3bb869 = _0x537444({
        focus: _0x38806d.focus,
        requestInfo: _0xde4b8f,
        extraPrompt: _0x38806d.extraPrompt || ""
      }, _0x3beac0, _0x1e6808, {
        excludeRefs: _0x4d7d11,
        priorFinding: _0x3c5759(_0x35c6d4.parsed || null, _0x1e6808)
      });
      const _0x11f78e = await _0x583d29({
        type: "AI_ANALYZE",
        task: "crypto_logic_triage",
        prompt: _0x3bb869,
        config: _0x28a873,
        memoryUrl: _0x38806d.sourceMeta.url || "",
        memoryHost: _0x558ff2(_0x38806d.sourceMeta.url || "")
      });
      const _0x40a3af = _0x11f78e && _0x11f78e.ok ? _0x554cd1(_0x11f78e.parsed || null) : null;
      if (_0x40a3af) {
        const _0x3a36d7 = _0x4d393b(_0x3beac0, _0x40a3af, _0x4d7d11);
        if (_0x3a36d7.length) {
          _0x2530f5.push((_0x1e6808 ? "Round 2 triage appended: " : "第 2 轮补查追加：") + _0x3a36d7.join(", "));
          _0xa2999f = [_0xa2999f, _0x358f80(_0x40a3af, _0x1e6808, 2)].filter(Boolean).join("\n\n");
          const _0x46dc43 = _0x238732(_0x3beac0, {
            focus: _0x38806d.focus,
            requestInfo: _0xde4b8f
          }, _0x4d7d11.concat(_0x3a36d7), _0x1e6808);
          _0x4d7d11 = _0x46dc43.refs || _0x4d7d11.concat(_0x3a36d7);
          _0x5c52dd = _0x46dc43.text || _0x5c52dd;
          _0x580da9 = _0x111fe4({
            focus: _0x38806d.focus,
            sourceMeta: _0x38806d.sourceMeta,
            requestInfo: _0xde4b8f,
            assetContextText: _0x3beac0.text,
            localEvidenceText: _0x4fd10d,
            triageNotes: _0xa2999f,
            deepContextText: _0x5c52dd,
            extraPrompt: _0x38806d.extraPrompt || ""
          }, _0x1e6808);
          _0x35c6d4 = await _0x583d29({
            type: "AI_ANALYZE",
            task: "crypto_logic_guess",
            prompt: _0x580da9,
            config: _0x28a873,
            memoryUrl: _0x38806d.sourceMeta.url || "",
            memoryHost: _0x558ff2(_0x38806d.sourceMeta.url || "")
          });
        }
      }
    }
    if (!(_0x35c6d4 && _0x35c6d4.ok)) {
      if (_0x5bdc43 && _0x5bdc43.exactFormula) {
        _0x35c6d4 = {
          ok: true,
          parsed: _0x51a408(_0x5bdc43, _0x38806d, _0x1e6808),
          content: ""
        };
      } else {
        return {
          ok: false,
          error: String(_0x35c6d4 && _0x35c6d4.error || _0x850dc("unknownError") || "Unknown error"),
          uiLang: _0x15f66c,
          isEn: _0x1e6808,
          config: _0x28a873
        };
      }
    }
    const _0x357520 = _0x540900(_0x35c6d4.parsed || null, _0x5bdc43, _0x38806d, _0x1e6808);
    const _0x4ed560 = Date.now();
    const _0x464db1 = _0x1e6808 ? "Smart Crypto Logic Analysis" : "加密逻辑智能分析";
    const _0x503cb6 = _0x1b397(_0x357520, _0x35c6d4.content || "", {
      fieldName: _0x38806d.focus.fieldName || _0x38806d.focus.scopeLabel || "",
      iterationNotes: _0x2530f5
    }, _0x1e6808);
    return {
      ok: true,
      uiLang: _0x15f66c,
      isEn: _0x1e6808,
      config: _0x28a873,
      reportTs: _0x4ed560,
      title: _0x464db1,
      reportHtml: _0x77a960(_0x503cb6, {
        model: _0x28a873.model,
        baseUrl: _0x28a873.baseUrl,
        generatedAt: _0x4ed560,
        lang: _0x15f66c,
        reportId: _0x225fa6(_0x4ed560),
        targetDomain: _0x558ff2(_0x38806d.sourceMeta.url || "") || "-",
        requestNo: _0x38806d.sourceMeta.requestId || "-",
        url: _0x38806d.sourceMeta.url || "",
        filePrefix: "HawkEye-AI-Crypto-Logic-Report",
        reportCoverTitle: _0x464db1,
        reanalyzeKind: _0x38806d.inlineRecordId ? "crypto" : "",
        recordId: _0x38806d.inlineRecordId ? String(_0x38806d.inlineRecordId) : ""
      })
    };
  }
  async function _0xd7fe0f(_0x33fb59, _0x3fb971) {
    if (!_0x3e8fd4()) {
      return;
    }
    const _0x461256 = await _0x933f2e(_0x33fb59, _0x3fb971);
    if (!_0x461256) {
      return;
    }
    const _0x571449 = await _0x4c0932(_0x33fb59, _0x3fb971, {
      targetRef: _0x461256.targetRef || "",
      extraPrompt: _0x461256.extraPrompt || ""
    });
    if (!_0x571449) {
      return;
    }
    const _0x2c7a0f = _0x3c9cec === "en" ? "Analyzing the selected field, request context, and related JS/HTML clues..." : "正在结合选中字段、请求上下文与相关 JS/HTML 线索进行分析...";
    const _0x4f8eec = _0x9bb0bd({
      title: _0x3c9cec === "en" ? "Smart Crypto Logic Analysis" : "加密逻辑智能分析",
      html: "<div class=\"ai-result-inline loading\" style=\"display:block\">" + _0x47f251(_0x2c7a0f) + "</div>",
      mode: "alert"
    });
    if (_0x52a1e2) {
      _0x52a1e2.disabled = true;
    }
    _0x38feb5(_0x571449).then(_0x388f46 => {
      if (!_0x46ea0e || _0x46ea0e.classList.contains("hidden")) {
        return;
      }
      if (_0x52a1e2) {
        _0x52a1e2.disabled = false;
      }
      if (!_0x5a7288) {
        return;
      }
      if (_0x388f46 && _0x388f46.ok) {
        _0x5a7288.innerHTML = _0x388f46.reportHtml;
        _0xf30b52(_0x5a7288);
      } else {
        const _0x4e105e = _0x388f46 && _0x388f46.isEn ? "Analysis failed: " : "分析失败：";
        _0x5a7288.textContent = _0x4e105e + String(_0x388f46 && _0x388f46.error || _0x850dc("unknownError") || "Unknown error");
        if (_0x5a7288) {
          _0x5a7288.classList.remove("ee-modal-body--html");
        }
      }
    });
    await _0x4f8eec;
    if (_0x52a1e2) {
      _0x52a1e2.disabled = false;
    }
  }
  async function _0x4bb8d2(_0x112536, _0x2ca426) {
    if (!_0x2ca426 || !_0x112536) {
      return;
    }
    if (_0x112536 === "ai_logic_guess") {
      if (_0x2ca426.kind === "replay") {
        const _0x5031e7 = _0xa7cbc ? _0xa7cbc.value || "selection" : "selection";
        await _0xd7fe0f(_0x2ca426, _0x5031e7);
        return;
      }
      if (_0x2ca426.kind === "inline") {
        const _0x151433 = _0x2ca426.inline ? _0x2ca426.inline.querySelector(".inline-crypto-scope[data-side=\"" + _0x2ca426.side + "\"]") : null;
        const _0x22b923 = _0x151433 ? _0x151433.value || "selection" : "selection";
        const _0x8d51ee = _0x2ca426.inline && _0x2ca426.inline.closest ? _0x2ca426.inline.closest(".record-item") : null;
        await _0xd7c27d(_0x2ca426.recordId || "", _0x8d51ee, {
          context: _0x2ca426,
          scope: _0x22b923,
          useCache: _0x22b923 !== "selection",
          cacheTag: _0x22b923 === "selection" ? "" : "menu:" + String(_0x2ca426.side || "req") + ":" + _0x22b923
        });
        return;
      }
    }
    if (_0x2ca426.kind === "replay") {
      const _0x5bfc4c = _0xa7cbc ? _0xa7cbc.value || "selection" : "selection";
      await _0x395cea(_0x112536, _0x5bfc4c, _0x2ca426);
      return;
    }
    if (_0x2ca426.kind === "inline") {
      const _0x3b4bb8 = _0x2ca426.inline ? _0x2ca426.inline.querySelector(".inline-crypto-scope[data-side=\"" + _0x2ca426.side + "\"]") : null;
      const _0x1fb2a3 = _0x3b4bb8 ? _0x3b4bb8.value || "selection" : "selection";
      await _0x3ab0e0(_0x2ca426.inline, _0x2ca426.recordId, _0x2ca426.side, _0x112536, _0x1fb2a3, _0x2ca426);
    }
  }
  function _0x25c43b(_0x3d230e) {
    const _0x18e491 = _0x16d793(_0x3d230e);
    const _0x43e599 = _0x18e491.length;
    const _0x3bf91c = _0x43e599 * 8;
    const _0x38d074 = _0x43e599 + 1;
    const _0x15a0c3 = _0x38d074 % 64 <= 56 ? 56 - _0x38d074 % 64 : 120 - _0x38d074 % 64;
    const _0x50bf4c = _0x43e599 + 1 + _0x15a0c3 + 8;
    const _0x1d9870 = new Uint8Array(_0x50bf4c);
    _0x1d9870.set(_0x18e491, 0);
    _0x1d9870[_0x43e599] = 128;
    const _0x4e3f22 = new DataView(_0x1d9870.buffer);
    _0x4e3f22.setUint32(_0x50bf4c - 8, _0x3bf91c >>> 0, true);
    _0x4e3f22.setUint32(_0x50bf4c - 4, Math.floor(_0x3bf91c / 4294967296) >>> 0, true);
    let _0x373820 = 1732584193;
    let _0x43b36a = 4023233417;
    let _0x57f8f1 = 2562383102;
    let _0xa26caf = 271733878;
    const _0x46b60a = (_0x19870f, _0x212e6d) => (_0x19870f << _0x212e6d | _0x19870f >>> 32 - _0x212e6d) >>> 0;
    const _0x4efb14 = (_0x442307, _0x1c7b4c) => _0x442307 + _0x1c7b4c >>> 0;
    const _0x1fe571 = (_0x3c93a1, _0x10705d, _0x433980) => (_0x3c93a1 & _0x10705d | ~_0x3c93a1 & _0x433980) >>> 0;
    const _0x1e4567 = (_0x3da62f, _0x4e91b6, _0x5a0353) => (_0x3da62f & _0x5a0353 | _0x4e91b6 & ~_0x5a0353) >>> 0;
    const _0x25c680 = (_0x49bc21, _0x7540d5, _0x3c0d44) => (_0x49bc21 ^ _0x7540d5 ^ _0x3c0d44) >>> 0;
    const _0x3094c3 = (_0x59fe11, _0x5ee4ee, _0x1d1ad6) => (_0x5ee4ee ^ (_0x59fe11 | ~_0x1d1ad6)) >>> 0;
    const _0x54e3c3 = new Uint32Array(64);
    for (let _0x149de2 = 0; _0x149de2 < 64; _0x149de2++) {
      _0x54e3c3[_0x149de2] = Math.floor(Math.abs(Math.sin(_0x149de2 + 1)) * 4294967296) >>> 0;
    }
    const _0x201c49 = [7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21];
    const _0x117700 = new Uint32Array(64);
    for (let _0x29d596 = 0; _0x29d596 < 64; _0x29d596++) {
      {
        if (_0x29d596 < 16) {
          _0x117700[_0x29d596] = _0x29d596;
        } else {
          if (_0x29d596 < 32) {
            _0x117700[_0x29d596] = (5 * _0x29d596 + 1) % 16;
          } else {
            if (_0x29d596 < 48) {
              _0x117700[_0x29d596] = (3 * _0x29d596 + 5) % 16;
            } else {
              _0x117700[_0x29d596] = 7 * _0x29d596 % 16;
            }
          }
        }
      }
    }
    for (let _0x4dc5a6 = 0; _0x4dc5a6 < _0x50bf4c; _0x4dc5a6 += 64) {
      const _0x54284c = new Uint32Array(16);
      for (let _0x1793ff = 0; _0x1793ff < 16; _0x1793ff++) {
        _0x54284c[_0x1793ff] = _0x4e3f22.getUint32(_0x4dc5a6 + _0x1793ff * 4, true) >>> 0;
      }
      let _0x5a05bd = _0x373820;
      let _0x13a135 = _0x43b36a;
      let _0x4849a4 = _0x57f8f1;
      let _0x4a8ff2 = _0xa26caf;
      for (let _0x374ef8 = 0; _0x374ef8 < 64; _0x374ef8++) {
        let _0x38857b;
        let _0x340678;
        if (_0x374ef8 < 16) {
          _0x38857b = _0x1fe571(_0x13a135, _0x4849a4, _0x4a8ff2);
          _0x340678 = _0x117700[_0x374ef8];
        } else {
          if (_0x374ef8 < 32) {
            _0x38857b = _0x1e4567(_0x13a135, _0x4849a4, _0x4a8ff2);
            _0x340678 = _0x117700[_0x374ef8];
          } else {
            if (_0x374ef8 < 48) {
              {
                _0x38857b = _0x25c680(_0x13a135, _0x4849a4, _0x4a8ff2);
                _0x340678 = _0x117700[_0x374ef8];
              }
            } else {
              _0x38857b = _0x3094c3(_0x13a135, _0x4849a4, _0x4a8ff2);
              _0x340678 = _0x117700[_0x374ef8];
            }
          }
        }
        const _0xa800ad = _0x4a8ff2;
        _0x4a8ff2 = _0x4849a4;
        _0x4849a4 = _0x13a135;
        const _0x3fada2 = _0x4efb14(_0x4efb14(_0x4efb14(_0x5a05bd, _0x38857b), _0x4efb14(_0x54284c[_0x340678], _0x54e3c3[_0x374ef8])), 0);
        _0x13a135 = _0x4efb14(_0x13a135, _0x46b60a(_0x3fada2, _0x201c49[_0x374ef8]));
        _0x5a05bd = _0xa800ad;
      }
      _0x373820 = _0x4efb14(_0x373820, _0x5a05bd);
      _0x43b36a = _0x4efb14(_0x43b36a, _0x13a135);
      _0x57f8f1 = _0x4efb14(_0x57f8f1, _0x4849a4);
      _0xa26caf = _0x4efb14(_0xa26caf, _0x4a8ff2);
    }
    const _0x9bbb07 = new Uint8Array(16);
    const _0xa6b60a = new DataView(_0x9bbb07.buffer);
    _0xa6b60a.setUint32(0, _0x373820, true);
    _0xa6b60a.setUint32(4, _0x43b36a, true);
    _0xa6b60a.setUint32(8, _0x57f8f1, true);
    _0xa6b60a.setUint32(12, _0xa26caf, true);
    return _0x5b5767(_0x9bbb07);
  }
  function _0x13d066(_0x13fc93) {
    const _0x3acd01 = String(_0x13fc93 || "");
    const _0x5a7a12 = _0x3acd01.indexOf("§");
    const _0x46c5bf = _0x5a7a12 >= 0 ? _0x3acd01.indexOf("§", _0x5a7a12 + 1) : -1;
    if (_0x5a7a12 < 0 || _0x46c5bf <= _0x5a7a12) {
      return {
        raw: _0x3acd01,
        changed: false
      };
    }
    const _0x93e0ff = !!_0x59b777;
    const _0x51afc1 = String(_0x2503e9 || "");
    const _0x31aeff = _0x93e0ff ? _0x5f2ad2(_0x51afc1) : null;
    const _0x1752f4 = _0x3acd01.slice(_0x5a7a12 + 1, _0x46c5bf);
    const _0x307804 = _0x93e0ff ? _0x1add2a(_0x1752f4, _0x31aeff) : _0x1752f4;
    const _0x4c114b = _0x3acd01.slice(0, _0x5a7a12) + _0x307804 + _0x3acd01.slice(_0x46c5bf + 1);
    return {
      raw: _0x4c114b,
      changed: _0x93e0ff && _0x307804 !== _0x1752f4
    };
  }
  function _0x295787() {
    if (!_0x1073d3) {
      return null;
    }
    const _0x524a26 = window.getSelection && window.getSelection();
    if (!_0x524a26 || _0x524a26.rangeCount === 0) {
      return null;
    }
    const _0x2a0898 = _0x524a26.getRangeAt(0);
    if (!_0x1073d3.contains(_0x2a0898.startContainer) || !_0x1073d3.contains(_0x2a0898.endContainer)) {
      return null;
    }
    const _0xd52bd = _0x24bf27(_0x1073d3);
    if (!_0xd52bd) {
      return null;
    }
    const _0x334c7d = Math.max(0, Number(_0xd52bd.start || 0));
    const _0x25fd86 = Math.max(_0x334c7d, Number(_0xd52bd.end == null ? _0x334c7d : _0xd52bd.end));
    return {
      start: _0x334c7d,
      end: _0x25fd86
    };
  }
  function _0x203608() {
    const _0x27ffb4 = _0x295787();
    return _0x27ffb4 ? {
      range: _0x375449(_0x27ffb4)
    } : null;
  }
  let _0x3a0472 = "history";
  let _0x337d9b = "";
  let _0x40cc72 = "";
  let _0x56b676 = "";
  let _0x34df96 = "";
  let _0x4cbec6 = "";
  let _0x594eca = "";
  let _0x137574 = true;
  let _0x266e37 = true;
  let _0x170b0f = "";
  let _0x3e95a5 = null;
  let _0x15549e = "all";
  let _0x2dde63 = null;
  const _0x40ac28 = new Set();
  let _0x15d341 = "time_desc";
  let _0x44e9e3 = [];
  let _0x552f2a = [];
  let _0xb65382 = [];
  let _0x5b1dca = [];
  const _0x9a0db4 = {
    idCard: "#4f7cff",
    phone: "#2f8bff",
    bankCard: "#6a7bff",
    email: "#4294d9",
    ipv4: "#1abc9c",
    ipv6: "#00bcd4",
    domain: "#f39c12",
    shiro: "#3c7ab8",
    jwt: "#2f76d2",
    swagger: "#5f88e6",
    ueditor: "#6a9be8",
    druid: "#597fce",
    ctfFlag: "#7a6de0",
    customRegex: "#6f7ee8",
    keyword: "#4c8fd1"
  };
  let _0x43b3a5 = Object.assign({}, _0x9a0db4);
  let _0x1857bf = {};
  let _0x78fbd = {};
  const _0x5e49fc = {
    idCard: "[1-9]\\d{5}(18|19|20)\\d{2}(0[1-9]|1[0-2])(0[1-9]|[1-2]\\d|3[0-1])\\d{3}[\\dXx](?![0-9Xx])",
    phone: "^1[3-9]\\d{9}$",
    bankCard: "^[1-9]\\d{15,18}$",
    email: "/(?<![A-Za-z0-9._%+-])[A-Za-z0-9._%+-]+@(?:[A-Za-z0-9-]+\\.)+(?!png\\b|jpe?g\\b|gif\\b|webp\\b|svg\\b|ico\\b|bmp\\b)[A-Za-z]{2,}(?![A-Za-z0-9._%+-])/gi",
    shiro: "(?:\\brememberMe=\\b|\\bdeleteMe\\b|org\\.apache\\.shiro\\b|\\bshiro\\b)",
    jwt: "\\beyJ[A-Za-z0-9_-]{8,}\\.[A-Za-z0-9_-]{8,}\\.[A-Za-z0-9_-]{8,}\\b",
    swagger: "(?:swagger-ui(?:\\.html)?|swagger-resources|\\/(?:v2|v3)\\/api-docs)\\b",
    ueditor: "(?:\\bueditor\\b|ueditor\\.(?:config|all)\\b|controller\\.php\\?action=|\\/ueditor\\/(?:net|php|jsp)\\b)",
    druid: "(?:\\/druid\\/|\\bdruid\\/(?:index|login|sql|weburi)\\.html\\b)",
    ctfFlag: "/(?:flag|ctf)\\{[^}\\n]{1,200}\\}/gi",
    ipv4: "/\\b(?:(?:25[0-5]|2[0-4]\\d|1?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|1?\\d?\\d)\\b/g",
    ipv6: "/(?!\\b\\d{2}:\\d{2}:\\d{2}\\b)\\b(?:[0-9a-f]{1,4}:){2,7}[0-9a-f]{1,4}\\b/gi",
    domain: "/\\b(?=.{4,253}\\b)(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\\.)+(?:[a-z]{2,63})\\b/ig"
  };
  let _0x58b305 = [];
  let _0xb31434 = [];
  let _0xa02ab3 = [];
  let _0x28a7fd = false;
  let _0x24ce8b = null;
  const _0x1e8ea0 = new Map();
  const _0x4559cf = new Map();
  let _0x37d6ec = new Set();
  let _0x48b695 = false;
  const _0x3206e0 = 40;
  let _0x404a1f = null;
  let _0x137e6f = ["xhr_fetch", "json", "html", "js", "xml", "other_text"];
  let _0x560cc2 = [];
  let _0x4ddb66 = "";
  let _0x33d5a5 = [];
  let _0x158eac = "";
  let _0x39126c = 0;
  const _0x565b91 = new Map();
  const _0x4387a7 = new Map();
  const _0x122ddd = new Map();
  const _0x41a1da = new Map();
  const _0x22fd21 = new Map();
  const _0x3449e4 = new Map();
  const _0x52e466 = new Map();
  const _0x14b54d = new Map();
  const _0x4d321c = new Map();
  const _0x16baa1 = new Map();
  const _0x52bc70 = new Map();
  const _0x622096 = new Map();
  const _0xa9876 = new Map();
  const _0x58db83 = new Map();
  const _0x37d706 = new Map();
  const _0x2b4457 = new Map();
  const _0x4f7868 = new Map();
  function _0x2e87fe() {
    try {
      _0xa9876.clear();
      _0x58db83.clear();
      _0x37d706.clear();
      _0x2b4457.clear();
      _0x4f7868.clear();
      document.querySelectorAll(".ai-result-inline").forEach(_0x5d5a05 => {
        {
          _0x5d5a05.style.display = "none";
          _0x5d5a05.className = "ai-result-inline";
          _0x5d5a05.innerHTML = "";
        }
      });
    } catch (_0x4afb2e) {}
  }
  function _0x32ebe3(_0x16a9e2) {
    const _0x5150d3 = _0x16a9e2 || document;
    if (!_0x5150d3 || !_0x5150d3.querySelectorAll) {
      return;
    }
    _0x5150d3.querySelectorAll(".btn-ask-ai-threat[data-evidence]").forEach(_0x27234f => {
      if (_0x27234f.dataset.askBound === "1") {
        return;
      }
      _0x27234f.dataset.askBound = "1";
      _0x27234f.addEventListener("click", () => {
        _0x21b6bf(_0x27234f);
      });
    });
  }
  function _0x5ad7a7(_0x136936, _0x36d7c6, _0x12dd1f) {
    const _0x5cd78a = _0x136936;
    if (!_0x5cd78a) {
      return false;
    }
    const _0x5a6540 = _0x5cd78a.querySelector && _0x5cd78a.querySelector(".ai-result-inline");
    if (!_0x5a6540) {
      return false;
    }
    const _0x159ddf = String(_0x36d7c6 || "");
    if (!_0x159ddf) {
      return false;
    }
    const _0x408bb8 = _0xa9876.has(_0x159ddf) ? _0xa9876.get(_0x159ddf) || null : null;
    const _0x4556db = _0x58db83.has(_0x159ddf) ? _0x58db83.get(_0x159ddf) || null : null;
    const _0x408ece = _0x37d706.has(_0x159ddf) ? _0x37d706.get(_0x159ddf) || null : null;
    let _0xc10334 = null;
    if (_0x12dd1f === "ai") {
      _0xc10334 = "ai";
    } else {
      if (_0x12dd1f === "threat") {
        _0xc10334 = "threat";
      } else {
        if (_0x12dd1f === "crypto") {
          _0xc10334 = "crypto";
        } else {
          if (_0x12dd1f === "last") {
            const _0xbf60af = _0x2b4457.get(_0x159ddf);
            if (_0xbf60af === "ai" && _0x408bb8 && _0x408bb8.html) {
              _0xc10334 = "ai";
            } else {
              if (_0xbf60af === "threat" && _0x4556db && _0x4556db.html) {
                _0xc10334 = "threat";
              } else {
                if (_0xbf60af === "crypto" && _0x408ece && _0x408ece.html) {
                  _0xc10334 = "crypto";
                } else {
                  if (_0x408bb8 && _0x408bb8.html && !_0x4556db && !_0x408ece) {
                    _0xc10334 = "ai";
                  } else {
                    if (_0x4556db && _0x4556db.html && !_0x408bb8 && !_0x408ece) {
                      _0xc10334 = "threat";
                    } else {
                      if (_0x408ece && _0x408ece.html && !_0x408bb8 && !_0x4556db) {
                        _0xc10334 = "crypto";
                      } else {
                        {
                          _0x5a6540.style.display = "none";
                          _0x5a6540.className = "ai-result-inline";
                          _0x5a6540.innerHTML = "";
                          return false;
                        }
                      }
                    }
                  }
                }
              }
            }
          } else {
            return false;
          }
        }
      }
    }
    if (_0xc10334 === "ai") {
      if (!_0x39b242()) {
        return false;
      }
      if (!_0x408bb8 || !_0x408bb8.html) {
        return false;
      }
      _0x5a6540.style.display = "block";
      _0x5a6540.className = _0x408bb8.className && String(_0x408bb8.className).trim() ? String(_0x408bb8.className).trim() : "ai-result-inline md-rendered";
      _0x5a6540.innerHTML = "<section class=\"inline-report-section report-ai\" data-report-kind=\"ai\">" + _0x408bb8.html + "</section>";
      _0x9d1273(_0x5cd78a, _0x5a6540);
      _0xf30b52(_0x5a6540);
      _0x32ebe3(_0x5a6540);
      return true;
    }
    if (_0xc10334 === "threat") {
      if (!_0x39b242()) {
        return false;
      }
      if (!_0x4556db || !_0x4556db.html) {
        return false;
      }
      _0x5a6540.style.display = "block";
      _0x5a6540.className = _0x4556db.className && String(_0x4556db.className).trim() ? String(_0x4556db.className).trim() : "ai-result-inline threat-static-report";
      _0x5a6540.innerHTML = "<section class=\"inline-report-section report-threat\" data-report-kind=\"threat\">" + _0x4556db.html + "</section>";
      _0x9d1273(_0x5cd78a, _0x5a6540);
      _0xf30b52(_0x5a6540);
      _0x32ebe3(_0x5a6540);
      return true;
    }
    if (_0xc10334 === "crypto") {
      if (!_0x39b242()) {
        return false;
      }
      if (!_0x408ece || !_0x408ece.html) {
        return false;
      }
      _0x5a6540.style.display = "block";
      _0x5a6540.className = _0x408ece.className && String(_0x408ece.className).trim() ? String(_0x408ece.className).trim() : "ai-result-inline md-rendered";
      _0x5a6540.innerHTML = "<section class=\"inline-report-section report-crypto\" data-report-kind=\"crypto\">" + _0x408ece.html + "</section>";
      _0x9d1273(_0x5cd78a, _0x5a6540);
      _0xf30b52(_0x5a6540);
      _0x32ebe3(_0x5a6540);
      return true;
    }
    return false;
  }
  function _0x5ebfd4(_0x46625c, _0xe7e276) {
    _0x5ad7a7(_0x46625c, _0xe7e276, "last");
  }
  function _0xb9d2f8(_0x4e823d) {
    const _0x2056d0 = String(_0x4e823d || "");
    if (!_0x2056d0) {
      return false;
    }
    try {
      const _0x12eb70 = _0x45bd18;
      const _0x1ea1a0 = _0xd7a0ab;
      const _0xb838a = _0x4dcdc5 => {
        {
          const _0x1d9c40 = _0x4dcdc5 && _0x4dcdc5.querySelector ? _0x4dcdc5.querySelector(".record-item[data-id=\"" + _0x2056d0 + "\"]") : null;
          return _0x1d9c40 ? _0x1d9c40.querySelector(".record-detail-inline") : null;
        }
      };
      const _0x15fa89 = _0xb838a(_0x12eb70) || _0xb838a(_0x1ea1a0);
      if (!_0x15fa89) {
        return false;
      }
      return _0x15fa89.style && _0x15fa89.style.display === "block";
    } catch (_0x8f2e3a) {
      return false;
    }
  }
  function _0x3e0206() {
    clearTimeout(_0x404a1f);
    _0x404a1f = setTimeout(() => {
      if (_0x24ce8b) {
        if (_0xb9d2f8(_0x24ce8b)) {
          return;
        }
        _0x24ce8b = null;
      }
      if (_0x3a0472 === "history") {
        _0x5e6b83();
      } else {
        _0x1df5e8();
      }
    }, 120);
  }
  function _0x48881b() {
    if (_0x3a0472 === "history") {
      _0x5e6b83();
    } else {
      if (_0x3a0472 === "intercept") {
        _0x1df5e8();
      }
    }
  }
  let _0x45b6a7 = [];
  function _0x1ff78b() {
    try {
      _0x45b6a7.forEach(_0xde1cb6 => clearTimeout(_0xde1cb6));
    } catch (_0x478020) {}
    _0x45b6a7 = [];
  }
  function _0x14eb9c(_0x25b2c6, _0x3287c6) {
    {
      const _0x1f8e54 = _0x25b2c6 === "history" ? "history" : "intercept";
      const _0x19627c = _0x3287c6 && Array.isArray(_0x3287c6.delays) && _0x3287c6.delays.length ? _0x3287c6.delays : [0, 120, 360, 900];
      _0x1ff78b();
      _0x19627c.forEach(_0x21490a => {
        const _0x3195ea = setTimeout(() => {
          _0x45b6a7 = _0x45b6a7.filter(_0x431da0 => _0x431da0 !== _0x3195ea);
          if (_0x3a0472 !== _0x1f8e54) {
            return;
          }
          if (_0x24ce8b && _0xb9d2f8(_0x24ce8b)) {
            return;
          }
          if (_0x1f8e54 === "history") {
            _0x5e6b83();
          } else {
            _0x1df5e8();
          }
        }, Math.max(0, Number(_0x21490a) || 0));
        _0x45b6a7.push(_0x3195ea);
      });
    }
  }
  function _0x1777da(_0xd19faa) {
    {
      (_0xd19faa || []).forEach(_0x351bbf => {
        const _0x170e12 = _0x351bbf && _0x351bbf.id != null ? String(_0x351bbf.id) : "";
        if (!_0x170e12) {
          return;
        }
        const _0x39c661 = Number(_0x351bbf && _0x351bbf.timestamp != null ? _0x351bbf.timestamp : 0) || 0;
        if (_0x39c661) {
          _0x4559cf.set(_0x170e12, _0x39c661);
        } else {
          if (!_0x4559cf.has(_0x170e12)) {
            _0x4559cf.set(_0x170e12, 0);
          }
        }
      });
      const _0x26b227 = Array.from(_0x4559cf.entries());
      _0x26b227.sort((_0x4ec517, _0x456a67) => {
        const _0x1311fb = _0x4ec517[1] || 0;
        const _0x4ed29c = _0x456a67[1] || 0;
        if (_0x1311fb !== _0x4ed29c) {
          return _0x1311fb - _0x4ed29c;
        }
        return String(_0x4ec517[0]).localeCompare(String(_0x456a67[0]));
      });
      for (let _0x4f38e8 = 0; _0x4f38e8 < _0x26b227.length; _0x4f38e8++) {
        _0x1e8ea0.set(_0x26b227[_0x4f38e8][0], _0x4f38e8 + 1);
      }
    }
  }
  function _0x12f43f() {
    if (!_0x30a66a) {
      return;
    }
    _0x30a66a.querySelectorAll("button[data-custom-suffix=\"1\"]").forEach(_0x105e2f => _0x105e2f.remove());
    const _0x152efd = Array.isArray(_0x560cc2) && _0x560cc2.includes("*");
    const _0x34768d = _0x152efd ? [] : Array.isArray(_0x560cc2) ? Array.from(new Set(_0x560cc2.map(_0x3f2420 => String(_0x3f2420 || "").trim().toLowerCase().replace(/^\./, "")).filter(Boolean))) : [];
    const _0x1cba7c = _0x30a66a.querySelector("button[data-type=\"other\"]");
    _0x34768d.forEach(_0x35e471 => {
      {
        const _0x277666 = document.createElement("button");
        _0x277666.type = "button";
        _0x277666.setAttribute("data-type", "custom_suffix:" + _0x35e471);
        _0x277666.setAttribute("data-custom-suffix", "1");
        _0x277666.textContent = _0x35e471.toUpperCase();
        if (_0x1cba7c) {
          _0x30a66a.insertBefore(_0x277666, _0x1cba7c);
        } else {
          _0x30a66a.appendChild(_0x277666);
        }
      }
    });
    const _0x501a01 = _0x30a66a.querySelector("button[data-type=\"other\"]");
    _0x501a01 && (_0x501a01.textContent = "OTHER TEXT", (_0x152efd || _0x34768d.length > 0) && (_0x501a01.style.display = ""));
    const _0x1c3b7d = new Set((_0x137e6f || []).map(_0x5a0263 => String(_0x5a0263 || "").toLowerCase()));
    if (_0x152efd) {
      _0x1c3b7d.add("other");
    }
    if (_0x1c3b7d.has("other_text")) {
      _0x1c3b7d.add("other");
    }
    _0x30a66a.querySelectorAll("button[data-type]").forEach(_0x17063d => {
      const _0x143810 = String(_0x17063d.getAttribute("data-type") || "").toLowerCase();
      const _0x3bb929 = _0x143810.startsWith("custom_suffix:");
      if (!_0x143810) {
        {
          _0x17063d.style.display = "";
          return;
        }
      }
      if (_0x3bb929) {
        _0x17063d.style.display = "";
        return;
      }
      _0x17063d.style.display = _0x1c3b7d.has(_0x143810) ? "" : "none";
    });
    if (_0x337d9b) {
      const _0x409d24 = _0x30a66a.querySelector("button[data-type=\"" + _0x337d9b + "\"]");
      (!_0x409d24 || _0x409d24.style.display === "none") && (_0x337d9b = "");
    }
    const _0x383432 = _0x30a66a.querySelector("button[data-type=\"" + _0x337d9b + "\"]") || _0x30a66a.querySelector("button[data-type=\"\"]");
    _0x383432 && (_0x30a66a.querySelectorAll("button").forEach(_0x5b92ad => _0x5b92ad.classList.remove("active")), _0x383432.classList.add("active"));
  }
  function _0x583d29(_0x1b117e) {
    return new Promise(_0x41c1db => _0x4b6be4.runtime.sendMessage(_0x1b117e, _0x1495bd => _0x41c1db(_0x1495bd || {})));
  }
  function _0x4b7f7d(_0x473557) {
    if (!_0x473557) {
      return "--:--:--";
    }
    try {
      const _0x59d6a3 = new Date(_0x473557);
      return [_0x59d6a3.getHours(), _0x59d6a3.getMinutes(), _0x59d6a3.getSeconds()].map(_0x2d6be8 => String(_0x2d6be8).padStart(2, "0")).join(":");
    } catch (_0x5e05c1) {
      {
        return "--:--:--";
      }
    }
  }
  function _0x47bf5c(_0x38965c) {
    const _0x2a57aa = _0x38965c == null ? NaN : Number(_0x38965c);
    if (!Number.isFinite(_0x2a57aa) || _0x2a57aa < 0) {
      return "-";
    }
    if (_0x2a57aa === 0) {
      return "0B";
    }
    if (_0x2a57aa < 1024) {
      return _0x2a57aa + "B";
    }
    if (_0x2a57aa < 1048576) {
      return (_0x2a57aa / 1024).toFixed(1) + "KB";
    }
    return (_0x2a57aa / 1048576).toFixed(2) + "MB";
  }
  function _0x35366a(_0x4b8fbc) {
    const _0x5c669f = Number(_0x4b8fbc || 0);
    if (!_0x5c669f) {
      return "-";
    }
    return Math.round(_0x5c669f) + "ms";
  }
  function _0x297a34(_0x14d105) {
    try {
      const _0x421485 = Number(_0x14d105 && _0x14d105.statusCode != null ? _0x14d105.statusCode : 0);
      return _0x421485 >= 100 ? _0x850dc("packetSideResponse") || "Response" : _0x850dc("packetSideRequest") || "Request";
    } catch (_0x2a9eb3) {
      return _0x850dc("packetSideRequest") || "Request";
    }
  }
  function _0x5f2b1b(_0xffac88) {
    {
      const _0x15a74f = (_0xffac88 || []).slice();
      _0x15a74f.sort((_0x59d635, _0x174482) => {
        {
          if (_0x15d341 === "time_asc") {
            return (_0x59d635.timestamp || 0) - (_0x174482.timestamp || 0);
          }
          if (_0x15d341 === "time_desc") {
            return (_0x174482.timestamp || 0) - (_0x59d635.timestamp || 0);
          }
          if (_0x15d341 === "seq_asc") {
            return (_0x59d635.timestamp || 0) - (_0x174482.timestamp || 0);
          }
          if (_0x15d341 === "seq_desc") {
            return (_0x174482.timestamp || 0) - (_0x59d635.timestamp || 0);
          }
          if (_0x15d341 === "size_asc") {
            return Number(_0x59d635.sizeBytes || 0) - Number(_0x174482.sizeBytes || 0);
          }
          if (_0x15d341 === "size_desc") {
            return Number(_0x174482.sizeBytes || 0) - Number(_0x59d635.sizeBytes || 0);
          }
          if (_0x15d341 === "duration_asc") {
            return Number(_0x59d635.durationMs || 0) - Number(_0x174482.durationMs || 0);
          }
          if (_0x15d341 === "duration_desc") {
            return Number(_0x174482.durationMs || 0) - Number(_0x59d635.durationMs || 0);
          }
          if (_0x15d341 === "type_asc") {
            return String(_0x59d635.resourceType || "").localeCompare(String(_0x174482.resourceType || ""));
          }
          return (_0x174482.timestamp || 0) - (_0x59d635.timestamp || 0);
        }
      });
      return _0x15a74f;
    }
  }
  function _0x33988b(_0x257feb) {
    const _0x58721e = String(_0x257feb || "").trim();
    if (!_0x58721e) {
      return "";
    }
    if (_0x58721e.startsWith("customRegex:")) {
      return "customRegexNamed";
    }
    if (_0x58721e.startsWith("keyword:") || _0x58721e.startsWith("关键词:")) {
      return "keyword";
    }
    const _0x86410a = _0x58721e.toLowerCase();
    const _0x3124ad = {
      idcard: "idCard",
      phone: "phone",
      bankcard: "bankCard",
      email: "email",
      ipv4: "ipv4",
      ipv6: "ipv6",
      domain: "domain",
      shiro: "shiro",
      jwt: "jwt",
      swagger: "swagger",
      ueditor: "ueditor",
      druid: "druid",
      ctfflag: "ctfFlag",
      customregex: "customRegex",
      "身份证号": "idCard",
      "手机号": "phone",
      "银行卡号": "bankCard",
      "邮箱": "email",
      ipv4: "ipv4",
      ipv6: "ipv6",
      "域名": "domain",
      "自定义正则": "customRegex"
    };
    return _0x3124ad[_0x58721e] || _0x3124ad[_0x86410a] || "";
  }
  function _0x14840f(_0x12ce3d) {
    {
      const _0x1c7bb4 = String(_0x12ce3d || "").trim();
      if (_0x1c7bb4.startsWith("customRegex:")) {
        return _0x1c7bb4.slice("customRegex:".length) || _0x850dc("sensitiveCustomRegexLabel");
      }
      const _0x7f5cf1 = _0x33988b(_0x1c7bb4);
      if (_0x7f5cf1 === "idCard") {
        return _0x850dc("builtinIdCard");
      }
      if (_0x7f5cf1 === "phone") {
        return _0x850dc("builtinPhone");
      }
      if (_0x7f5cf1 === "bankCard") {
        return _0x850dc("builtinBankCard");
      }
      if (_0x7f5cf1 === "email") {
        return _0x850dc("builtinEmail");
      }
      if (_0x7f5cf1 === "ipv4") {
        return _0x850dc("builtinIpv4");
      }
      if (_0x7f5cf1 === "ipv6") {
        return _0x850dc("builtinIpv6");
      }
      if (_0x7f5cf1 === "domain") {
        return _0x850dc("builtinDomain");
      }
      if (_0x7f5cf1 === "shiro") {
        return _0x850dc("builtinShiro");
      }
      if (_0x7f5cf1 === "jwt") {
        return _0x850dc("builtinJwt");
      }
      if (_0x7f5cf1 === "swagger") {
        return _0x850dc("builtinSwagger");
      }
      if (_0x7f5cf1 === "ueditor") {
        return _0x850dc("builtinUeditor");
      }
      if (_0x7f5cf1 === "druid") {
        return _0x850dc("builtinDruid");
      }
      if (_0x7f5cf1 === "ctfFlag") {
        return _0x850dc("builtinCtfFlag");
      }
      if (_0x7f5cf1 === "customRegex") {
        return _0x850dc("sensitiveCustomRegexLabel");
      }
      if (_0x7f5cf1 === "keyword") {
        const _0x4d0fb4 = _0x1c7bb4.includes(":") ? _0x1c7bb4.split(":").slice(1).join(":") : "";
        return _0x850dc("sensitiveKeywordLabel") + (_0x4d0fb4 ? ":" + _0x4d0fb4 : "");
      }
      return _0x1c7bb4;
    }
  }
  function _0x191e3c(_0x2d1c83) {
    if (!_0x137574 || !_0x2d1c83 || !_0x58b305.length) {
      return [];
    }
    const _0x44c95f = [_0x137986(_0x2d1c83), _0x24e589(_0x2d1c83)].join("\n");
    const _0x3a496c = _0x3c3201(String(_0x44c95f || "").slice(0, 500000));
    if (!_0x3a496c.trim()) {
      return [];
    }
    const _0x548eb0 = [];
    _0x58b305.forEach(_0x179e00 => {
      {
        if (!_0x179e00 || !_0x179e00.regex || !_0x568c76(_0x3a496c, _0x179e00)) {
          return;
        }
        const _0x28eb2d = _0x179e00.hitKey || (_0x179e00.key === "customRegex" ? "customRegex:" + (_0x179e00.label || "") : _0x179e00.key === "keyword" ? "keyword:" + (_0x179e00.label || "") : _0x179e00.key);
        if (_0x28eb2d && !_0x548eb0.includes(_0x28eb2d)) {
          _0x548eb0.push(_0x28eb2d);
        }
      }
    });
    return _0x548eb0.slice(0, 8);
  }
  function _0x44e0b9(_0x5f4617) {
    {
      let _0x484273 = Array.isArray(_0x5f4617 && _0x5f4617.sensitiveHits) ? _0x5f4617.sensitiveHits.filter(Boolean) : [];
      if (!_0x484273.length && _0x5f4617) {
        _0x484273 = _0x191e3c(_0x5f4617);
      }
      if (!_0x484273.length) {
        return "<span class=\"record-sensitive-empty\">-</span>";
      }
      const _0x4b616a = [];
      const _0x41610b = new Set();
      _0x484273.forEach(_0x144c10 => {
        const _0x2853d1 = String(_0x144c10);
        !_0x41610b.has(_0x2853d1) && (_0x4b616a.push(_0x2853d1), _0x41610b.add(_0x2853d1));
      });
      const _0x429d0d = _0x4b616a.map(_0x5dddb6 => _0x14840f(_0x5dddb6));
      const _0x4807a6 = _0x4b616a.slice(0, 6).map(_0x556222 => {
        const _0x1ed4ba = _0x33988b(_0x556222) || "keyword";
        let _0x502ff8 = _0x43b3a5[_0x1ed4ba] || _0x9a0db4[_0x1ed4ba] || "#999";
        if (String(_0x556222).startsWith("customRegex:")) {
          const _0x1fb6b9 = String(_0x556222).slice("customRegex:".length);
          _0x502ff8 = _0x1857bf[_0x1fb6b9] || _0x43b3a5.customRegex || "#6f7ee8";
        } else {
          if (String(_0x556222).startsWith("keyword:")) {
            const _0x2f4cad = String(_0x556222).slice("keyword:".length);
            _0x502ff8 = _0x78fbd[_0x2f4cad] || _0x43b3a5.keyword || "#4c8fd1";
          }
        }
        const _0x5443b3 = _0x47f251(_0x14840f(_0x556222));
        return "<span class=\"sensitive-dot\" style=\"background:" + _0x502ff8 + "\" title=\"" + _0x5443b3 + "\"></span>";
      }).join("");
      const _0x22d473 = _0x4b616a.length > 6 ? "<span class=\"sensitive-more\">+" + (_0x4b616a.length - 6) + "</span>" : "";
      return "<span class=\"record-sensitive-dots\" title=\"" + _0x47f251(_0x429d0d.join(" / ")) + "\">" + _0x4807a6 + _0x22d473 + "</span>";
    }
  }
  function _0x3b791b(_0x276371) {
    if (!_0x137574 || !_0x58b305.length) {
      return [];
    }
    const _0x5bf944 = _0x3c3201(String(_0x276371 || "").slice(0, 500000));
    if (!_0x5bf944.trim()) {
      return [];
    }
    const _0x3dfc94 = [];
    _0x58b305.forEach(_0x4e43be => {
      if (!_0x4e43be || !_0x4e43be.regex || !_0x568c76(_0x5bf944, _0x4e43be)) {
        return;
      }
      const _0x594658 = _0x4e43be.hitKey || (_0x4e43be.key === "customRegex" ? "customRegex:" + (_0x4e43be.label || "") : _0x4e43be.key === "keyword" ? "keyword:" + (_0x4e43be.label || "") : _0x4e43be.key);
      if (_0x594658 && !_0x3dfc94.includes(_0x594658)) {
        _0x3dfc94.push(_0x594658);
      }
    });
    return _0x3dfc94.slice(0, 8);
  }
  function _0x152d54(_0x36c3b4) {
    {
      const _0x579eb3 = [];
      const _0x1644b6 = new Set();
      (Array.isArray(_0x36c3b4) ? _0x36c3b4 : []).forEach(_0x264d03 => {
        const _0x329a82 = String(_0x264d03 || "");
        if (!_0x329a82 || _0x1644b6.has(_0x329a82)) {
          return;
        }
        _0x1644b6.add(_0x329a82);
        _0x579eb3.push(_0x329a82);
      });
      if (!_0x579eb3.length) {
        return "<span class=\"record-sensitive-empty\">-</span>";
      }
      const _0x58ea41 = _0x579eb3.map(_0xed241 => _0x14840f(_0xed241));
      const _0x3f25dc = _0x579eb3.slice(0, 6).map(_0x1945a1 => {
        const _0x500ee9 = _0x33988b(_0x1945a1) || "keyword";
        let _0x4cce03 = _0x43b3a5[_0x500ee9] || _0x9a0db4[_0x500ee9] || "#999";
        if (String(_0x1945a1).startsWith("customRegex:")) {
          const _0x5b91bf = String(_0x1945a1).slice("customRegex:".length);
          _0x4cce03 = _0x1857bf[_0x5b91bf] || _0x43b3a5.customRegex || "#6f7ee8";
        } else {
          if (String(_0x1945a1).startsWith("keyword:")) {
            const _0x145ec3 = String(_0x1945a1).slice("keyword:".length);
            _0x4cce03 = _0x78fbd[_0x145ec3] || _0x43b3a5.keyword || "#4c8fd1";
          }
        }
        const _0x4ad46f = _0x47f251(_0x14840f(_0x1945a1));
        return "<span class=\"sensitive-dot\" style=\"background:" + _0x4cce03 + "\" title=\"" + _0x4ad46f + "\"></span>";
      }).join("");
      const _0x28c0d2 = _0x579eb3.length > 6 ? "<span class=\"sensitive-more\">+" + (_0x579eb3.length - 6) + "</span>" : "";
      return "<span class=\"record-sensitive-dots\" title=\"" + _0x47f251(_0x58ea41.join(" / ")) + "\">" + _0x3f25dc + _0x28c0d2 + "</span>";
    }
  }
  function _0x1ce468() {
    const _0x57251e = _0x3a0472 === "history" ? _0xb31434 : _0xa02ab3;
    return _0x57251e.map(_0x18ba0b => _0x18ba0b.id).filter(Boolean);
  }
  function _0x35d6f4() {
    const _0x5e3e85 = new Set(_0x1ce468());
    return Array.from(_0x37d6ec).filter(_0x4e5f38 => _0x5e3e85.has(_0x4e5f38));
  }
  function _0x3fcfe5() {
    {
      const _0x15b39a = _0x35d6f4();
      const _0x3ca82c = !_0x39b242();
      if (_0x352d91) {
        const _0x1a69e1 = _0x850dc("selectedCountText", String(_0x15b39a.length));
        _0x352d91.textContent = _0x1a69e1 || "Selected " + _0x15b39a.length;
      }
      if (_0xb5ab8e) {
        _0xb5ab8e.disabled = !_0x3ca82c && _0x15b39a.length === 0;
      }
      if (_0x531db7) {
        _0x531db7.disabled = !_0x3ca82c && _0x15b39a.length === 0;
      }
      if (_0x48c42a) {
        _0x48c42a.disabled = !_0x3ca82c && _0x15b39a.length === 0;
      }
      if (_0x47c42f) {
        _0x47c42f.disabled = !_0x3ca82c && _0x15b39a.length === 0;
      }
      if (_0x4b2878) {
        _0x4b2878.disabled = !_0x3ca82c && _0x15b39a.length === 0;
      }
      if (_0x33f4e8) {
        const _0x2bfb56 = _0x1ce468();
        _0x33f4e8.checked = _0x2bfb56.length > 0 && _0x15b39a.length === _0x2bfb56.length;
        _0x33f4e8.indeterminate = _0x15b39a.length > 0 && _0x15b39a.length < _0x2bfb56.length;
      }
      if (_0xa5818e) {
        const _0x3f6099 = _0x15b39a.length === 0 && !_0x48b695;
        _0xa5818e.classList.toggle("collapsed", _0x3f6099);
        _0xa5818e.classList.toggle("expanded", !_0x3f6099);
      }
      _0x378bec && _0x12b6e1 && (_0x12b6e1.style.display = _0x48b695 ? "flex" : "none", _0x378bec.setAttribute("aria-expanded", _0x48b695 ? "true" : "false"));
    }
  }
  function _0x48b7d7(_0x1ffa79) {
    if (!_0x1ffa79 || !_0x1ffa79.length) {
      return "";
    }
    return _0x1ffa79.map(_0x890cff => {
      if (Array.isArray(_0x890cff)) {
        return _0x890cff[0] + ": " + _0x890cff[1];
      }
      return (_0x890cff.name || _0x890cff[0]) + ": " + (_0x890cff.value || _0x890cff[1]);
    }).join("\n");
  }
  function _0x47f251(_0x26939d) {
    if (typeof _0x26939d !== "string") {
      return "";
    }
    return _0x26939d.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function _0x38d7d9(_0x27fb05) {
    {
      const _0x205afc = String(_0x27fb05 || "").trim();
      if (!_0x205afc) {
        return null;
      }
      try {
        if (_0x205afc.startsWith("/") && _0x205afc.lastIndexOf("/") > 0) {
          const _0x2d6812 = _0x205afc.lastIndexOf("/");
          const _0x30c281 = _0x205afc.slice(1, _0x2d6812);
          const _0x1c9d43 = _0x205afc.slice(_0x2d6812 + 1) || "g";
          return new RegExp(_0x30c281, _0x1c9d43.includes("g") ? _0x1c9d43 : _0x1c9d43 + "g");
        }
        return new RegExp(_0x205afc, "g");
      } catch (_0xf92163) {
        return null;
      }
    }
  }
  function _0x338775(_0x1c2cd0) {
    const _0x353235 = Object.assign({
      idCard: true,
      phone: true,
      bankCard: true,
      email: true,
      ipv4: true,
      ipv6: false,
      domain: true,
      shiro: true,
      jwt: true,
      swagger: true,
      ueditor: true,
      druid: true,
      ctfFlag: false
    }, _0x1c2cd0 && _0x1c2cd0.sensitiveBuiltins || {});
    let _0x9d9918 = Object.assign({}, _0x5e49fc, _0x1c2cd0 && _0x1c2cd0.sensitiveBuiltinRegexes || {});
    if (_0x9d9918.idCard && String(_0x9d9918.idCard).startsWith("^")) {
      _0x9d9918 = {
        ..._0x9d9918,
        idCard: "[1-9]\\d{5}(18|19|20)\\d{2}(0[1-9]|1[0-2])(0[1-9]|[1-2]\\d|3[0-1])\\d{3}[\\dXx](?![0-9Xx])"
      };
    }
    const _0x257df6 = [];
    Object.keys(_0x9d9918).forEach(_0x5bd9fe => {
      if (_0x353235[_0x5bd9fe] === false) {
        return;
      }
      const _0x21d264 = _0x38d7d9(_0x9d9918[_0x5bd9fe]);
      if (!_0x21d264) {
        return;
      }
      const _0x483e47 = {
        idCard: _0x850dc("builtinIdCard"),
        phone: _0x850dc("builtinPhone"),
        bankCard: _0x850dc("builtinBankCard"),
        email: _0x850dc("builtinEmail"),
        ipv4: _0x850dc("builtinIpv4"),
        ipv6: _0x850dc("builtinIpv6"),
        domain: _0x850dc("builtinDomain"),
        shiro: _0x850dc("builtinShiro"),
        jwt: _0x850dc("builtinJwt"),
        swagger: _0x850dc("builtinSwagger"),
        ueditor: _0x850dc("builtinUeditor"),
        druid: _0x850dc("builtinDruid"),
        ctfFlag: _0x850dc("builtinCtfFlag")
      };
      _0x257df6.push({
        key: _0x5bd9fe,
        hitKey: _0x5bd9fe,
        label: _0x483e47[_0x5bd9fe] || _0x5bd9fe,
        color: _0x43b3a5[_0x5bd9fe] || _0x9a0db4[_0x5bd9fe] || "#999",
        regex: _0x21d264
      });
    });
    const _0x2a8d73 = _0x39b242() && Array.isArray(_0x1c2cd0 && _0x1c2cd0.sensitiveCustomRules) ? _0x1c2cd0.sensitiveCustomRules : [];
    _0x2a8d73.forEach(_0x2d50e7 => {
      {
        if (!_0x2d50e7 || _0x2d50e7.enabled === false) {
          return;
        }
        const _0x954bbb = _0x38d7d9(_0x2d50e7.pattern || "");
        if (!_0x954bbb) {
          return;
        }
        _0x257df6.push({
          key: "customRegex",
          hitKey: "customRegex:" + (_0x2d50e7.name || "CustomRegex"),
          label: _0x2d50e7.name || _0x850dc("sensitiveCustomRegexLabel"),
          color: _0x2d50e7.color || _0x43b3a5.customRegex || "#6f7ee8",
          regex: _0x954bbb
        });
      }
    });
    const _0x30fd99 = _0x39b242() && Array.isArray(_0x1c2cd0 && _0x1c2cd0.sensitiveKeywordRules) ? _0x1c2cd0.sensitiveKeywordRules : [];
    _0x30fd99.forEach(_0x36bb4c => {
      if (!_0x36bb4c || _0x36bb4c.enabled === false) {
        return;
      }
      const _0x4eaf53 = String(_0x36bb4c.keywords || "").split(/[\n,，\s]+/).map(_0x5ef87a => _0x5ef87a.trim()).filter(Boolean);
      if (!_0x4eaf53.length) {
        return;
      }
      const _0x4d63af = new RegExp("(" + _0x4eaf53.map(_0x5c8a01 => _0x5c8a01.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|") + ")", "ig");
      _0x257df6.push({
        key: "keyword",
        hitKey: "keyword:" + (_0x36bb4c.name || "Keyword"),
        label: _0x36bb4c.name || _0x850dc("sensitiveKeywordLabel"),
        color: _0x36bb4c.color || _0x43b3a5.keyword || "#4c8fd1",
        regex: _0x4d63af
      });
    });
    _0x58b305 = _0x257df6;
  }
  function _0x568c76(_0x482931, _0x2c51d9) {
    if (!_0x2c51d9 || !_0x2c51d9.regex) {
      return false;
    }
    const _0x1c3933 = String(_0x482931 || "");
    if (!_0x1c3933) {
      return false;
    }
    try {
      const _0x5dfcef = _0x2c51d9.regex.flags.includes("g") ? _0x2c51d9.regex.flags : _0x2c51d9.regex.flags + "g";
      let _0x5aa972 = _0x2c51d9.regex.source;
      if (_0x5aa972.startsWith("^")) {
        _0x5aa972 = _0x5aa972.slice(1);
      }
      if (_0x5aa972.endsWith("$")) {
        _0x5aa972 = _0x5aa972.slice(0, -1);
      }
      const _0x244783 = new RegExp(_0x5aa972, _0x5dfcef);
      return _0x244783.test(_0x1c3933);
    } catch (_0x376c5d) {
      return false;
    }
  }
  function _0x33d497(_0x39cba3) {
    let _0xc50481 = String(_0x39cba3 || "");
    if (!_0xc50481) {
      return "";
    }
    _0xc50481 = _0xc50481.replace(/\uFFFD/g, "");
    _0xc50481 = _0xc50481.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "");
    _0xc50481 = _0xc50481.trim();
    _0xc50481 = _0xc50481.replace(/^[`"'“”‘’\[\]\(\),:;<>]+/, "");
    _0xc50481 = _0xc50481.replace(/[`"'“”‘’\[\]\(\),:;<>]+$/, "");
    _0xc50481 = _0xc50481.trim();
    return _0xc50481;
  }
  function _0xd29a5b(_0x1d0cd4, _0x38ae2b) {
    if (!_0x137574 || !_0x58b305.length) {
      return "";
    }
    const _0x9a4562 = [];
    const _0x38c7ca = new Set();
    const _0x22be02 = String(_0x1d0cd4 || "").slice(0, 500000);
    _0x58b305.forEach(_0x5bd932 => {
      {
        if (!_0x5bd932 || !_0x5bd932.regex) {
          return;
        }
        if (!_0x568c76(_0x22be02, _0x5bd932)) {
          return;
        }
        try {
          {
            const _0x40f8b2 = _0x5bd932.regex.flags.includes("g") ? _0x5bd932.regex.flags : _0x5bd932.regex.flags + "g";
            let _0x3318d6 = _0x5bd932.regex.source;
            if (_0x3318d6.startsWith("^")) {
              _0x3318d6 = _0x3318d6.slice(1);
            }
            if (_0x3318d6.endsWith("$")) {
              _0x3318d6 = _0x3318d6.slice(0, -1);
            }
            const _0x551fd8 = new RegExp(_0x3318d6, _0x40f8b2);
            let _0x1e30df;
            while ((_0x1e30df = _0x551fd8.exec(_0x22be02)) !== null) {
              const _0xdd4f10 = String(_0x1e30df && _0x1e30df[0] || "").trim();
              const _0x2ce93d = _0x33d497(_0xdd4f10);
              if (!_0x2ce93d) {
                if (!_0x1e30df[0]) {
                  _0x551fd8.lastIndex += 1;
                }
                continue;
              }
              const _0xa07133 = (_0x5bd932.label || "") + "::" + _0x2ce93d;
              !_0x38c7ca.has(_0xa07133) && (_0x38c7ca.add(_0xa07133), _0x9a4562.push({
                color: _0x5bd932.color || "#999",
                label: _0x5bd932.label || "",
                text: _0x2ce93d,
                rawText: _0xdd4f10
              }));
              if (_0x9a4562.length >= 8) {
                break;
              }
              if (!_0x1e30df[0]) {
                _0x551fd8.lastIndex += 1;
              }
            }
          }
        } catch (_0x58acd4) {}
      }
    });
    if (!_0x9a4562.length) {
      return "";
    }
    return _0x9a4562.slice(0, 8).map(_0x5c3d92 => {
      const _0x3f4cf0 = _0x5c3d92.text.length > 28 ? _0x5c3d92.text.slice(0, 28) + "..." : _0x5c3d92.text;
      const _0x4dcfb9 = (_0x5c3d92.label ? _0x5c3d92.label + "：" : "") + _0x3f4cf0;
      const _0x586618 = encodeURIComponent(_0x5c3d92.rawText || _0x5c3d92.text || "");
      const _0x19848d = encodeURIComponent(_0x5c3d92.text || "");
      return "<span class=\"field-sensitive-tag\" style=\"background:" + _0x5c3d92.color + "22;border-color:" + _0x5c3d92.color + ";color:" + _0x5c3d92.color + "\" title=\"" + _0x47f251((_0x5c3d92.label || "") + " : " + _0x5c3d92.text) + "\" data-target-field=\"" + _0x47f251(_0x38ae2b || "") + "\" data-match=\"" + _0x586618 + "\" data-match-fallback=\"" + _0x19848d + "\">" + _0x47f251(_0x4dcfb9) + "</span>";
    }).join("");
  }
  function _0x2eff66(_0x2e8661, _0x4c341e) {
    {
      if (!_0x2e8661 || !_0x4c341e) {
        return;
      }
      const _0x3b9518 = _0x2e8661.querySelector(".req-raw-sensitive");
      const _0x4abf41 = _0x2e8661.querySelector(".resp-raw-sensitive");
      if (_0x3b9518) {
        _0x3b9518.innerHTML = "";
      }
      if (_0x4abf41) {
        _0x4abf41.innerHTML = "";
      }
    }
  }
  function _0x55f23e(_0x3ae5c8) {
    {
      if (!_0x3ae5c8) {
        return "";
      }
      const _0x10a007 = [];
      function _0x14a112(_0x4dc931) {
        let _0x3c9896 = _0x4dc931 ? _0x4dc931.nextSibling : null;
        while (_0x3c9896) {
          if (_0x3c9896.nodeType === 3) {
            {
              if (String(_0x3c9896.nodeValue || "").length) {
                return true;
              }
            }
          } else {
            if (_0x3c9896.nodeType === 1) {
              return true;
            }
          }
          _0x3c9896 = _0x3c9896.nextSibling;
        }
        return false;
      }
      function _0x53d12b(_0x37f864, _0x3c1cd3) {
        if (!_0x37f864) {
          return;
        }
        if (_0x37f864.nodeType === 3) {
          _0x10a007.push(_0x37f864.nodeValue || "");
          return;
        }
        const _0x3edb8d = _0x37f864.nodeType === 1;
        const _0xd3c11b = _0x3edb8d || _0x37f864.nodeType === 11 || _0x37f864.nodeType === 9;
        if (!_0xd3c11b) {
          return;
        }
        const _0x4418a0 = _0x3edb8d ? String(_0x37f864.tagName || "").toUpperCase() : "";
        if (_0x4418a0 === "BR") {
          {
            _0x10a007.push("\n");
            return;
          }
        }
        let _0x2659f7 = _0x37f864.firstChild;
        while (_0x2659f7) {
          _0x53d12b(_0x2659f7, false);
          _0x2659f7 = _0x2659f7.nextSibling;
        }
        const _0x3c071c = _0x4418a0 === "DIV" || _0x4418a0 === "P" || _0x4418a0 === "LI" || _0x4418a0 === "TR" || _0x4418a0 === "PRE";
        if (!_0x3c1cd3 && _0x3c071c && _0x14a112(_0x37f864)) {
          const _0x4985dd = _0x10a007.length ? String(_0x10a007[_0x10a007.length - 1] || "") : "";
          if (!_0x4985dd.endsWith("\n")) {
            _0x10a007.push("\n");
          }
        }
      }
      _0x53d12b(_0x3ae5c8, true);
      return _0x10a007.join("");
    }
  }
  function _0x3cb71f(_0x56d644) {
    if (!_0x56d644) {
      return "";
    }
    if (Object.prototype.hasOwnProperty.call(_0x56d644, "value")) {
      return String(_0x56d644.value || "");
    }
    return _0x55f23e(_0x56d644).replace(/\u00a0/g, " ").replace(/\r\n/g, "\n").replace(/\r/g, "\n");
  }
  function _0x307492(_0x4a08ee) {
    if (!_0x4a08ee) {
      return "";
    }
    if (typeof _0x4a08ee.dataset.rawSource === "string") {
      return _0x4a08ee.dataset.rawSource;
    }
    return _0x3cb71f(_0x4a08ee);
  }
  function _0x9fe1e1(_0x5cda86, _0x1eb5e3) {
    {
      if (!_0x5cda86) {
        return;
      }
      _0x5cda86.dataset.rawSource = String(_0x1eb5e3 || "");
    }
  }
  function _0x2f9e36(_0x256167) {
    return String(_0x256167 || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  function _0x29aa26(_0x266bbe) {
    {
      const _0x2f29e3 = String(_0x266bbe || "");
      if (!_0x2f29e3) {
        return "";
      }
      const _0x467b30 = _0x2f9e36(_0x2f29e3);
      return _0x467b30.replace(/(&lt;\/?)([A-Za-z][A-Za-z0-9:_-]*)([\s\S]*?)(&gt;)/g, (_0x40159c, _0x221456, _0x379cf3, _0x5efb94, _0x3c9e33) => {
        {
          const _0x1e372f = String(_0x5efb94 || "").replace(/([A-Za-z_:][A-Za-z0-9_:\-\.]*)(\s*=\s*)(&quot;[\s\S]*?&quot;|&#39;[\s\S]*?&#39;|[^\s"'=<>`]+)/g, (_0x528ed4, _0x2800e9, _0x438ae8, _0x2a2c72) => "<span class=\"th-code-attr-name\">" + _0x2800e9 + "</span>" + _0x438ae8 + "<span class=\"th-code-attr-value\">" + _0x2a2c72 + "</span>");
          return "<span class=\"th-code-punc\">" + _0x221456 + "</span>" + "<span class=\"th-code-tag\">" + _0x379cf3 + "</span>" + _0x1e372f + "<span class=\"th-code-punc\">" + _0x3c9e33 + "</span>";
        }
      });
    }
  }
  function _0x2b6251(_0x31e572) {
    {
      const _0x5a7581 = String(_0x31e572 || "").replace(/\r\n/g, "\n").replace(/\r/g, "\n");
      const _0x25d87b = _0x4482c0(_0x5a7581);
      return _0x25d87b.length === 0 ? [""] : _0x25d87b.split("\n");
    }
  }
  function _0x261e75(_0xb840ee) {
    const _0xe4b35e = String(_0xb840ee || "");
    if (_0xe4b35e.indexOf("§") < 0) {
      return _0xe4b35e;
    }
    let _0x283d19 = "";
    let _0x9ebf11 = 0;
    while (_0x9ebf11 < _0xe4b35e.length) {
      const _0x48a20e = _0xe4b35e.indexOf("§", _0x9ebf11);
      if (_0x48a20e < 0) {
        _0x283d19 += _0xe4b35e.slice(_0x9ebf11);
        break;
      }
      const _0x45bdec = _0xe4b35e.indexOf("§", _0x48a20e + 1);
      if (_0x45bdec < 0) {
        _0x283d19 += _0xe4b35e.slice(_0x9ebf11);
        break;
      }
      _0x283d19 += _0xe4b35e.slice(_0x9ebf11, _0x48a20e) + "<span class=\"replay-fuzz-marker\">" + _0xe4b35e.slice(_0x48a20e, _0x45bdec + 1) + "</span>";
      _0x9ebf11 = _0x45bdec + 1;
    }
    return _0x283d19;
  }
  function _0x15e8fa(_0x3283e1) {
    return _0x261e75(_0x2f9e36(_0x3283e1));
  }
  function _0x3bcaa2(_0x236330) {
    const _0x46ff99 = String(_0x236330 || "").trim();
    if (!_0x46ff99 || !_0x46ff99.includes("=") && !_0x46ff99.includes("&")) {
      return false;
    }
    if (/[<>{}\[\]\u0000]/.test(_0x46ff99)) {
      return false;
    }
    const _0x1ac4d4 = _0x46ff99.split("\n").map(_0x55bad3 => String(_0x55bad3 || "").trim()).filter(Boolean);
    if (!_0x1ac4d4.length) {
      return false;
    }
    return _0x1ac4d4.every(_0x18c72d => /^[^=\s&][^&]*(?:=[^&]*)?(?:&[^=\s&][^&]*(?:=[^&]*)?)*$/.test(_0x18c72d));
  }
  function _0x286bb9(_0x50c8b0) {
    const _0x1c8a7d = String(_0x50c8b0 || "");
    const _0x308e75 = (_0x1c8a7d.match(/^\s*/) || [""])[0];
    const _0x33a54b = (_0x1c8a7d.match(/\s*$/) || [""])[0];
    const _0x2f3c31 = _0x1c8a7d.slice(_0x308e75.length, _0x1c8a7d.length - _0x33a54b.length);
    if (!_0x2f3c31) {
      return "<span class=\"tok-body\">" + _0x15e8fa(_0x1c8a7d) + "</span>";
    }
    const _0x37f97e = _0x2f3c31.split("&");
    const _0x47817e = [];
    for (let _0x1d180 = 0; _0x1d180 < _0x37f97e.length; _0x1d180++) {
      const _0x305007 = _0x37f97e[_0x1d180];
      const _0x50c166 = _0x305007.indexOf("=");
      if (_0x50c166 >= 0) {
        const _0x486ae0 = _0x305007.slice(0, _0x50c166);
        const _0x3f6214 = _0x305007.slice(_0x50c166 + 1);
        if (_0x486ae0) {
          _0x47817e.push("<span class=\"tok-param-name\">" + _0x15e8fa(_0x486ae0) + "</span>");
        }
        _0x47817e.push("<span class=\"tok-param-eq\">=</span>");
        _0x47817e.push("<span class=\"tok-param-value\">" + _0x15e8fa(_0x3f6214) + "</span>");
      } else {
        _0x47817e.push("<span class=\"tok-param-name\">" + _0x15e8fa(_0x305007) + "</span>");
      }
      if (_0x1d180 < _0x37f97e.length - 1) {
        _0x47817e.push("<span class=\"tok-param-sep\">&amp;</span>");
      }
    }
    return "<span class=\"tok-body\">" + _0x15e8fa(_0x308e75) + _0x47817e.join("") + _0x15e8fa(_0x33a54b) + "</span>";
  }
  function _0x58a4f8(_0x3b314c) {
    {
      const _0x4ae24c = _0x2b6251(_0x3b314c);
      const _0x54bf8c = _0x4ae24c.find((_0x2c4055, _0x4db749) => _0x4db749 > 0 && /^content-type\s*:/i.test(_0x2c4055));
      const _0x4df748 = _0x54bf8c ? String(_0x54bf8c.split(":").slice(1).join(":") || "").trim().toLowerCase() : "";
      const _0x227eaf = _0x4ae24c.findIndex((_0x5e9a3d, _0x3a377f) => _0x3a377f > 0 && _0x5e9a3d === "");
      const _0x4f0361 = _0x227eaf >= 0 ? _0x4ae24c.slice(_0x227eaf + 1).join("\n") : "";
      const _0x384f08 = /application\/x-www-form-urlencoded/i.test(_0x4df748) || _0x3bcaa2(_0x4f0361);
      return _0x4ae24c.map((_0x4cc7ce, _0x7d0e99) => {
        {
          const _0x47844a = _0x4cc7ce.match(/^([A-Z]+)\s+(\S+)\s+(HTTP\/\d(?:\.\d+)?)$/);
          if (_0x7d0e99 === 0 && _0x47844a) {
            const _0xab88fa = _0x15e8fa(_0x47844a[1]);
            const _0x59c997 = _0x15e8fa(_0x47844a[2]);
            const _0x5236aa = _0x15e8fa(_0x47844a[3]);
            return "<span class=\"tok-method\">" + _0xab88fa + "</span> " + "<span class=\"tok-url\">" + _0x59c997 + "</span> " + "<span class=\"tok-proto\">" + _0x5236aa + "</span>";
          }
          const _0x6ad7dd = _0x4cc7ce.match(/^(HTTP\/\d(?:\.\d+)?)\s+(\d{3})(.*)$/);
          if (_0x7d0e99 === 0 && _0x6ad7dd) {
            return "<span class=\"tok-proto\">" + _0x15e8fa(_0x6ad7dd[1]) + "</span> " + "<span class=\"tok-status\">" + _0x15e8fa(_0x6ad7dd[2]) + "</span>" + "<span class=\"tok-reason\">" + _0x15e8fa(_0x6ad7dd[3] || "") + "</span>";
          }
          if (_0x4cc7ce === "") {
            return "";
          }
          const _0x150444 = _0x4cc7ce.match(/^([^:\s][^:]*):\s*(.*)$/);
          if (_0x227eaf >= 0 && _0x7d0e99 > _0x227eaf) {
            {
              if (_0x384f08 && _0x4cc7ce.trim()) {
                return _0x286bb9(_0x4cc7ce);
              }
              return "<span class=\"tok-body\">" + _0x15e8fa(_0x4cc7ce) + "</span>";
            }
          }
          if (_0x150444) {
            {
              return "<span class=\"tok-header-name\">" + _0x15e8fa(_0x150444[1]) + ":</span> " + "<span class=\"tok-header-value\">" + _0x15e8fa(_0x150444[2]) + "</span>";
            }
          }
          return "<span class=\"tok-body\">" + _0x15e8fa(_0x4cc7ce) + "</span>";
        }
      }).join("<br>");
    }
  }
  function _0x5f48cb(_0x23dbe2) {
    const _0x27dd33 = [];
    (_0x23dbe2 || []).forEach(_0x27ebdf => {
      const _0x1e7e65 = String(_0x27ebdf || "").indexOf(":");
      if (_0x1e7e65 <= 0) {
        return;
      }
      const _0x5773b6 = String(_0x27ebdf.slice(0, _0x1e7e65) || "").trim();
      if (!_0x5773b6) {
        return;
      }
      _0x27dd33.push({
        name: _0x5773b6,
        value: String(_0x27ebdf.slice(_0x1e7e65 + 1) || "").trim()
      });
    });
    return _0x27dd33;
  }
  function _0x51dcc9(_0x38dbd6) {
    return (_0x38dbd6 || []).map(_0x25844b => String(_0x25844b.name || "").trim() + ": " + String(_0x25844b.value || "")).filter(Boolean).join("\n");
  }
  function _0x1890db(_0x37a4bf, _0x4d12d2) {
    {
      const _0x2d7cbc = new Set((Array.isArray(_0x4d12d2) ? _0x4d12d2 : [_0x4d12d2]).map(_0x54458e => String(_0x54458e || "").toLowerCase()));
      for (let _0x383374 = _0x37a4bf.length - 1; _0x383374 >= 0; _0x383374--) {
        const _0x1bcf48 = String(_0x37a4bf[_0x383374] && _0x37a4bf[_0x383374].name || "").toLowerCase();
        if (_0x2d7cbc.has(_0x1bcf48)) {
          _0x37a4bf.splice(_0x383374, 1);
        }
      }
    }
  }
  function _0x241bcf(_0x362ccc, _0x4815ab) {
    const _0x6b6c51 = String(_0x4815ab || "").toLowerCase();
    const _0x14b867 = (_0x362ccc || []).find(_0x58afd2 => String(_0x58afd2 && _0x58afd2.name || "").toLowerCase() === _0x6b6c51);
    return _0x14b867 ? String(_0x14b867.value || "") : "";
  }
  function _0x1eb993(_0x9fdbbe, _0x502033, _0x306b3b) {
    const _0x210902 = String(_0x502033 || "").toLowerCase();
    let _0x4fa366 = -1;
    for (let _0x2fee53 = 0; _0x2fee53 < _0x9fdbbe.length; _0x2fee53++) {
      const _0x499d7c = String(_0x9fdbbe[_0x2fee53] && _0x9fdbbe[_0x2fee53].name || "").toLowerCase();
      if (_0x499d7c !== _0x210902) {
        continue;
      }
      if (_0x4fa366 < 0) {
        _0x4fa366 = _0x2fee53;
        continue;
      }
      _0x9fdbbe.splice(_0x2fee53, 1);
      _0x2fee53--;
    }
    if (_0x4fa366 >= 0) {
      const _0x2734af = String(_0x9fdbbe[_0x4fa366].name || "").trim() || String(_0x502033 || "");
      _0x9fdbbe[_0x4fa366] = {
        name: _0x2734af,
        value: String(_0x306b3b == null ? "" : _0x306b3b)
      };
      return;
    }
    _0x9fdbbe.push({
      name: String(_0x502033 || ""),
      value: String(_0x306b3b == null ? "" : _0x306b3b)
    });
  }
  function _0x3c879d(_0x5e2095) {
    {
      const _0xfa8a88 = String(_0x5e2095 || "").trim();
      const _0x37a384 = _0xfa8a88.match(/^(\S+)\s+(.+?)\s+HTTP\/([0-9.]+)$/i);
      if (!_0x37a384) {
        return null;
      }
      return {
        method: String(_0x37a384[1] || "GET").toUpperCase(),
        target: String(_0x37a384[2] || "/"),
        version: String(_0x37a384[3] || "1.1")
      };
    }
  }
  function _0x5476bf(_0x2dce62) {
    const _0x186478 = String(_0x2dce62 || "");
    const _0x323dba = _0x186478.indexOf("#");
    const _0x1f4300 = _0x323dba >= 0 ? _0x186478.slice(0, _0x323dba) : _0x186478;
    const _0x1504aa = _0x323dba >= 0 ? _0x186478.slice(_0x323dba) : "";
    const _0x5a9a0d = _0x1f4300.indexOf("?");
    return {
      base: _0x5a9a0d >= 0 ? _0x1f4300.slice(0, _0x5a9a0d) : _0x1f4300,
      query: _0x5a9a0d >= 0 ? _0x1f4300.slice(_0x5a9a0d + 1) : "",
      hash: _0x1504aa
    };
  }
  function _0x5d937d(_0x86be84) {
    {
      const _0x1fbd82 = String(_0x86be84 && _0x86be84.base || "") || "/";
      const _0x136559 = String(_0x86be84 && _0x86be84.query || "");
      const _0x51352f = String(_0x86be84 && _0x86be84.hash || "");
      return _0x1fbd82 + (_0x136559 ? "?" + _0x136559 : "") + _0x51352f;
    }
  }
  function _0x45c394(_0x2a09f6) {
    {
      const _0x5acf40 = String(_0x2a09f6 || "").trim();
      if (!_0x5acf40 || !_0x5acf40.includes("=") && !_0x5acf40.includes("&")) {
        return false;
      }
      if (/[<>{}\[\]\n\u0000]/.test(_0x5acf40)) {
        return false;
      }
      return /^[^=\s&][^&]*(?:=[^&]*)?(?:&[^=\s&][^&]*(?:=[^&]*)?)*$/.test(_0x5acf40);
    }
  }
  function _0x44770a(_0x53689a, _0x14281b) {
    const _0x1ce058 = _0x83e0ec(_0x53689a);
    const _0x5a8f23 = _0x3c879d(_0x1ce058.startLine);
    if (!_0x5a8f23) {
      return "";
    }
    const _0x3ba665 = _0x5a8f23.method === "POST" ? "GET" : "POST";
    const _0x4e1f74 = _0x5f48cb(_0x1ce058.headerLines || []);
    const _0x8e9e17 = _0x5476bf(_0x5a8f23.target || "/");
    const _0x17d527 = String(_0x1ce058.body || "");
    const _0x1a3174 = _0x17d527.trim();
    const _0x475c1e = _0x45c394(_0x1a3174);
    const _0x1ecd06 = (() => {
      try {
        const _0x38f296 = _0x2370d2(String(_0x53689a || ""), String(_0x14281b || ""), {
          smartEncodeUrl: false
        });
        return String(_0x38f296 && _0x38f296.url || _0x14281b || "");
      } catch (_0x34ee37) {
        return String(_0x14281b || "");
      }
    })();
    _0x1890db(_0x4e1f74, ["Origin", "Referer", "Referrer", "Content-Length", "Upgrade-Insecure-Requests", "Sec-Fetch-Site", "Sec-Fetch-Mode", "Sec-Fetch-Dest", "Sec-Fetch-User", "Sec-Fetch-Storage-Access"]);
    let _0x5ab256 = _0x17d527;
    if (_0x3ba665 === "POST") {
      const _0x504ad4 = String(_0x8e9e17.query || "");
      if (_0x504ad4) {
        if (!_0x1a3174) {
          _0x5ab256 = _0x504ad4;
          _0x8e9e17.query = "";
        } else {
          _0x475c1e && (_0x5ab256 = _0x1a3174 + (_0x1a3174 && _0x504ad4 ? "&" : "") + _0x504ad4, _0x8e9e17.query = "");
        }
      }
      _0x5ab256 = String(_0x5ab256 || "").trim();
      _0x5ab256.length > 0 && !_0x241bcf(_0x4e1f74, "Content-Type") && _0x1eb993(_0x4e1f74, "Content-Type", "application/x-www-form-urlencoded");
      _0x1eb993(_0x4e1f74, "Content-Length", String(_0x2198fd(_0x5ab256).length));
    } else {
      _0x475c1e && _0x1a3174 && (_0x8e9e17.query = _0x8e9e17.query ? _0x8e9e17.query + "&" + _0x1a3174 : _0x1a3174);
      _0x5ab256 = "";
      _0x1890db(_0x4e1f74, ["Content-Type", "Content-Length"]);
    }
    const _0x4e9146 = _0x5d937d(_0x8e9e17);
    const _0x32396a = _0x2441a5(_0x51dcc9(_0x4e1f74), _0x1ecd06 || _0x14281b || _0x4e9146);
    return _0x3ba665 + " " + _0x4e9146 + " HTTP/" + _0x5a8f23.version + (_0x32396a ? "\n" + _0x32396a : "") + "\n\n" + _0x5ab256;
  }
  function _0x255e86(_0x5038c1, _0x154703, _0x12fe71) {
    const _0x467b51 = _0x83e0ec(_0x5038c1);
    const _0x4c6255 = _0x3c879d(_0x467b51.startLine) || {};
    const _0x295644 = String(_0x154703 && _0x154703.method || _0x4c6255.method || "GET").toUpperCase();
    const _0x53e4f8 = String(_0x4c6255.version || "1.1");
    let _0x21a8eb = String(_0x4c6255.target || "/");
    try {
      const _0x516f98 = new URL(String(_0x154703 && _0x154703.url || _0x12fe71 || _0x21a8eb || ""));
      _0x21a8eb = (_0x516f98.pathname || "/") + (_0x516f98.search || "") + (_0x516f98.hash || "");
    } catch (_0x1b7ff9) {}
    const _0x8e2de2 = _0x5f48cb(_0x467b51.headerLines || []);
    const _0x2bcbf0 = _0x154703 && _0x154703.headers && typeof _0x154703.headers === "object" ? _0x154703.headers : {};
    Object.keys(_0x2bcbf0).forEach(_0xb1acbd => {
      if (!String(_0xb1acbd || "").trim()) {
        return;
      }
      _0x1eb993(_0x8e2de2, _0xb1acbd, _0x2bcbf0[_0xb1acbd]);
    });
    const _0x529916 = _0x154703 && _0x154703.body != null ? String(_0x154703.body) : String(_0x467b51.body || "");
    _0x529916.length > 0 ? _0x1eb993(_0x8e2de2, "Content-Length", String(_0x2198fd(_0x529916).length)) : _0x1890db(_0x8e2de2, "Content-Length");
    const _0x3d4675 = _0x2441a5(_0x51dcc9(_0x8e2de2), String(_0x154703 && _0x154703.url || _0x12fe71 || _0x21a8eb || ""));
    return _0x295644 + " " + _0x21a8eb + " HTTP/" + _0x53e4f8 + (_0x3d4675 ? "\n" + _0x3d4675 : "") + "\n\n" + _0x529916;
  }
  function _0x24bf27(_0x5e9391) {
    if (!_0x5e9391) {
      return {
        start: 0,
        end: 0
      };
    }
    if (Object.prototype.hasOwnProperty.call(_0x5e9391, "selectionStart")) {
      return {
        start: Number(_0x5e9391.selectionStart || 0),
        end: Number(_0x5e9391.selectionEnd || 0)
      };
    }
    const _0x6f76ae = window.getSelection && window.getSelection();
    if (!_0x6f76ae || !_0x6f76ae.rangeCount) {
      const _0x20a44c = _0x3cb71f(_0x5e9391).length;
      return {
        start: _0x20a44c,
        end: _0x20a44c
      };
    }
    const _0x1a6e32 = _0x6f76ae.getRangeAt(0);
    if (!_0x5e9391.contains(_0x1a6e32.startContainer) || !_0x5e9391.contains(_0x1a6e32.endContainer)) {
      {
        const _0x150ebc = _0x3cb71f(_0x5e9391).length;
        return {
          start: _0x150ebc,
          end: _0x150ebc
        };
      }
    }
    const _0x57dcd6 = document.createRange();
    _0x57dcd6.selectNodeContents(_0x5e9391);
    _0x57dcd6.setEnd(_0x1a6e32.startContainer, _0x1a6e32.startOffset);
    const _0x459c15 = _0x3cb71f(_0x57dcd6.cloneContents()).length;
    const _0x27bb79 = document.createRange();
    _0x27bb79.selectNodeContents(_0x5e9391);
    _0x27bb79.setEnd(_0x1a6e32.endContainer, _0x1a6e32.endOffset);
    const _0x51a2fa = _0x3cb71f(_0x27bb79.cloneContents()).length;
    return {
      start: _0x459c15,
      end: _0x51a2fa
    };
  }
  function _0x13f639(_0x30c556) {
    if (!_0x30c556) {
      return false;
    }
    const _0xc3c617 = window.getSelection && window.getSelection();
    if (!_0xc3c617 || !_0xc3c617.rangeCount) {
      return false;
    }
    try {
      return _0x30c556.contains(_0xc3c617.getRangeAt(0).startContainer);
    } catch (_0x37531e) {
      return false;
    }
  }
  function _0x76ddb1(_0x13f673) {
    if (!_0x13f673 || !_0x13f673.parentNode || !_0x13f673.parentNode.childNodes) {
      return 0;
    }
    const _0xb9fcfc = _0x13f673.parentNode.childNodes;
    for (let _0x183c27 = 0; _0x183c27 < _0xb9fcfc.length; _0x183c27++) {
      if (_0xb9fcfc[_0x183c27] === _0x13f673) {
        return _0x183c27;
      }
    }
    return _0xb9fcfc.length;
  }
  function _0x5a570d(_0x5b6815, _0x1ba607) {
    const _0x5a7d3f = Math.max(0, Number(_0x1ba607 || 0));
    let _0x3fa093 = 0;
    function _0x1c4237(_0x4c83fb) {
      if (!_0x4c83fb) {
        return null;
      }
      if (_0x4c83fb.nodeType === 3) {
        const _0x349477 = _0x4c83fb.nodeValue ? _0x4c83fb.nodeValue.length : 0;
        if (_0x5a7d3f <= _0x3fa093 + _0x349477) {
          return {
            node: _0x4c83fb,
            offset: _0x5a7d3f - _0x3fa093
          };
        }
        _0x3fa093 += _0x349477;
        return null;
      }
      const _0x46351b = _0x4c83fb.nodeType === 1;
      const _0x13b54f = _0x46351b || _0x4c83fb.nodeType === 11 || _0x4c83fb.nodeType === 9;
      if (!_0x13b54f) {
        return null;
      }
      const _0x2c12d8 = _0x46351b ? String(_0x4c83fb.tagName || "").toUpperCase() : "";
      if (_0x2c12d8 === "BR") {
        {
          const _0x597d20 = _0x76ddb1(_0x4c83fb);
          const _0x3dab79 = _0x4c83fb.parentNode || _0x5b6815;
          if (_0x5a7d3f <= _0x3fa093) {
            return {
              node: _0x3dab79,
              offset: _0x597d20
            };
          }
          _0x3fa093 += 1;
          if (_0x5a7d3f <= _0x3fa093) {
            return {
              node: _0x3dab79,
              offset: _0x597d20 + 1
            };
          }
          return null;
        }
      }
      let _0x2265a1 = _0x4c83fb.firstChild;
      while (_0x2265a1) {
        const _0x574fdd = _0x1c4237(_0x2265a1);
        if (_0x574fdd) {
          return _0x574fdd;
        }
        _0x2265a1 = _0x2265a1.nextSibling;
      }
      return null;
    }
    const _0x7f0096 = _0x1c4237(_0x5b6815);
    if (_0x7f0096) {
      return _0x7f0096;
    }
    return {
      node: _0x5b6815,
      offset: _0x5b6815.childNodes ? _0x5b6815.childNodes.length : 0
    };
  }
  function _0x2ed8dd(_0x540181, _0x4f91e5, _0x395581) {
    if (!_0x540181) {
      return;
    }
    const _0x4ba079 = Math.max(0, Number(_0x4f91e5 || 0));
    const _0x5efa94 = Math.max(_0x4ba079, Number(_0x395581 == null ? _0x4ba079 : _0x395581));
    if (Object.prototype.hasOwnProperty.call(_0x540181, "setSelectionRange")) {
      _0x540181.focus();
      try {
        _0x540181.setSelectionRange(_0x4ba079, _0x5efa94);
      } catch (_0x108677) {}
      return;
    }
    const _0xb285ad = _0x5a570d(_0x540181, _0x4ba079);
    const _0x215678 = _0x5a570d(_0x540181, _0x5efa94);
    const _0x58ea0d = document.createRange();
    try {
      _0x58ea0d.setStart(_0xb285ad.node, _0xb285ad.offset);
      _0x58ea0d.setEnd(_0x215678.node, _0x215678.offset);
    } catch (_0x1fc7fb) {
      return;
    }
    const _0x526fb0 = window.getSelection && window.getSelection();
    if (!_0x526fb0) {
      return;
    }
    _0x526fb0.removeAllRanges();
    _0x526fb0.addRange(_0x58ea0d);
    _0x540181.focus();
  }
  function _0x4f3033(_0x2ebb40) {
    {
      if (!_0x2ebb40 || !_0x2ebb40.closest) {
        return _0x2ebb40;
      }
      const _0x5619ea = _0x2ebb40.closest(".replay-packet-wrap");
      if (!_0x5619ea) {
        return _0x2ebb40;
      }
      const _0x511885 = _0x5619ea.querySelector(".replay-packet-scroll");
      return _0x511885 || _0x2ebb40;
    }
  }
  function _0x4a8b78(_0x33c7dc, _0x2a9af1, _0x507cd9) {
    const _0xca95a9 = _0x4f3033(_0x33c7dc);
    const _0x48c5c2 = Math.max(0, _0xca95a9.scrollHeight - _0xca95a9.clientHeight);
    const _0x10971c = _0x2a9af1 / Math.max(1, _0x507cd9);
    const _0x341102 = Math.max(0, Math.min(_0x48c5c2, Math.round(_0x48c5c2 * _0x10971c - _0xca95a9.clientHeight / 2)));
    _0xca95a9.scrollTop = _0x341102;
    requestAnimationFrame(() => {
      {
        _0xca95a9.scrollTop = _0x341102;
      }
    });
  }
  function _0x529823(_0x213e13, _0x2979c4) {
    {
      if (!_0x213e13 || !_0x2979c4 || !_0x213e13.contains(_0x2979c4)) {
        return;
      }
      const _0x5eff36 = _0x4f3033(_0x213e13);
      const _0x4c8484 = _0x5eff36.getBoundingClientRect();
      const _0x45c892 = _0x2979c4.getBoundingClientRect();
      const _0x3abea0 = _0x45c892.top - _0x4c8484.top + _0x5eff36.scrollTop;
      const _0x150a51 = _0x45c892.height;
      const _0x41b4b3 = _0x5eff36.clientHeight;
      const _0x90eb19 = Math.max(0, _0x3abea0 - _0x41b4b3 / 2 + _0x150a51 / 2);
      _0x5eff36.scrollTop = Math.min(_0x90eb19, _0x5eff36.scrollHeight - _0x41b4b3);
      requestAnimationFrame(() => {
        _0x5eff36.scrollTop = Math.min(_0x90eb19, _0x5eff36.scrollHeight - _0x41b4b3);
      });
    }
  }
  function _0x14997d(_0x1ad897, _0x3ea4c4, _0x5c9744) {
    if (!_0x1ad897) {
      return;
    }
    const _0x351064 = String(_0x3ea4c4 == null ? _0x3cb71f(_0x1ad897) : _0x3ea4c4);
    if (Object.prototype.hasOwnProperty.call(_0x1ad897, "value")) {
      _0x1ad897.value = _0x351064;
      return;
    }
    const _0x523df2 = _0x5c9744 ? _0x24bf27(_0x1ad897) : null;
    _0x1ad897.innerHTML = _0x58a4f8(_0x351064);
    if (_0x5c9744 && _0x523df2) {
      _0x2ed8dd(_0x1ad897, _0x523df2.start, _0x523df2.end);
    }
  }
  function _0x5eea39(_0x579eb2, _0x106310) {
    {
      if (!_0x579eb2 || !_0x579eb2.closest) {
        return;
      }
      const _0x560f1b = _0x579eb2.closest(".replay-packet-wrap");
      if (!_0x560f1b) {
        return;
      }
      const _0x5526c8 = _0x560f1b.querySelector(".packet-line-gutter");
      if (!_0x5526c8) {
        return;
      }
      const _0x2bc0f3 = _0x579eb2.classList.contains("hex-mode") || _0x579eb2.classList.contains("render-mode") || _0x579eb2.classList.contains("sensitive-mode") || _0x579eb2.classList.contains("ai-mode");
      if (_0x2bc0f3) {
        _0x5526c8.innerHTML = "";
        _0x5526c8.hidden = true;
        _0x560f1b.classList.add("gutter-hidden");
        return;
      }
      _0x560f1b.classList.remove("gutter-hidden");
      _0x5526c8.hidden = false;
      const _0x527760 = _0x106310 !== undefined && _0x106310 !== null ? String(_0x106310) : _0x3cb71f(_0x579eb2);
      const _0x462a3a = _0x2b6251(_0x527760);
      const _0x5db7a0 = _0x462a3a.length;
      _0x5526c8.style.minWidth = Math.max(2.25, 0.55 * String(_0x5db7a0).length + 1.25) + "em";
      _0x5526c8.innerHTML = _0x462a3a.map((_0x332ccc, _0x54fec9) => "<span class=\"packet-line-no-row\"><span class=\"packet-line-no\">" + (_0x54fec9 + 1) + "</span></span>").join("");
    }
  }
  function _0x50f57b(_0x4b1a7c, _0x9d217c) {
    {
      if (!_0x4b1a7c) {
        return;
      }
      _0x4b1a7c.querySelectorAll(".view-btn").forEach(_0x369a1a => {
        _0x369a1a.classList.toggle("active", (_0x369a1a.getAttribute("data-mode") || "pretty") === _0x9d217c);
      });
    }
  }
  function _0x3507() {
    const _0x26f76c = _0x137574 ? "" : "none";
    document.querySelectorAll(".header-col.record-sensitive, .record-sensitive, .fuzz-col-sensitive").forEach(_0x3254d5 => {
      _0x3254d5.style.display = _0x26f76c;
    });
    const _0x3f1d92 = _0x137574 ? "" : "0px";
    document.documentElement.style.setProperty("--col-sensitive-w-override", _0x3f1d92);
  }
  function _0x14c7ff() {
    {
      const _0xd2f655 = [];
      if (_0x1898fa) {
        _0xd2f655.push(_0x1898fa);
      }
      if (_0x2f943c) {
        _0xd2f655.push(_0x2f943c);
      }
      _0xd2f655.forEach(_0x595307 => {
        const _0x11e94e = _0x595307.querySelector(".replay-resp-toggle .view-btn[data-mode=\"sensitive\"], .fuzz-resp-toggle .view-btn[data-mode=\"sensitive\"]");
        const _0x206e78 = _0x595307.querySelector(".replay-req-toggle .view-btn[data-mode=\"sensitive\"], .fuzz-req-toggle .view-btn[data-mode=\"sensitive\"]");
        if (_0x11e94e) {
          _0x11e94e.style.display = _0x137574 ? "" : "none";
        }
        if (_0x206e78) {
          _0x206e78.style.display = _0x137574 ? "" : "none";
        }
      });
      document.querySelectorAll(".record-detail-inline .view-btn[data-mode=\"sensitive\"]").forEach(_0x22fa54 => {
        _0x22fa54.style.display = _0x137574 ? "" : "none";
      });
      if (!_0x137574) {
        _0x39c18b && (_0x39c18b.dataset.viewMode || "pretty") === "sensitive" && (_0x39c18b.dataset.viewMode = "pretty", _0x50f57b(_0x1898fa.querySelector(".replay-resp-toggle"), "pretty"), _0x5d3ef2(_0x39c18b, "pretty", false));
        if (_0x1073d3 && (_0x1073d3.dataset.viewMode || _0x1504f6()) === "sensitive") {
          const _0x23a50c = _0x1504f6();
          _0x1073d3.dataset.viewMode = _0x23a50c;
          _0x50f57b(_0x1898fa.querySelector(".replay-req-toggle"), _0x23a50c);
          _0x5d3ef2(_0x1073d3, _0x23a50c, false);
        }
        document.querySelectorAll(".record-detail-inline").forEach(_0x133d10 => {
          try {
            const _0x55f28f = _0x133d10.querySelector(".req-raw");
            const _0x5da290 = _0x133d10.querySelector(".resp-raw");
            if (_0x55f28f && String(_0x55f28f.dataset.viewMode || "") === "sensitive") {
              const _0x16f904 = _0x21dbd3();
              _0x50f57b(_0x133d10.querySelector(".req-view-toggle"), _0x16f904);
              _0x5d3ef2(_0x55f28f, _0x16f904, false);
            }
            if (_0x5da290 && String(_0x5da290.dataset.viewMode || "pretty") === "sensitive") {
              {
                _0x50f57b(_0x133d10.querySelector(".resp-view-toggle"), "pretty");
                _0x5d3ef2(_0x5da290, "pretty", false);
              }
            }
          } catch (_0x1b7e07) {}
        });
      }
    }
  }
  function _0x8c4bee() {
    if (!_0x137574 || !_0x58b305.length) {
      [_0x1898fa, _0x2f943c].forEach(_0x12ee96 => {
        if (!_0x12ee96) {
          return;
        }
        _0x12ee96.querySelectorAll(".view-btn[data-mode=\"sensitive\"]").forEach(_0x22e513 => {
          _0x22e513.classList.remove("has-sensitive-hits");
          _0x22e513.removeAttribute("data-badge");
        });
      });
      document.querySelectorAll(".record-detail-inline .view-btn[data-mode=\"sensitive\"]").forEach(_0x2bcfa4 => {
        _0x2bcfa4.classList.remove("has-sensitive-hits");
        _0x2bcfa4.removeAttribute("data-badge");
      });
      return;
    }
    const _0x34dd11 = _0x1898fa && _0x1898fa.querySelector(".replay-resp-toggle .view-btn[data-mode=\"sensitive\"]");
    const _0x2211d8 = _0x1898fa && _0x1898fa.querySelector(".replay-req-toggle .view-btn[data-mode=\"sensitive\"]");
    function _0x216b0c(_0x2f4b53, _0x4e040c) {
      if (!_0x2f4b53) {
        return;
      }
      if (!_0x137574) {
        _0x2f4b53.classList.remove("has-sensitive-hits");
        _0x2f4b53.removeAttribute("data-badge");
        return;
      }
      try {
        {
          const _0x3207d9 = String(_0x4e040c || "").slice(0, 500000);
          if (!_0x3207d9.trim() || !_0x58b305.length) {
            {
              _0x2f4b53.classList.remove("has-sensitive-hits");
              _0x2f4b53.removeAttribute("data-badge");
              return;
            }
          }
          const _0x5761d1 = 12;
          const _0x273fee = 3;
          let _0x1d1fa9 = 0;
          let _0x426f0d = 0;
          for (const _0x3152a3 of _0x58b305 || []) {
            if (_0x1d1fa9 >= _0x5761d1) {
              break;
            }
            if (!_0x3152a3 || !_0x3152a3.regex) {
              continue;
            }
            if (!_0x568c76(_0x3207d9, _0x3152a3)) {
              continue;
            }
            _0x1d1fa9 += 1;
            const _0x33e866 = new Set();
            try {
              const _0x39e795 = _0x3152a3.regex.flags.includes("g") ? _0x3152a3.regex.flags : _0x3152a3.regex.flags + "g";
              let _0x6ffef8 = _0x3152a3.regex.source;
              if (_0x6ffef8.startsWith("^")) {
                _0x6ffef8 = _0x6ffef8.slice(1);
              }
              if (_0x6ffef8.endsWith("$")) {
                _0x6ffef8 = _0x6ffef8.slice(0, -1);
              }
              const _0xdd9b2a = new RegExp(_0x6ffef8, _0x39e795);
              let _0x5a0e77;
              let _0x2e15ad = 0;
              while ((_0x5a0e77 = _0xdd9b2a.exec(_0x3207d9)) !== null) {
                const _0x231ab2 = String(_0x5a0e77 && _0x5a0e77[0] || "").trim();
                const _0x286f9f = _0x33d497(_0x231ab2);
                if (_0x286f9f && !_0x33e866.has(_0x286f9f)) {
                  _0x33e866.add(_0x286f9f);
                  _0x426f0d += 1;
                  if (_0x33e866.size >= _0x273fee) {
                    break;
                  }
                }
                if (!_0x5a0e77[0]) {
                  _0xdd9b2a.lastIndex += 1;
                }
                if (++_0x2e15ad > 2000) {
                  break;
                }
              }
            } catch (_0x2a23bc) {}
          }
          _0x426f0d > 0 ? (_0x2f4b53.classList.add("has-sensitive-hits"), _0x2f4b53.setAttribute("data-badge", _0x426f0d > 99 ? "99+" : String(_0x426f0d))) : (_0x2f4b53.classList.remove("has-sensitive-hits"), _0x2f4b53.removeAttribute("data-badge"));
        }
      } catch (_0x2daa19) {
        _0x2f4b53.classList.remove("has-sensitive-hits");
        _0x2f4b53.removeAttribute("data-badge");
      }
    }
    const _0x1de0d5 = _0x33d5a5 && _0x158eac ? _0x33d5a5.find(_0x5e2f07 => _0x5e2f07.id === _0x158eac) : null;
    _0x216b0c(_0x2211d8, _0x1de0d5 ? String(_0x1de0d5.requestRaw || "") : "");
    _0x216b0c(_0x34dd11, _0x1de0d5 ? String(_0x1de0d5.responseRaw || "") : "");
    if (_0x2f943c && _0xc41ff8 && _0x3025ed) {
      const _0x3dad79 = _0x2f943c.querySelector(".fuzz-req-toggle .view-btn[data-mode=\"sensitive\"]");
      const _0x49cc55 = _0x2f943c.querySelector(".fuzz-resp-toggle .view-btn[data-mode=\"sensitive\"]");
      const _0x5091ff = _0x307492(_0xc41ff8);
      const _0x16e8d1 = _0x307492(_0x3025ed);
      _0x216b0c(_0x3dad79, _0x5091ff);
      _0x216b0c(_0x49cc55, _0x16e8d1);
    }
  }
  function _0x42421b(_0x382089) {
    {
      if (!_0x382089) {
        return;
      }
      const _0x26a957 = _0x382089.querySelector(".req-view-toggle .view-btn[data-mode=\"sensitive\"]");
      const _0x2dcf84 = _0x382089.querySelector(".resp-view-toggle .view-btn[data-mode=\"sensitive\"]");
      const _0x3461f4 = _0x307492(_0x382089.querySelector(".req-raw"));
      const _0x31b33d = _0x307492(_0x382089.querySelector(".resp-raw"));
      try {
        if (!_0x137574 || !_0x58b305.length) {
          {
            [_0x26a957, _0x2dcf84].forEach(_0x36f4e2 => {
              if (!_0x36f4e2) {
                return;
              }
              _0x36f4e2.classList.remove("has-sensitive-hits");
              _0x36f4e2.removeAttribute("data-badge");
            });
            return;
          }
        }
      } catch (_0x5e8f51) {}
      function _0x27e85b(_0x55f0db, _0x24afa4) {
        if (!_0x55f0db) {
          return;
        }
        try {
          const _0x19f449 = String(_0x24afa4 || "").slice(0, 500000);
          if (!_0x19f449.trim() || !_0x58b305.length) {
            _0x55f0db.classList.remove("has-sensitive-hits");
            _0x55f0db.removeAttribute("data-badge");
            return;
          }
          const _0x24f8b8 = 12;
          const _0x14e80f = 3;
          let _0x985467 = 0;
          let _0x26e329 = 0;
          for (const _0x3b61a0 of _0x58b305 || []) {
            if (_0x985467 >= _0x24f8b8) {
              break;
            }
            if (!_0x3b61a0 || !_0x3b61a0.regex) {
              continue;
            }
            if (!_0x568c76(_0x19f449, _0x3b61a0)) {
              continue;
            }
            _0x985467 += 1;
            const _0x397f54 = new Set();
            try {
              {
                const _0x3b728f = _0x3b61a0.regex.flags.includes("g") ? _0x3b61a0.regex.flags : _0x3b61a0.regex.flags + "g";
                let _0x335e38 = _0x3b61a0.regex.source;
                if (_0x335e38.startsWith("^")) {
                  _0x335e38 = _0x335e38.slice(1);
                }
                if (_0x335e38.endsWith("$")) {
                  _0x335e38 = _0x335e38.slice(0, -1);
                }
                const _0x5526ea = new RegExp(_0x335e38, _0x3b728f);
                let _0x375d10;
                let _0x42f969 = 0;
                while ((_0x375d10 = _0x5526ea.exec(_0x19f449)) !== null) {
                  const _0x18c09f = String(_0x375d10 && _0x375d10[0] || "").trim();
                  const _0x22f491 = _0x33d497(_0x18c09f);
                  if (_0x22f491 && !_0x397f54.has(_0x22f491)) {
                    _0x397f54.add(_0x22f491);
                    _0x26e329 += 1;
                    if (_0x397f54.size >= _0x14e80f) {
                      break;
                    }
                  }
                  if (!_0x375d10[0]) {
                    _0x5526ea.lastIndex += 1;
                  }
                  if (++_0x42f969 > 2000) {
                    break;
                  }
                }
              }
            } catch (_0x4a4201) {}
          }
          _0x26e329 > 0 ? (_0x55f0db.classList.add("has-sensitive-hits"), _0x55f0db.setAttribute("data-badge", _0x26e329 > 99 ? "99+" : String(_0x26e329))) : (_0x55f0db.classList.remove("has-sensitive-hits"), _0x55f0db.removeAttribute("data-badge"));
        } catch (_0x4f5b13) {
          _0x55f0db.classList.remove("has-sensitive-hits");
          _0x55f0db.removeAttribute("data-badge");
        }
      }
      _0x27e85b(_0x26a957, _0x3461f4);
      _0x27e85b(_0x2dcf84, _0x31b33d);
    }
  }
  function _0x480d6e(_0x4b75f2) {
    if (!_0x4b75f2) {
      return;
    }
    _0x4b75f2.querySelectorAll(".sensitive-match-highlight").forEach(_0x55e1f2 => {
      const _0x31619b = _0x55e1f2.parentNode;
      if (!_0x31619b) {
        return;
      }
      while (_0x55e1f2.firstChild) {
        _0x31619b.insertBefore(_0x55e1f2.firstChild, _0x55e1f2);
      }
      _0x31619b.removeChild(_0x55e1f2);
    });
  }
  function _0x58e115(_0xfbf3ca, _0x4c1805, _0x17b0fa) {
    if (!_0xfbf3ca || Object.prototype.hasOwnProperty.call(_0xfbf3ca, "value")) {
      return;
    }
    _0x480d6e(_0xfbf3ca);
    const _0x585aa3 = _0x5a570d(_0xfbf3ca, _0x4c1805);
    const _0x2afa2b = _0x5a570d(_0xfbf3ca, _0x17b0fa);
    const _0x5a12d3 = document.createRange();
    try {
      _0x5a12d3.setStart(_0x585aa3.node, _0x585aa3.offset);
      _0x5a12d3.setEnd(_0x2afa2b.node, _0x2afa2b.offset);
    } catch (_0x2fca71) {
      return;
    }
    const _0x2e8369 = _0x5a12d3.extractContents();
    const _0x1cac51 = document.createElement("span");
    _0x1cac51.className = "sensitive-match-highlight";
    _0x1cac51.appendChild(_0x2e8369);
    _0x5a12d3.insertNode(_0x1cac51);
  }
  function _0x122933(_0x59e5ff, _0x401311, _0x161cae, _0x1dda7d) {
    if (!_0x59e5ff || !_0x401311 || !_0x161cae) {
      return;
    }
    const _0x325856 = {
      reqRaw: ".req-raw",
      respRaw: ".resp-raw"
    };
    const _0x34072c = {
      reqRaw: ".req-search-input",
      respRaw: ".resp-search-input"
    };
    const _0x4f2384 = {
      reqRaw: ".req-search-count",
      respRaw: ".resp-search-count"
    };
    const _0x6c72ed = _0x325856[_0x401311];
    if (!_0x6c72ed) {
      return;
    }
    const _0x3da159 = _0x59e5ff.querySelector(_0x6c72ed);
    if (!_0x3da159) {
      return;
    }
    const _0x1f2837 = _0x3cb71f(_0x3da159);
    if (!_0x1f2837) {
      return;
    }
    let _0x138a59 = _0x1f2837.indexOf(_0x161cae);
    if (_0x138a59 < 0) {
      const _0x3a0c22 = String(_0x1dda7d || "").trim();
      if (_0x3a0c22) {
        _0x138a59 = _0x1f2837.indexOf(_0x3a0c22);
      }
      if (_0x138a59 < 0) {
        return;
      }
    }
    const _0x4cfe52 = String(_0x161cae || _0x1dda7d || "").length || 1;
    const _0x448754 = Math.min(_0x1f2837.length, _0x138a59 + _0x4cfe52);
    const _0x2bdfb3 = _0x59e5ff.querySelector(_0x34072c[_0x401311]);
    const _0x288330 = _0x59e5ff.querySelector(_0x4f2384[_0x401311]);
    _0x2bdfb3 && (_0x2bdfb3.value = _0x161cae);
    [".req-raw", ".resp-raw"].forEach(_0xea9f70 => {
      {
        const _0x26bf79 = _0x59e5ff.querySelector(_0xea9f70);
        if (_0x26bf79) {
          _0x480d6e(_0x26bf79);
        }
      }
    });
    _0x58e115(_0x3da159, _0x138a59, _0x448754);
    _0x2ed8dd(_0x3da159, _0x138a59, _0x448754);
    if (_0x2bdfb3 && _0x288330) {
      _0x25fc83(_0x3da159, _0x2bdfb3, _0x288330);
    }
    const _0x5ace36 = _0x3da159.querySelector(".sensitive-match-highlight");
    if (_0x5ace36) {
      try {
        _0x5ace36.classList.remove("jump-flash");
        void _0x5ace36.offsetWidth;
        _0x5ace36.classList.add("jump-flash");
        if (_0x5ace36._flashTimer) {
          clearTimeout(_0x5ace36._flashTimer);
        }
        _0x5ace36._flashTimer = setTimeout(() => {
          try {
            _0x5ace36.classList.remove("jump-flash");
          } catch (_0x3cd54f) {}
        }, 1000);
      } catch (_0x318c80) {}
      _0x529823(_0x3da159, _0x5ace36);
    } else {
      _0x4a8b78(_0x3da159, _0x138a59, _0x1f2837.length);
    }
  }
  function _0x9d1273(_0x5ea495, _0x20b6bb) {
    if (!_0x5ea495 || !_0x20b6bb) {
      return;
    }
    const _0xff7797 = _0x5ea495.querySelector(".record-detail-inline");
    if (!_0xff7797) {
      return;
    }
    _0x20b6bb.querySelectorAll(".threat-snippet-link").forEach(_0x1a28ac => {
      if (_0x1a28ac.dataset.bound === "1") {
        return;
      }
      _0x1a28ac.dataset.bound = "1";
      _0x1a28ac.addEventListener("click", _0x2a28f2 => {
        _0x2a28f2.preventDefault();
        _0x2a28f2.stopPropagation();
        let _0x4f2ed8 = "";
        let _0x2a53b4 = "";
        try {
          {
            _0x4f2ed8 = decodeURIComponent(String(_0x1a28ac.getAttribute("data-snippet") || ""));
          }
        } catch (_0x215924) {
          _0x4f2ed8 = String(_0x1a28ac.getAttribute("data-snippet") || "");
        }
        try {
          {
            _0x2a53b4 = decodeURIComponent(String(_0x1a28ac.getAttribute("data-snippet-fallback") || ""));
          }
        } catch (_0x3c3f40) {
          _0x2a53b4 = String(_0x1a28ac.getAttribute("data-snippet-fallback") || "");
        }
        if (!_0x4f2ed8) {
          return;
        }
        const _0x30d27b = _0xff7797.querySelector(".resp-raw");
        if (_0x30d27b) {
          const _0x5636c6 = _0x30d27b.dataset && _0x30d27b.dataset.viewMode ? _0x30d27b.dataset.viewMode : "pretty";
          _0x5636c6 !== "raw" && (_0x30d27b.dataset.viewMode = "raw", _0x5d3ef2(_0x30d27b, "raw", false));
        }
        _0x122933(_0xff7797, "respRaw", _0x4f2ed8, _0x2a53b4 || _0x4f2ed8);
      });
    });
  }
  function _0x3490b5(_0xcc4b85, _0x411af3) {
    const _0x1b1a75 = String(_0xcc4b85 || "");
    const _0x63a440 = String(_0x411af3 || "").trim();
    if (!_0x63a440) {
      return 0;
    }
    const _0x230597 = _0x1b1a75.toLowerCase();
    const _0x2d10d0 = _0x63a440.toLowerCase();
    let _0x4e99f7 = 0;
    let _0x36759f = 0;
    while ((_0x36759f = _0x230597.indexOf(_0x2d10d0, _0x36759f)) >= 0) {
      {
        _0x4e99f7++;
        _0x36759f += _0x2d10d0.length;
      }
    }
    return _0x4e99f7;
  }
  function _0x1d85bc(_0x5f4b82, _0xacecc8) {
    const _0x384015 = String(_0x5f4b82 || "");
    const _0x1dc1f3 = String(_0xacecc8 || "").trim();
    if (!_0x1dc1f3) {
      return [];
    }
    const _0x2c773d = _0x384015.toLowerCase();
    const _0x29a3ba = _0x1dc1f3.toLowerCase();
    const _0x1a9abf = _0x29a3ba.length;
    const _0x3939dc = [];
    let _0x32b56b = 0;
    while ((_0x32b56b = _0x2c773d.indexOf(_0x29a3ba, _0x32b56b)) >= 0) {
      _0x3939dc.push(_0x32b56b);
      _0x32b56b += _0x1a9abf;
    }
    return _0x3939dc;
  }
  function _0x51a7ba(_0x2c87e0, _0x20544c, _0x19af26, _0x40e600) {
    const _0x4c26bc = String(_0x20544c || "").trim();
    if (!_0x4c26bc) {
      return 0;
    }
    const _0x3449b6 = _0x1d85bc(_0x2c87e0, _0x4c26bc);
    const _0x3ae68e = _0x3449b6.length;
    if (!_0x3ae68e) {
      return 0;
    }
    const _0x3a3b82 = _0x4c26bc.length;
    const _0x1eaf98 = Math.min(Number(_0x19af26) || 0, Number(_0x40e600) || 0);
    for (let _0x53fdce = 0; _0x53fdce < _0x3449b6.length; _0x53fdce++) {
      {
        if (_0x1eaf98 >= _0x3449b6[_0x53fdce] && _0x1eaf98 < _0x3449b6[_0x53fdce] + _0x3a3b82) {
          return _0x53fdce + 1;
        }
      }
    }
    if (_0x1eaf98 < _0x3449b6[0]) {
      return 1;
    }
    for (let _0x1549b4 = 0; _0x1549b4 < _0x3449b6.length; _0x1549b4++) {
      if (_0x3449b6[_0x1549b4] >= _0x1eaf98) {
        return _0x1549b4 + 1;
      }
    }
    return _0x3ae68e;
  }
  function _0x25fc83(_0x53f808, _0x59b6de, _0x4ac117) {
    if (!_0x4ac117) {
      return;
    }
    const _0x497058 = String(_0x59b6de && _0x59b6de.value || "").trim();
    if (!_0x497058) {
      {
        _0x4ac117.textContent = "";
        _0x4ac117.classList.remove("has-matches");
        return;
      }
    }
    const _0xd3d727 = _0x3cb71f(_0x53f808);
    const _0x2bc892 = _0x3490b5(_0xd3d727, _0x497058);
    if (_0x2bc892 > 0) {
      const _0x5e1bf2 = _0x24bf27(_0x53f808);
      const _0x5a08b2 = _0x51a7ba(_0xd3d727, _0x497058, _0x5e1bf2.start, _0x5e1bf2.end);
      const _0x33bbae = _0x5a08b2 > 0 ? _0x5a08b2 : 1;
      const _0x2ef971 = _0x850dc("searchMatchesPosition", [String(_0x33bbae), String(_0x2bc892)]);
      _0x4ac117.textContent = _0x2ef971 === "searchMatchesPosition" ? _0x33bbae + "/" + _0x2bc892 : _0x2ef971;
      _0x4ac117.classList.add("has-matches");
    } else {
      _0x4ac117.textContent = "";
      _0x4ac117.classList.remove("has-matches");
    }
  }
  function _0x5bc292(_0x2848c9, _0x43fac9, _0x1caa8a) {
    if (!_0x2848c9) {
      return false;
    }
    const _0xf6b098 = _0x3cb71f(_0x2848c9);
    const _0x17c7d4 = String(_0x43fac9 || "");
    if (!_0x17c7d4) {
      return false;
    }
    const _0x2dbd12 = _0xf6b098.toLowerCase();
    const _0x123286 = _0x17c7d4.toLowerCase();
    const _0x5285c4 = _0x17c7d4.length;
    const _0x2022d1 = _0xf6b098.length;
    const _0x370855 = _0x13f639(_0x2848c9);
    const _0x25f2c9 = _0x24bf27(_0x2848c9);
    let _0x19191f;
    if (_0x370855) {
      _0x19191f = _0x1caa8a ? Math.max(0, (_0x25f2c9.start || 0) - 1) : Math.min(_0x2022d1, _0x25f2c9.end || 0);
    } else {
      {
        const _0x4d8c0a = _0x2848c9.dataset.eeSearchMatchStart;
        const _0x237fd0 = _0x2848c9.dataset.eeSearchMatchEnd;
        const _0x3aeaff = _0x4d8c0a != null ? Number(_0x4d8c0a) : NaN;
        const _0x55dc61 = _0x237fd0 != null ? Number(_0x237fd0) : NaN;
        const _0x25732a = Number.isFinite(_0x3aeaff) && Number.isFinite(_0x55dc61) && _0x3aeaff >= 0 && _0x55dc61 <= _0x2022d1 && _0x3aeaff < _0x55dc61;
        if (_0x25732a) {
          {
            _0x19191f = _0x1caa8a ? Math.max(0, _0x3aeaff - 1) : Math.min(_0x2022d1, _0x55dc61);
          }
        } else {
          _0x19191f = _0x1caa8a ? Math.max(0, _0x2022d1 - 1) : 0;
        }
      }
    }
    let _0x45b75b = _0x1caa8a ? _0x2dbd12.lastIndexOf(_0x123286, _0x19191f) : _0x2dbd12.indexOf(_0x123286, _0x19191f);
    if (_0x45b75b < 0) {
      _0x45b75b = _0x1caa8a ? _0x2dbd12.lastIndexOf(_0x123286) : _0x2dbd12.indexOf(_0x123286);
    }
    if (_0x45b75b < 0) {
      return false;
    }
    const _0x4f3221 = _0x45b75b + _0x5285c4;
    _0x4b415a(_0x2848c9, _0x43fac9);
    _0x2ed8dd(_0x2848c9, _0x45b75b, _0x4f3221);
    _0x2848c9.dataset.eeSearchMatchStart = String(_0x45b75b);
    _0x2848c9.dataset.eeSearchMatchEnd = String(_0x4f3221);
    _0x4a8b78(_0x2848c9, _0x45b75b, _0xf6b098.length);
    return true;
  }
  function _0x5f4749(_0x449760) {
    if (!_0x449760) {
      return;
    }
    const _0x432f05 = _0x449760.querySelectorAll && _0x449760.querySelectorAll(".search-hl");
    if (!_0x432f05 || !_0x432f05.length) {
      return;
    }
    _0x432f05.forEach(_0x88e6b6 => {
      {
        const _0x47538c = _0x88e6b6.parentNode;
        if (!_0x47538c) {
          return;
        }
        _0x47538c.replaceChild(document.createTextNode(_0x88e6b6.textContent || ""), _0x88e6b6);
        _0x47538c.normalize && _0x47538c.normalize();
      }
    });
  }
  function _0x4b415a(_0x2bbe35, _0xf0b09b) {
    if (!_0x2bbe35) {
      return;
    }
    const _0x425784 = String(_0xf0b09b || "").trim();
    _0x5f4749(_0x2bbe35);
    if (!_0x425784) {
      return;
    }
    const _0x49206f = _0x425784.toLowerCase();
    const _0x20f98b = document.createTreeWalker(_0x2bbe35, NodeFilter.SHOW_TEXT, {
      acceptNode(_0x3bd2fb) {
        if (!_0x3bd2fb || !_0x3bd2fb.nodeValue) {
          return NodeFilter.FILTER_REJECT;
        }
        const _0x267878 = _0x3bd2fb.parentNode;
        if (!_0x267878 || !_0x267878.classList) {
          return NodeFilter.FILTER_ACCEPT;
        }
        if (_0x267878.classList.contains("search-hl")) {
          return NodeFilter.FILTER_REJECT;
        }
        if (_0x267878.classList.contains("sensitive-match-highlight")) {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const _0x29f382 = [];
    let _0x40f8c3;
    while (_0x40f8c3 = _0x20f98b.nextNode()) {
      _0x29f382.push(_0x40f8c3);
    }
    _0x29f382.forEach(_0x14a168 => {
      {
        const _0x3f9537 = _0x14a168.nodeValue || "";
        const _0xf86aee = _0x3f9537.toLowerCase();
        if (!_0xf86aee.includes(_0x49206f)) {
          return;
        }
        const _0x19656b = document.createDocumentFragment();
        let _0x4465cf = 0;
        while (true) {
          const _0x36dde9 = _0xf86aee.indexOf(_0x49206f, _0x4465cf);
          if (_0x36dde9 < 0) {
            break;
          }
          if (_0x36dde9 > _0x4465cf) {
            _0x19656b.appendChild(document.createTextNode(_0x3f9537.slice(_0x4465cf, _0x36dde9)));
          }
          const _0x49da13 = document.createElement("span");
          _0x49da13.className = "search-hl";
          _0x49da13.textContent = _0x3f9537.slice(_0x36dde9, _0x36dde9 + _0x425784.length);
          _0x19656b.appendChild(_0x49da13);
          _0x4465cf = _0x36dde9 + _0x425784.length;
        }
        if (_0x4465cf < _0x3f9537.length) {
          _0x19656b.appendChild(document.createTextNode(_0x3f9537.slice(_0x4465cf)));
        }
        _0x14a168.parentNode && _0x14a168.parentNode.replaceChild(_0x19656b, _0x14a168);
      }
    });
  }
  function _0x5c081f(_0xaeeec2) {
    if (!_0xaeeec2) {
      return;
    }
    const _0x5216ca = _0xaeeec2.querySelectorAll && _0xaeeec2.querySelectorAll(".global-search-hl");
    if (!_0x5216ca || !_0x5216ca.length) {
      return;
    }
    _0x5216ca.forEach(_0x1b7ec7 => {
      const _0x471c02 = _0x1b7ec7.parentNode;
      if (!_0x471c02) {
        return;
      }
      _0x471c02.replaceChild(document.createTextNode(_0x1b7ec7.textContent || ""), _0x1b7ec7);
      _0x471c02.normalize && _0x471c02.normalize();
    });
  }
  function _0x5d2fdb(_0x5c64ae, _0x333099) {
    if (!_0x5c64ae) {
      return;
    }
    const _0x25e13a = String(_0x333099 || "").trim();
    _0x5c081f(_0x5c64ae);
    if (!_0x25e13a) {
      return;
    }
    const _0xe31708 = _0x25e13a.toLowerCase();
    const _0x3647a0 = document.createTreeWalker(_0x5c64ae, NodeFilter.SHOW_TEXT, {
      acceptNode(_0x1b174f) {
        {
          if (!_0x1b174f || !_0x1b174f.nodeValue) {
            return NodeFilter.FILTER_REJECT;
          }
          const _0x96dbda = _0x1b174f.parentNode;
          if (!_0x96dbda || !_0x96dbda.classList) {
            return NodeFilter.FILTER_ACCEPT;
          }
          if (_0x96dbda.classList.contains("global-search-hl")) {
            return NodeFilter.FILTER_REJECT;
          }
          if (_0x96dbda.classList.contains("search-hl")) {
            return NodeFilter.FILTER_REJECT;
          }
          if (_0x96dbda.classList.contains("sensitive-match-highlight")) {
            return NodeFilter.FILTER_REJECT;
          }
          return NodeFilter.FILTER_ACCEPT;
        }
      }
    });
    const _0x58b336 = [];
    let _0x406431;
    while (_0x406431 = _0x3647a0.nextNode()) {
      _0x58b336.push(_0x406431);
    }
    _0x58b336.forEach(_0x34557d => {
      const _0x2625f3 = _0x34557d.nodeValue || "";
      const _0x245aef = _0x2625f3.toLowerCase();
      if (!_0x245aef.includes(_0xe31708)) {
        return;
      }
      const _0x148ce9 = document.createDocumentFragment();
      let _0x55a235 = 0;
      while (true) {
        {
          const _0x1d4dc9 = _0x245aef.indexOf(_0xe31708, _0x55a235);
          if (_0x1d4dc9 < 0) {
            break;
          }
          if (_0x1d4dc9 > _0x55a235) {
            _0x148ce9.appendChild(document.createTextNode(_0x2625f3.slice(_0x55a235, _0x1d4dc9)));
          }
          const _0x280de4 = document.createElement("span");
          _0x280de4.className = "global-search-hl";
          _0x280de4.textContent = _0x2625f3.slice(_0x1d4dc9, _0x1d4dc9 + _0x25e13a.length);
          _0x148ce9.appendChild(_0x280de4);
          _0x55a235 = _0x1d4dc9 + _0x25e13a.length;
        }
      }
      if (_0x55a235 < _0x2625f3.length) {
        _0x148ce9.appendChild(document.createTextNode(_0x2625f3.slice(_0x55a235)));
      }
      _0x34557d.parentNode && _0x34557d.parentNode.replaceChild(_0x148ce9, _0x34557d);
    });
  }
  function _0x156848() {
    {
      const _0x21e422 = String(_0x40cc72 || "").trim();
      document.querySelectorAll(".packet-code.req-raw, .packet-code.resp-raw, #replayRequestEditor, #replayResponseViewer").forEach(_0x1c8a5e => _0x5d2fdb(_0x1c8a5e, _0x21e422));
    }
  }
  function _0x219155(_0x471165, _0x4e6999, _0x49a686, _0x2616e4, _0xdf5f0b, _0x286581) {
    {
      const _0x362c39 = _0x471165.querySelector(_0x4e6999);
      const _0x24dd93 = _0x471165.querySelector(_0x49a686);
      const _0x1e0762 = _0x471165.querySelector(_0x2616e4);
      const _0x56d0f7 = _0x471165.querySelector(_0xdf5f0b);
      const _0x56fb1e = _0x286581 ? _0x471165.querySelector(_0x286581) : null;
      if (!_0x362c39 || !_0x24dd93) {
        return;
      }
      const _0x5f5afc = () => {
        _0x25fc83(_0x24dd93, _0x362c39, _0x56fb1e);
        _0x4b415a(_0x24dd93, _0x362c39.value);
      };
      const _0x4e04d5 = _0x451d8a => {
        if (!_0x5bc292(_0x24dd93, _0x362c39.value, _0x451d8a) && _0x362c39.value.trim()) {
          {
            _0x34a884(_0x850dc("notFound") || "Not found");
          }
        }
        _0x25fc83(_0x24dd93, _0x362c39, _0x56fb1e);
      };
      if (_0x1e0762 && !_0x1e0762.dataset.bound) {
        {
          _0x1e0762.dataset.bound = "1";
          _0x1e0762.addEventListener("click", _0x14dba7 => {
            _0x14dba7.preventDefault();
            _0x14dba7.stopPropagation();
            _0x4e04d5(true);
          });
        }
      }
      _0x56d0f7 && !_0x56d0f7.dataset.bound && (_0x56d0f7.dataset.bound = "1", _0x56d0f7.addEventListener("click", _0x50c743 => {
        _0x50c743.preventDefault();
        _0x50c743.stopPropagation();
        _0x4e04d5(false);
      }));
      !_0x362c39.dataset.bound && (_0x362c39.dataset.bound = "1", _0x362c39.addEventListener("keydown", _0x1d6617 => {
        if (_0x1d6617.key !== "Enter") {
          return;
        }
        _0x1d6617.preventDefault();
        _0x1d6617.stopPropagation();
        _0x4e04d5(!!_0x1d6617.shiftKey);
      }), _0x362c39.addEventListener("input", () => {
        try {
          delete _0x24dd93.dataset.eeSearchMatchStart;
          delete _0x24dd93.dataset.eeSearchMatchEnd;
        } catch (_0x4b5927) {}
        _0x5f5afc();
      }), _0x362c39.addEventListener("keyup", _0x5f5afc));
      if (!_0x24dd93.dataset.searchOrdinalBound) {
        _0x24dd93.dataset.searchOrdinalBound = "1";
        const _0x1d32e1 = () => {
          _0x25fc83(_0x24dd93, _0x362c39, _0x56fb1e);
        };
        ["keyup", "mouseup"].forEach(_0x277fa7 => {
          _0x24dd93.addEventListener(_0x277fa7, _0x1d32e1);
        });
      }
      _0x5f5afc();
    }
  }
  function _0x7ac491(_0x54c2a, _0x3291ef) {
    const _0x1d8dc3 = [];
    const _0x4b134d = new Set();
    const _0x40e461 = _0x3c3201(String(_0x54c2a || "").slice(0, 500000));
    _0x58b305.forEach(_0x2503be => {
      if (!_0x2503be || !_0x2503be.regex) {
        return;
      }
      if (!_0x568c76(_0x40e461, _0x2503be)) {
        return;
      }
      try {
        const _0x203401 = _0x2503be.regex.flags.includes("g") ? _0x2503be.regex.flags : _0x2503be.regex.flags + "g";
        let _0x1e3452 = _0x2503be.regex.source;
        if (_0x1e3452.startsWith("^")) {
          _0x1e3452 = _0x1e3452.slice(1);
        }
        if (_0x1e3452.endsWith("$")) {
          _0x1e3452 = _0x1e3452.slice(0, -1);
        }
        const _0x187a07 = new RegExp(_0x1e3452, _0x203401);
        let _0x2f0925;
        while ((_0x2f0925 = _0x187a07.exec(_0x40e461)) !== null) {
          const _0x3eda61 = String(_0x2f0925 && _0x2f0925[0] || "").trim();
          const _0x58f80c = _0x33d497(_0x3eda61);
          if (!_0x58f80c) {
            if (!_0x2f0925[0]) {
              _0x187a07.lastIndex += 1;
            }
            continue;
          }
          const _0x32e4a7 = (_0x2503be.label || "") + "::" + _0x3291ef + "::" + _0x58f80c;
          !_0x4b134d.has(_0x32e4a7) && (_0x4b134d.add(_0x32e4a7), _0x1d8dc3.push({
            label: _0x2503be.label || "",
            snippet: _0x58f80c,
            rawText: _0x3eda61,
            source: _0x3291ef,
            color: _0x2503be.color || "#999"
          }));
          if (_0x1d8dc3.length >= 16) {
            break;
          }
          if (!_0x2f0925[0]) {
            _0x187a07.lastIndex += 1;
          }
        }
      } catch (_0x52be05) {}
    });
    return _0x1d8dc3;
  }
  function _0x2b194f(_0x15c67b) {
    {
      if (!_0x137574 || !_0x15c67b) {
        return [];
      }
      const _0x5672a0 = _0x7ac491(_0x137986(_0x15c67b), _0x850dc("request")).map(_0x57be6b => ({
        ..._0x57be6b,
        targetField: "reqRaw"
      }));
      const _0x5ba6d7 = _0x7ac491(_0x24e589(_0x15c67b), _0x850dc("response")).map(_0x405be3 => ({
        ..._0x405be3,
        targetField: "respRaw"
      }));
      return _0x5672a0.concat(_0x5ba6d7).slice(0, 20);
    }
  }
  function _0x31fbe6(_0x5097fe, _0x29a912) {
    {
      const _0x1f4e04 = _0x5097fe && _0x5097fe.querySelector(".inline-hit-summary");
      if (!_0x1f4e04) {
        return;
      }
      if (!_0x137574) {
        {
          _0x1f4e04.style.display = "none";
          _0x1f4e04.innerHTML = "";
          return;
        }
      }
      const _0xb27e0c = _0x2b194f(_0x29a912).slice(0, 20);
      if (!_0xb27e0c.length) {
        _0x1f4e04.style.display = "none";
        _0x1f4e04.innerHTML = "";
        return;
      }
      _0x1f4e04.style.display = "flex";
      _0x1f4e04.innerHTML = _0xb27e0c.map(_0x9476f9 => {
        const _0x3af050 = String(_0x9476f9.snippet || "");
        const _0x1d11e2 = _0x3af050.length > 36 ? _0x3af050.slice(0, 36) + "..." : _0x3af050;
        const _0x381862 = (_0x9476f9.label ? _0x9476f9.label + "（" + _0x1d11e2 + "）" : _0x1d11e2) + " @ " + _0x9476f9.source;
        const _0x3ae679 = _0x9476f9.rawText || _0x9476f9.snippet || "";
        const _0x5b1e63 = encodeURIComponent(_0x3ae679);
        const _0x52e8f7 = encodeURIComponent(_0x9476f9.snippet || "");
        const _0x2a16f0 = _0x9476f9.targetField || (_0x9476f9.source === _0x850dc("request") ? "reqRaw" : "respRaw");
        return "<span class=\"inline-hit-chip\" data-target-field=\"" + _0x47f251(_0x2a16f0) + "\" data-match=\"" + _0x5b1e63 + "\" data-match-fallback=\"" + _0x52e8f7 + "\" style=\"background:" + _0x9476f9.color + "22;border-color:" + _0x9476f9.color + ";color:" + _0x9476f9.color + "\">" + _0x47f251(_0x381862) + "</span>";
      }).join("");
    }
  }
  function _0x195e54(_0x429e0e) {
    return String(_0x429e0e || "").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
  function _0x4aa6b6(_0x79d4d3) {
    if (_0x79d4d3 == null) {
      return "";
    }
    if (typeof _0x79d4d3 === "string") {
      return _0x79d4d3;
    }
    if (typeof _0x79d4d3 === "object") {
      return JSON.stringify(_0x79d4d3);
    }
    return String(_0x79d4d3);
  }
  function _0x4d8a72(_0x5b2453) {
    const _0x3811ac = String(_0x5b2453 || "");
    if (!_0x3811ac.length) {
      return "";
    }
    let _0x53e640 = 0;
    if (_0x3811ac.charCodeAt(0) === 65279) {
      _0x53e640 += 1;
    }
    let _0x16220f = _0x3811ac.indexOf("\r\n", _0x53e640);
    if (_0x16220f < 0) {
      _0x16220f = _0x3811ac.indexOf("\n", _0x53e640);
    }
    const _0x49c6e3 = (_0x16220f >= 0 ? _0x3811ac.slice(_0x53e640, _0x16220f) : _0x3811ac.slice(_0x53e640)).replace(/\r$/, "");
    if (!_0x49c6e3.startsWith("--")) {
      return "";
    }
    return _0x49c6e3.slice(2);
  }
  function _0x271bd9(_0x9f3fc3, _0x4514cd) {
    const _0x48a204 = String(_0x4514cd || "").trim();
    if (!_0x48a204) {
      return _0x9f3fc3;
    }
    const _0x12306b = /["\s\\;()/,:=?]/.test(_0x48a204) || /[^\x20-\x7E]/.test(_0x48a204);
    const _0xa409ff = _0x12306b ? "\"" + _0x48a204.replace(/\\/g, "\\\\").replace(/"/g, "\\\"") + "\"" : _0x48a204;
    let _0x220b79 = String(_0x9f3fc3 || "").replace(/;\s*boundary\s*=\s*(?:"(?:\\.|[^"])*"|[^;\s]+)/gi, "").trim().replace(/;\s*$/, "").trim();
    if (!/multipart\/form-data/i.test(_0x220b79)) {
      return _0x9f3fc3;
    }
    return _0x220b79 + "; boundary=" + _0xa409ff;
  }
  function _0x56aaad(_0x4e78a0) {
    const _0x2dd9d8 = String(_0x4e78a0 || "");
    if (!_0x2dd9d8.length) {
      return false;
    }
    const _0x9a1eba = _0x4d8a72(_0x2dd9d8);
    if (!_0x9a1eba) {
      return false;
    }
    const _0x421587 = _0x2dd9d8.slice(0, Math.min(_0x2dd9d8.length, 4096));
    return /(?:^|\r?\n)Content-Disposition:\s*form-data\b/i.test(_0x421587);
  }
  function _0x168ab5(_0x57beb5, _0x10bbb9) {
    const _0x1c5360 = String(_0x10bbb9 || "");
    const _0x424605 = (_0x57beb5 || []).map(_0x787c8b => {
      if (Array.isArray(_0x787c8b)) {
        return [String(_0x787c8b[0] || ""), String(_0x787c8b[1] || "")];
      }
      return {
        name: String(_0x787c8b.name || _0x787c8b[0] || ""),
        value: String(_0x787c8b.value || _0x787c8b[1] || "")
      };
    });
    if (!_0x1c5360.length) {
      return _0x424605;
    }
    const _0x1ec1cb = _0x4d8a72(_0x1c5360);
    if (!_0x1ec1cb) {
      return _0x424605;
    }
    if (_0x56aaad(_0x1c5360)) {
      {
        const _0x5c95d1 = _0x424605.findIndex(_0x8b97f7 => {
          const _0xb39e45 = Array.isArray(_0x8b97f7) ? _0x8b97f7[0] : _0x8b97f7.name;
          return String(_0xb39e45 || "").toLowerCase() === "content-type";
        });
        if (_0x5c95d1 < 0) {
          _0x424605.unshift(["Content-Type", _0x271bd9("multipart/form-data", _0x1ec1cb)]);
          return _0x424605;
        }
      }
    }
    for (let _0x539420 = 0; _0x539420 < _0x424605.length; _0x539420++) {
      const _0x56fa4e = _0x424605[_0x539420];
      const _0x451efb = Array.isArray(_0x56fa4e) ? _0x56fa4e[0] : _0x56fa4e.name;
      if (String(_0x451efb).toLowerCase() !== "content-type") {
        continue;
      }
      const _0x2111da = Array.isArray(_0x56fa4e) ? _0x56fa4e[1] : _0x56fa4e.value;
      if (!/multipart\/form-data/i.test(_0x2111da)) {
        break;
      }
      const _0x40479c = _0x271bd9(_0x2111da, _0x1ec1cb);
      if (Array.isArray(_0x56fa4e)) {
        _0x424605[_0x539420] = [_0x56fa4e[0], _0x40479c];
      } else {
        _0x424605[_0x539420] = {
          name: _0x56fa4e.name,
          value: _0x40479c
        };
      }
      break;
    }
    return _0x424605;
  }
  function _0x3c3201(_0x234faf) {
    {
      const _0xe676ee = String(_0x234faf || "");
      if (!_0xe676ee.includes("\\u")) {
        return _0xe676ee;
      }
      return _0xe676ee.replace(/\\u([0-9a-fA-F]{4})/g, (_0x10fe07, _0x351df9) => String.fromCharCode(parseInt(_0x351df9, 16)));
    }
  }
  function _0x2f8225() {
    return String(_0x40cc72 || "").split(/[\s,，]+/).map(_0x17822b => _0x17822b.trim()).filter(Boolean).slice(0, 8);
  }
  function _0x4fe474(_0x449068, _0xbe5e9a) {
    const _0x4906f4 = String(_0x449068 || "");
    const _0x57f64a = _0x47f251(_0x4906f4);
    if (!_0xbe5e9a || !_0xbe5e9a.length) {
      return _0x57f64a;
    }
    const _0x3be321 = _0xbe5e9a.map(_0x32f4d8 => _0x195e54(_0x32f4d8)).filter(Boolean).join("|");
    if (!_0x3be321) {
      return _0x57f64a;
    }
    try {
      {
        const _0x28c9b6 = new RegExp("(" + _0x3be321 + ")", "ig");
        return _0x57f64a.replace(_0x28c9b6, "<mark class=\"search-hl\">$1</mark>");
      }
    } catch (_0x3bdc8f) {
      return _0x57f64a;
    }
  }
  function _0x1f25ba(_0x37c890) {
    if (typeof _0x37c890 !== "string") {
      return null;
    }
    const _0x1e047a = _0x37c890.trim();
    if (!_0x1e047a) {
      return null;
    }
    try {
      const _0x1a43d2 = JSON.parse(_0x1e047a);
      return JSON.stringify(_0x1a43d2, null, 2);
    } catch (_0x22e6b4) {
      {
        return null;
      }
    }
  }
  function _0x537320(_0x2e0c20) {
    const _0x31a248 = String(_0x2e0c20 || "").trim();
    if (!_0x31a248) {
      return _0x31a248;
    }
    const _0x2bd675 = new Set(["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"]);
    const _0x316bc7 = _0x31a248.replace(/>\s*</g, ">\n<");
    const _0x3a0406 = _0x316bc7.split(/\n/);
    let _0x35d719 = 0;
    const _0x389c6f = [];
    for (let _0x48f270 = 0; _0x48f270 < _0x3a0406.length; _0x48f270++) {
      const _0x39e698 = _0x3a0406[_0x48f270].trim();
      if (!_0x39e698) {
        continue;
      }
      if (/^<\//.test(_0x39e698)) {
        _0x35d719 = Math.max(0, _0x35d719 - 1);
      }
      _0x389c6f.push("  ".repeat(_0x35d719) + _0x39e698);
      if (/^<\//.test(_0x39e698)) {
        continue;
      }
      const _0x485db1 = _0x39e698.match(/^<([a-zA-Z][a-zA-Z0-9:_-]*)\b/);
      const _0x3c9015 = _0x485db1 ? _0x485db1[1].toLowerCase() : "";
      const _0x137b0c = /^<(?:!|\?)/.test(_0x39e698);
      const _0x518ecd = /\/\s*>$/.test(_0x39e698);
      const _0x2f75a5 = _0x3c9015 && _0x2bd675.has(_0x3c9015);
      if (_0x137b0c || _0x518ecd || _0x2f75a5) {
        continue;
      }
      if (/^<[^\/?!]/.test(_0x39e698)) {
        _0x35d719 += 1;
      }
    }
    return _0x389c6f.join("\n");
  }
  function _0x35572b(_0x5bf112) {
    return String(_0x5bf112 || "").replace(/;\s*/g, ";\n").replace(/\{\s*/g, "{\n").replace(/\}\s*/g, "}\n").replace(/\n{3,}/g, "\n\n").trim();
  }
  function _0x4482c0(_0x3da28f) {
    return String(_0x3da28f || "").replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F-\u009F]/g, "�");
  }
  function _0x2b0bed(_0x309e74) {
    {
      const _0x1eb4e0 = String(_0x309e74 || "");
      if (!_0x56aaad(_0x1eb4e0)) {
        return _0x1eb4e0;
      }
      const _0x2e7bfe = _0x4d8a72(_0x1eb4e0);
      if (!_0x2e7bfe) {
        return _0x1eb4e0;
      }
      const _0x4618f5 = _0xe11956 => {
        const _0x363a9d = String(_0xe11956 || "").toLowerCase();
        if (_0x363a9d.includes("filename=")) {
          return true;
        }
        if (/content-type:\s*(?:image|audio|video)\//i.test(_0xe11956)) {
          return true;
        }
        if (/content-type:\s*application\/octet-stream/i.test(_0xe11956)) {
          return true;
        }
        return false;
      };
      const _0x21b426 = _0x36b46b => {
        const _0x32698a = typeof _0x850dc === "function" && _0x850dc("multipartBinaryPlaceholder") || "[Binary payload omitted in Pretty view — open Raw or Hex]";
        return _0x32698a + " (" + _0x36b46b + " bytes)\n";
      };
      let _0x17ff48 = 0;
      let _0x1b6f40 = "";
      const _0x269d28 = "--" + _0x2e7bfe;
      const _0x1d8fcc = _0x269d28 + "--";
      if (_0x1eb4e0.indexOf(_0x269d28) !== 0) {
        const _0x5963a3 = _0x1eb4e0.indexOf(_0x269d28);
        if (_0x5963a3 < 0) {
          return _0x1eb4e0;
        }
        _0x1b6f40 += _0x1eb4e0.slice(0, _0x5963a3);
        _0x17ff48 = _0x5963a3;
      }
      while (_0x17ff48 < _0x1eb4e0.length) {
        if (_0x1eb4e0.slice(_0x17ff48, _0x17ff48 + _0x269d28.length) !== _0x269d28) {
          _0x1b6f40 += _0x1eb4e0.slice(_0x17ff48);
          break;
        }
        const _0x407e62 = _0x1eb4e0.indexOf("\n", _0x17ff48);
        if (_0x407e62 < 0) {
          {
            _0x1b6f40 += _0x1eb4e0.slice(_0x17ff48);
            break;
          }
        }
        const _0x2c9e59 = _0x1eb4e0.slice(_0x17ff48, _0x407e62 + 1);
        _0x1b6f40 += _0x2c9e59;
        _0x17ff48 = _0x407e62 + 1;
        if (_0x2c9e59.indexOf(_0x1d8fcc) >= 0) {
          {
            _0x1b6f40 += _0x1eb4e0.slice(_0x17ff48);
            break;
          }
        }
        const _0x3ec561 = _0x1eb4e0.indexOf("\r\n\r\n", _0x17ff48);
        const _0x32a24a = _0x1eb4e0.indexOf("\n\n", _0x17ff48);
        let _0x47a3ce;
        let _0x278238;
        if (_0x3ec561 >= 0 && (_0x32a24a < 0 || _0x3ec561 <= _0x32a24a)) {
          {
            _0x47a3ce = _0x3ec561;
            _0x278238 = 4;
          }
        } else {
          if (_0x32a24a >= 0) {
            _0x47a3ce = _0x32a24a;
            _0x278238 = 2;
          } else {
            {
              _0x1b6f40 += _0x1eb4e0.slice(_0x17ff48);
              break;
            }
          }
        }
        const _0x5ab46e = _0x1eb4e0.slice(_0x17ff48, _0x47a3ce);
        const _0x6e1aba = _0x1eb4e0.slice(_0x17ff48, _0x47a3ce + _0x278238);
        _0x17ff48 = _0x47a3ce + _0x278238;
        const _0x204dc0 = _0x1eb4e0.indexOf("\r\n" + _0x269d28, _0x17ff48);
        const _0x213597 = _0x1eb4e0.indexOf("\n" + _0x269d28, _0x17ff48);
        const _0x4c4756 = _0x1eb4e0.indexOf("\r\n" + _0x1d8fcc, _0x17ff48);
        const _0x53dfa3 = _0x1eb4e0.indexOf("\n" + _0x1d8fcc, _0x17ff48);
        const _0x4663f3 = [_0x204dc0, _0x213597, _0x4c4756, _0x53dfa3].filter(_0x59a741 => _0x59a741 >= 0);
        const _0x1a0aca = _0x4663f3.length ? Math.min.apply(null, _0x4663f3) : -1;
        let _0x47d3cf;
        if (_0x1a0aca < 0) {
          {
            _0x47d3cf = _0x1eb4e0.slice(_0x17ff48);
            _0x1b6f40 += _0x6e1aba;
            _0x4618f5(_0x5ab46e) && _0x47d3cf.length > 0 ? _0x1b6f40 += _0x21b426(_0x47d3cf.length) : _0x1b6f40 += _0x4482c0(_0x47d3cf);
            break;
          }
        }
        _0x47d3cf = _0x1eb4e0.slice(_0x17ff48, _0x1a0aca);
        _0x1b6f40 += _0x6e1aba;
        _0x4618f5(_0x5ab46e) && _0x47d3cf.length > 0 ? _0x1b6f40 += _0x21b426(_0x47d3cf.length) : _0x1b6f40 += _0x4482c0(_0x47d3cf);
        _0x17ff48 = _0x1a0aca + (_0x1eb4e0.charAt(_0x1a0aca) === "\r" ? 2 : 1);
      }
      return _0x1b6f40;
    }
  }
  function _0x4b39b0(_0x5624f0, _0x35ddd3) {
    const _0x968eea = String(_0x35ddd3 || "");
    const _0x4a44d1 = String(_0x5624f0 && (_0x5624f0["content-type"] || _0x5624f0["Content-Type"]) || "").toLowerCase();
    const _0x5b557e = _0x1f25ba(_0x968eea);
    if (_0x5b557e != null) {
      return _0x5b557e;
    }
    if (_0x4a44d1.includes("json")) {
      return _0x968eea;
    }
    if (_0x4a44d1.includes("html") || _0x4a44d1.includes("xml") || /^\s*</.test(_0x968eea)) {
      return _0x537320(_0x968eea);
    }
    if (_0x4a44d1.includes("javascript") || _0x4a44d1.includes("ecmascript")) {
      return _0x35572b(_0x968eea);
    }
    if (_0x4a44d1.includes("multipart/form-data") || _0x56aaad(_0x968eea)) {
      return _0x2b0bed(_0x968eea);
    }
    return _0x968eea;
  }
  function _0x233161(_0x3bbdcb, _0x163cb4) {
    const _0x2a92c9 = String(_0x3bbdcb || "");
    if (_0x163cb4 === "raw") {
      return _0x2649b8(_0x2a92c9);
    }
    if (_0x163cb4 !== "pretty") {
      return _0x2a92c9;
    }
    const _0x28af02 = _0x83e0ec(_0x2a92c9);
    const _0x417e82 = _0x28af02.startLine + (_0x28af02.headerLines.length ? "\n" + _0x28af02.headerLines.join("\n") : "");
    const _0x4ab07e = _0x233c3e(_0x28af02.headerLines || []);
    let _0x340fc8 = _0x4b39b0(_0x4ab07e, _0x28af02.body || "");
    const _0x14dfd1 = String(_0x28af02.body || "");
    _0x14dfd1.length > 300 && _0x340fc8.indexOf("\n") < 0 && /<\/?[a-zA-Z][\s\S]*>/.test(_0x14dfd1) && (_0x340fc8 = _0x537320(_0x14dfd1));
    return _0x417e82 + "\n\n" + _0x340fc8;
  }
  function _0x2198fd(_0x23fb76) {
    try {
      return new TextEncoder().encode(String(_0x23fb76 || ""));
    } catch (_0x4f795d) {
      {
        const _0x24d6bc = String(_0x23fb76 || "");
        const _0x25f923 = new Uint8Array(_0x24d6bc.length);
        for (let _0x14880a = 0; _0x14880a < _0x24d6bc.length; _0x14880a++) {
          _0x25f923[_0x14880a] = _0x24d6bc.charCodeAt(_0x14880a) & 255;
        }
        return _0x25f923;
      }
    }
  }
  function _0x4f44a9(_0x2d78ca, _0x3a9890) {
    return _0x2d78ca.toString(16).toUpperCase().padStart(_0x3a9890, "0");
  }
  function _0x441215(_0x29e659) {
    return _0x47f251(String(_0x29e659 == null ? "" : _0x29e659));
  }
  function _0x5ce286(_0x477e99, _0x2e3cc9) {
    {
      if (!_0x477e99) {
        return;
      }
      const _0x1139af = _0x2198fd(_0x2e3cc9);
      const _0x5c091e = 16;
      const _0x500915 = _0x1139af.length;
      const _0x35428e = Math.ceil(_0x500915 / _0x5c091e) || 1;
      let _0xdc11e7 = "<div class=\"hex-view\" role=\"table\" aria-label=\"Hex view\">";
      for (let _0xbd0739 = 0; _0xbd0739 < _0x35428e; _0xbd0739++) {
        const _0x4e06bc = _0xbd0739 * _0x5c091e;
        const _0x1ce8ab = Math.min(_0x500915, _0x4e06bc + _0x5c091e);
        let _0x5a348f = "";
        let _0x4d73b1 = "";
        for (let _0x1b6f11 = _0x4e06bc; _0x1b6f11 < _0x4e06bc + _0x5c091e; _0x1b6f11++) {
          {
            if (_0x1b6f11 < _0x1ce8ab) {
              const _0x73f956 = _0x1139af[_0x1b6f11];
              _0x5a348f += _0x4f44a9(_0x73f956, 2) + (_0x1b6f11 === _0x4e06bc + 7 ? "  " : " ");
              _0x4d73b1 += _0x73f956 >= 32 && _0x73f956 <= 126 ? String.fromCharCode(_0x73f956) : ".";
            } else {
              _0x5a348f += "  " + (_0x1b6f11 === _0x4e06bc + 7 ? "  " : " ");
              _0x4d73b1 += " ";
            }
          }
        }
        _0xdc11e7 += "<div class=\"hex-row\" role=\"row\"><span class=\"hex-off\" role=\"cell\">" + _0x4f44a9(_0x4e06bc, 8) + "</span>" + "<span class=\"hex-bytes\" role=\"cell\">" + _0x441215(_0x5a348f.trimEnd()) + "</span>" + "<span class=\"hex-ascii\" role=\"cell\">" + _0x441215(_0x4d73b1) + "</span>" + "</div>";
      }
      _0xdc11e7 += "</div>";
      if (_0x477e99.dataset._origContentEditable == null) {
        const _0x493479 = _0x477e99.getAttribute("contenteditable");
        _0x477e99.dataset._origContentEditable = _0x493479 == null ? "" : _0x493479;
      }
      _0x477e99.setAttribute("contenteditable", "false");
      _0x477e99.classList.add("hex-mode");
      _0x477e99.innerHTML = _0xdc11e7;
    }
  }
  function _0x37c872(_0x4e5943) {
    const _0x2e70e0 = _0x2198fd(_0x4e5943);
    const _0x1154b7 = 16;
    const _0xa089cb = _0x2e70e0.length;
    const _0x4480ab = Math.ceil(_0xa089cb / _0x1154b7) || 1;
    const _0x527ad7 = [];
    for (let _0x593ebf = 0; _0x593ebf < _0x4480ab; _0x593ebf++) {
      const _0x2cdeb1 = _0x593ebf * _0x1154b7;
      const _0x54a1a5 = Math.min(_0xa089cb, _0x2cdeb1 + _0x1154b7);
      let _0x9e5378 = "";
      let _0x1ae7c9 = "";
      for (let _0x2cfa67 = _0x2cdeb1; _0x2cfa67 < _0x2cdeb1 + _0x1154b7; _0x2cfa67++) {
        {
          if (_0x2cfa67 < _0x54a1a5) {
            const _0x2f160c = _0x2e70e0[_0x2cfa67];
            _0x9e5378 += _0x4f44a9(_0x2f160c, 2) + (_0x2cfa67 === _0x2cdeb1 + 7 ? "  " : " ");
            _0x1ae7c9 += _0x2f160c >= 32 && _0x2f160c <= 126 ? String.fromCharCode(_0x2f160c) : ".";
          } else {
            _0x9e5378 += "  " + (_0x2cfa67 === _0x2cdeb1 + 7 ? "  " : " ");
            _0x1ae7c9 += " ";
          }
        }
      }
      _0x527ad7.push(_0x4f44a9(_0x2cdeb1, 8) + "  " + _0x9e5378.trimEnd() + "  " + _0x1ae7c9);
    }
    return _0x527ad7.join("\n");
  }
  function _0x14810c(_0x4a08c6) {
    if (!_0x4a08c6) {
      return;
    }
    if (!_0x4a08c6.classList.contains("hex-mode")) {
      return;
    }
    _0x4a08c6.classList.remove("hex-mode");
    const _0x208ec0 = _0x4a08c6.dataset._origContentEditable;
    if (_0x208ec0 === "") {
      _0x4a08c6.removeAttribute("contenteditable");
    } else {
      if (_0x208ec0 != null) {
        _0x4a08c6.setAttribute("contenteditable", _0x208ec0);
      }
    }
  }
  function _0x21dbd3() {
    return _0x3a0472 === "intercept" ? "raw" : "pretty";
  }
  function _0x1504f6() {
    return "raw";
  }
  function _0x38b968(_0x3f18a8) {
    if (!_0x3f18a8) {
      return "pretty";
    }
    try {
      const _0x24a8f3 = _0x3f18a8.getAttribute && _0x3f18a8.getAttribute("id");
      if (_0x3f18a8 === _0xc41ff8 || _0x24a8f3 === "fuzzDetailRequest") {
        return "raw";
      }
      if (_0x3f18a8 === _0x1073d3 || _0x24a8f3 === "replayRequestEditor") {
        return _0x1504f6();
      }
      if (_0x3f18a8.classList && _0x3f18a8.classList.contains("req-raw")) {
        return _0x21dbd3();
      }
    } catch (_0x115d46) {}
    return "pretty";
  }
  function _0x5d3ef2(_0xe75b67, _0x33b52d, _0x372c29) {
    if (!_0xe75b67) {
      return;
    }
    const _0x2fd259 = _0x307492(_0xe75b67);
    const _0x188a49 = _0x33b52d || _0xe75b67.dataset.viewMode || _0x38b968(_0xe75b67);
    _0xe75b67.dataset.viewMode = _0x188a49;
    const _0x298043 = _0xe75b67 && _0xe75b67.getAttribute ? _0xe75b67.getAttribute("id") : "";
    const _0x107ef3 = _0xe75b67 === _0x39c18b || _0x298043 === "replayResponseViewer";
    const _0x2fc45e = _0xe75b67 === _0x1073d3 || _0x298043 === "replayRequestEditor";
    function _0x133395(_0x582c78, _0x7956de) {
      {
        const _0x54f46e = String((_0x582c78 || []).join("\n") || "").toLowerCase();
        if (_0x54f46e.includes("content-type:") && _0x54f46e.includes("text/html")) {
          return true;
        }
        const _0x934e31 = String(_0x7956de || "").trim().toLowerCase();
        return _0x934e31.startsWith("<!doctype") || _0x934e31.startsWith("<html") || _0x934e31.startsWith("<") && _0x934e31.includes("</");
      }
    }
    function _0x1defcc() {
      const _0x3bb24d = _0x83e0ec(_0x2fd259);
      const _0x23a940 = String(_0x3bb24d.body || "");
      const _0x11a0d1 = _0x133395(_0x3bb24d.headerLines, _0x23a940);
      let _0x3814ec = "";
      try {
        {
          const _0x3769a0 = _0x33d5a5 && _0x158eac ? _0x33d5a5.find(_0x469b52 => _0x469b52.id === _0x158eac) : null;
          const _0x502ff6 = _0x4ddb66 || _0x3769a0 && _0x3769a0.targetOriginOverride || "";
          const _0x200e88 = _0x3769a0 && _0x3769a0.requestRaw ? _0x2370d2(String(_0x3769a0.requestRaw), _0x502ff6, {
            smartEncodeUrl: !!_0x59b777
          }) : null;
          const _0x332da7 = _0x2ec227();
          if (_0x200e88) {
            _0x145f0a(_0x200e88, _0x332da7);
          }
          const _0x3b9071 = new URL(_0x200e88 && _0x200e88.url ? _0x200e88.url : _0x502ff6);
          const _0x4e0b36 = _0x3b9071.pathname ? _0x3b9071.pathname.replace(/[^/]*$/, "") : "/";
          _0x3814ec = _0x3b9071.origin + (_0x4e0b36.endsWith("/") ? _0x4e0b36 : _0x4e0b36 + "/");
        }
      } catch (_0x5035eb) {
        _0x3814ec = "";
      }
      let _0x498026 = _0x11a0d1 ? _0x23a940 : "<pre style=\"white-space:pre-wrap;word-break:break-word;margin:0;padding:12px;font-family:ui-monospace,Menlo,monospace;font-size:12px;line-height:1.45;\">" + _0x47f251(_0x23a940) + "</pre>";
      if (_0x3814ec && _0x11a0d1) {
        {
          const _0x21c264 = "<base href=\"" + _0x47f251(_0x3814ec) + "\">";
          /<head[^>]*>/i.test(_0x498026) ? _0x498026 = _0x498026.replace(/<head[^>]*>/i, _0x1740f3 => _0x1740f3 + _0x21c264) : _0x498026 = _0x21c264 + _0x498026;
        }
      }
      const _0x4c548b = document.createElement("iframe");
      _0x4c548b.className = "replay-render-frame";
      _0x4c548b.setAttribute("sandbox", "");
      _0x4c548b.setAttribute("referrerpolicy", "no-referrer");
      _0x4c548b.srcdoc = _0x498026;
      _0xe75b67.innerHTML = "";
      _0xe75b67.appendChild(_0x4c548b);
    }
    function _0x56720c(_0x28a0aa) {
      if (!_0x137574 || !_0x58b305.length) {
        return [];
      }
      const _0x33b999 = String(_0x28a0aa || "").slice(0, 500000);
      if (!_0x33b999.trim()) {
        return [];
      }
      const _0x524262 = new Map();
      for (const _0x15feee of _0x58b305 || []) {
        if (!_0x15feee || !_0x15feee.regex) {
          continue;
        }
        if (!_0x568c76(_0x33b999, _0x15feee)) {
          continue;
        }
        const _0x45fbc2 = _0x15feee.hitKey || (_0x15feee.key === "customRegex" ? "customRegex:" + (_0x15feee.label || "") : _0x15feee.key === "keyword" ? "keyword:" + (_0x15feee.label || "") : _0x15feee.key);
        const _0x36e14f = _0x14840f(_0x45fbc2 || _0x15feee.key);
        const _0x4d528f = _0x15feee.color || "#999";
        if (!_0x524262.has(_0x45fbc2)) {
          _0x524262.set(_0x45fbc2, {
            hitKey: _0x45fbc2,
            label: _0x36e14f,
            color: _0x4d528f,
            values: []
          });
        }
        try {
          {
            const _0x31698e = _0x15feee.regex.flags.includes("g") ? _0x15feee.regex.flags : _0x15feee.regex.flags + "g";
            let _0x4b7ddb = _0x15feee.regex.source;
            if (_0x4b7ddb.startsWith("^")) {
              _0x4b7ddb = _0x4b7ddb.slice(1);
            }
            if (_0x4b7ddb.endsWith("$")) {
              _0x4b7ddb = _0x4b7ddb.slice(0, -1);
            }
            const _0x172346 = new RegExp(_0x4b7ddb, _0x31698e);
            let _0x2e10bb;
            while ((_0x2e10bb = _0x172346.exec(_0x33b999)) !== null) {
              {
                const _0xe7702f = String(_0x2e10bb && _0x2e10bb[0] || "").trim();
                const _0x44a517 = _0x33d497(_0xe7702f);
                if (!_0x44a517) {
                  {
                    if (!_0x2e10bb[0]) {
                      _0x172346.lastIndex += 1;
                    }
                    continue;
                  }
                }
                const _0x46af14 = _0x524262.get(_0x45fbc2);
                if (_0x46af14 && !_0x46af14.values.includes(_0x44a517)) {
                  _0x46af14.values.push(_0x44a517);
                }
                if (_0x46af14 && _0x46af14.values.length >= 3) {
                  break;
                }
                if (!_0x2e10bb[0]) {
                  _0x172346.lastIndex += 1;
                }
              }
            }
          }
        } catch (_0xb90775) {}
      }
      return Array.from(_0x524262.values()).slice(0, 12);
    }
    function _0x5bf672(_0x5a9eea) {
      const _0x25bba1 = _0x33988b(_0x5a9eea) || "keyword";
      let _0xb1e84a = _0x43b3a5[_0x25bba1] || _0x9a0db4[_0x25bba1] || "#999";
      if (String(_0x5a9eea).startsWith("customRegex:")) {
        const _0x437415 = String(_0x5a9eea).slice("customRegex:".length);
        _0xb1e84a = _0x1857bf[_0x437415] || _0x43b3a5.customRegex || "#6f7ee8";
      } else {
        if (String(_0x5a9eea).startsWith("keyword:")) {
          const _0x4ab89e = String(_0x5a9eea).slice("keyword:".length);
          _0xb1e84a = _0x78fbd[_0x4ab89e] || _0x43b3a5.keyword || "#4c8fd1";
        }
      }
      return _0xb1e84a;
    }
    function _0x5a7402(_0x384df3) {
      let _0x22e5c4 = _0x56720c(String(_0x384df3 || ""));
      _0xe75b67.innerHTML = "";
      const _0x1fba6b = document.createElement("div");
      _0x1fba6b.className = "replay-sensitive-wrap";
      const _0x2877eb = document.createElement("div");
      _0x2877eb.className = "replay-sensitive-title";
      if ((!_0x22e5c4 || !_0x22e5c4.length) && _0x137574 && _0x58b305 && _0x58b305.length) {
        try {
          {
            const _0x325a88 = _0x7ac491(String(_0x384df3 || ""), "");
            if (_0x325a88 && _0x325a88.length) {
              const _0x2e3a33 = new Map();
              _0x325a88.forEach(_0x588844 => {
                {
                  const _0x151463 = String(_0x588844.label || _0x14840f(_0x588844.hitKey || "") || _0x850dc("columnSensitive") || "Sensitive Info");
                  if (!_0x2e3a33.has(_0x151463)) {
                    _0x2e3a33.set(_0x151463, {
                      hitKey: _0x588844.hitKey || "",
                      label: _0x151463,
                      color: _0x588844.color || "#999",
                      values: []
                    });
                  }
                  const _0x393817 = _0x2e3a33.get(_0x151463);
                  const _0x5e9a97 = _0x33d497(_0x588844.snippet || _0x588844.rawText || "");
                  if (_0x393817 && _0x5e9a97 && !_0x393817.values.includes(_0x5e9a97)) {
                    _0x393817.values.push(_0x5e9a97);
                  }
                }
              });
              _0x22e5c4 = Array.from(_0x2e3a33.values()).slice(0, 12);
            }
          }
        } catch (_0x2e2254) {}
      }
      const _0x4bd387 = (_0x22e5c4 || []).reduce((_0x12aff7, _0x4b525c) => _0x12aff7 + (Array.isArray(_0x4b525c.values) ? _0x4b525c.values.length : 0), 0);
      if (!_0x22e5c4.length) {
        _0x2877eb.textContent = _0x850dc("replaySensitiveSummaryEmpty") || (_0x850dc("columnSensitive") || "Sensitive Info") + ": -";
      } else {
        const _0x453d64 = _0x850dc("replaySensitiveSummary") || "Sensitive Info: $1 ($2 types)";
        _0x2877eb.textContent = _0x453d64.replace("$1", String(_0x4bd387)).replace("$2", String(_0x22e5c4.length));
      }
      _0x1fba6b.appendChild(_0x2877eb);
      if (!_0x22e5c4.length) {
        const _0x458770 = document.createElement("div");
        _0x458770.style.color = "var(--ee-text-secondary)";
        _0x458770.style.fontSize = "12px";
        _0x458770.textContent = "-";
        _0x1fba6b.appendChild(_0x458770);
      } else {
        {
          _0x22e5c4.forEach(_0x42e2d4 => {
            const _0x5f58dc = document.createElement("div");
            _0x5f58dc.className = "replay-sensitive-item";
            const _0x46b83a = document.createElement("span");
            _0x46b83a.className = "replay-sensitive-dot";
            _0x46b83a.style.background = _0x42e2d4.color || _0x5bf672(_0x42e2d4.hitKey);
            const _0x209c5f = document.createElement("span");
            _0x209c5f.className = "replay-sensitive-label";
            _0x209c5f.textContent = _0x42e2d4.label || _0x14840f(_0x42e2d4.hitKey);
            _0x209c5f.title = _0x42e2d4.label || _0x14840f(_0x42e2d4.hitKey);
            _0x5f58dc.appendChild(_0x46b83a);
            _0x5f58dc.appendChild(_0x209c5f);
            if (_0x42e2d4.values && _0x42e2d4.values.length) {
              const _0x28b574 = document.createElement("div");
              _0x28b574.style.gridColumn = "1 / -1";
              _0x28b574.style.paddingLeft = "16px";
              _0x28b574.style.color = "var(--ee-text-secondary)";
              _0x28b574.style.fontSize = "12px";
              _0x28b574.style.wordBreak = "break-word";
              _0x28b574.textContent = _0x42e2d4.values.join(" | ");
              _0x5f58dc.style.display = "grid";
              _0x5f58dc.style.gridTemplateColumns = "8px 1fr";
              _0x5f58dc.style.alignItems = "center";
              _0x5f58dc.appendChild(_0x28b574);
            }
            _0x1fba6b.appendChild(_0x5f58dc);
          });
        }
      }
      _0xe75b67.appendChild(_0x1fba6b);
    }
    if (_0x188a49 === "ai") {
      _0x14810c(_0xe75b67);
      _0xe75b67.classList.add("ai-mode");
      _0xe75b67.classList.remove("render-mode");
      _0xe75b67.classList.remove("sensitive-mode");
      _0xe75b67.classList.remove("hex-mode");
      const _0x5b4f8d = _0x33d5a5 && _0x158eac ? _0x33d5a5.find(_0x3b613a => _0x3b613a.id === _0x158eac) : null;
      const _0x367abc = _0x5b4f8d && _0x5b4f8d.aiJudgeResultText ? String(_0x5b4f8d.aiJudgeResultText) : "";
      if (_0x367abc.trim()) {
        _0xe75b67.innerHTML = _0x77a960(_0x367abc, _0x5b4f8d && _0x5b4f8d.aiMeta ? _0x5b4f8d.aiMeta : {
          lang: _0x3c9cec
        });
        _0xf30b52(_0xe75b67);
      } else {
        _0xe75b67.textContent = _0x850dc("replayAiEmptyHint") || "No AI analysis yet.";
      }
      _0x5d2fdb(_0xe75b67, _0x40cc72);
      _0x5eea39(_0xe75b67);
      return;
    }
    if (_0x188a49 === "render" && _0x107ef3) {
      _0x14810c(_0xe75b67);
      _0xe75b67.classList.add("render-mode");
      _0xe75b67.classList.remove("ai-mode");
      _0xe75b67.classList.remove("sensitive-mode");
      _0xe75b67.classList.remove("hex-mode");
      _0x1defcc();
      _0x5eea39(_0xe75b67);
      return;
    }
    if (_0x188a49 === "render" && !_0x2fc45e) {
      const _0x3b6dca = _0xe75b67.classList && _0xe75b67.classList.contains("resp-raw");
      const _0xf4ce86 = _0xe75b67.getAttribute && _0xe75b67.getAttribute("id") === "fuzzDetailResponse";
      if (_0x3b6dca || _0xf4ce86) {
        {
          _0x14810c(_0xe75b67);
          _0xe75b67.classList.add("render-mode");
          _0xe75b67.classList.remove("ai-mode");
          _0xe75b67.classList.remove("sensitive-mode");
          _0xe75b67.classList.remove("hex-mode");
          _0x1defcc();
          _0x5eea39(_0xe75b67);
          return;
        }
      }
    }
    if (_0x188a49 === "sensitive") {
      _0x14810c(_0xe75b67);
      _0xe75b67.classList.add("sensitive-mode");
      _0xe75b67.classList.remove("ai-mode");
      _0xe75b67.classList.remove("render-mode");
      _0xe75b67.classList.remove("hex-mode");
      if (_0x107ef3 || _0x2fc45e) {
        const _0x56f852 = _0x33d5a5 && _0x158eac ? _0x33d5a5.find(_0x450277 => _0x450277.id === _0x158eac) : null;
        const _0x202199 = _0x56f852 ? String(_0x56f852.requestRaw || "") : _0x2fd259;
        const _0x158fee = _0x56f852 ? String(_0x56f852.responseRaw || "") : _0x2fd259;
        _0x5a7402(_0x2fc45e ? _0x202199 : _0x158fee);
      } else {
        _0x5a7402(_0x2fd259);
      }
      _0x5eea39(_0xe75b67);
      return;
    }
    _0xe75b67.classList.remove("ai-mode");
    _0xe75b67.classList.remove("render-mode");
    _0xe75b67.classList.remove("sensitive-mode");
    if (_0x188a49 === "hex") {
      _0x5ce286(_0xe75b67, _0x2fd259);
      _0x5d2fdb(_0xe75b67, _0x40cc72);
      _0x5eea39(_0xe75b67);
      return;
    }
    if (_0x188a49 === "raw") {
      {
        _0x14810c(_0xe75b67);
        _0xe75b67.classList.remove("ai-mode");
        _0xe75b67.classList.remove("render-mode");
        _0xe75b67.classList.remove("sensitive-mode");
        _0xe75b67.classList.remove("hex-mode");
        const _0x2f6b26 = _0x233161(_0x2fd259, "raw");
        _0x14997d(_0xe75b67, _0x2f6b26, _0x372c29);
        _0x5d2fdb(_0xe75b67, _0x40cc72);
        _0x5eea39(_0xe75b67, _0x2f6b26);
        if (_0x2fc45e && typeof _0x9bd96d === "function") {
          try {
            _0x9bd96d();
          } catch (_0xfa7bbd) {}
        }
        return;
      }
    }
    _0x14810c(_0xe75b67);
    const _0x173273 = _0x233161(_0x2fd259, _0x188a49);
    _0x14997d(_0xe75b67, _0x173273, _0x372c29);
    _0x5d2fdb(_0xe75b67, _0x40cc72);
    _0x5eea39(_0xe75b67, _0x173273);
    if (_0x2fc45e && typeof _0x9bd96d === "function") {
      try {
        {
          _0x9bd96d();
        }
      } catch (_0x828a89) {}
    }
  }
  function _0x58148b(_0x2045ed) {
    const _0x266743 = _0x2045ed.querySelector(".req-raw");
    const _0x22a45e = _0x2045ed.querySelector(".resp-raw");
    let _0x2551c4 = 0;
    let _0x18bd78 = 0;
    [_0x266743, _0x22a45e].forEach(_0x17c33c => {
      if (!_0x17c33c) {
        return;
      }
      const _0x298235 = _0x83e0ec(_0x3cb71f(_0x17c33c));
      if (!_0x298235.body.trim()) {
        return;
      }
      const _0x1c3303 = _0x1f25ba(_0x298235.body);
      if (_0x1c3303 != null) {
        _0x18bd78++;
        if (_0x1c3303 !== _0x298235.body) {
          const _0x494986 = _0x298235.startLine + "\n" + _0x298235.headerLines.join("\n") + "\n\n" + _0x1c3303;
          _0x9fe1e1(_0x17c33c, _0x494986);
          _0x5d3ef2(_0x17c33c, _0x17c33c.dataset.viewMode || _0x38b968(_0x17c33c), false);
          _0x2551c4++;
        }
      }
    });
    if (!_0x18bd78) {
      _0x34a884(_0x850dc("notValidJson"));
    }
    return _0x2551c4 > 0;
  }
  function _0x1569de(_0x3e7f9e) {
    if (typeof _0x3e7f9e !== "string") {
      return "";
    }
    try {
      if (window.marked && typeof window.marked.parse === "function") {
        {
          !window.__eeMarkedConfigured && typeof window.marked.setOptions === "function" && (window.marked.setOptions({
            gfm: true,
            breaks: true,
            mangle: false,
            headerIds: false
          }), window.__eeMarkedConfigured = true);
          const _0x19daae = String(_0x3e7f9e || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
          return _0x1f237b(window.marked.parse(_0x19daae));
        }
      }
    } catch (_0x5eabc5) {}
    let _0x2085bf = _0x47f251(_0x3e7f9e);
    _0x2085bf = _0x2085bf.replace(/^### (.+)$/gm, "<h3>$1</h3>");
    _0x2085bf = _0x2085bf.replace(/^## (.+)$/gm, "<h2>$1</h2>");
    _0x2085bf = _0x2085bf.replace(/^# (.+)$/gm, "<h1>$1</h1>");
    _0x2085bf = _0x2085bf.replace(/^[\*\-] (.+)$/gm, "<li>$1</li>");
    _0x2085bf = _0x2085bf.replace(/(<li>.*?<\/li>\n?)+/g, function (_0x58da3a) {
      return "<ul>" + _0x58da3a + "</ul>";
    });
    _0x2085bf = _0x2085bf.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
    _0x2085bf = _0x2085bf.replace(/`([^`]+)`/g, "<code>$1</code>");
    _0x2085bf = _0x2085bf.replace(/\n\n/g, "</p><p>");
    _0x2085bf = _0x2085bf.replace(/\n/g, "<br>\n");
    return _0x1f237b("<p>" + _0x2085bf + "</p>");
  }
  function _0x1f237b(_0x5285e8) {
    const _0x1d8d36 = String(_0x5285e8 || "");
    if (!_0x1d8d36 || !_0x1d8d36.includes("&lt;br")) {
      return _0x1d8d36;
    }
    try {
      const _0x462f86 = document.createElement("div");
      _0x462f86.innerHTML = _0x1d8d36;
      const _0x8aa4b1 = [];
      const _0x333b62 = document.createTreeWalker(_0x462f86, NodeFilter.SHOW_TEXT);
      let _0x3c0487 = _0x333b62.nextNode();
      while (_0x3c0487) {
        {
          _0x8aa4b1.push(_0x3c0487);
          _0x3c0487 = _0x333b62.nextNode();
        }
      }
      _0x8aa4b1.forEach(_0x4133b5 => {
        const _0x5c30b1 = _0x4133b5.parentElement;
        if (!_0x5c30b1) {
          return;
        }
        if (_0x5c30b1.closest("pre, code")) {
          return;
        }
        const _0x21a12c = String(_0x4133b5.nodeValue || "");
        if (!/&lt;br\s*\/?&gt;/i.test(_0x21a12c)) {
          return;
        }
        const _0x5c9847 = document.createDocumentFragment();
        const _0x32f24e = _0x21a12c.split(/(&lt;br\s*\/?&gt;)/ig);
        for (const _0x5621c8 of _0x32f24e) {
          if (!_0x5621c8) {
            continue;
          }
          if (/^&lt;br\s*\/?&gt;$/i.test(_0x5621c8)) {
            _0x5c9847.appendChild(document.createElement("br"));
          } else {
            _0x5c9847.appendChild(document.createTextNode(_0x5621c8));
          }
        }
        _0x5c30b1.replaceChild(_0x5c9847, _0x4133b5);
      });
      return _0x462f86.innerHTML;
    } catch (_0x3301c0) {
      {
        return _0x1d8d36.replace(/&lt;br\s*\/?&gt;/ig, "<br>");
      }
    }
  }
  function _0x2ce179(_0x1d9d3b) {
    const _0x3fd00a = String(_0x1d9d3b || "");
    if (!_0x3fd00a) {
      return "medium";
    }
    if (/风险(?:等级|评估)?\s*[:：]?\s*(高|high)|\bhigh\b|严重|critical|高危|real threat|confirmed vulnerability|有漏洞|存在漏洞/i.test(_0x3fd00a)) {
      return "high";
    }
    if (/风险(?:等级|评估)?\s*[:：]?\s*(中|medium)|\bmedium\b|moderate|需进一步验证|suspicious|可疑/i.test(_0x3fd00a)) {
      return "medium";
    }
    if (/风险(?:等级|评估)?\s*[:：]?\s*(低|low)|\blow\b|safe|无明显风险|likely false positive|疑似误报|无漏洞|未发现漏洞/i.test(_0x3fd00a)) {
      return "low";
    }
    return "medium";
  }
  function _0x18818a(_0x549d9e) {
    const _0x31082c = Number(_0x549d9e || Date.now());
    try {
      return new Date(_0x31082c).toLocaleString();
    } catch (_0x5628ee) {
      return String(_0x31082c);
    }
  }
  function _0x225fa6(_0x35aa09) {
    const _0x27afe5 = new Date(Number(_0x35aa09 || Date.now()));
    const _0xccba47 = _0x5cca5c => String(_0x5cca5c).padStart(2, "0");
    const _0x21adf3 = "" + _0x27afe5.getFullYear() + _0xccba47(_0x27afe5.getMonth() + 1) + _0xccba47(_0x27afe5.getDate()) + "-" + _0xccba47(_0x27afe5.getHours()) + _0xccba47(_0x27afe5.getMinutes()) + _0xccba47(_0x27afe5.getSeconds());
    const _0xe5b1f4 = Math.random().toString(36).slice(2, 6).toUpperCase();
    return "HX0-" + _0x21adf3 + "-" + _0xe5b1f4;
  }
  function _0x41925e(_0x277139) {
    const _0x47fd5d = "report_" + Date.now() + "_" + Math.random().toString(36).slice(2, 8);
    _0x4f7868.set(_0x47fd5d, _0x277139 || {});
    return _0x47fd5d;
  }
  function _0x4ff8b5(_0x4ec607) {
    return String(_0x4ec607 || "").replace(/[\\\/:*?"<>|]+/g, "-").replace(/\s+/g, "_").replace(/-+/g, "-").replace(/^[-_.]+|[-_.]+$/g, "");
  }
  function _0x2e834e(_0x4de952) {
    const _0x20db77 = _0x4de952 || {};
    const _0xe9fe39 = String(_0x20db77.lang || _0x3c9cec || "").toLowerCase().startsWith("en");
    const _0x4ccd46 = _0xe9fe39 ? "# Security Analysis Report" : "# 安全分析报告";
    const _0x1d7402 = [_0x4ccd46, "", "- Report ID: " + (_0x20db77.reportId || "-"), "- " + (_0xe9fe39 ? "Target Domain" : "目标域名") + ": " + (_0x20db77.targetDomain || "-"), "- " + (_0xe9fe39 ? "Request No" : "请求编号") + ": " + (_0x20db77.requestNo || "-"), "- " + (_0xe9fe39 ? "Generated" : "生成时间") + ": " + (_0x20db77.generatedAt || "-"), "- " + (_0xe9fe39 ? "Model" : "模型") + ": " + (_0x20db77.model || "-"), "", "---", "", String(_0x20db77.markdown || "").trim() || (_0xe9fe39 ? "(empty report)" : "(空报告)"), ""];
    return _0x1d7402.join("\n");
  }
  function _0xab897e(_0x2ff155) {
    const _0xd9035f = _0x2ff155 || {};
    const _0x2347cb = _0x2e834e(_0xd9035f);
    const _0x3ea663 = _0x4ff8b5(_0xd9035f.filePrefix || "HawkEye-Report") || "HawkEye-Report";
    const _0x2325f8 = _0x4ff8b5(_0xd9035f.reportId || _0x225fa6(Date.now())) || "report";
    const _0x351d81 = _0x3ea663 + "-" + _0x2325f8 + ".md";
    const _0x27d3e9 = new Blob([_0x2347cb], {
      type: "text/markdown; charset=utf-8"
    });
    const _0x30f09f = document.createElement("a");
    _0x30f09f.href = URL.createObjectURL(_0x27d3e9);
    _0x30f09f.download = _0x351d81;
    _0x30f09f.click();
    URL.revokeObjectURL(_0x30f09f.href);
  }
  function _0xf30b52(_0x3c7081) {
    {
      const _0x3bcbc6 = _0x3c7081 || document;
      if (!_0x3bcbc6 || !_0x3bcbc6.querySelectorAll) {
        return;
      }
      _0x3bcbc6.querySelectorAll(".ai-report-download-btn[data-download-key]").forEach(_0xf5e102 => {
        if (_0xf5e102.dataset.downloadBound === "1") {
          return;
        }
        _0xf5e102.dataset.downloadBound = "1";
        _0xf5e102.addEventListener("click", _0x5c3741 => {
          _0x5c3741.preventDefault();
          _0x5c3741.stopPropagation();
          if (!_0x3e8fd4()) {
            return;
          }
          const _0x576305 = _0xf5e102.getAttribute("data-download-key") || "";
          const _0x4472c2 = _0x4f7868.get(_0x576305);
          if (!_0x4472c2) {
            return;
          }
          _0xab897e(_0x4472c2);
        });
      });
      _0x3bcbc6.querySelectorAll(".ai-report-rerun-btn[data-report-kind][data-record-id]").forEach(_0xf3d310 => {
        if (_0xf3d310.dataset.rerunBound === "1") {
          return;
        }
        _0xf3d310.dataset.rerunBound = "1";
        _0xf3d310.addEventListener("click", _0x3b49b5 => {
          _0x3b49b5.preventDefault();
          _0x3b49b5.stopPropagation();
          if (!_0x3e8fd4()) {
            return;
          }
          const _0x4955ee = String(_0xf3d310.getAttribute("data-report-kind") || "").trim();
          const _0x41534a = String(_0xf3d310.getAttribute("data-record-id") || "").trim();
          if (!_0x41534a) {
            return;
          }
          if (_0x4955ee === "crypto") {
            const _0x42e6d9 = _0xf3d310.closest(".record-item");
            if (!_0x42e6d9) {
              return;
            }
            _0xd7c27d(_0x41534a, _0x42e6d9, {
              forcePrompt: true,
              useCache: false
            });
            return;
          }
          if (_0x4955ee === "ai") {
            const _0x593cfc = _0xf3d310.closest(".record-item");
            if (!_0x593cfc) {
              return;
            }
            _0xd0a6f6(_0x41534a, _0x593cfc, {
              forcePrompt: true,
              useCache: false
            });
            return;
          }
          if (_0x4955ee === "replay") {
            _0x2f0211(_0x41534a, {
              forceRerun: true
            });
            return;
          }
          _0x4955ee === "microfuzz" && _0x10cd4b(_0x41534a, {
            forceRerun: true,
            preserveCurrentView: true
          });
        });
      });
    }
  }
  function _0x52bf4b(_0x20cb73) {
    const _0x333614 = String(_0x20cb73 && _0x20cb73.lang || _0x3c9cec || "zh_CN");
    const _0x7eeb3c = String(_0x20cb73 && _0x20cb73.model || "").trim();
    const _0x3ed528 = String(_0x20cb73 && _0x20cb73.baseUrl || "").trim().toLowerCase();
    const _0x31f5e0 = /lmstudio|lm studio/.test(_0x3ed528) || /(^https?:\/\/)?(localhost|127\.0\.0\.1)(:\d+)?/.test(_0x3ed528);
    if (_0x31f5e0 && (!_0x7eeb3c || _0x7eeb3c === "gpt-4o-mini")) {
      {
        return _0x333614 === "en" ? "LM Studio built-in model" : "LM Studio 内置模型";
      }
    }
    return _0x7eeb3c || "-";
  }
  function _0x791874(_0x383c52) {
    const _0x10aa30 = String(_0x383c52 && _0x383c52.aiProvider || "").toLowerCase();
    if (_0x10aa30 === "local") {
      return true;
    }
    const _0x3e32b1 = String(_0x383c52 && _0x383c52.aiBaseUrl || "").trim().toLowerCase();
    if (!_0x3e32b1) {
      return false;
    }
    if (/lmstudio|lm studio/.test(_0x3e32b1)) {
      return true;
    }
    if (/(^https?:\/\/)?(localhost|127\.0\.0\.1)(:\d+)?/.test(_0x3e32b1)) {
      return true;
    }
    return false;
  }
  function _0x77a960(_0x38b65b, _0x267ab9) {
    const _0x16bb16 = String(_0x38b65b || "").trim();
    const _0x3bd8cd = _0x52bf4b(_0x267ab9);
    const _0x76437d = String(_0x267ab9 && _0x267ab9.lang || _0x3c9cec || "zh_CN");
    const _0x543bc5 = _0x267ab9 && _0x267ab9.generatedAt ? Number(_0x267ab9.generatedAt) : Date.now();
    const _0x187d4f = _0x18818a(_0x543bc5);
    const _0x11c5d2 = String(_0x267ab9 && _0x267ab9.reportId || _0x225fa6(_0x543bc5));
    const _0x582541 = String(_0x267ab9 && _0x267ab9.targetDomain || _0x558ff2(_0x267ab9 && _0x267ab9.url || "") || "-");
    const _0x5f5687 = String(_0x267ab9 && _0x267ab9.requestNo || _0x267ab9 && _0x267ab9.requestId || "-");
    const _0x428744 = _0x267ab9 && _0x267ab9.reportCoverTitle ? String(_0x267ab9.reportCoverTitle) : _0x76437d === "en" ? "AI Report" : "AI 报告";
    const _0x44dd4d = _0x76437d === "en" ? "Report ID" : "Report ID";
    const _0x296e78 = _0x76437d === "en" ? "Target Domain" : "目标域名";
    const _0x5e24e6 = _0x76437d === "en" ? "Request No" : "请求编号";
    const _0x3346a8 = _0x76437d === "en" ? "Generated" : "生成时间";
    const _0x3c3ed9 = _0x76437d === "en" ? "Model" : "模型";
    const _0x15937e = _0x76437d === "en" ? "Download" : "下载报告";
    const _0x4ff11e = _0x76437d === "en" ? "Re-analyze" : "重新分析";
    const _0x5a67bb = String(_0x267ab9 && _0x267ab9.downloadKey || _0x41925e({
      markdown: _0x16bb16,
      filePrefix: _0x267ab9 && _0x267ab9.filePrefix || "HawkEye-AI-Report",
      reportId: _0x11c5d2,
      targetDomain: _0x582541,
      requestNo: _0x5f5687,
      generatedAt: _0x187d4f,
      model: _0x3bd8cd,
      lang: _0x76437d
    }));
    const _0x3edda0 = String(_0x267ab9 && _0x267ab9.reanalyzeKind || "").trim();
    const _0x24f807 = String(_0x267ab9 && _0x267ab9.recordId || "").trim();
    const _0x26e829 = _0x3edda0 && _0x24f807 ? "<button type=\"button\" class=\"ai-report-rerun-btn\" data-report-kind=\"" + _0x47f251(_0x3edda0) + "\" data-record-id=\"" + _0x47f251(_0x24f807) + "\">" + _0x47f251(_0x4ff11e) + "</button>" : "";
    const _0x231caa = _0x1569de(_0x16bb16 || (_0x76437d === "en" ? "No content." : "暂无内容"));
    return "<div class=\"ai-report-cover\"><div class=\"ai-report-cover-left\"><div class=\"ai-report-title-row\"><span class=\"ai-report-title\">" + _0x47f251(_0x428744) + "</span></div>" + "<div class=\"ai-report-cover-meta\">" + "<span class=\"ai-cover-item\"><span class=\"k\">" + _0x47f251(_0x44dd4d) + "</span><span class=\"v\">" + _0x47f251(_0x11c5d2) + "</span></span>" + "<span class=\"ai-cover-item\"><span class=\"k\">" + _0x47f251(_0x296e78) + "</span><span class=\"v\">" + _0x47f251(_0x582541) + "</span></span>" + "<span class=\"ai-cover-item\"><span class=\"k\">" + _0x47f251(_0x5e24e6) + "</span><span class=\"v\">" + _0x47f251(_0x5f5687) + "</span></span>" + "<span class=\"ai-cover-item\"><span class=\"k\">" + _0x47f251(_0x3346a8) + "</span><span class=\"v\">" + _0x47f251(_0x187d4f) + "</span></span>" + "<span class=\"ai-cover-item\"><span class=\"k\">" + _0x47f251(_0x3c3ed9) + "</span><span class=\"v\">" + _0x47f251(_0x3bd8cd) + "</span></span>" + "</div>" + "</div>" + "<div class=\"ai-report-cover-actions\">" + _0x26e829 + "<button type=\"button\" class=\"ai-report-download-btn\" data-pro-feature=\"report_download\" data-download-key=\"" + _0x47f251(_0x5a67bb) + "\">" + _0x47f251(_0x15937e) + "</button>" + "</div>" + "</div>" + "<div class=\"ai-report-body md-rendered\">" + _0x231caa + "</div>";
  }
  function _0x3502c7(_0x1155f3) {
    const _0xe7b066 = _0x1155f3.requestHeaders || [];
    const _0x29824a = _0x1155f3.responseHeaders || [];
    const _0x954606 = _0x1e4dd9 => Array.isArray(_0x1e4dd9) ? _0x1e4dd9[0] + ": " + _0x1e4dd9[1] : (_0x1e4dd9.name || _0x1e4dd9[0]) + ": " + (_0x1e4dd9.value || _0x1e4dd9[1]);
    const _0x12809f = (_0x1155f3.method || "GET").toUpperCase();
    let _0x2133e2 = _0x1155f3.url || "";
    try {
      const _0x32221d = new URL(_0x2133e2);
      _0x2133e2 = _0x32221d.pathname + (_0x32221d.search || "");
    } catch (_0x1b282e) {}
    let _0x1a3c48 = "=== Request ===\r\n";
    _0x1a3c48 += _0x12809f + " " + _0x2133e2 + " HTTP/1.1\r\n";
    _0xe7b066.forEach(_0x1f3642 => {
      _0x1a3c48 += _0x954606(_0x1f3642) + "\r\n";
    });
    _0x1a3c48 += "\r\n";
    _0x1a3c48 += (_0x1155f3.requestBody != null ? String(_0x1155f3.requestBody) : "") + "\r\n";
    _0x1a3c48 += "\r\n=== Response ===\r\n";
    _0x1a3c48 += "HTTP/1.1 " + (_0x1155f3.statusCode || "") + " \r\n";
    _0x29824a.forEach(_0x13e48a => {
      _0x1a3c48 += _0x954606(_0x13e48a) + "\r\n";
    });
    _0x1a3c48 += "\r\n";
    _0x1a3c48 += (_0x1155f3.responseBody != null ? String(_0x1155f3.responseBody) : "") + "\r\n";
    return _0x1a3c48;
  }
  function _0x137986(_0x5b6786) {
    const _0x48940b = _0x5b6786.requestHeaders || [];
    const _0xdc5217 = _0x5b1b6c => Array.isArray(_0x5b1b6c) ? _0x5b1b6c[0] + ": " + _0x5b1b6c[1] : (_0x5b1b6c.name || _0x5b1b6c[0]) + ": " + (_0x5b1b6c.value || _0x5b1b6c[1]);
    const _0x5cf07d = (_0x5b6786.method || "GET").toUpperCase();
    let _0x3608c4 = _0x5b6786.url || "";
    try {
      {
        const _0x39de1d = new URL(_0x5b6786.url || "");
        _0x3608c4 = (_0x39de1d.pathname || "/") + (_0x39de1d.search || "");
      }
    } catch (_0xa481c0) {}
    const _0x147a3f = _0x5b6786.requestBody != null ? _0x4aa6b6(_0x5b6786.requestBody) : "";
    const _0x1b7453 = _0x168ab5(_0x48940b, _0x147a3f);
    let _0x210c15 = _0x5cf07d + " " + _0x3608c4 + " HTTP/1.1\n";
    _0x1b7453.forEach(_0x14d4a0 => {
      {
        _0x210c15 += _0xdc5217(_0x14d4a0) + "\n";
      }
    });
    _0x210c15 += "\n";
    _0x210c15 += _0x147a3f;
    return _0x210c15;
  }
  function _0x65db10(_0x1dae3d) {
    {
      return {
        url: _0x1dae3d && _0x1dae3d.url ? String(_0x1dae3d.url) : "",
        sourceUrl: _0x1dae3d && _0x1dae3d.url ? String(_0x1dae3d.url) : "",
        sourceRecordId: _0x1dae3d && _0x1dae3d.id != null ? String(_0x1dae3d.id) : "",
        sourceTabId: _0x1dae3d && _0x1dae3d.tabId != null ? _0x1dae3d.tabId : null,
        sourceTimestamp: _0x1dae3d && _0x1dae3d.timestamp != null ? Number(_0x1dae3d.timestamp) : 0
      };
    }
  }
  function _0x503576(_0xe64164, _0xa5db4f) {
    {
      const _0x3e61c4 = _0xe64164 && typeof _0xe64164 === "object" ? _0xe64164 : {};
      const _0xc8b612 = {
        url: String(_0x3e61c4.url || _0x3e61c4.sourceUrl || ""),
        sourceUrl: String(_0x3e61c4.sourceUrl || _0x3e61c4.url || ""),
        sourceRecordId: _0x3e61c4.sourceRecordId ? String(_0x3e61c4.sourceRecordId) : "",
        sourceTabId: _0x3e61c4.sourceTabId != null ? _0x3e61c4.sourceTabId : null,
        sourceTimestamp: _0x3e61c4.sourceTimestamp != null ? Number(_0x3e61c4.sourceTimestamp) || 0 : 0
      };
      return Object.assign(_0xc8b612, _0xa5db4f || {});
    }
  }
  function _0x7cd5d6(_0x23a976) {
    {
      if (!_0x23a976 || !_0x23a976.length) {
        return "";
      }
      const _0x4c08df = _0x23a976.find(_0x91ca1d => String(_0x91ca1d.name || _0x91ca1d[0] || "").toLowerCase() === "content-type");
      return _0x4c08df ? String(_0x4c08df.value || _0x4c08df[1] || "").trim() : "";
    }
  }
  function _0x1b6b0a(_0x21322c, _0x1fd39b) {
    if (!_0x21322c || !_0x21322c.length) {
      return "";
    }
    const _0x5632bd = String(_0x1fd39b || "").toLowerCase();
    const _0x1779d6 = _0x21322c.find(_0x249119 => String(_0x249119.name || _0x249119[0] || "").toLowerCase() === _0x5632bd);
    return _0x1779d6 ? String(_0x1779d6.value || _0x1779d6[1] || "").trim() : "";
  }
  function _0x24e589(_0x5641c9) {
    const _0x8e4d26 = _0x5641c9.responseHeaders || [];
    const _0x317a90 = _0x379e21 => Array.isArray(_0x379e21) ? _0x379e21[0] + ": " + _0x379e21[1] : (_0x379e21.name || _0x379e21[0]) + ": " + (_0x379e21.value || _0x379e21[1]);
    const _0x27578e = _0x5641c9.statusCode != null ? String(_0x5641c9.statusCode) : "";
    const _0x13e3b4 = _0x2761b7(_0x27578e);
    const _0x1294e0 = parseInt(_0x27578e, 10);
    let _0x28203c = "HTTP/1.1 " + _0x27578e + (_0x13e3b4 ? " " + _0x13e3b4 : "") + "\n";
    _0x8e4d26.forEach(_0x21b872 => {
      {
        _0x28203c += _0x317a90(_0x21b872) + "\n";
      }
    });
    _0x28203c += "\n";
    const _0x443481 = _0x4aa6b6(_0x5641c9.responseBody);
    if (_0x443481.length > 0) {
      _0x28203c += _0x443481;
    } else {
      const _0x5dafe2 = _0x7cd5d6(_0x8e4d26).toLowerCase();
      const _0x4749a8 = !!_0x1b6b0a(_0x8e4d26, "location");
      const _0x20c38a = Number.isFinite(_0x1294e0) && _0x1294e0 >= 300 && _0x1294e0 < 400 && _0x4749a8;
      if (_0x5dafe2.includes("text/html") || _0x5dafe2.includes("application/xhtml")) {
        {
          const _0x3565ef = String(_0x5641c9.channelType || "");
          if (_0x20c38a) {
            _0x28203c += (typeof _0x850dc === "function" ? _0x850dc("responseBodyRedirectUnavailableHint") : "") || "[该响应是重定向响应（如 301/302/303/307/308）。Chrome 对这类导航跳转返回的短 HTML 正文经常无法通过 webRequest/CDP 暴露；通常请查看随后那条跳转后的页面响应。]";
          } else {
            if (_0x3565ef === "network_passive") {
              _0x28203c += (typeof _0x850dc === "function" ? _0x850dc("responseBodyNetworkPassiveEmptyHint") : "") || "[响应体未能通过 CDP 获取。可刷新本页后重新捕获，或使用「拦截」模式重放以获取正文。]";
            } else {
              _0x3565ef === "debugger" ? _0x28203c += (typeof _0x850dc === "function" ? _0x850dc("responseBodyDebuggerEmptyHint") : "") || "[响应体未能通过 Chrome Fetch/CDP 读取。若该包是重定向、204/304、HEAD，或主文档导航过程中的特殊响应，这是 Chrome 内核常见限制。]" : _0x28203c += (typeof _0x850dc === "function" ? _0x850dc("responseBodyNotCapturedHint") : "") || "[响应体未捕获。普通抓包下 HTML 可能需二次请求正文，且内网/自签名 HTTPS 常会失败。请尝试开启「拦截」模式，或在基础设置中开启「内网/自签名 HTTPS 响应体（被动监听）」后刷新页面重新抓包。]";
            }
          }
        }
      }
    }
    return _0x28203c;
  }
  const _0x48e800 = 49152;
  function _0x8a7421(_0x4034b9, _0x459460) {
    let _0x4ddcdc = "";
    const _0x5d5cec = _0x4034b9 || [];
    const _0x36a306 = Math.min(_0x5d5cec.length, _0x459460 || 40);
    for (let _0x3f2127 = 0; _0x3f2127 < _0x36a306; _0x3f2127++) {
      const _0x36bb02 = _0x5d5cec[_0x3f2127];
      const _0x544a60 = Array.isArray(_0x36bb02) ? _0x36bb02[0] : _0x36bb02.name || _0x36bb02[0];
      const _0x4607b8 = Array.isArray(_0x36bb02) ? _0x36bb02[1] : _0x36bb02.value || _0x36bb02[1];
      _0x4ddcdc += String(_0x544a60 || "") + ": " + String(_0x4607b8 || "").slice(0, 512) + "\n";
    }
    return _0x4ddcdc;
  }
  function _0x23779c(_0x3727ba) {
    if (!_0x3727ba) {
      return "";
    }
    const _0x2cae30 = _0x48e800;
    const _0x382b9e = String(_0x3727ba.url || "");
    const _0x5dd6b8 = String(_0x3727ba.method || "");
    const _0x36dea9 = _0x8a7421(_0x3727ba.requestHeaders, 40);
    const _0x5974eb = _0x8a7421(_0x3727ba.responseHeaders, 40);
    const _0x425679 = _0x3727ba.requestBody != null ? String(_0x3727ba.requestBody) : "";
    const _0x20ac57 = _0x3727ba.responseBody != null ? String(_0x3727ba.responseBody) : "";
    const _0x2655e1 = _0x425679.length > _0x2cae30 ? _0x425679.slice(0, _0x2cae30) : _0x425679;
    const _0x1621c8 = _0x20ac57.length > _0x2cae30 ? _0x20ac57.slice(0, _0x2cae30) : _0x20ac57;
    return (_0x382b9e + "\n" + _0x5dd6b8 + "\n" + _0x36dea9 + "\n" + _0x2655e1 + "\n" + _0x5974eb + "\n" + _0x1621c8).toLowerCase();
  }
  function _0xec256b(_0x56f356) {
    if (_0x110290) {
      return (String(_0x56f356.url || "") + "\n" + String(_0x56f356.method || "") + "\n" + _0x137986(_0x56f356) + "\n" + _0x24e589(_0x56f356)).toLowerCase();
    }
    return _0x23779c(_0x56f356);
  }
  function _0xbc6e93(_0xf76952) {
    if (!_0xf76952 || !_0xf76952.ok) {
      return "";
    }
    const _0x17e663 = _0xf76952.status != null ? String(_0xf76952.status) : "";
    const _0x1714b3 = _0x2761b7(_0x17e663);
    let _0xe3a048 = "HTTP/1.1 " + _0x17e663 + (_0x1714b3 ? " " + _0x1714b3 : "") + "\n";
    const _0x38fec2 = _0xf76952.headers && typeof _0xf76952.headers === "object" ? _0xf76952.headers : {};
    Object.keys(_0x38fec2).forEach(_0x4f7f19 => {
      _0xe3a048 += _0x4f7f19 + ": " + _0x38fec2[_0x4f7f19] + "\n";
    });
    _0xf76952.methodAutoFixed && (_0xe3a048 += "X-Hx0-Method-Auto-Fixed: POST\n");
    _0xe3a048 += "\n";
    _0xe3a048 += String(_0xf76952.body || "");
    return _0xe3a048;
  }
  function _0x4821f9(_0x124b44, _0x16a110, _0x5f3d19, _0x49d415) {
    if (!_0x124b44 || !_0x16a110 || !_0x5f3d19) {
      return null;
    }
    const _0xece899 = _0x49d415 && _0x49d415.minW != null ? _0x49d415.minW : 400;
    const _0x148c9b = _0x49d415 && _0x49d415.minH != null ? _0x49d415.minH : 320;
    _0x124b44.classList.add("ee-modal-overlay-free");
    _0x16a110.classList.add("ee-modal-card-free");
    function _0x20cecb(_0x1e78da) {
      const _0x5a5c56 = 8;
      const _0x43e5aa = Math.max(_0xece899, window.innerWidth - _0x5a5c56 * 2);
      const _0x3923ad = Math.max(_0x148c9b, window.innerHeight - _0x5a5c56 * 2);
      let {
        left: _0x1a62a4,
        top: _0x3d8f08,
        width: _0x2ac6d7,
        height: _0xf23fef
      } = _0x1e78da;
      _0x2ac6d7 = Math.max(_0xece899, Math.min(_0x2ac6d7, _0x43e5aa));
      _0xf23fef = Math.max(_0x148c9b, Math.min(_0xf23fef, _0x3923ad));
      const _0x3ecf5c = 72;
      _0x1a62a4 = Math.min(Math.max(_0x5a5c56, _0x1a62a4), window.innerWidth - _0x3ecf5c);
      _0x3d8f08 = Math.min(Math.max(_0x5a5c56, _0x3d8f08), window.innerHeight - _0x3ecf5c);
      return {
        left: _0x1a62a4,
        top: _0x3d8f08,
        width: _0x2ac6d7,
        height: _0xf23fef
      };
    }
    function _0x3d51a3() {
      {
        const _0x259885 = 8;
        const _0x426aa2 = Math.max(_0xece899, window.innerWidth - _0x259885 * 2);
        const _0x150702 = Math.max(_0x148c9b, window.innerHeight - _0x259885 * 2);
        const _0x58f21b = _0x259885 + (window.innerWidth - _0x426aa2 - _0x259885 * 2) / 2;
        const _0x314996 = _0x259885 + (window.innerHeight - _0x150702 - _0x259885 * 2) / 2;
        return _0x20cecb({
          left: _0x58f21b,
          top: _0x314996,
          width: _0x426aa2,
          height: _0x150702
        });
      }
    }
    let _0xf0e03f = null;
    let _0x3b290c = null;
    function _0x2a3865() {
      {
        const _0x4b4e28 = 8;
        _0xf0e03f = Math.max(_0xece899, window.innerWidth - _0x4b4e28 * 2);
        _0x3b290c = Math.max(_0x148c9b, window.innerHeight - _0x4b4e28 * 2);
      }
    }
    function _0x4df13f(_0x41c26d) {
      const _0x2e2a88 = _0x20cecb(_0x41c26d);
      _0x16a110.style.left = Math.round(_0x2e2a88.left) + "px";
      _0x16a110.style.top = Math.round(_0x2e2a88.top) + "px";
      _0x16a110.style.width = Math.round(_0x2e2a88.width) + "px";
      _0x16a110.style.height = Math.round(_0x2e2a88.height) + "px";
      return _0x2e2a88;
    }
    function _0x4aee7a() {
      const _0x5de974 = _0x20cecb({
        left: parseFloat(_0x16a110.style.left) || 0,
        top: parseFloat(_0x16a110.style.top) || 0,
        width: parseFloat(_0x16a110.style.width) || _0xece899,
        height: parseFloat(_0x16a110.style.height) || _0x148c9b
      });
      try {
        _0x4b6be4.storage.local.set({
          [_0x5f3d19]: _0x5de974
        });
      } catch (_0x47baf5) {}
    }
    _0x4df13f(_0x3d51a3());
    _0x2a3865();
    try {
      _0x4b6be4.storage.local.get([_0x5f3d19], _0x25a6c8 => {
        const _0x5cca4b = _0x25a6c8 && _0x25a6c8[_0x5f3d19];
        _0x5cca4b && typeof _0x5cca4b === "object" && Number.isFinite(Number(_0x5cca4b.width)) && Number.isFinite(Number(_0x5cca4b.height)) && _0x4df13f({
          left: Number(_0x5cca4b.left) || 0,
          top: Number(_0x5cca4b.top) || 0,
          width: Number(_0x5cca4b.width),
          height: Number(_0x5cca4b.height)
        });
        _0x2a3865();
      });
    } catch (_0x547aa1) {}
    let _0x5e61a4 = null;
    function _0x3c511f(_0x4a1313) {
      if (!_0x5e61a4) {
        return;
      }
      if (_0x5e61a4.type === "drag") {
        const _0x576e9d = _0x4a1313.clientX - _0x5e61a4.startX;
        const _0x11a054 = _0x4a1313.clientY - _0x5e61a4.startY;
        _0x4df13f({
          left: _0x5e61a4.origLeft + _0x576e9d,
          top: _0x5e61a4.origTop + _0x11a054,
          width: _0x5e61a4.origW,
          height: _0x5e61a4.origH
        });
      } else {
        if (_0x5e61a4.type === "resize") {
          const _0x74fca8 = _0x4a1313.clientX - _0x5e61a4.startX;
          const _0x2c3bf8 = _0x4a1313.clientY - _0x5e61a4.startY;
          const _0xeab346 = _0x5e61a4.dir;
          let _0x24ad88 = _0x5e61a4.origLeft;
          let _0x20da6a = _0x5e61a4.origTop;
          let _0x3d04ae = _0x5e61a4.origW;
          let _0x3d913d = _0x5e61a4.origH;
          if (_0xeab346.indexOf("e") >= 0) {
            _0x3d04ae = _0x5e61a4.origW + _0x74fca8;
          }
          _0xeab346.indexOf("w") >= 0 && (_0x3d04ae = _0x5e61a4.origW - _0x74fca8, _0x24ad88 = _0x5e61a4.origLeft + _0x74fca8);
          if (_0xeab346.indexOf("s") >= 0) {
            _0x3d913d = _0x5e61a4.origH + _0x2c3bf8;
          }
          _0xeab346.indexOf("n") >= 0 && (_0x3d913d = _0x5e61a4.origH - _0x2c3bf8, _0x20da6a = _0x5e61a4.origTop + _0x2c3bf8);
          _0x4df13f({
            left: _0x24ad88,
            top: _0x20da6a,
            width: _0x3d04ae,
            height: _0x3d913d
          });
        }
      }
    }
    function _0xfe2590(_0x1a6ca1) {
      if (!_0x5e61a4) {
        return;
      }
      try {
        if (_0x5e61a4.captureEl) {
          _0x5e61a4.captureEl.releasePointerCapture(_0x1a6ca1.pointerId);
        }
      } catch (_0x167e7c) {}
      _0x5e61a4 = null;
      document.body.classList.remove("ee-modal-interacting");
      _0x4aee7a();
      document.removeEventListener("pointermove", _0x3c511f);
      document.removeEventListener("pointerup", _0xfe2590);
      document.removeEventListener("pointercancel", _0xfe2590);
    }
    const _0x31d26c = _0x16a110.querySelector(".replay-toolbar-title");
    _0x31d26c && (_0x31d26c.classList.add("ee-modal-drag-handle"), _0x31d26c.addEventListener("pointerdown", _0x3b1035 => {
      if (_0x3b1035.button !== 0) {
        return;
      }
      if (_0x3b1035.target.closest && _0x3b1035.target.closest("button, input, select, textarea, a")) {
        return;
      }
      if (_0x5e61a4) {
        return;
      }
      _0x3b1035.preventDefault();
      const _0x3065f2 = _0x16a110.getBoundingClientRect();
      const _0xe8af2e = _0x124b44.getBoundingClientRect();
      _0x5e61a4 = {
        type: "drag",
        startX: _0x3b1035.clientX,
        startY: _0x3b1035.clientY,
        origLeft: _0x3065f2.left - _0xe8af2e.left,
        origTop: _0x3065f2.top - _0xe8af2e.top,
        origW: _0x3065f2.width,
        origH: _0x3065f2.height,
        captureEl: _0x31d26c
      };
      try {
        _0x31d26c.setPointerCapture(_0x3b1035.pointerId);
      } catch (_0x27cb9f) {}
      document.body.classList.add("ee-modal-interacting");
      document.addEventListener("pointermove", _0x3c511f);
      document.addEventListener("pointerup", _0xfe2590);
      document.addEventListener("pointercancel", _0xfe2590);
    }));
    ["n", "s", "e", "w", "ne", "nw", "se", "sw"].forEach(_0x2d2dd5 => {
      const _0x2f0807 = document.createElement("div");
      _0x2f0807.className = "ee-modal-resize ee-modal-resize--" + _0x2d2dd5;
      _0x2f0807.dataset.dir = _0x2d2dd5;
      _0x2f0807.setAttribute("aria-hidden", "true");
      _0x16a110.appendChild(_0x2f0807);
      _0x2f0807.addEventListener("pointerdown", _0x1ebe2b => {
        if (_0x1ebe2b.button !== 0) {
          return;
        }
        if (_0x5e61a4) {
          return;
        }
        _0x1ebe2b.preventDefault();
        _0x1ebe2b.stopPropagation();
        const _0x1e9ba4 = _0x16a110.getBoundingClientRect();
        const _0x25c1cb = _0x124b44.getBoundingClientRect();
        _0x5e61a4 = {
          type: "resize",
          dir: _0x2d2dd5,
          startX: _0x1ebe2b.clientX,
          startY: _0x1ebe2b.clientY,
          origLeft: _0x1e9ba4.left - _0x25c1cb.left,
          origTop: _0x1e9ba4.top - _0x25c1cb.top,
          origW: _0x1e9ba4.width,
          origH: _0x1e9ba4.height,
          captureEl: _0x2f0807
        };
        try {
          _0x2f0807.setPointerCapture(_0x1ebe2b.pointerId);
        } catch (_0x5b9302) {}
        document.body.classList.add("ee-modal-interacting");
        document.addEventListener("pointermove", _0x3c511f);
        document.addEventListener("pointerup", _0xfe2590);
        document.addEventListener("pointercancel", _0xfe2590);
      });
    });
    let _0x1be92b = null;
    let _0x4772cf = null;
    function _0x1ed496() {
      const _0x3eb7cc = 8;
      const _0x1071b2 = Math.max(_0xece899, window.innerWidth - _0x3eb7cc * 2);
      const _0x30acb7 = Math.max(_0x148c9b, window.innerHeight - _0x3eb7cc * 2);
      let _0xe07ca3 = parseFloat(_0x16a110.style.left) || 0;
      let _0xde85a4 = parseFloat(_0x16a110.style.top) || 0;
      let _0x3bea35 = parseFloat(_0x16a110.style.width) || _0xece899;
      let _0x4df5cb = parseFloat(_0x16a110.style.height) || _0x148c9b;
      if (_0xf0e03f != null && _0x3b290c != null) {
        {
          const _0x3869c2 = _0x1071b2 - _0xf0e03f;
          const _0x2d9334 = _0x30acb7 - _0x3b290c;
          if (_0x3869c2 !== 0) {
            _0x3bea35 = Math.min(_0x1071b2, Math.max(_0xece899, _0x3bea35 + _0x3869c2));
          }
          if (_0x2d9334 !== 0) {
            _0x4df5cb = Math.min(_0x30acb7, Math.max(_0x148c9b, _0x4df5cb + _0x2d9334));
          }
        }
      }
      _0xf0e03f = _0x1071b2;
      _0x3b290c = _0x30acb7;
      _0x4df13f({
        left: _0xe07ca3,
        top: _0xde85a4,
        width: _0x3bea35,
        height: _0x4df5cb
      });
      if (_0x1be92b) {
        clearTimeout(_0x1be92b);
      }
      _0x1be92b = setTimeout(() => {
        _0x1be92b = null;
        _0x4aee7a();
      }, 280);
    }
    function _0x31ca59() {
      if (_0x4772cf != null) {
        return;
      }
      _0x4772cf = requestAnimationFrame(() => {
        _0x4772cf = null;
        _0x1ed496();
      });
    }
    window.addEventListener("resize", _0x31ca59);
    try {
      if (typeof ResizeObserver !== "undefined" && document.documentElement) {
        {
          const _0x13f572 = new ResizeObserver(() => {
            _0x31ca59();
          });
          _0x13f572.observe(document.documentElement);
        }
      }
    } catch (_0x548dd2) {}
    return {
      resetToMaxCentered() {
        {
          _0x4df13f(_0x3d51a3());
          _0x2a3865();
        }
      }
    };
  }
  function _0x347a72() {
    {
      if (!_0x1898fa) {
        return;
      }
      _0x1898fa.classList.add("hidden");
      if (_0x52bd48) {
        _0x52bd48.querySelectorAll("button").forEach(_0x39a77c => _0x39a77c.classList.toggle("active", _0x39a77c.getAttribute("data-view") === _0x3a0472));
      }
    }
  }
  function _0x4f7e80(_0xd3604) {
    try {
      {
        const _0x4a5c8f = new URL(String(_0xd3604 || ""));
        return _0x4a5c8f.origin;
      }
    } catch (_0xe28a55) {
      {
        return "";
      }
    }
  }
  function _0x20df35({
    host: _0x3dbb27,
    port: _0x33dfbc,
    https: _0x4a99c9
  }) {
    const _0x4cf8da = String(_0x3dbb27 || "").trim();
    if (!_0x4cf8da) {
      return "";
    }
    const _0x208f7c = String(_0x33dfbc || "").trim();
    const _0x2aa0df = _0x4a99c9 ? "https" : "http";
    const _0x434c03 = _0x208f7c && /^\d+$/.test(_0x208f7c) && !(_0x4a99c9 && _0x208f7c === "443" || !_0x4a99c9 && _0x208f7c === "80");
    return _0x2aa0df + "://" + _0x4cf8da + (_0x434c03 ? ":" + _0x208f7c : "");
  }
  function _0x556b16(_0xcaac44) {
    try {
      const _0x35e9c5 = new URL(String(_0xcaac44 || ""));
      return {
        host: _0x35e9c5.hostname,
        port: _0x35e9c5.port || (_0x35e9c5.protocol === "https:" ? "443" : "80"),
        https: _0x35e9c5.protocol === "https:"
      };
    } catch (_0xa13328) {
      return {
        host: "",
        port: "443",
        https: true
      };
    }
  }
  function _0x4bb03d(_0x3a6939) {
    if (!_0x144e2e || !_0x4dfdbb) {
      return;
    }
    const _0x32891b = String(_0x3a6939 || "").trim();
    _0x144e2e.textContent = (_0x850dc("targetLabel") || "Target") + ": " + (_0x32891b || "-");
    _0x4dfdbb.title = _0x32891b || "";
  }
  function _0x2ec227() {
    {
      const _0x344145 = _0x33d5a5 && _0x158eac ? _0x33d5a5.find(_0x25c089 => _0x25c089.id === _0x158eac) : null;
      if (_0x344145 && _0x344145.targetOriginOverride) {
        return String(_0x344145.targetOriginOverride);
      }
      const _0x51198f = _0x4f7e80(_0x4ddb66);
      return _0x51198f || "";
    }
  }
  function _0x145f0a(_0xb64b4a, _0x545005) {
    {
      const _0xf625cc = String(_0x545005 || "").trim();
      if (!_0xf625cc) {
        return _0xb64b4a;
      }
      try {
        const _0x5adb53 = new URL(_0xb64b4a.url);
        const _0x2374d8 = new URL(_0xf625cc);
        _0x5adb53.protocol = _0x2374d8.protocol;
        _0x5adb53.hostname = _0x2374d8.hostname;
        _0x5adb53.port = _0x2374d8.port;
        _0xb64b4a.url = _0x5adb53.toString();
      } catch (_0x1ce85f) {
        {
          try {
            const _0x4d7366 = new URL(String(_0xb64b4a.url || ""), _0xf625cc);
            _0xb64b4a.url = _0x4d7366.toString();
          } catch (_0x3f484a) {}
        }
      }
      try {
        const _0x198c2a = new URL(_0xb64b4a.url);
        const _0x1ae2d8 = _0x198c2a.host;
        _0xb64b4a.headers = _0xb64b4a.headers || {};
        _0xb64b4a.headers.Host = _0x1ae2d8;
        _0xb64b4a.headers.host = _0x1ae2d8;
      } catch (_0x50ec7a) {}
      return _0xb64b4a;
    }
  }
  function _0x6d2f22(_0x5a7b94) {
    const _0x4b7e84 = _0x33d5a5.find(_0x4f7b58 => _0x4f7b58.id === _0x5a7b94);
    if (!_0x4b7e84) {
      return;
    }
    _0x158eac = _0x5a7b94;
    if (typeof _0x6a3eb1 === "function" && _0x6a3eb1(_0x4b7e84)) {
      const _0x17da27 = String(_0x4b7e84.requestRaw || "");
      if (_0x17da27) {
        const _0xaecd68 = _0x2945de(_0x17da27);
        if (_0xaecd68 !== _0x17da27) {
          _0x4b7e84.requestRaw = _0xaecd68;
        }
      }
    }
    _0x9fe1e1(_0x1073d3, _0x4b7e84.requestRaw || "");
    _0x9fe1e1(_0x39c18b, _0x4b7e84.responseRaw || "");
    const _0x47f177 = _0x1073d3.dataset.viewMode || _0x1504f6();
    const _0x166f55 = _0x39c18b.dataset.viewMode || "pretty";
    _0x50f57b(_0x1898fa && _0x1898fa.querySelector(".replay-req-toggle"), _0x47f177);
    _0x50f57b(_0x1898fa && _0x1898fa.querySelector(".replay-resp-toggle"), _0x166f55);
    _0x5d3ef2(_0x1073d3, _0x47f177, false);
    _0x5d3ef2(_0x39c18b, _0x166f55, false);
    if (_0xfcb094) {
      _0xfcb094.textContent = _0x4b7e84.statusText || "-";
    }
    if (_0x47f045) {
      const _0x160518 = !!(_0x4b7e84.responseRaw && String(_0x4b7e84.responseRaw).trim());
      _0x47f045.textContent = _0x160518 ? _0x850dc("replayDone") || "Done" : _0x850dc("replayReady") || "Ready";
    }
    if (_0x563c89) {
      const _0x1877af = _0x4b7e84.responseSizeBytes != null ? _0x4b7e84.responseSizeBytes : _0x4b7e84.responseRaw ? new TextEncoder().encode(String(_0x4b7e84.responseRaw)).length : 0;
      const _0x162423 = _0x4b7e84.responseDurationMs;
      const _0x4e71f7 = _0x47bf5c(_0x1877af);
      const _0x4cf5a2 = _0x35366a(_0x162423);
      _0x563c89.textContent = _0x4e71f7 + " | " + _0x4cf5a2;
    }
    _0x4f1326();
    const _0x3fd930 = document.getElementById("replayReqSearchInput");
    const _0x432170 = document.getElementById("replayReqSearchCount");
    const _0x89df4b = document.getElementById("replayRespSearchInput");
    const _0x2e7ebd = document.getElementById("replayRespSearchCount");
    if (_0x1073d3 && _0x3fd930 && _0x432170) {
      _0x25fc83(_0x1073d3, _0x3fd930, _0x432170);
    }
    if (_0x39c18b && _0x89df4b && _0x2e7ebd) {
      _0x25fc83(_0x39c18b, _0x89df4b, _0x2e7ebd);
    }
    _0x4bb03d(_0x2ec227());
    _0x8c4bee();
    if (!_0x565b91.has(_0x5a7b94)) {
      _0x565b91.set(_0x5a7b94, []);
    }
    if (!_0x4387a7.has(_0x5a7b94)) {
      _0x4387a7.set(_0x5a7b94, []);
    }
    _0x122ddd.set(_0x5a7b94, String(_0x4b7e84.requestRaw || ""));
    _0xfcba4c();
  }
  function _0x2f0211(_0x1f09c5, _0x1a6fcc) {
    const _0xc7f8a5 = String(_0x1f09c5 || _0x158eac || "");
    const _0x1a38a0 = _0x33d5a5 && _0xc7f8a5 ? _0x33d5a5.find(_0x1b6bfa => _0x1b6bfa.id === _0xc7f8a5) : null;
    if (!_0x1a38a0) {
      return;
    }
    const _0x495cd5 = !!(_0x1a38a0.aiCaseType || _0x1a38a0.aiCaseDesc);
    const _0x52cbf9 = !!(_0x1a38a0.requestRaw && String(_0x1a38a0.requestRaw).trim());
    const _0x49073d = !!(_0x1a38a0.responseRaw && String(_0x1a38a0.responseRaw).trim());
    if (!_0x52cbf9 && !_0x49073d) {
      return;
    }
    const _0x293584 = _0x850dc("analyzing");
    const _0x2d0a48 = String(_0x1a38a0.aiJudgeResultText || "").trim();
    const _0x1c7eda = !!(_0x1a6fcc && _0x1a6fcc.forceRerun);
    if (!_0x1c7eda && _0x2d0a48 && _0x2d0a48 !== _0x293584 && _0x2d0a48 !== "分析中..." && _0x2d0a48 !== "分析中…") {
      return;
    }
    _0x1a38a0.aiJudgeResultText = _0x293584;
    _0x39c18b && String(_0x158eac || "") === String(_0x1a38a0.id || "") && (_0x39c18b.dataset.viewMode || "pretty") === "ai" && _0x5d3ef2(_0x39c18b, "ai", false);
    _0x4b6be4.runtime.sendMessage({
      type: "GET_SETTINGS",
      keys: ["aiProvider", "aiBaseUrl", "aiApiKey", "aiModel", "language"]
    }, _0x2cb10f => {
      {
        const _0x4a453b = _0x2cb10f && _0x2cb10f.language || (_0x4b6be4.i18n && _0x4b6be4.i18n.getUILanguage ? _0x4b6be4.i18n.getUILanguage() : "") || "zh_CN";
        const _0x3d4154 = {
          baseUrl: _0x2cb10f && _0x2cb10f.aiBaseUrl || "https://api.openai.com",
          apiKey: _0x2cb10f && _0x2cb10f.aiApiKey || "",
          model: _0x2cb10f && _0x2cb10f.aiModel || "gpt-4o-mini",
          language: _0x4a453b,
          systemPrompt: _0x495cd5 ? _0x850dc("replayAiJudgeSystemCase") : _0x850dc("replayAiJudgeSystemGeneral")
        };
        const _0x5dfd23 = _0x495cd5 ? _0x850dc("replayAiJudgeLabelCaseType") + "\n" + String(_0x1a38a0.aiCaseType || "-") + "\n" + _0x850dc("replayAiJudgeLabelCaseDesc") + "\n" + String(_0x1a38a0.aiCaseDesc || "-") + "\n\n" + _0x850dc("replayAiJudgeLabelRequest") + "\n" + String(_0x1a38a0.requestRaw || "").slice(0, 180000) + "\n\n" + _0x850dc("replayAiJudgeLabelResponse") + "\n" + String(_0x1a38a0.responseRaw || "").slice(0, 180000) : _0x850dc("replayAiJudgePromptGeneralLead") + "\n\n" + _0x850dc("replayAiJudgeLabelRequest") + "\n" + String(_0x1a38a0.requestRaw || "").slice(0, 180000) + "\n\n" + (_0x49073d ? _0x850dc("replayAiJudgeLabelResponse") + "\n" + String(_0x1a38a0.responseRaw || "").slice(0, 180000) : _0x850dc("replayAiJudgeNoResponse"));
        _0x4b6be4.runtime.sendMessage({
          type: "AI_ANALYZE",
          task: _0x495cd5 ? "replay_case_review" : "replay_review",
          prompt: _0x5dfd23,
          config: _0x3d4154,
          memoryUrl: _0x1a38a0.url || _0x4ddb66 || "",
          memoryHost: _0x558ff2(_0x1a38a0.url || _0x4ddb66 || "")
        }, _0x5cd745 => {
          const _0xd96513 = _0x33d5a5 && _0x158eac ? _0x33d5a5.find(_0x3ef71e => _0x3ef71e.id === _0x158eac) : null;
          if (_0x5cd745 && _0x5cd745.ok) {
            const _0x5d101d = Date.now();
            _0x1a38a0.aiJudgeResultText = String(_0x5cd745.content || "").trim() || _0x850dc("microFuzzAiEmpty") || "(empty result)";
            _0x1a38a0.aiMeta = {
              model: _0x3d4154.model,
              baseUrl: _0x3d4154.baseUrl,
              generatedAt: _0x5d101d,
              lang: _0x4a453b,
              reportId: _0x225fa6(_0x5d101d),
              targetDomain: _0x558ff2(_0x1a38a0.url || _0x4ddb66 || ""),
              requestNo: _0x1a38a0.id || _0x158eac || "-",
              url: _0x1a38a0.url || _0x4ddb66 || "",
              filePrefix: _0x495cd5 ? "HawkEye-Replay-AICase-Report" : "HawkEye-Replay-AI-Report",
              reanalyzeKind: "replay",
              recordId: String(_0x1a38a0.id || _0x158eac || "")
            };
          } else {
            _0x1a38a0.aiJudgeResultText = (_0x850dc("microFuzzAiFailedPrefix") || "AI analysis failed: ") + String(_0x5cd745 && _0x5cd745.error || _0x850dc("unknownError") || "Unknown error");
          }
          _0xd96513 && _0xd96513.id === _0x1a38a0.id && _0x39c18b && (_0x39c18b.dataset.viewMode || "pretty") === "ai" && _0x5d3ef2(_0x39c18b, "ai", false);
        });
      }
    });
  }
  function _0xfcba4c() {
    const _0x1aff15 = _0x158eac || "";
    const _0x4c77b5 = _0x565b91.get(_0x1aff15) || [];
    const _0x3bea7a = _0x4387a7.get(_0x1aff15) || [];
    if (_0x487a10) {
      _0x487a10.disabled = _0x4c77b5.length === 0;
    }
    if (_0x311d1c) {
      _0x311d1c.disabled = _0x3bea7a.length === 0;
    }
  }
  function _0x381ebc(_0x4fe304, {
    immediate: _0x56d70d
  } = {}) {
    {
      const _0x5a0b2e = _0x158eac || "";
      if (!_0x5a0b2e) {
        return;
      }
      if (!_0x565b91.has(_0x5a0b2e)) {
        _0x565b91.set(_0x5a0b2e, []);
      }
      if (!_0x4387a7.has(_0x5a0b2e)) {
        _0x4387a7.set(_0x5a0b2e, []);
      }
      const _0x30d783 = () => {
        const _0x45ae91 = _0x122ddd.has(_0x5a0b2e) ? String(_0x122ddd.get(_0x5a0b2e) || "") : "";
        const _0x410c94 = String(_0x4fe304 || "");
        if (_0x410c94 === _0x45ae91) {
          return;
        }
        _0x565b91.get(_0x5a0b2e).push(_0x45ae91);
        _0x4387a7.set(_0x5a0b2e, []);
        _0x122ddd.set(_0x5a0b2e, _0x410c94);
        _0xfcba4c();
      };
      if (_0x56d70d) {
        {
          _0x30d783();
          return;
        }
      }
      const _0x5964b4 = _0x41a1da.get(_0x5a0b2e);
      if (_0x5964b4) {
        clearTimeout(_0x5964b4);
      }
      const _0xf67ad1 = setTimeout(() => {
        _0x41a1da.delete(_0x5a0b2e);
        _0x30d783();
      }, 220);
      _0x41a1da.set(_0x5a0b2e, _0xf67ad1);
    }
  }
  function _0x33da0b(_0x3e44f2) {
    if (!_0x1073d3) {
      return;
    }
    const _0x388146 = _0x33d5a5 && _0x158eac ? _0x33d5a5.find(_0x4872d5 => _0x4872d5.id === _0x158eac) : null;
    const _0x45c163 = String(_0x3e44f2 || "");
    if (_0x388146) {
      _0x388146.requestRaw = _0x45c163;
    }
    _0x9fe1e1(_0x1073d3, _0x45c163);
    const _0x44d6c5 = _0x1073d3 && _0x1073d3.dataset ? _0x1073d3.dataset.viewMode || _0x1504f6() : _0x1504f6();
    _0x5d3ef2(_0x1073d3, _0x44d6c5, false);
    try {
      {
        _0x9bd96d();
      }
    } catch (_0x364d4e) {}
    try {
      _0x8c4bee();
    } catch (_0x5b6348) {}
  }
  function _0xd0847d(_0x410e0d) {
    {
      const _0x52c8ee = _0x33d5a5.findIndex(_0x3ad90d => _0x3ad90d.id === _0x410e0d);
      if (_0x52c8ee < 0) {
        return;
      }
      _0x301233();
      _0x33d5a5.splice(_0x52c8ee, 1);
      if (_0x33d5a5.length === 0) {
        _0x29a5ad({
          id: "send_0",
          title: _0x850dc("replayDraft") || "Draft",
          requestRaw: "",
          responseRaw: "",
          statusText: "-"
        });
        _0x6d2f22("send_0");
      } else {
        if (_0x158eac === _0x410e0d) {
          {
            const _0x3c7fe7 = Math.min(_0x52c8ee, _0x33d5a5.length - 1);
            _0x6d2f22(_0x33d5a5[_0x3c7fe7].id);
          }
        } else {
          _0x4f1326();
        }
      }
    }
  }
  function _0x4f1326() {
    {
      if (!_0x3d8a13) {
        return;
      }
      try {
        {
          const _0x41526a = _0x850dc("replayDraft") || "Draft";
          (_0x33d5a5 || []).forEach(_0x1e8045 => {
            if (!_0x1e8045 || _0x1e8045.id !== "send_0") {
              return;
            }
            const _0x563461 = String(_0x1e8045.title || "");
            (!_0x563461 || _0x563461 === "草稿" || _0x563461 === "Draft" || _0x563461 === "Draft " || _0x563461 === "草稿 " || _0x563461 === _0x41526a) && (_0x1e8045.title = _0x41526a);
          });
        }
      } catch (_0x535b2a) {}
      _0x3d8a13.innerHTML = _0x33d5a5.map(_0x40acf6 => {
        const _0x12c45e = _0x40acf6.id === _0x158eac ? " active" : "";
        return "<div class=\"replay-history-tab" + _0x12c45e + "\" data-rid=\"" + _0x47f251(_0x40acf6.id) + "\" role=\"button\" tabindex=\"0\">" + "<span class=\"replay-tab-label\">" + _0x47f251(_0x40acf6.title || "Send") + "</span>" + "<button type=\"button\" class=\"replay-tab-close\" data-rid=\"" + _0x47f251(_0x40acf6.id) + "\" title=\"" + (_0x850dc("closeTab") || "Close") + "\" aria-label=\"" + (_0x850dc("closeTab") || "Close") + "\">×</button>" + "</div>";
      }).join("");
    }
  }
  function _0x29a5ad(_0x3d280f) {
    _0x33d5a5.push(_0x3d280f);
    _0x158eac = _0x3d280f.id;
    _0x4f1326();
  }
  function _0x301233() {
    const _0x683118 = _0x33d5a5.find(_0x32660f => _0x32660f.id === _0x158eac);
    if (!_0x683118) {
      return;
    }
    const _0x3ebece = _0x1073d3 && _0x1073d3.dataset ? _0x1073d3.dataset.viewMode || _0x1504f6() : _0x1504f6();
    if (_0x3ebece !== "raw") {
      const _0x4d28c1 = _0x307492(_0x1073d3);
      _0x683118.requestRaw = _0x4d28c1;
      _0x9fe1e1(_0x1073d3, _0x4d28c1);
      return;
    }
    const _0x1c1cb0 = _0x307492(_0x1073d3);
    _0x683118.requestRaw = _0x1c1cb0;
  }
  function _0x30ba6c(_0x116e05) {
    const _0x45d536 = _0x33d5a5.find(_0x4bb424 => _0x4bb424.id === _0x116e05);
    if (!_0x45d536) {
      return;
    }
    _0x301233();
    _0x39126c += 1;
    const _0x22e71b = "branch_" + _0x39126c + "_" + Date.now();
    _0x29a5ad({
      id: _0x22e71b,
      title: (_0x850dc("replayBranchTag") || "Branch") + " " + _0x39126c,
      requestRaw: String(_0x45d536.requestRaw || ""),
      responseRaw: "",
      statusText: "-",
      url: String(_0x45d536.url || _0x45d536.sourceUrl || _0x4ddb66 || ""),
      sourceUrl: String(_0x45d536.sourceUrl || _0x45d536.url || _0x4ddb66 || ""),
      sourceRecordId: _0x45d536.sourceRecordId ? String(_0x45d536.sourceRecordId) : "",
      sourceTabId: _0x45d536.sourceTabId != null ? _0x45d536.sourceTabId : _0x2dde63,
      sourceTimestamp: _0x45d536.sourceTimestamp ? Number(_0x45d536.sourceTimestamp) : 0,
      targetOriginOverride: _0x45d536.targetOriginOverride && String(_0x45d536.targetOriginOverride).trim() || _0x4f7e80(_0x4ddb66) || ""
    });
    _0x6d2f22(_0x22e71b);
  }
  function _0x5c9e4f() {
    if (!_0x1898fa || !_0x1073d3 || !_0x39c18b) {
      return;
    }
    if (_0x33d5a5.length === 0) {
      _0x5cf305("", "");
      return;
    }
    const _0x2d8803 = _0x33d5a5.some(_0x537c57 => _0x537c57.id === _0x158eac) ? _0x158eac : _0x33d5a5[0].id;
    _0x6d2f22(_0x2d8803);
    _0x1898fa && !_0x1898fa.dataset.searchBound && (_0x1898fa.dataset.searchBound = "1", _0x219155(_0x1898fa, "#replayReqSearchInput", "#replayRequestEditor", "#replayReqSearchPrev", "#replayReqSearchNext", "#replayReqSearchCount"), _0x219155(_0x1898fa, "#replayRespSearchInput", "#replayResponseViewer", "#replayRespSearchPrev", "#replayRespSearchNext", "#replayRespSearchCount"));
    _0x1898fa.classList.remove("hidden");
    if (_0x2b9f36.replay) {
      _0x2b9f36.replay();
    }
    if (_0x52bd48) {
      _0x52bd48.querySelectorAll("button").forEach(_0x13f7af => _0x13f7af.classList.toggle("active", _0x13f7af.getAttribute("data-view") === "replay"));
    }
    requestAnimationFrame(() => {
      try {
        _0x1073d3.focus();
      } catch (_0x521cf2) {}
    });
  }
  function _0x5cf305(_0x48118d, _0x305f93, _0x46de2f) {
    {
      if (!_0x1898fa || !_0x1073d3 || !_0x39c18b) {
        return;
      }
      _0x4ddb66 = String(_0x305f93 || "");
      _0x33d5a5 = [];
      _0x39126c = 0;
      const _0x6754f1 = _0x1504f6();
      if (_0x1073d3) {
        _0x1073d3.dataset.viewMode = _0x6754f1;
      }
      if (_0x39c18b) {
        _0x39c18b.dataset.viewMode = "pretty";
      }
      _0x50f57b(_0x1898fa && _0x1898fa.querySelector(".replay-req-toggle"), _0x6754f1);
      _0x50f57b(_0x1898fa && _0x1898fa.querySelector(".replay-resp-toggle"), "pretty");
      const _0x39e15c = {
        id: "send_0",
        title: _0x850dc("replayDraft") || "Draft",
        requestRaw: String(_0x48118d || ""),
        responseRaw: "",
        statusText: "-",
        url: String(_0x46de2f && _0x46de2f.url || _0x305f93 || ""),
        sourceUrl: String(_0x46de2f && _0x46de2f.sourceUrl || _0x46de2f && _0x46de2f.url || _0x305f93 || ""),
        sourceRecordId: _0x46de2f && _0x46de2f.sourceRecordId ? String(_0x46de2f.sourceRecordId) : "",
        sourceTabId: _0x46de2f && _0x46de2f.sourceTabId != null ? _0x46de2f.sourceTabId : _0x2dde63,
        sourceTimestamp: _0x46de2f && _0x46de2f.sourceTimestamp ? Number(_0x46de2f.sourceTimestamp) : 0,
        targetOriginOverride: _0x4f7e80(_0x4ddb66) || ""
      };
      _0x29a5ad(_0x39e15c);
      _0x6d2f22(_0x39e15c.id);
      _0x1898fa && !_0x1898fa.dataset.searchBound && (_0x1898fa.dataset.searchBound = "1", _0x219155(_0x1898fa, "#replayReqSearchInput", "#replayRequestEditor", "#replayReqSearchPrev", "#replayReqSearchNext", "#replayReqSearchCount"), _0x219155(_0x1898fa, "#replayRespSearchInput", "#replayResponseViewer", "#replayRespSearchPrev", "#replayRespSearchNext", "#replayRespSearchCount"));
      _0x1898fa.classList.remove("hidden");
      if (_0x2b9f36.replay) {
        _0x2b9f36.replay();
      }
      if (_0x52bd48) {
        _0x52bd48.querySelectorAll("button").forEach(_0x5e1e41 => _0x5e1e41.classList.toggle("active", _0x5e1e41.getAttribute("data-view") === "replay"));
      }
      requestAnimationFrame(() => {
        try {
          _0x1073d3.focus();
        } catch (_0x258d20) {}
      });
    }
  }
  function _0x2761b7(_0x2f45b6) {
    {
      const _0x304a28 = Number(_0x2f45b6 || 0);
      const _0xd323c0 = {
        200: "OK",
        201: "Created",
        202: "Accepted",
        204: "No Content",
        301: "Moved Permanently",
        302: "Found",
        304: "Not Modified",
        400: "Bad Request",
        401: "Unauthorized",
        403: "Forbidden",
        404: "Not Found",
        405: "Method Not Allowed",
        408: "Request Timeout",
        409: "Conflict",
        413: "Payload Too Large",
        415: "Unsupported Media Type",
        429: "Too Many Requests",
        500: "Internal Server Error",
        501: "Not Implemented",
        502: "Bad Gateway",
        503: "Service Unavailable",
        504: "Gateway Timeout"
      };
      return _0xd323c0[_0x304a28] || "";
    }
  }
  function _0x2441a5(_0x37ce69, _0x530d11) {
    const _0x517548 = String(_0x37ce69 || "").trim();
    const _0x2c0c1d = /(^|\n)\s*host\s*:/i.test(_0x517548);
    if (_0x2c0c1d) {
      return _0x517548;
    }
    let _0x1a2f5d = "";
    try {
      _0x1a2f5d = new URL(_0x530d11 || "").host || "";
    } catch (_0x27b024) {}
    if (!_0x1a2f5d) {
      return _0x517548;
    }
    return "Host: " + _0x1a2f5d + (_0x517548 ? "\n" + _0x517548 : "");
  }
  function _0x2649b8(_0x4d2bf9) {
    let _0xfecb97 = String(_0x4d2bf9 || "").replace(/\r\n/g, "\n").replace(/\r/g, "\n");
    const _0x461e92 = _0xfecb97.indexOf("\n\n");
    const _0x764d2 = _0x461e92 >= 0 ? _0x461e92 : _0xfecb97.length;
    let _0x286cbb = _0xfecb97.slice(0, _0x764d2);
    const _0x204347 = _0x461e92 >= 0 ? _0xfecb97.slice(_0x461e92) : "";
    function _0x343a0b(_0x2d8488) {
      {
        const _0x2efc54 = _0x2d8488.indexOf(":");
        if (_0x2efc54 <= 0) {
          return _0x2d8488;
        }
        const _0x27881f = _0x2d8488.slice(0, _0x2efc54 + 1);
        let _0x38ebde = _0x2d8488.slice(_0x2efc54 + 1);
        let _0xeb683e;
        do {
          _0xeb683e = _0x38ebde.replace(/([^\n])([A-Z][!#$%&'*+\-.^_`|~0-9A-Za-z-]*:\s)/g, "$1\n$2");
          _0x38ebde = _0xeb683e;
        } while (_0x38ebde !== _0xeb683e);
        return _0x27881f + _0x38ebde;
      }
    }
    const _0x59d67f = _0x286cbb.split("\n");
    const _0x40f15d = [];
    for (let _0x43cc57 = 0; _0x43cc57 < _0x59d67f.length; _0x43cc57++) {
      let _0x18cdd0 = _0x59d67f[_0x43cc57];
      if (_0x43cc57 === 0 && _0x18cdd0.length) {
        if (/^[A-Z]+\s/.test(_0x18cdd0)) {
          _0x18cdd0 = _0x18cdd0.replace(/^([A-Z]+\s+\S+\s+HTTP\/\d(?:\.\d+)?)(?=[A-Z][!#$%&'*+\-.^_`|~0-9A-Za-z-]*:\s)/, "$1\n");
        } else {
          /^HTTP\/\d/i.test(_0x18cdd0) && (_0x18cdd0 = _0x18cdd0.replace(/^(HTTP\/\d(?:\.\d)?\s+\d{3})(\s*[^\n]*?)(?=[A-Z0-9!#$%&'*+\^_`|~-][!#$%&'*+\-.^_`|~0-9A-Za-z-]*:\s)/i, "$1$2\n"));
        }
      }
      _0x40f15d.push(..._0x343a0b(_0x18cdd0).split("\n"));
    }
    _0x286cbb = _0x40f15d.join("\n");
    return _0x286cbb + _0x204347;
  }
  function _0x83e0ec(_0x2e580c) {
    const _0x5f3dfe = _0x2649b8(String(_0x2e580c || ""));
    const _0xddca5a = /\n\n/.exec(_0x5f3dfe);
    if (!_0xddca5a) {
      {
        const _0x5043ca = _0x5f3dfe.split("\n");
        const _0x3a8816 = (_0x5043ca.shift() || "").trim();
        return {
          startLine: _0x3a8816,
          headerLines: _0x5043ca.filter(_0x185cd => _0x185cd.trim()),
          body: ""
        };
      }
    }
    const _0x5ccdbc = _0x5f3dfe.slice(0, _0xddca5a.index);
    const _0x560aec = _0x5f3dfe.slice(_0xddca5a.index + _0xddca5a[0].length);
    const _0x3ceaf9 = _0x5ccdbc.split("\n");
    const _0x308a0e = (_0x3ceaf9.shift() || "").trim();
    return {
      startLine: _0x308a0e,
      headerLines: _0x3ceaf9.filter(_0x145e3b => _0x145e3b.trim()),
      body: _0x560aec
    };
  }
  function _0x233c3e(_0x347bee) {
    const _0x2a789c = {};
    (_0x347bee || []).forEach(_0x113744 => {
      {
        const _0x43544 = _0x113744.indexOf(":");
        if (_0x43544 <= 0) {
          return;
        }
        const _0x1bfb21 = _0x113744.slice(0, _0x43544).trim();
        const _0x130c44 = _0x113744.slice(_0x43544 + 1).trim();
        if (!_0x1bfb21) {
          return;
        }
        _0x2a789c[_0x1bfb21] = _0x130c44;
      }
    });
    return _0x2a789c;
  }
  function _0x1181ae(_0x531a59) {
    {
      const _0x2ee619 = String(_0x531a59 == null ? "" : _0x531a59).replace(/\+/g, " ");
      try {
        {
          return decodeURIComponent(_0x2ee619);
        }
      } catch (_0x2e3b63) {
        return _0x2ee619;
      }
    }
  }
  function _0x442e0a(_0x496b6a) {
    {
      return encodeURIComponent(String(_0x496b6a == null ? "" : _0x496b6a)).replace(/%20/g, "+");
    }
  }
  function _0x2428dc(_0x31e70c) {
    {
      const _0x22c0e6 = String(_0x31e70c || "");
      const _0x571e64 = _0x22c0e6.indexOf("?");
      const _0x4992f5 = _0x571e64 >= 0 ? _0x22c0e6.slice(0, _0x571e64) : _0x22c0e6;
      const _0x38afeb = _0x571e64 >= 0 ? _0x22c0e6.slice(_0x571e64 + 1) : "";
      const _0x3879d4 = encodeURI(_0x4992f5 || "/");
      if (_0x571e64 < 0) {
        return _0x3879d4 || "/";
      }
      const _0x1f319f = _0x38afeb.split("&");
      const _0x5d5c9f = [];
      for (const _0x3ed42f of _0x1f319f) {
        {
          if (_0x3ed42f === "") {
            continue;
          }
          const _0x51d23c = _0x3ed42f.indexOf("=");
          const _0x275351 = _0x51d23c >= 0 ? _0x3ed42f.slice(0, _0x51d23c) : _0x3ed42f;
          const _0x31d77e = _0x51d23c >= 0 ? _0x3ed42f.slice(_0x51d23c + 1) : "";
          const _0x589a5b = _0x442e0a(_0x1181ae(_0x275351));
          if (_0x51d23c >= 0) {
            const _0x5f4452 = _0x442e0a(_0x1181ae(_0x31d77e));
            _0x5d5c9f.push(_0x589a5b + "=" + _0x5f4452);
          } else {
            _0x5d5c9f.push(_0x589a5b);
          }
        }
      }
      return (_0x3879d4 || "/") + "?" + _0x5d5c9f.join("&");
    }
  }
  function _0x2f3505(_0x236cc2) {
    const _0x13b6dc = String(_0x236cc2 || "").trim();
    if (!_0x13b6dc) {
      return _0x13b6dc;
    }
    if (/^https?:\/\//i.test(_0x13b6dc)) {
      const _0x4a9a07 = _0x13b6dc.match(/^(https?:\/\/[^\/]+)(\/.*)?$/i);
      if (_0x4a9a07) {
        const _0x245677 = _0x4a9a07[1];
        const _0x360bd1 = _0x4a9a07[2] || "/";
        return _0x245677 + _0x2428dc(_0x360bd1);
      }
      return _0x13b6dc;
    }
    return _0x2428dc(_0x13b6dc);
  }
  function _0x2370d2(_0x1b2b4e, _0x24e705, _0x30a2d0) {
    const _0x4107ab = _0x83e0ec(_0x1b2b4e);
    const _0x427271 = String(_0x4107ab.startLine || "").trim();
    const _0x1beca8 = _0x427271.match(/^(\S+)\s+(.+?)\s+HTTP\/[0-9.]+$/i);
    const _0xabc87d = (_0x1beca8 && _0x1beca8[1] || _0x427271.split(/\s+/)[0] || "GET").toUpperCase();
    const _0x12f20a = _0x1beca8 && _0x1beca8[2] ? _0x1beca8[2] : _0x427271.split(/\s+/)[1] || "/";
    const _0x4a875f = _0x233c3e(_0x4107ab.headerLines);
    let _0x2dc584 = _0x12f20a;
    try {
      {
        if (/^https?:\/\//i.test(_0x12f20a)) {
          _0x2dc584 = _0x12f20a;
        } else {
          const _0x3fe359 = _0x4a875f.Host || _0x4a875f.host;
          const _0x809a39 = _0x24e705 && /^https:/i.test(_0x24e705) ? "https" : "http";
          if (_0x3fe359) {
            _0x2dc584 = _0x809a39 + "://" + _0x3fe359 + (_0x12f20a.startsWith("/") ? _0x12f20a : "/" + _0x12f20a);
          } else {
            if (_0x24e705) {
              {
                _0x2dc584 = new URL(_0x12f20a.startsWith("/") ? _0x12f20a : "/" + _0x12f20a, _0x24e705).toString();
              }
            } else {
              {
                _0x2dc584 = _0x12f20a;
              }
            }
          }
        }
      }
    } catch (_0x4d8f48) {
      _0x2dc584 = _0x24e705 || _0x12f20a;
    }
    const _0x1eb86e = !(_0x30a2d0 && _0x30a2d0.smartEncodeUrl === false);
    if (_0x1eb86e) {
      _0x2dc584 = _0x2f3505(_0x2dc584);
    }
    return {
      method: _0xabc87d,
      url: _0x2dc584,
      headers: _0x4a875f,
      body: _0x4107ab.body
    };
  }
  function _0x4b1b0b(_0x51d07e) {
    const _0x3f615d = {};
    if (!Array.isArray(_0x51d07e)) {
      return _0x3f615d;
    }
    _0x51d07e.forEach(_0x1f1055 => {
      const _0x2b0b21 = Array.isArray(_0x1f1055) ? String(_0x1f1055[0] || "").trim() : String(_0x1f1055 && (_0x1f1055.name || _0x1f1055[0]) || "").trim();
      if (!_0x2b0b21) {
        return;
      }
      const _0x25ecfe = Array.isArray(_0x1f1055) ? String(_0x1f1055[1] || "") : String(_0x1f1055 && (_0x1f1055.value || _0x1f1055[1]) || "");
      _0x3f615d[_0x2b0b21] = _0x25ecfe;
    });
    return _0x3f615d;
  }
  function _0x17a281(_0x563083, _0x4660b1) {
    const _0x5e5d9e = _0x83e0ec(_0x563083);
    const _0x4374ff = String(_0x5e5d9e.startLine || "").trim();
    const _0x434cd7 = _0x4374ff.match(/^HTTP\/[0-9.]+\s+(\d{3})(?:\s+.*)?$/i);
    const _0x590e08 = _0x4660b1 && _0x4660b1.statusCode != null ? parseInt(_0x4660b1.statusCode, 10) : 200;
    const _0x520edb = _0x434cd7 && /^\d{3}$/.test(String(_0x434cd7[1] || "")) ? parseInt(_0x434cd7[1], 10) : Number.isFinite(_0x590e08) && _0x590e08 > 0 ? _0x590e08 : 200;
    const _0x184a63 = _0x233c3e(_0x5e5d9e.headerLines);
    const _0x50ec45 = _0x4b1b0b(_0x4660b1 && _0x4660b1.responseHeaders);
    const _0x4fbf82 = Object.keys(_0x184a63).length ? _0x184a63 : _0x50ec45;
    return {
      statusCode: _0x520edb,
      headers: _0x4fbf82,
      body: String(_0x5e5d9e.body || "")
    };
  }
  function _0x271dbe(_0xaa1d41) {
    try {
      const _0x66fc59 = _0xaa1d41 && _0xaa1d41.closest ? _0xaa1d41.closest(".record-item") : null;
      const _0x528be1 = _0x66fc59 && _0x66fc59.dataset ? String(_0x66fc59.dataset.id || "") : "";
      if (!_0x528be1) {
        return "";
      }
      const _0x1460d6 = _0x3a0472 === "history" ? _0xb31434 : _0xa02ab3;
      const _0x34bd34 = Array.isArray(_0x1460d6) ? _0x1460d6.find(_0x12cbd2 => String(_0x12cbd2.id) === _0x528be1) : null;
      return _0x34bd34 && _0x34bd34.url ? String(_0x34bd34.url) : "";
    } catch (_0x3ee3da) {
      {
        return "";
      }
    }
  }
  function _0x43b0ee() {
    const _0x29ee36 = _0x33d5a5 && _0x158eac ? _0x33d5a5.find(_0xb753c2 => _0xb753c2.id === _0x158eac) : null;
    return String(_0x4ddb66 || _0x29ee36 && _0x29ee36.targetOriginOverride || "").trim();
  }
  function _0x2e2843(_0x64a88d, _0x254d8a) {
    let _0xab18b5 = "";
    try {
      const _0x42ef98 = _0x2370d2(String(_0x64a88d || ""), String(_0x254d8a || ""), {
        smartEncodeUrl: !!_0x59b777
      });
      _0xab18b5 = _0x42ef98 && _0x42ef98.url ? String(_0x42ef98.url).trim() : "";
    } catch (_0x57c07f) {}
    if (!_0xab18b5) {
      _0x34a884(_0x850dc("copyRequestUrlFailed") || "Unable to build full URL from the current request.");
      return;
    }
    _0x3f2596(_0xab18b5).then(() => {
      _0x34a884(_0x850dc("copyRequestUrlDone") || "The request URL has been copied to the clipboard.");
    }).catch(() => {
      _0x34a884(_0x850dc("copyFailed") || "Copy failed");
    });
  }
  function _0x52e2e1(_0x1c7d6b, _0x401ddf) {
    const _0x1070ac = _0x1c7d6b ? _0x307492(_0x1c7d6b) : "";
    const _0x4c31ee = _0x401ddf ? _0x307492(_0x401ddf) : "";
    if (!String(_0x1070ac).trim() && !String(_0x4c31ee).trim()) {
      {
        _0x34a884(_0x850dc("downloadReqRespEmpty") || "Request and response are both empty; nothing to export.");
        return;
      }
    }
    const _0x2e5db1 = _0x850dc("downloadReqRespSectionRequest") || "=== REQUEST ===";
    const _0x24541b = _0x850dc("downloadReqRespSectionResponse") || "=== RESPONSE ===";
    const _0x440102 = "\r\n";
    const _0x466865 = _0x2e5db1 + _0x440102 + _0x440102 + String(_0x1070ac || "") + _0x440102 + _0x440102 + _0x24541b + _0x440102 + _0x440102 + String(_0x4c31ee || "");
    const _0x1b3d83 = new Blob(["﻿" + _0x466865], {
      type: "text/plain;charset=utf-8"
    });
    const _0x1e46fc = URL.createObjectURL(_0x1b3d83);
    const _0x40df29 = document.createElement("a");
    _0x40df29.href = _0x1e46fc;
    _0x40df29.download = "HawkEye-req-resp-" + Date.now() + ".txt";
    _0x40df29.style.position = "fixed";
    _0x40df29.style.left = "-9999px";
    document.body.appendChild(_0x40df29);
    _0x40df29.click();
    _0x40df29.remove();
    setTimeout(() => {
      try {
        {
          URL.revokeObjectURL(_0x1e46fc);
        }
      } catch (_0x21f509) {}
    }, 800);
    _0x34a884(_0x850dc("downloadReqRespDone") || "Full request and response have been saved to a text file.");
  }
  function _0x4e4d20(_0x681807) {
    return _0x307492(_0x681807.querySelector(".req-raw"));
  }
  function _0x4449f6(_0x4c4ebd) {
    {
      return _0x307492(_0x4c4ebd.querySelector(".resp-raw"));
    }
  }
  function _0x55a5eb(_0x27db1b) {
    {
      if (!_0x27db1b) {
        return null;
      }
      const _0x3f1bd4 = window.getSelection && window.getSelection();
      if (!_0x3f1bd4 || _0x3f1bd4.rangeCount === 0) {
        return null;
      }
      const _0x54d76d = _0x3f1bd4.getRangeAt(0);
      if (!_0x27db1b.contains(_0x54d76d.startContainer) || !_0x27db1b.contains(_0x54d76d.endContainer)) {
        return null;
      }
      const _0x384362 = _0x24bf27(_0x27db1b);
      if (!_0x384362) {
        return null;
      }
      const _0x55cb4f = Math.max(0, Number(_0x384362.start || 0));
      const _0x5d3744 = Math.max(_0x55cb4f, Number(_0x384362.end == null ? _0x55cb4f : _0x384362.end));
      return {
        start: _0x55cb4f,
        end: _0x5d3744
      };
    }
  }
  function _0x27a146(_0xce5608, _0x481d1f) {
    if (!_0xce5608) {
      return null;
    }
    const _0xb6f475 = _0xce5608.querySelector(_0x481d1f === "resp" ? ".resp-raw" : ".req-raw");
    if (!_0xb6f475) {
      return null;
    }
    const _0x5a5349 = _0x55a5eb(_0xb6f475);
    return _0x5a5349 ? {
      range: _0x375449(_0x5a5349)
    } : null;
  }
  function _0x5cae08(_0x5b26cb, _0x2a9d2f) {
    {
      return String(_0x5b26cb || "") + ":" + (_0x2a9d2f === "resp" ? "resp" : "req");
    }
  }
  function _0x2d0555(_0x1787e1, _0xb2816) {
    if (!_0x1787e1 || !_0xb2816) {
      return;
    }
    const _0x530553 = _0x4d321c.get(_0x5cae08(_0xb2816, "req")) || [];
    const _0x2a2b89 = _0x16baa1.get(_0x5cae08(_0xb2816, "req")) || [];
    const _0x35faab = _0x4d321c.get(_0x5cae08(_0xb2816, "resp")) || [];
    const _0x31a4be = _0x16baa1.get(_0x5cae08(_0xb2816, "resp")) || [];
    const _0x159228 = _0x1787e1.querySelector(".inline-undo-btn[data-side=\"req\"]");
    const _0x234cef = _0x1787e1.querySelector(".inline-redo-btn[data-side=\"req\"]");
    const _0x49240e = _0x1787e1.querySelector(".inline-undo-btn[data-side=\"resp\"]");
    const _0x25743d = _0x1787e1.querySelector(".inline-redo-btn[data-side=\"resp\"]");
    if (_0x159228) {
      _0x159228.disabled = _0x530553.length === 0;
    }
    if (_0x234cef) {
      _0x234cef.disabled = _0x2a2b89.length === 0;
    }
    if (_0x49240e) {
      _0x49240e.disabled = _0x35faab.length === 0;
    }
    if (_0x25743d) {
      _0x25743d.disabled = _0x31a4be.length === 0;
    }
  }
  function _0x40e46a(_0x3c97d1, _0x541462, _0x3b4575, {
    immediate: _0x3354fb
  } = {}) {
    {
      const _0x5e54f8 = _0x5cae08(_0x3c97d1, _0x541462);
      if (!_0x4d321c.has(_0x5e54f8)) {
        _0x4d321c.set(_0x5e54f8, []);
      }
      if (!_0x16baa1.has(_0x5e54f8)) {
        _0x16baa1.set(_0x5e54f8, []);
      }
      const _0x4614f2 = () => {
        const _0x1c709c = _0x52bc70.has(_0x5e54f8) ? String(_0x52bc70.get(_0x5e54f8) || "") : "";
        const _0x33f62f = String(_0x3b4575 || "");
        if (_0x33f62f === _0x1c709c) {
          return;
        }
        _0x4d321c.get(_0x5e54f8).push(_0x1c709c);
        _0x16baa1.set(_0x5e54f8, []);
        _0x52bc70.set(_0x5e54f8, _0x33f62f);
      };
      if (_0x3354fb) {
        _0x4614f2();
        return;
      }
      const _0x55e21b = _0x622096.get(_0x5e54f8);
      if (_0x55e21b) {
        clearTimeout(_0x55e21b);
      }
      const _0x1db257 = setTimeout(() => {
        _0x622096.delete(_0x5e54f8);
        _0x4614f2();
      }, 220);
      _0x622096.set(_0x5e54f8, _0x1db257);
    }
  }
  function _0x6c37b(_0x18b070, _0x18902f, _0x5c991e, _0x2d5f98) {
    if (!_0x18b070) {
      return;
    }
    const _0x1d3c8e = _0x18b070.querySelector(_0x5c991e === "resp" ? ".resp-raw" : ".req-raw");
    if (!_0x1d3c8e) {
      return;
    }
    const _0x4aa12a = String(_0x2d5f98 || "");
    _0x9fe1e1(_0x1d3c8e, _0x4aa12a);
    _0x5d3ef2(_0x1d3c8e, _0x1d3c8e.dataset.viewMode || _0x38b968(_0x1d3c8e), false);
    _0x48bbf(_0x18b070);
    if (_0x18902f) {
      if (_0x5c991e === "resp") {
        _0x14b54d.set(_0x18902f, _0x4aa12a);
      } else {
        _0x52e466.set(_0x18902f, _0x4aa12a);
      }
    }
    _0x2d0555(_0x18b070, _0x18902f);
  }
  function _0x3f2596(_0x4dfa4f) {
    {
      const _0x49e466 = String(_0x4dfa4f || "");
      if (navigator.clipboard && navigator.clipboard.writeText) {
        return navigator.clipboard.writeText(_0x49e466);
      }
      return new Promise((_0x589537, _0x5c59c9) => {
        try {
          {
            const _0x482577 = document.createElement("textarea");
            _0x482577.value = _0x49e466;
            _0x482577.style.position = "fixed";
            _0x482577.style.opacity = "0";
            document.body.appendChild(_0x482577);
            _0x482577.select();
            const _0x229dc3 = document.execCommand("copy");
            document.body.removeChild(_0x482577);
            if (_0x229dc3) {
              _0x589537();
            } else {
              _0x5c59c9(new Error("copy_failed"));
            }
          }
        } catch (_0x5d6e59) {
          _0x5c59c9(_0x5d6e59);
        }
      });
    }
  }
  function _0x3212e3(_0x2bd238, _0x36062a, _0x1e1c0f) {
    {
      if (!_0x2bd238) {
        return;
      }
      const _0xc07feb = _0x2bd238.dataset._origText != null ? _0x2bd238.dataset._origText : _0x2bd238.textContent || "";
      if (_0x2bd238.dataset._origText == null) {
        _0x2bd238.dataset._origText = _0xc07feb;
      }
      _0x2bd238.textContent = _0x36062a;
      _0x2bd238.disabled = true;
      clearTimeout(_0x2bd238._flashTimer);
      _0x2bd238._flashTimer = setTimeout(() => {
        _0x2bd238.textContent = _0x2bd238.dataset._origText || _0xc07feb;
        _0x2bd238.disabled = false;
      }, _0x1e1c0f || 1200);
    }
  }
  function _0x5e6b83() {
    {
      const _0x4bef69 = "custom_suffix:";
      const _0x19b677 = String(_0x337d9b || "").startsWith(_0x4bef69) ? String(_0x337d9b || "").slice(_0x4bef69.length).trim().toLowerCase() : "";
      const _0x1f1fc7 = !!_0x19b677;
      _0x4b6be4.runtime.sendMessage({
        type: "GET_HISTORY",
        limit: 300,
        resourceType: _0x337d9b === "xhr_fetch" || _0x1f1fc7 ? undefined : _0x337d9b || undefined,
        channelType: _0x337d9b === "xhr_fetch" ? "xhr_fetch" : undefined,
        search: _0x40cc72 || undefined,
        host: _0x56b676 || undefined,
        tabId: _0x15549e === "current" && _0x2dde63 != null ? _0x2dde63 : undefined,
        method: _0x34df96 || undefined,
        statusCode: _0x4cbec6 || undefined,
        sensitiveHit: _0x594eca === "__sensitive_only__" ? undefined : _0x594eca || undefined,
        hasSensitive: _0x594eca === "__sensitive_only__" ? true : undefined
      }, _0xdc5625 => {
        let _0x528ffa = _0xdc5625 && _0xdc5625.list || [];
        _0x1f1fc7 && (_0x528ffa = _0x528ffa.filter(_0x236349 => {
          const _0x249e56 = String(_0x236349 && _0x236349.url || "");
          const _0x282472 = _0x249e56.split("?")[0].toLowerCase();
          return _0x282472.endsWith("." + _0x19b677);
        }));
        _0x528ffa.forEach(_0x21b079 => {
          try {
            if (!_0x21b079) {
              return;
            }
            const _0x491997 = _0x21b079.sizeBytes;
            if (_0x491997 != null && Number.isFinite(Number(_0x491997)) && Number(_0x491997) > 0) {
              return;
            }
            const _0x4492ca = _0x24e589(_0x21b079);
            _0x4492ca && (_0x21b079.sizeBytes = new TextEncoder().encode(_0x4492ca).length);
          } catch (_0x41c869) {}
        });
        _0x1777da(_0x528ffa);
        _0xb31434 = _0x5f2b1b(_0x528ffa);
        const _0x2d6095 = _0xdc5625 && _0xdc5625.hosts ? _0xdc5625.hosts : [];
        const _0x425245 = _0xdc5625 && _0xdc5625.methods ? _0xdc5625.methods : [];
        const _0x5f11b4 = _0xdc5625 && _0xdc5625.statuses ? _0xdc5625.statuses : [];
        const _0x4e1575 = _0xdc5625 && _0xdc5625.sensitiveHits ? _0xdc5625.sensitiveHits : [];
        const _0x253959 = new Set(_0x4e1575);
        (_0xb31434 || []).forEach(_0x13f4dc => {
          (Array.isArray(_0x13f4dc.sensitiveHits) ? _0x13f4dc.sensitiveHits : []).forEach(_0x4cbf2e => {
            {
              if (_0x4cbf2e) {
                _0x253959.add(String(_0x4cbf2e));
              }
            }
          });
          _0x191e3c(_0x13f4dc).forEach(_0x1842c0 => _0x253959.add(_0x1842c0));
        });
        _0x5b1dca = Array.from(_0x253959);
        _0x44e9e3 = _0x2d6095;
        _0x552f2a = _0x425245;
        _0xb65382 = _0x5f11b4;
        _0x44a653();
        _0x1356f0();
        _0x1e4558();
        _0x45eeb2();
        _0x24ce8b = null;
        _0x2000d6();
        _0x3fcfe5();
      });
    }
  }
  function _0x44a653() {
    if (!_0x3b3dbf) {
      return;
    }
    const _0x50da91 = _0x56b676 || "";
    _0x3b3dbf.innerHTML = "<option value=\"\" data-i18n=\"filterHostAll\">" + _0x850dc("filterHostAll") + "</option>";
    _0x44e9e3.forEach(_0x30b471 => {
      const _0x10ad82 = document.createElement("option");
      _0x10ad82.value = _0x30b471;
      _0x10ad82.textContent = _0x30b471.length > 40 ? _0x30b471.slice(0, 37) + "..." : _0x30b471;
      _0x10ad82.title = _0x30b471;
      _0x3b3dbf.appendChild(_0x10ad82);
    });
    if (_0x50da91) {
      const _0x2a8735 = Array.from(_0x3b3dbf.options).some(_0x265b70 => String(_0x265b70.value || "") === String(_0x50da91));
      if (!_0x2a8735) {
        const _0x995f40 = document.createElement("option");
        _0x995f40.value = _0x50da91;
        _0x995f40.textContent = _0x50da91.length > 40 ? _0x50da91.slice(0, 37) + "..." : _0x50da91;
        _0x995f40.title = _0x50da91;
        _0x3b3dbf.appendChild(_0x995f40);
      }
    }
    _0x3b3dbf.value = _0x50da91;
  }
  function _0x1356f0() {
    if (!_0x61a31c) {
      return;
    }
    const _0x1d3283 = _0x34df96 || _0x61a31c.value || "";
    _0x61a31c.innerHTML = "<option value=\"\" data-i18n=\"filterMethodAll\">" + _0x850dc("filterMethodAll") + "</option>";
    const _0x4c263c = _0x3a0472 === "history" ? _0xb31434 || [] : _0xa02ab3 || [];
    const _0x51cb7a = _0x4c263c.map(_0x1926ba => String(_0x1926ba && _0x1926ba.method || "").toUpperCase()).filter(Boolean);
    const _0x2ac2ad = Array.from(new Set((_0x552f2a || []).map(_0x1ccef4 => String(_0x1ccef4 || "").toUpperCase()).filter(Boolean).concat(_0x51cb7a)));
    _0x2ac2ad.sort((_0x2ef4a5, _0x265caa) => _0x2ef4a5.localeCompare(_0x265caa));
    _0x2ac2ad.forEach(_0x4c1df3 => {
      const _0x3008d1 = document.createElement("option");
      _0x3008d1.value = _0x4c1df3;
      _0x3008d1.textContent = _0x4c1df3;
      _0x61a31c.appendChild(_0x3008d1);
    });
    _0x61a31c.value = _0x1d3283;
    if (_0x1d3283 && !_0x2ac2ad.includes(_0x1d3283)) {
      {
        const _0x1ab3f5 = document.createElement("option");
        _0x1ab3f5.value = _0x1d3283;
        _0x1ab3f5.textContent = _0x1d3283;
        _0x61a31c.appendChild(_0x1ab3f5);
        _0x61a31c.value = _0x1d3283;
      }
    }
    const _0x39a048 = document.createElement("option");
    _0x39a048.value = "__custom__";
    _0x39a048.textContent = _0x850dc("filterCustomInput");
    _0x61a31c.appendChild(_0x39a048);
  }
  function _0x1e4558() {
    if (!_0x5220db) {
      return;
    }
    const _0x2e0b56 = _0x4cbec6 || _0x5220db.value || "";
    _0x5220db.innerHTML = "<option value=\"\" data-i18n=\"filterStatusAll\">" + _0x850dc("filterStatusAll") + "</option>";
    const _0x45b43a = _0x3a0472 === "history" ? _0xb31434 || [] : _0xa02ab3 || [];
    const _0x316220 = _0x45b43a.map(_0x5c648a => _0x5c648a && _0x5c648a.statusCode != null ? String(_0x5c648a.statusCode) : "").filter(Boolean);
    const _0x12343c = Array.from(new Set((_0xb65382 || []).map(_0x4296a4 => String(_0x4296a4 || "")).filter(Boolean).concat(_0x316220)));
    _0x12343c.sort((_0x3de48c, _0xafff4) => Number(_0x3de48c) - Number(_0xafff4));
    _0x12343c.forEach(_0x5a93ce => {
      const _0x28c8cb = document.createElement("option");
      _0x28c8cb.value = _0x5a93ce;
      _0x28c8cb.textContent = _0x5a93ce;
      _0x5220db.appendChild(_0x28c8cb);
    });
    _0x5220db.value = _0x2e0b56;
    if (_0x2e0b56 && !_0x12343c.includes(_0x2e0b56)) {
      const _0x22317c = document.createElement("option");
      _0x22317c.value = _0x2e0b56;
      _0x22317c.textContent = _0x2e0b56;
      _0x5220db.appendChild(_0x22317c);
      _0x5220db.value = _0x2e0b56;
    }
    const _0x367db0 = document.createElement("option");
    _0x367db0.value = "__custom__";
    _0x367db0.textContent = _0x850dc("filterCustomInput");
    _0x5220db.appendChild(_0x367db0);
  }
  function _0x45eeb2() {
    if (!_0x15a85a) {
      return;
    }
    const _0x1d1634 = _0x594eca || _0x15a85a.value || "";
    _0x15a85a.innerHTML = "<option value=\"\" data-i18n=\"filterSensitiveAll\">" + _0x850dc("filterSensitiveAll") + "</option>" + "<option value=\"__sensitive_only__\" data-i18n=\"allSensitiveInfo\">" + _0x850dc("allSensitiveInfo") + "</option>";
    (_0x5b1dca || []).forEach(_0x54540d => {
      const _0x546972 = String(_0x54540d || "");
      if (!_0x546972) {
        return;
      }
      const _0x4ec090 = document.createElement("option");
      _0x4ec090.value = _0x546972;
      _0x4ec090.textContent = _0x14840f(_0x546972);
      _0x15a85a.appendChild(_0x4ec090);
    });
    if (_0x1d1634) {
      {
        const _0x43cced = Array.from(_0x15a85a.options).some(_0x571380 => _0x571380.value === _0x1d1634);
        if (!_0x43cced) {
          const _0x2f1b91 = document.createElement("option");
          _0x2f1b91.value = _0x1d1634;
          _0x2f1b91.textContent = _0x14840f(_0x1d1634);
          _0x15a85a.appendChild(_0x2f1b91);
        }
        _0x15a85a.value = _0x1d1634;
      }
    } else {
      _0x15a85a.value = "";
    }
  }
  function _0x3a20df() {
    return _0x283e5f(_0x850dc("customMethodPrompt"), _0x34df96 || "").then(_0x269dac => {
      if (_0x269dac == null) {
        return false;
      }
      const _0x10041c = String(_0x269dac || "").trim().toUpperCase();
      if (!_0x10041c) {
        return false;
      }
      _0x34df96 = _0x10041c;
      _0x1356f0();
      if (_0x61a31c) {
        _0x61a31c.value = _0x10041c;
      }
      return true;
    });
  }
  function _0x23f8ee() {
    {
      return _0x283e5f(_0x850dc("customStatusPrompt"), _0x4cbec6 || "").then(_0x55e161 => {
        {
          if (_0x55e161 == null) {
            return false;
          }
          const _0x5428f8 = String(_0x55e161 || "").trim();
          if (!/^\d{3}$/.test(_0x5428f8)) {
            _0x34a884(_0x850dc("customStatusInvalid"));
            return false;
          }
          _0x4cbec6 = _0x5428f8;
          _0x1e4558();
          if (_0x5220db) {
            _0x5220db.value = _0x5428f8;
          }
          return true;
        }
      });
    }
  }
  function _0x1f3d9b(_0x179c80) {
    {
      _0x179c80 = _0x179c80 || {};
      document.querySelectorAll(".record-detail-inline").forEach(_0x508936 => _0x508936.style.display = "none");
      document.querySelectorAll(".record-row").forEach(_0x3d30db => _0x3d30db.classList.remove("expanded"));
      _0x24ce8b = null;
      if (_0x179c80.skipRefresh) {
        return;
      }
      if (_0x179c80.actionRefresh) {
        _0x14eb9c(_0x179c80.viewHint === "history" ? "history" : _0x3a0472 === "history" ? "history" : "intercept");
        return;
      }
      _0x3e0206();
    }
  }
  function _0x2402eb(_0x2a3713, _0x9f8f14) {
    {
      _0x9f8f14 = _0x9f8f14 || {};
      const _0x572a88 = _0x3a0472 === "history" ? _0x45bd18 : _0xd7a0ab;
      const _0x337776 = _0x572a88 && _0x572a88.querySelector ? _0x572a88.querySelector(".record-item[data-id=\"" + _0x2a3713 + "\"]") : null;
      if (!_0x337776) {
        return;
      }
      const _0x5b5f02 = _0x337776.querySelector(".record-detail-inline");
      const _0x16b900 = _0x337776.querySelector(".record-row");
      if (_0x5b5f02 && _0x5b5f02.style.display === "block") {
        {
          if (_0x9f8f14.runAi) {
            _0xd0a6f6(_0x2a3713, _0x337776);
          } else {
            _0x1f3d9b();
          }
          return;
        }
      }
      _0x1f3d9b();
      if (_0x5b5f02) {
        _0x5b5f02.style.display = "block";
        _0x16b900.classList.add("expanded");
        _0x24ce8b = _0x2a3713;
        _0x1b9ae5(_0x5b5f02);
        if (_0x5b5f02._filled !== _0x2a3713) {
          const _0x2c801a = _0x3a0472 === "history" ? _0xb31434 : _0xa02ab3;
          const _0x6e8558 = _0x2c801a.find(_0x3fb425 => _0x3fb425.id === _0x2a3713);
          if (_0x6e8558) {
            _0x5674da(_0x5b5f02, _0x6e8558);
            _0x5b5f02._filled = _0x2a3713;
            _0x1b9396(_0x5b5f02, _0x2a3713);
            _0x5ebfd4(_0x337776, _0x2a3713);
            if (_0x9f8f14.runAi) {
              _0xd0a6f6(_0x2a3713, _0x337776);
            }
          } else {
            {
              _0x4b6be4.runtime.sendMessage({
                type: "GET_RECORD",
                id: _0x2a3713
              }, _0x4e4622 => {
                const _0x3d5e46 = _0x4e4622 && _0x4e4622.record;
                if (!_0x3d5e46 || _0x5b5f02._filled === _0x2a3713) {
                  return;
                }
                _0x5674da(_0x5b5f02, _0x3d5e46);
                _0x5b5f02._filled = _0x2a3713;
                _0x1b9396(_0x5b5f02, _0x2a3713);
                _0x5ebfd4(_0x337776, _0x2a3713);
                if (_0x9f8f14.runAi) {
                  _0xd0a6f6(_0x2a3713, _0x337776);
                }
              });
            }
          }
        } else {
          {
            _0x5ebfd4(_0x337776, _0x2a3713);
            if (_0x9f8f14.runAi) {
              _0xd0a6f6(_0x2a3713, _0x337776);
            }
          }
        }
      }
    }
  }
  function _0x5674da(_0x14f480, _0x5cc7ea) {
    const _0x4d065d = _0x14f480.querySelector(".req-raw");
    const _0xff8f28 = _0x14f480.querySelector(".resp-raw");
    const _0x29aecb = _0x5cc7ea && _0x5cc7ea.id != null ? String(_0x5cc7ea.id) : "";
    const _0x179aff = _0x137986(_0x5cc7ea);
    const _0x52c545 = _0x24e589(_0x5cc7ea);
    if (_0x29aecb) {
      if (!_0x22fd21.has(_0x29aecb)) {
        _0x22fd21.set(_0x29aecb, _0x179aff);
      }
      if (!_0x3449e4.has(_0x29aecb)) {
        _0x3449e4.set(_0x29aecb, _0x52c545);
      }
    }
    const _0x2ed6da = _0x29aecb && _0x52e466.has(_0x29aecb) ? _0x52e466.get(_0x29aecb) : _0x179aff;
    const _0x216716 = _0x29aecb && _0x14b54d.has(_0x29aecb) ? _0x14b54d.get(_0x29aecb) : _0x52c545;
    _0x9fe1e1(_0x4d065d, _0x2ed6da);
    _0x9fe1e1(_0xff8f28, _0x216716);
    if (_0x29aecb) {
      const _0x35daf2 = _0x5cae08(_0x29aecb, "req");
      const _0xa3a4f2 = _0x5cae08(_0x29aecb, "resp");
      if (!_0x52bc70.has(_0x35daf2)) {
        _0x52bc70.set(_0x35daf2, String(_0x2ed6da || ""));
      }
      if (!_0x52bc70.has(_0xa3a4f2)) {
        _0x52bc70.set(_0xa3a4f2, String(_0x216716 || ""));
      }
      if (!_0x4d321c.has(_0x35daf2)) {
        _0x4d321c.set(_0x35daf2, []);
      }
      if (!_0x16baa1.has(_0x35daf2)) {
        _0x16baa1.set(_0x35daf2, []);
      }
      if (!_0x4d321c.has(_0xa3a4f2)) {
        _0x4d321c.set(_0xa3a4f2, []);
      }
      if (!_0x16baa1.has(_0xa3a4f2)) {
        _0x16baa1.set(_0xa3a4f2, []);
      }
    }
    const _0x453400 = _0x21dbd3();
    _0x4d065d.dataset.viewMode = _0x453400;
    _0xff8f28.dataset.viewMode = "pretty";
    try {
      if (_0x3a0472 === "intercept") {
        if (_0xff8f28) {
          {
            _0xff8f28.setAttribute("contenteditable", "plaintext-only");
            _0xff8f28.setAttribute("spellcheck", "false");
          }
        }
      } else {
        _0xff8f28 && _0xff8f28.removeAttribute("contenteditable");
      }
    } catch (_0x32e2cb) {}
    _0x50f57b(_0x14f480.querySelector(".req-view-toggle"), _0x453400);
    _0x50f57b(_0x14f480.querySelector(".resp-view-toggle"), "pretty");
    _0x5d3ef2(_0x4d065d, _0x453400, false);
    _0x14f480.querySelector(".resp-status").textContent = _0x5cc7ea.statusCode != null ? _0x5cc7ea.statusCode : "-";
    _0x5d3ef2(_0xff8f28, "pretty", false);
    _0x21d1ca(_0x14f480, false);
    _0x48bbf(_0x14f480);
    _0x31fbe6(_0x14f480, _0x5cc7ea);
    _0x2eff66(_0x14f480, _0x5cc7ea);
    _0x42421b(_0x14f480);
    _0x2d0555(_0x14f480, _0x29aecb);
  }
  function _0x252e3e(_0x4d539b) {
    const _0x166c17 = String(_0x4d539b || "");
    if (!_0x166c17) {
      return {
        lines: 0,
        chars: 0
      };
    }
    return {
      lines: _0x166c17.split("\n").length,
      chars: _0x166c17.length
    };
  }
  function _0x48bbf(_0x2dd9c7) {
    if (!_0x2dd9c7) {
      return;
    }
    const _0x12b2d5 = _0x307492(_0x2dd9c7.querySelector(".req-raw"));
    const _0x4f93a5 = _0x307492(_0x2dd9c7.querySelector(".resp-raw"));
    const _0x1de896 = _0x252e3e(_0x12b2d5);
    const _0x244e3a = _0x252e3e(_0x4f93a5);
    const _0x228987 = _0x1e1308 => _0x850dc("textStatFormat", [_0x1e1308.lines, _0x1e1308.chars]);
    const _0xb19789 = _0x2dd9c7.querySelector(".meta-req-raw");
    const _0x1f6240 = _0x2dd9c7.querySelector(".meta-resp-raw");
    if (_0xb19789) {
      _0xb19789.textContent = _0x228987(_0x1de896);
    }
    if (_0x1f6240) {
      _0x1f6240.textContent = _0x228987(_0x244e3a);
    }
  }
  function _0x21d1ca(_0x53a6dd, _0x49efc3) {
    if (!_0x53a6dd) {
      return;
    }
    [".req-raw", ".resp-raw"].forEach(_0x19a3f4 => {
      const _0x4de2b2 = _0x53a6dd.querySelector(_0x19a3f4);
      if (!_0x4de2b2) {
        return;
      }
      const _0x3bdfa = _0x4de2b2.closest(".replay-packet-wrap");
      const _0x67891f = _0x3bdfa && _0x3bdfa.querySelector(".replay-packet-scroll");
      const _0x496db6 = _0x67891f || _0x4de2b2;
      _0x4de2b2.style.overflowY = "";
      _0x4de2b2.style.maxHeight = "";
      _0x4de2b2.style.minHeight = "";
      _0x496db6.style.maxHeight = "";
      _0x496db6.style.minHeight = "";
      if (_0x49efc3) {
        _0x496db6.style.maxHeight = "72vh";
        _0x496db6.style.minHeight = "320px";
        if (_0x67891f) {
          _0x67891f.style.overflowY = "auto";
        }
        _0x4de2b2.dataset.expanded = "1";
      } else {
        {
          _0x496db6.style.maxHeight = "300px";
          _0x496db6.style.minHeight = "220px";
          if (_0x67891f) {
            _0x67891f.style.overflowY = "auto";
          }
          _0x4de2b2.dataset.expanded = "0";
        }
      }
      _0x4de2b2.title = "Double-click to expand/collapse";
    });
  }
  function _0x1b9396(_0x1a4695, _0x5a2de5) {
    const _0x55157f = _0x1a4695.querySelector(".btn-collapse");
    if (_0x55157f) {
      _0x55157f.onclick = () => _0x1f3d9b({
        actionRefresh: true,
        viewHint: _0x3a0472
      });
    }
    const _0x27ae28 = _0x1a4695.querySelector(".btn-replay");
    if (_0x27ae28) {
      _0x27ae28.onclick = () => {
        {
          const _0x381367 = _0x4e4d20(_0x1a4695);
          const _0x48c048 = _0xb31434.find(_0x14a4fd => _0x14a4fd.id === _0x5a2de5) || _0xa02ab3.find(_0x48a5f6 => _0x48a5f6.id === _0x5a2de5) || null;
          _0x5cf305(_0x381367, _0x48c048 ? _0x48c048.url || "" : "", _0x65db10(_0x48c048));
        }
      };
    }
    const _0x43516e = _0x1a4695.querySelector(".btn-download");
    if (_0x43516e) {
      _0x43516e.onclick = () => _0x407f30(_0x5a2de5);
    }
    const _0x13fbe8 = _0x1a4695.querySelector(".btn-format-packet");
    if (_0x13fbe8) {
      _0x13fbe8.onclick = () => _0x58148b(_0x1a4695);
    }
    const _0x5a318e = _0x1a4695.querySelector(".btn-delete");
    if (_0x5a318e) {
      _0x5a318e.onclick = () => _0x3fe2ca(_0x5a2de5);
    }
    const _0x147098 = _0x1a4695.querySelector(".btn-ai");
    if (_0x147098) {
      _0x147098.onclick = () => {
        if (!_0x3e8fd4()) {
          return;
        }
        _0xd0a6f6(_0x5a2de5, _0x1a4695.closest(".record-item"));
      };
    }
    const _0x5f2342 = _0x1a4695.querySelector(".btn-ai-crypto");
    _0x5f2342 && (_0x5f2342.addEventListener("pointerdown", () => {
      {
        const _0x126c07 = _0x27a146(_0x1a4695, "resp");
        const _0x43c0a9 = _0x126c07 ? null : _0x27a146(_0x1a4695, "req");
        const _0x48f8d2 = _0x126c07 ? "resp" : _0x43c0a9 ? "req" : "";
        _0x447463(_0x5f2342, _0x126c07 || _0x43c0a9 || null);
        if (_0x48f8d2) {
          _0x5f2342.dataset.cryptoSelectionSide = _0x48f8d2;
        } else {
          delete _0x5f2342.dataset.cryptoSelectionSide;
        }
      }
    }, true), _0x5f2342.onclick = () => {
      if (!_0x3e8fd4()) {
        return;
      }
      const _0xf3693f = _0x529f19(_0x5f2342);
      const _0x18c90d = _0x5f2342.dataset.cryptoSelectionSide === "resp" ? "resp" : "req";
      if (_0xf3693f && _0xf3693f.range) {
        _0xd7c27d(_0x5a2de5, _0x1a4695.closest(".record-item"), {
          context: {
            kind: "inline",
            inline: _0x1a4695,
            side: _0x18c90d,
            recordId: String(_0x5a2de5 || ""),
            selectionSnapshot: _0xf3693f
          },
          scope: "selection",
          useCache: true,
          cacheTag: "auto:selection:" + _0x18c90d
        });
        return;
      }
      _0xd7c27d(_0x5a2de5, _0x1a4695.closest(".record-item"));
    });
    const _0x4b5018 = _0x1a4695.querySelector(".btn-dark-link");
    if (_0x4b5018) {
      _0x4b5018.onclick = () => {
        if (!_0x3e8fd4()) {
          return;
        }
        _0x4e17cc(_0x5a2de5, _0x1a4695.closest(".record-item"));
      };
    }
    const _0x1c1fb5 = _0x1a4695.querySelector(".btn-release");
    if (_0x1c1fb5) {
      _0x1c1fb5.onclick = () => {
        Promise.resolve(_0xf58f09(_0x5a2de5)).finally(() => {
          {
            _0x1f3d9b({
              skipRefresh: true
            });
          }
        });
      };
    }
    const _0x11cae7 = _0x1a4695.querySelector(".btn-drop");
    if (_0x11cae7) {
      _0x11cae7.onclick = () => {
        Promise.resolve(_0x2073c3(_0x5a2de5)).finally(() => {
          _0x1f3d9b({
            skipRefresh: true
          });
        });
      };
    }
    [".req-raw", ".resp-raw"].forEach(_0x11eab4 => {
      const _0x43128e = _0x1a4695.querySelector(_0x11eab4);
      if (!_0x43128e) {
        return;
      }
      _0x43128e.addEventListener("input", () => {
        {
          const _0x2ea102 = String(_0x5a2de5 || "");
          const _0x600926 = _0x11eab4 === ".resp-raw" ? "resp" : "req";
          const _0x4a4ca6 = _0x3cb71f(_0x43128e);
          if (_0x2ea102) {
            _0x40e46a(_0x2ea102, _0x600926, _0x4a4ca6);
          }
          _0x9fe1e1(_0x43128e, _0x4a4ca6);
          _0x5d3ef2(_0x43128e, _0x43128e.dataset.viewMode || _0x38b968(_0x43128e), true);
          _0x48bbf(_0x1a4695);
          const _0x49471d = _0x307492(_0x43128e);
          if (_0x2ea102) {
            if (_0x11eab4 === ".req-raw") {
              _0x52e466.set(_0x2ea102, _0x49471d);
            } else {
              _0x14b54d.set(_0x2ea102, _0x49471d);
            }
          }
          _0x2d0555(_0x1a4695, _0x2ea102);
          _0x42421b(_0x1a4695);
        }
      });
    });
    _0x1a4695.querySelectorAll(".req-view-toggle .view-btn, .resp-view-toggle .view-btn").forEach(_0x1b21cb => {
      if (_0x1b21cb.dataset.bound) {
        return;
      }
      _0x1b21cb.dataset.bound = "1";
      _0x1b21cb.addEventListener("click", _0x362b5e => {
        {
          _0x362b5e.preventDefault();
          _0x362b5e.stopPropagation();
          const _0x4363f2 = _0x1b21cb.getAttribute("data-mode") || "pretty";
          const _0x24a397 = !!_0x1b21cb.closest(".req-view-toggle");
          const _0x32dd42 = _0x1a4695.querySelector(_0x24a397 ? ".req-raw" : ".resp-raw");
          const _0x56a8b3 = _0x1a4695.querySelector(_0x24a397 ? ".req-view-toggle" : ".resp-view-toggle");
          if (!_0x32dd42) {
            return;
          }
          _0x50f57b(_0x56a8b3, _0x4363f2);
          _0x5d3ef2(_0x32dd42, _0x4363f2, false);
          _0x42421b(_0x1a4695);
          const _0x1b093d = _0x1a4695.querySelector(_0x24a397 ? ".req-search-input" : ".resp-search-input");
          const _0x42ac56 = _0x1a4695.querySelector(_0x24a397 ? ".req-search-count" : ".resp-search-count");
          if (_0x1b093d && _0x42ac56) {
            _0x25fc83(_0x32dd42, _0x1b093d, _0x42ac56);
          }
        }
      });
    });
    _0x1a4695.querySelectorAll(".inline-undo-btn, .inline-redo-btn").forEach(_0x3e1ed5 => {
      {
        if (_0x3e1ed5.dataset.bound) {
          return;
        }
        _0x3e1ed5.dataset.bound = "1";
        _0x3e1ed5.addEventListener("click", _0x61a82a => {
          {
            _0x61a82a.preventDefault();
            _0x61a82a.stopPropagation();
            const _0x26154e = String(_0x5a2de5 || "");
            if (!_0x26154e) {
              return;
            }
            const _0x11b3f4 = _0x3e1ed5.getAttribute("data-side") === "resp" ? "resp" : "req";
            const _0x259262 = _0x5cae08(_0x26154e, _0x11b3f4);
            const _0x1f2796 = _0x4d321c.get(_0x259262) || [];
            const _0x44edab = _0x16baa1.get(_0x259262) || [];
            const _0xa743fc = _0x1a4695.querySelector(_0x11b3f4 === "resp" ? ".resp-raw" : ".req-raw");
            if (!_0xa743fc) {
              return;
            }
            const _0x422076 = _0x307492(_0xa743fc);
            if (_0x3e1ed5.classList.contains("inline-undo-btn")) {
              if (_0x1f2796.length === 0) {
                return;
              }
              const _0x25f2c4 = _0x1f2796.pop();
              _0x44edab.push(_0x422076);
              _0x52bc70.set(_0x259262, _0x25f2c4);
              _0x6c37b(_0x1a4695, _0x26154e, _0x11b3f4, _0x25f2c4);
            } else {
              if (_0x44edab.length === 0) {
                return;
              }
              const _0x4e8d2f = _0x44edab.pop();
              _0x1f2796.push(_0x422076);
              _0x52bc70.set(_0x259262, _0x4e8d2f);
              _0x6c37b(_0x1a4695, _0x26154e, _0x11b3f4, _0x4e8d2f);
            }
            _0x4d321c.set(_0x259262, _0x1f2796);
            _0x16baa1.set(_0x259262, _0x44edab);
            _0x2d0555(_0x1a4695, _0x26154e);
          }
        });
      }
    });
    _0x1a4695.querySelectorAll(".inline-crypto-trigger").forEach(_0x5703dc => {
      {
        if (_0x5703dc.dataset.bound) {
          return;
        }
        _0x5703dc.dataset.bound = "1";
        _0x5703dc.addEventListener("pointerdown", () => {
          const _0x420695 = _0x5703dc.getAttribute("data-side") === "resp" ? "resp" : "req";
          _0x447463(_0x5703dc, _0x27a146(_0x1a4695, _0x420695));
        }, true);
        _0x5703dc.addEventListener("click", _0x382e4f => {
          _0x382e4f.preventDefault();
          _0x382e4f.stopPropagation();
          const _0x403329 = _0x5703dc.getAttribute("data-side") === "resp" ? "resp" : "req";
          _0x244212(_0x5703dc, {
            kind: "inline",
            inline: _0x1a4695,
            side: _0x403329,
            recordId: String(_0x5a2de5 || ""),
            selectionSnapshot: _0x529f19(_0x5703dc)
          });
        });
      }
    });
    const _0x16b350 = () => {
      const _0x1799da = _0x1a4695.querySelector(".resp-raw") || _0x1a4695.querySelector(".req-raw");
      const _0x33c91e = _0x1799da && _0x1799da.dataset.expanded === "1";
      _0x21d1ca(_0x1a4695, !_0x33c91e);
    };
    [".req-raw", ".resp-raw"].forEach(_0x59d491 => {
      {
        const _0x4a9337 = _0x1a4695.querySelector(_0x59d491);
        _0x4a9337 && !_0x4a9337.dataset.toggleBound && (_0x4a9337.dataset.toggleBound = "1", _0x4a9337.addEventListener("dblclick", _0x16b350));
      }
    });
    _0x1a4695.querySelectorAll(".field-sensitive-tag").forEach(_0x290cb3 => {
      _0x290cb3.onclick = _0x59cff3 => {
        _0x59cff3.preventDefault();
        _0x59cff3.stopPropagation();
        const _0x5360af = String(_0x290cb3.getAttribute("data-target-field") || "");
        const _0x187241 = String(_0x290cb3.getAttribute("data-match") || "");
        const _0x343355 = String(_0x290cb3.getAttribute("data-match-fallback") || "");
        let _0x5cd048 = "";
        let _0xc5f13e = "";
        try {
          _0x5cd048 = decodeURIComponent(_0x187241);
        } catch (_0x1f660d) {
          _0x5cd048 = _0x187241;
        }
        try {
          _0xc5f13e = decodeURIComponent(_0x343355);
        } catch (_0x56202e) {
          _0xc5f13e = _0x343355;
        }
        _0x122933(_0x1a4695, _0x5360af, _0x5cd048, _0xc5f13e);
      };
    });
    const _0x3a0b20 = _0x1a4695.querySelector(".inline-hit-summary");
    if (_0x3a0b20 && !_0x3a0b20.dataset.bound) {
      {
        _0x3a0b20.dataset.bound = "1";
        _0x3a0b20.addEventListener("click", _0x525a56 => {
          const _0xe7aca4 = _0x525a56.target.closest(".inline-hit-chip");
          if (!_0xe7aca4) {
            return;
          }
          _0x525a56.preventDefault();
          _0x525a56.stopPropagation();
          const _0x519d75 = String(_0xe7aca4.getAttribute("data-target-field") || "");
          const _0x3bc0ea = String(_0xe7aca4.getAttribute("data-match") || "");
          const _0xe6e0bd = String(_0xe7aca4.getAttribute("data-match-fallback") || "");
          let _0x14b555 = "";
          let _0x25cb34 = "";
          try {
            _0x14b555 = decodeURIComponent(_0x3bc0ea);
          } catch (_0x33fce9) {
            _0x14b555 = _0x3bc0ea;
          }
          try {
            _0x25cb34 = decodeURIComponent(_0xe6e0bd);
          } catch (_0x28e2f0) {
            _0x25cb34 = _0xe6e0bd;
          }
          _0x122933(_0x1a4695, _0x519d75, _0x14b555, _0x25cb34);
        });
      }
    }
    _0x219155(_0x1a4695, ".req-search-input", ".req-raw", ".req-search-prev", ".req-search-next", ".req-search-count");
    _0x219155(_0x1a4695, ".resp-search-input", ".resp-raw", ".resp-search-prev", ".resp-search-next", ".resp-search-count");
    const _0x15754e = _0x1a4695.querySelector(".btn-copy-request");
    if (_0x15754e) {
      _0x15754e.onclick = () => {
        const _0x1d8f3f = _0x1a4695.querySelector(".req-raw");
        const _0x4a5391 = _0x1d8f3f && _0x1d8f3f.dataset ? _0x1d8f3f.dataset.viewMode || "pretty" : "pretty";
        const _0x534784 = _0x4e4d20(_0x1a4695);
        const _0x38e25d = _0x4a5391 === "hex" ? _0x37c872(_0x534784) : _0x4a5391 === "raw" ? _0x233161(_0x534784, "raw") : _0x233161(_0x534784, "pretty");
        _0x3f2596(_0x38e25d).then(() => _0x3212e3(_0x15754e, _0x850dc("copied"), 1200)).catch(() => _0x3212e3(_0x15754e, _0x850dc("copyFailed"), 1400));
      };
    }
    const _0x12754e = _0x1a4695.querySelector(".btn-copy-response");
    if (_0x12754e) {
      _0x12754e.onclick = () => {
        {
          const _0x5f30d7 = _0x1a4695.querySelector(".resp-raw");
          const _0x2504d9 = _0x5f30d7 && _0x5f30d7.dataset ? _0x5f30d7.dataset.viewMode || "pretty" : "pretty";
          const _0x440e75 = _0x4449f6(_0x1a4695);
          const _0x4804d4 = _0x2504d9 === "hex" ? _0x37c872(_0x440e75) : _0x2504d9 === "raw" ? _0x233161(_0x440e75, "raw") : _0x233161(_0x440e75, "pretty");
          _0x3f2596(_0x4804d4).then(() => _0x3212e3(_0x12754e, _0x850dc("copied"), 1200)).catch(() => _0x3212e3(_0x12754e, _0x850dc("copyFailed"), 1400));
        }
      };
    }
  }
  function _0x495f70(_0x3a40ea, _0x17d465) {
    const _0x457a53 = _0x3a40ea.statusCode >= 200 && _0x3a40ea.statusCode < 300 ? "ok" : "err";
    const _0x10247c = _0x4fe474(_0x3a40ea.url || "", _0x2f8225());
    const _0x1b676e = _0x1e8ea0.get(String(_0x3a40ea.id)) || 0;
    return "<div class=\"record-item\" data-id=\"" + _0x3a40ea.id + "\">" + "<div class=\"record-row\">" + "<label class=\"row-select-wrap\"><input type=\"checkbox\" class=\"row-select\" data-id=\"" + _0x3a40ea.id + "\"" + (_0x37d6ec.has(_0x3a40ea.id) ? " checked" : "") + " /></label>" + "<span class=\"record-no\">#" + (_0x1b676e || _0x17d465 + 1) + "</span>" + "<span class=\"record-method " + (_0x3a40ea.method || "get").toLowerCase() + "\">" + (_0x3a40ea.method || "GET") + "</span>" + "<span class=\"record-status " + _0x457a53 + "\">" + (_0x3a40ea.statusCode || "-") + "</span>" + "<span class=\"record-side\">" + _0x47f251(_0x297a34(_0x3a40ea)) + "</span>" + "<span class=\"record-type\">" + (_0x3a40ea.resourceType || "other") + "</span>" + "<span class=\"record-url\" title=\"" + _0x47f251(_0x3a40ea.url || "") + "\">" + _0x10247c + "</span>" + "<span class=\"record-time\">" + _0x4b7f7d(_0x3a40ea.timestamp) + "</span>" + "<span class=\"record-size\">" + _0x47bf5c(_0x3a40ea.sizeBytes) + "</span>" + "<span class=\"record-duration\">" + _0x35366a(_0x3a40ea.durationMs) + "</span>" + "<span class=\"record-sensitive\">" + _0x44e0b9(_0x3a40ea) + "</span>" + "<div class=\"record-actions\">" + "<button type=\"button\" class=\"btn-detail\" data-action=\"detail\" data-id=\"" + _0x3a40ea.id + "\">" + _0x850dc("detail") + "</button>" + "<button type=\"button\" data-action=\"download\" data-id=\"" + _0x3a40ea.id + "\" class=\"primary\">" + _0x850dc("download") + "</button>" + "<button type=\"button\" data-action=\"delete\" data-id=\"" + _0x3a40ea.id + "\">" + _0x850dc("delete") + "</button>" + "<button type=\"button\" data-action=\"replay\" data-id=\"" + _0x3a40ea.id + "\">" + _0x850dc("replay") + "</button>" + "<button type=\"button\" data-action=\"ai\" data-pro-feature=\"ai\" data-id=\"" + _0x3a40ea.id + "\">" + _0x850dc("aiAnalyze") + "</button>" + "</div>" + "</div>" + "<div class=\"record-detail-inline\" style=\"display:none\">" + "<div class=\"detail-inline-columns\">" + "<div class=\"detail-inline-left\">" + "<div class=\"column-title-row\">" + "<div class=\"inline-pane-head-body\">" + "<div class=\"inline-title-row1\">" + "<div class=\"inline-title-left\">" + "<div class=\"inline-pane-title-cluster\">" + "<span class=\"inline-pane-accent\" aria-hidden=\"true\"></span>" + "<label class=\"column-title hx-copy-req-full-url\">" + _0x850dc("request") + "</label>" + "</div>" + _0x5d42b0("req") + _0x173e9b("req") + "</div>" + "<button type=\"button\" class=\"inline-copy-btn btn-copy-request\">" + _0x850dc("copy") + "</button>" + "</div>" + "<div class=\"inline-title-row2\">" + "<div class=\"inline-tabs-left\"><span class=\"view-toggle req-view-toggle\">" + "<button type=\"button\" class=\"view-btn active\" data-mode=\"pretty\">" + _0x850dc("pretty") + "</button>" + "<button type=\"button\" class=\"view-btn\" data-mode=\"raw\">" + _0x850dc("rawText") + "</button>" + "<button type=\"button\" class=\"view-btn\" data-mode=\"hex\">" + _0x850dc("hex") + "</button>" + "<button type=\"button\" class=\"view-btn\" data-mode=\"sensitive\">" + _0x850dc("replaySensitive") + "</button>" + "</span></div>" + "<div class=\"inline-undo-redo\">" + "<button type=\"button\" class=\"inline-undo-btn\" data-side=\"req\" title=\"" + _0x47f251(_0x850dc("undo") || "Undo") + "\">←</button>" + "<button type=\"button\" class=\"inline-redo-btn\" data-side=\"req\" title=\"" + _0x47f251(_0x850dc("redo") || "Redo") + "\">→</button>" + "</div>" + "</div>" + "</div></div>" + "<div class=\"replay-packet-wrap detail-inline-packet-wrap\">" + "<div class=\"replay-packet-scroll\">" + "<div class=\"replay-packet-inner\">" + "<div class=\"packet-line-gutter\" aria-hidden=\"true\"></div>" + "<div class=\"packet-code req-raw\" contenteditable=\"plaintext-only\" spellcheck=\"false\"></div>" + "</div></div></div>" + "<div class=\"pane-hit-row\"><span class=\"field-sensitive req-raw-sensitive\"></span><span class=\"field-meta meta-req-raw\"></span></div>" + "<div class=\"pane-search-row\"><button type=\"button\" class=\"pane-search-btn req-search-prev\" title=\"Prev\">↑</button><button type=\"button\" class=\"pane-search-btn req-search-next\" title=\"Next\">↓</button><input type=\"text\" class=\"pane-search-input req-search-input\" placeholder=\"" + _0x47f251(_0x850dc("searchPlaceholder")) + "\" /><span class=\"pane-search-count req-search-count\"></span></div>" + "</div>" + "<div class=\"detail-inline-divider\"></div>" + "<div class=\"detail-inline-right\">" + "<div class=\"column-title-row\">" + "<div class=\"inline-pane-head-body\">" + "<div class=\"inline-title-row1\">" + "<div class=\"inline-title-left\">" + "<div class=\"inline-pane-title-cluster\">" + "<span class=\"inline-pane-accent\" aria-hidden=\"true\"></span>" + "<label class=\"column-title hx-download-req-resp-txt\">" + _0x850dc("response") + " <span class=\"resp-status\">-</span></label>" + "</div>" + _0x5d42b0("resp") + _0x173e9b("resp") + "</div>" + "<button type=\"button\" class=\"inline-copy-btn btn-copy-response\">" + _0x850dc("copy") + "</button>" + "</div>" + "<div class=\"inline-title-row2\">" + "<div class=\"inline-tabs-left\"><span class=\"view-toggle resp-view-toggle\">" + "<button type=\"button\" class=\"view-btn active\" data-mode=\"pretty\">" + _0x850dc("pretty") + "</button>" + "<button type=\"button\" class=\"view-btn\" data-mode=\"raw\">" + _0x850dc("rawText") + "</button>" + "<button type=\"button\" class=\"view-btn\" data-mode=\"hex\">" + _0x850dc("hex") + "</button>" + "<button type=\"button\" class=\"view-btn\" data-mode=\"render\">" + _0x850dc("replayRender") + "</button>" + "<button type=\"button\" class=\"view-btn\" data-mode=\"sensitive\">" + _0x850dc("replaySensitive") + "</button>" + "</span></div>" + "<div class=\"inline-undo-redo\">" + "<button type=\"button\" class=\"inline-undo-btn\" data-side=\"resp\" title=\"" + _0x47f251(_0x850dc("undo") || "Undo") + "\">←</button>" + "<button type=\"button\" class=\"inline-redo-btn\" data-side=\"resp\" title=\"" + _0x47f251(_0x850dc("redo") || "Redo") + "\">→</button>" + "</div>" + "</div>" + "</div></div>" + "<div class=\"replay-packet-wrap detail-inline-packet-wrap\">" + "<div class=\"replay-packet-scroll\">" + "<div class=\"replay-packet-inner\">" + "<div class=\"packet-line-gutter\" aria-hidden=\"true\"></div>" + "<div class=\"packet-code resp-raw\" contenteditable=\"plaintext-only\" spellcheck=\"false\" tabindex=\"0\"></div>" + "</div></div></div>" + "<div class=\"pane-hit-row\"><span class=\"field-sensitive resp-raw-sensitive\"></span><span class=\"field-meta meta-resp-raw\"></span></div>" + "<div class=\"pane-search-row\"><button type=\"button\" class=\"pane-search-btn resp-search-prev\" title=\"Prev\">↑</button><button type=\"button\" class=\"pane-search-btn resp-search-next\" title=\"Next\">↓</button><input type=\"text\" class=\"pane-search-input resp-search-input\" placeholder=\"" + _0x47f251(_0x850dc("searchPlaceholder")) + "\" /><span class=\"pane-search-count resp-search-count\"></span></div>" + "</div>" + "</div>" + "<div class=\"inline-hit-summary\" style=\"display:none\"></div>" + "<div class=\"detail-inline-actions\">" + "<button type=\"button\" class=\"btn btn-collapse\">" + _0x850dc("collapse") + "</button>" + "<button type=\"button\" class=\"btn btn-replay\">" + _0x850dc("replay") + "</button>" + "<button type=\"button\" class=\"btn primary btn-download\">" + _0x850dc("download") + "</button>" + "<button type=\"button\" class=\"btn btn-delete\">" + _0x850dc("delete") + "</button>" + "<button type=\"button\" class=\"btn btn-format-packet\">" + _0x850dc("formatJson") + "</button>" + "<button type=\"button\" class=\"btn btn-dark-link\" data-pro-feature=\"darklink\">" + (_0x850dc("darkLinkDetectBtn") || "Detect dark links") + "</button>" + "<button type=\"button\" class=\"btn btn-ai\" data-pro-feature=\"ai\">" + _0x850dc("aiAnalyze") + "</button>" + "<button type=\"button\" class=\"btn btn-ai-crypto\" data-pro-feature=\"ai_crypto_logic\">" + (_0x850dc("cryptoEncodeOptAiLogicGuess") || "加密逻辑智能分析") + "</button>" + "</div>" + "<div class=\"ai-result-inline\" style=\"display:none;\"></div>" + "</div>" + "</div>";
  }
  function _0x56705d(_0x1102f1, _0x2b67fd) {
    const _0x3a4619 = _0x1102f1.statusCode >= 200 && _0x1102f1.statusCode < 300 ? "ok" : "err";
    const _0x2b3b57 = _0x4fe474(_0x1102f1.url || "", _0x2f8225());
    const _0x3d1d86 = _0x1e8ea0.get(String(_0x1102f1.id)) || 0;
    return "<div class=\"record-item\" data-id=\"" + _0x1102f1.id + "\">" + "<div class=\"record-row\">" + "<label class=\"row-select-wrap\"><input type=\"checkbox\" class=\"row-select\" data-id=\"" + _0x1102f1.id + "\"" + (_0x37d6ec.has(_0x1102f1.id) ? " checked" : "") + " /></label>" + "<span class=\"record-no\">#" + (_0x3d1d86 || _0x2b67fd + 1) + "</span>" + "<span class=\"record-method " + (_0x1102f1.method || "get").toLowerCase() + "\">" + (_0x1102f1.method || "GET") + "</span>" + "<span class=\"record-status " + _0x3a4619 + "\">" + (_0x1102f1.statusCode || "-") + "</span>" + "<span class=\"record-side\">" + _0x47f251(_0x297a34(_0x1102f1)) + "</span>" + "<span class=\"record-type\">" + (_0x1102f1.resourceType || "other") + "</span>" + "<span class=\"record-url\" title=\"" + _0x47f251(_0x1102f1.url || "") + "\">" + _0x2b3b57 + "</span>" + "<span class=\"record-time\">" + _0x4b7f7d(_0x1102f1.timestamp) + "</span>" + "<span class=\"record-size\">" + _0x47bf5c(_0x1102f1.sizeBytes) + "</span>" + "<span class=\"record-duration\">" + _0x35366a(_0x1102f1.durationMs) + "</span>" + "<span class=\"record-sensitive\">" + _0x44e0b9(_0x1102f1) + "</span>" + "<div class=\"record-actions\">" + "<button type=\"button\" data-action=\"detail\" data-id=\"" + _0x1102f1.id + "\">" + _0x850dc("detail") + "</button>" + "<button type=\"button\" data-action=\"delete\" data-id=\"" + _0x1102f1.id + "\">" + _0x850dc("delete") + "</button>" + "<button type=\"button\" data-action=\"replay\" data-id=\"" + _0x1102f1.id + "\">" + _0x850dc("replay") + "</button>" + "<button type=\"button\" data-action=\"release\" data-pro-feature=\"intercept\" data-id=\"" + _0x1102f1.id + "\" class=\"primary\">" + _0x850dc("release") + "</button>" + "<button type=\"button\" data-action=\"drop\" data-pro-feature=\"intercept\" data-id=\"" + _0x1102f1.id + "\">" + _0x850dc("drop") + "</button>" + "</div>" + "</div>" + "<div class=\"record-detail-inline\" style=\"display:none\">" + "<div class=\"detail-inline-columns\">" + "<div class=\"detail-inline-left\">" + "<div class=\"column-title-row\">" + "<div class=\"inline-pane-head-body\">" + "<div class=\"inline-title-row1\">" + "<div class=\"inline-title-left\">" + "<div class=\"inline-pane-title-cluster\">" + "<span class=\"inline-pane-accent\" aria-hidden=\"true\"></span>" + "<label class=\"column-title hx-copy-req-full-url\">" + _0x850dc("request") + "</label>" + "</div>" + _0x5d42b0("req") + _0x173e9b("req") + "</div>" + "<button type=\"button\" class=\"inline-copy-btn btn-copy-request\">" + _0x850dc("copy") + "</button>" + "</div>" + "<div class=\"inline-title-row2\">" + "<div class=\"inline-tabs-left\"><span class=\"view-toggle req-view-toggle\"><button type=\"button\" class=\"view-btn\" data-mode=\"pretty\">" + _0x850dc("pretty") + "</button><button type=\"button\" class=\"view-btn active\" data-mode=\"raw\">" + _0x850dc("rawText") + "</button><button type=\"button\" class=\"view-btn\" data-mode=\"hex\">" + _0x850dc("hex") + "</button><button type=\"button\" class=\"view-btn\" data-mode=\"sensitive\">" + _0x850dc("replaySensitive") + "</button></span></div>" + "<div class=\"inline-undo-redo\"><button type=\"button\" class=\"inline-undo-btn\" data-side=\"req\" title=\"" + _0x47f251(_0x850dc("undo") || "Undo") + "\">←</button><button type=\"button\" class=\"inline-redo-btn\" data-side=\"req\" title=\"" + _0x47f251(_0x850dc("redo") || "Redo") + "\">→</button></div>" + "</div>" + "</div></div>" + "<div class=\"replay-packet-wrap detail-inline-packet-wrap\">" + "<div class=\"replay-packet-scroll\">" + "<div class=\"replay-packet-inner\">" + "<div class=\"packet-line-gutter\" aria-hidden=\"true\"></div>" + "<div class=\"packet-code req-raw\" contenteditable=\"plaintext-only\" spellcheck=\"false\"></div>" + "</div></div></div>" + "<div class=\"pane-hit-row\"><span class=\"field-sensitive req-raw-sensitive\"></span><span class=\"field-meta meta-req-raw\"></span></div>" + "<div class=\"pane-search-row\"><button type=\"button\" class=\"pane-search-btn req-search-prev\" title=\"Prev\">↑</button><button type=\"button\" class=\"pane-search-btn req-search-next\" title=\"Next\">↓</button><input type=\"text\" class=\"pane-search-input req-search-input\" placeholder=\"" + _0x47f251(_0x850dc("searchPlaceholder")) + "\" /><span class=\"pane-search-count req-search-count\"></span></div>" + "</div>" + "<div class=\"detail-inline-divider\"></div>" + "<div class=\"detail-inline-right\">" + "<div class=\"column-title-row\">" + "<div class=\"inline-pane-head-body\">" + "<div class=\"inline-title-row1\">" + "<div class=\"inline-title-left\">" + "<div class=\"inline-pane-title-cluster\">" + "<span class=\"inline-pane-accent\" aria-hidden=\"true\"></span>" + "<label class=\"column-title hx-download-req-resp-txt\">" + _0x850dc("response") + " <span class=\"resp-status\">-</span></label>" + "</div>" + _0x5d42b0("resp") + _0x173e9b("resp") + "</div>" + "<button type=\"button\" class=\"inline-copy-btn btn-copy-response\">" + _0x850dc("copy") + "</button>" + "</div>" + "<div class=\"inline-title-row2\">" + "<div class=\"inline-tabs-left\"><span class=\"view-toggle resp-view-toggle\"><button type=\"button\" class=\"view-btn active\" data-mode=\"pretty\">" + _0x850dc("pretty") + "</button><button type=\"button\" class=\"view-btn\" data-mode=\"raw\">" + _0x850dc("rawText") + "</button><button type=\"button\" class=\"view-btn\" data-mode=\"hex\">" + _0x850dc("hex") + "</button><button type=\"button\" class=\"view-btn\" data-mode=\"render\">" + _0x850dc("replayRender") + "</button><button type=\"button\" class=\"view-btn\" data-mode=\"sensitive\">" + _0x850dc("replaySensitive") + "</button></span></div>" + "<div class=\"inline-undo-redo\"><button type=\"button\" class=\"inline-undo-btn\" data-side=\"resp\" title=\"" + _0x47f251(_0x850dc("undo") || "Undo") + "\">←</button><button type=\"button\" class=\"inline-redo-btn\" data-side=\"resp\" title=\"" + _0x47f251(_0x850dc("redo") || "Redo") + "\">→</button></div>" + "</div>" + "</div></div>" + "<div class=\"replay-packet-wrap detail-inline-packet-wrap\">" + "<div class=\"replay-packet-scroll\">" + "<div class=\"replay-packet-inner\">" + "<div class=\"packet-line-gutter\" aria-hidden=\"true\"></div>" + "<div class=\"packet-code resp-raw\" contenteditable=\"plaintext-only\" spellcheck=\"false\" tabindex=\"0\"></div>" + "</div></div></div>" + "<div class=\"pane-hit-row\"><span class=\"field-sensitive resp-raw-sensitive\"></span><span class=\"field-meta meta-resp-raw\"></span></div>" + "<div class=\"pane-search-row\"><button type=\"button\" class=\"pane-search-btn resp-search-prev\" title=\"Prev\">↑</button><button type=\"button\" class=\"pane-search-btn resp-search-next\" title=\"Next\">↓</button><input type=\"text\" class=\"pane-search-input resp-search-input\" placeholder=\"" + _0x47f251(_0x850dc("searchPlaceholder")) + "\" /><span class=\"pane-search-count resp-search-count\"></span></div>" + "</div>" + "</div>" + "<div class=\"inline-hit-summary\" style=\"display:none\"></div>" + "<div class=\"detail-inline-actions\">" + "<button type=\"button\" class=\"btn btn-collapse\">" + _0x850dc("collapse") + "</button>" + "<button type=\"button\" class=\"btn btn-replay\">" + _0x850dc("replay") + "</button>" + "<button type=\"button\" class=\"btn btn-format-packet\">" + _0x850dc("formatJson") + "</button>" + "<button type=\"button\" class=\"btn btn-delete\">" + _0x850dc("delete") + "</button>" + "<button type=\"button\" class=\"btn btn-release primary\" data-pro-feature=\"intercept\">" + _0x850dc("release") + "</button>" + "<button type=\"button\" class=\"btn btn-drop\" data-pro-feature=\"intercept\">" + _0x850dc("drop") + "</button>" + "<button type=\"button\" class=\"btn btn-ai\" data-pro-feature=\"ai\">" + _0x850dc("aiAnalyze") + "</button>" + "<button type=\"button\" class=\"btn btn-ai-crypto\" data-pro-feature=\"ai_crypto_logic\">" + (_0x850dc("cryptoEncodeOptAiLogicGuess") || "加密逻辑智能分析") + "</button>" + "</div>" + "<div class=\"ai-result-inline\" style=\"display:none;\"></div>" + "</div>" + "</div>";
  }
  function _0x1102dd(_0x13833e, _0x110ac4, _0x11094d, _0x237781) {
    {
      _0x13833e.innerHTML = "";
      if (!_0x110ac4.length) {
        _0x18561b();
        if (_0x237781) {
          _0x237781();
        }
        return;
      }
      let _0x1f7e03 = 0;
      function _0x519747() {
        {
          let _0x14cadd = "";
          const _0x979d51 = Math.min(_0x1f7e03 + _0x3206e0, _0x110ac4.length);
          for (; _0x1f7e03 < _0x979d51; _0x1f7e03++) {
            _0x14cadd += _0x11094d(_0x110ac4[_0x1f7e03], _0x1f7e03);
          }
          _0x13833e.insertAdjacentHTML("beforeend", _0x14cadd);
          if (_0x1f7e03 < _0x110ac4.length) {
            setTimeout(_0x519747, 0);
          } else {
            {
              _0x18561b();
              if (_0x237781) {
                _0x237781();
              }
            }
          }
        }
      }
      _0x519747();
    }
  }
  function _0x2000d6() {
    _0x19dac0.style.display = _0xb31434.length ? "none" : "block";
    _0x1102dd(_0x45bd18, _0xb31434, _0x495f70, () => {
      _0x3fcfe5();
      _0x3507();
      _0x14c7ff();
    });
  }
  function _0x407f30(_0x4d3d4a) {
    _0x4b6be4.runtime.sendMessage({
      type: "GET_RECORD",
      id: _0x4d3d4a
    }, _0x4460b0 => {
      {
        const _0x406240 = _0x4460b0 && _0x4460b0.record;
        if (!_0x406240) {
          return;
        }
        const _0x12e171 = _0x3502c7(_0x406240);
        const _0x4368e8 = new Blob([_0x12e171], {
          type: "text/plain; charset=utf-8"
        });
        const _0x559e0f = document.createElement("a");
        _0x559e0f.href = URL.createObjectURL(_0x4368e8);
        _0x559e0f.download = "HawkEye-" + (_0x406240.id || _0x4d3d4a) + ".txt";
        _0x559e0f.click();
        URL.revokeObjectURL(_0x559e0f.href);
      }
    });
  }
  function _0xd0a6f6(_0x1c5235, _0x4361bf, _0x2de423) {
    if (!_0x3e8fd4()) {
      return;
    }
    const _0x2c2851 = typeof _0x4361bf === "string" ? _0x45bd18.querySelector(".record-item[data-id=\"" + _0x4361bf + "\"]") : _0x4361bf;
    if (!_0x2c2851) {
      return;
    }
    const _0x327056 = _0x2c2851.querySelector(".ai-result-inline");
    if (!_0x327056) {
      return;
    }
    const _0x436bdd = String(_0x1c5235 || "");
    const _0x251053 = !!(_0x2de423 && _0x2de423.forcePrompt);
    const _0x19a784 = _0x436bdd ? _0xa9876.get(_0x436bdd) : null;
    if (!_0x251053 && _0x19a784 && _0x19a784.html) {
      if (_0x436bdd) {
        _0x2b4457.set(_0x436bdd, "ai");
      }
      _0x5ad7a7(_0x2c2851, _0x436bdd, "ai");
      return;
    }
    _0x4b6be4.runtime.sendMessage({
      type: "GET_RECORD",
      id: _0x1c5235
    }, async _0x2d7e58 => {
      const _0x17b963 = _0x2d7e58 && _0x2d7e58.record;
      if (!_0x17b963) {
        _0x327056.className = "ai-result-inline error";
        _0x327056.textContent = _0x850dc("analysisError");
        return;
      }
      const _0xea2df3 = _0x3c9cec || "zh_CN";
      const _0x23d569 = _0x35d00b(_0xea2df3);
      const _0x1e095a = await _0x165698({
        isEn: _0x23d569,
        title: _0x23d569 ? "AI Analysis" : "AI分析",
        okText: _0x23d569 ? "Analyze" : "开始分析",
        tip: _0x23d569 ? "Optionally add context, known clues, or specific focus. Leave empty to use the default packet analysis flow." : "可选填写补充说明、已知线索或希望重点关注的方向。留空则按默认数据包分析流程执行。"
      });
      if (!_0x1e095a) {
        return;
      }
      const _0x1e574e = _0x5c7ab1(_0x1e095a.extraPrompt || "");
      const _0x1f843a = _0x1e574e ? "note:" + _0x25c43b(_0x1e574e).slice(0, 12) : "default";
      if (_0x436bdd) {
        _0x2b4457.set(_0x436bdd, "ai");
      }
      const _0x3b10d3 = _0x436bdd ? _0xa9876.get(_0x436bdd) : null;
      if (!_0x251053 && _0x436bdd && _0x3b10d3 && String(_0x3b10d3.cacheTag || "default") === _0x1f843a) {
        _0x5ad7a7(_0x2c2851, _0x436bdd, "ai");
        return;
      }
      _0x327056.style.display = "block";
      _0x327056.className = "ai-result-inline loading";
      _0x327056.textContent = _0x850dc("analyzing");
      _0x4b6be4.runtime.sendMessage({
        type: "GET_SETTINGS",
        keys: ["aiProvider", "aiBaseUrl", "aiApiKey", "aiModel", "language"]
      }, _0x522a05 => {
        {
          const _0x4230a7 = _0x522a05 && _0x522a05.language || (_0x4b6be4.i18n && _0x4b6be4.i18n.getUILanguage ? _0x4b6be4.i18n.getUILanguage() : "") || "zh_CN";
          const _0x4bb8cb = _0x35d00b(_0x4230a7);
          const _0xcf5590 = {
            baseUrl: _0x522a05.aiBaseUrl || "https://api.openai.com",
            apiKey: _0x522a05.aiApiKey || "",
            model: _0x522a05.aiModel || "gpt-4o-mini",
            language: _0x4230a7
          };
          const _0x491934 = (_0x4230a7 === "en" ? "Analyze this HTTP request/response for security issues, dark links, or sensitive data.\nOutput MUST include a first line in this exact format: Risk Level: High/Medium/Low.\nInclude a Technology fingerprint section: infer language/runtime, web server and version if visible, frameworks, and suspected CMS/enterprise product (e.g. Weaver OA) from headers, cookies, URL paths, and body snippets; cite brief evidence.\n\n" : "请分析以下 HTTP 请求/响应中的安全风险、暗链或敏感信息。\n输出首行必须为：风险等级：高/中/低。\n请单独给出「技术指纹」小节：依据 Header、Cookie、URL 路径与正文片段，尽量识别语言/运行时、服务器及版本（若可辨）、框架及疑似 CMS/OA（如泛微 OA 等），并附简要依据。\n\n") + "Request: " + (_0x17b963.method || "GET") + " " + (_0x17b963.url || "") + "\n" + "Response status: " + (_0x17b963.statusCode || "") + "\n" + "Request body (excerpt): " + String(_0x17b963.requestBody || "").slice(0, 2000) + "\n" + "Response body (excerpt): " + String(_0x17b963.responseBody || "").slice(0, 2000);
          const _0x1f8c4e = _0x2cc3a9(_0x491934, _0x1e574e, _0x4bb8cb);
          _0x4b6be4.runtime.sendMessage({
            type: "AI_ANALYZE",
            task: "record_review",
            prompt: _0x1f8c4e,
            config: _0xcf5590,
            memoryUrl: _0x17b963.url || "",
            memoryHost: _0x558ff2(_0x17b963.url || "")
          }, _0x1e62f2 => {
            if (_0x1e62f2 && _0x1e62f2.ok) {
              const _0x27b334 = Date.now();
              const _0x2e85ca = _0x77a960(_0x1e62f2.content || _0x850dc("analysisResult"), {
                model: _0xcf5590.model,
                baseUrl: _0xcf5590.baseUrl,
                generatedAt: _0x27b334,
                lang: _0x4230a7,
                reportId: _0x225fa6(_0x27b334),
                targetDomain: _0x558ff2(_0x17b963.url || ""),
                requestNo: _0x17b963.id || _0x1c5235,
                url: _0x17b963.url || "",
                reanalyzeKind: "ai",
                recordId: _0x436bdd || _0x1c5235
              });
              _0x436bdd && _0xa9876.set(_0x436bdd, {
                className: "ai-result-inline md-rendered",
                html: _0x2e85ca,
                ts: _0x27b334,
                cacheTag: _0x1f843a
              });
              if (!_0x5ad7a7(_0x2c2851, _0x436bdd || _0x1c5235, "ai")) {
                _0x327056.style.display = "block";
                _0x327056.className = "ai-result-inline md-rendered";
                _0x327056.innerHTML = "<section class=\"inline-report-section report-ai\" data-report-kind=\"ai\">" + _0x2e85ca + "</section>";
                _0x9d1273(_0x2c2851, _0x327056);
                _0xf30b52(_0x327056);
                _0x32ebe3(_0x327056);
              }
            } else {
              _0x327056.className = "ai-result-inline error";
              _0x327056.textContent = _0x1e62f2 && _0x1e62f2.error || _0x850dc("analysisError");
            }
            if (_0x436bdd && (!_0x1e62f2 || !_0x1e62f2.ok)) {
              {
                _0xa9876.set(_0x436bdd, {
                  className: _0x327056.className,
                  html: _0x327056.innerHTML || _0x327056.textContent || "",
                  ts: Date.now(),
                  cacheTag: _0x1f843a
                });
                _0x5ad7a7(_0x2c2851, _0x436bdd, "ai");
              }
            }
          });
        }
      });
    });
  }
  async function _0x933f2e(_0x230271, _0xb73932) {
    const _0x5cf81f = _0x35d00b(_0x3c9cec);
    const _0x1c4f3c = _0x1f3c10(_0x230271, _0xb73932);
    const _0x33391d = _0x167505(_0x1c4f3c, _0x5cf81f);
    const _0x458cd4 = String(_0xb73932 || "selection");
    let _0x3972c8 = String(_0x33391d[0] && _0x33391d[0].ref || "");
    if (_0x458cd4 === "selection" && _0x33391d.some(_0x2a94e3 => _0x2a94e3 && _0x2a94e3.ref === "selection")) {
      _0x3972c8 = "selection";
    } else {
      if (_0x458cd4 === "url" && _0x33391d.some(_0x4e4241 => _0x4e4241 && _0x4e4241.ref === "url")) {
        _0x3972c8 = "url";
      }
    }
    return _0x165698({
      isEn: _0x5cf81f,
      title: _0x5cf81f ? "Smart Crypto Logic Analysis" : "加密逻辑智能分析",
      okText: _0x5cf81f ? "Analyze" : "开始分析",
      fieldOptions: _0x33391d,
      defaultTargetRef: _0x3972c8,
      fieldLabel: _0x5cf81f ? "Encryption-related field" : "关键加密字段",
      noteLabel: _0x5cf81f ? "Additional context" : "补充说明",
      tip: _0x5cf81f ? "Select the target field first, then optionally add known clues, assumptions, or validation focus." : "请先选择要分析的关键字段，再可选填写已知线索、怀疑的算法或希望重点验证的方向。",
      placeholder: _0x5cf81f ? "Optional: e.g. focus on whether the password is salted before MD5, or whether token/sign is derived from the same JS function." : "可选：例如“重点判断 password 是否先拼接固定盐值再做 MD5”“优先关注 token/sign 是否来自同一段 JS 函数”。",
      noteHint: _0x5cf81f ? "If left empty, the original crypto-logic inference flow runs directly." : "留空则直接按默认加密逻辑分析流程执行。"
    });
  }
  function _0x4bc5db(_0x3fdf52, _0x53d118) {
    const _0x221c67 = _0x53d118 && _0x53d118.querySelector ? _0x53d118.querySelector(".record-detail-inline") : null;
    if (!_0x221c67) {
      return null;
    }
    const _0x5edcef = _0x27a146(_0x221c67, "resp");
    if (_0x5edcef && _0x5edcef.range) {
      return {
        context: {
          kind: "inline",
          inline: _0x221c67,
          side: "resp",
          recordId: String(_0x3fdf52 || ""),
          selectionSnapshot: _0x5edcef
        },
        scope: "selection",
        useCache: true,
        cacheTag: "auto:selection:resp"
      };
    }
    const _0x5ea166 = _0x27a146(_0x221c67, "req");
    if (_0x5ea166 && _0x5ea166.range) {
      return {
        context: {
          kind: "inline",
          inline: _0x221c67,
          side: "req",
          recordId: String(_0x3fdf52 || ""),
          selectionSnapshot: _0x5ea166
        },
        scope: "selection",
        useCache: true,
        cacheTag: "auto:selection:req"
      };
    }
    const _0xf6207c = _0x221c67.querySelector(".req-raw");
    const _0x51b5c4 = _0xb31434.find(_0x5a3376 => String(_0x5a3376.id) === String(_0x3fdf52 || "")) || _0xa02ab3.find(_0x2a2604 => String(_0x2a2604.id) === String(_0x3fdf52 || "")) || null;
    const _0x132f5b = _0xf6207c ? _0x307492(_0xf6207c) || _0x3cb71f(_0xf6207c) || "" : _0x51b5c4 ? _0x137986(_0x51b5c4) : "";
    const _0x4fd518 = _0x3ed261(_0x132f5b);
    const _0xa70b93 = _0x4fd518 && Array.isArray(_0x4fd518.candidates) && _0x4fd518.candidates.length ? "params" : "url";
    return {
      context: {
        kind: "inline",
        inline: _0x221c67,
        side: "req",
        recordId: String(_0x3fdf52 || "")
      },
      scope: _0xa70b93,
      useCache: true,
      cacheTag: "auto:" + _0xa70b93
    };
  }
  async function _0xd7c27d(_0x4bad2c, _0x5a51ef, _0x2d94d5) {
    if (!_0x3e8fd4()) {
      return;
    }
    const _0x71ebdc = typeof _0x5a51ef === "string" ? _0x45bd18.querySelector(".record-item[data-id=\"" + _0x5a51ef + "\"]") || _0xd7a0ab.querySelector(".record-item[data-id=\"" + _0x5a51ef + "\"]") : _0x5a51ef;
    if (!_0x71ebdc) {
      return;
    }
    const _0x43f47a = _0x71ebdc.querySelector(".ai-result-inline");
    if (!_0x43f47a) {
      return;
    }
    const _0x198cdc = String(_0x4bad2c || "");
    const _0x4b074b = !!(_0x2d94d5 && _0x2d94d5.forcePrompt);
    const _0xa2467c = _0x198cdc ? _0x37d706.get(_0x198cdc) : null;
    if (!_0x4b074b && _0xa2467c && _0xa2467c.html) {
      {
        if (_0x198cdc) {
          _0x2b4457.set(_0x198cdc, "crypto");
        }
        _0x5ad7a7(_0x71ebdc, _0x198cdc || _0x4bad2c, "crypto");
        return;
      }
    }
    const _0x2cf885 = _0x2d94d5 && _0x2d94d5.context ? {
      context: _0x2d94d5.context,
      scope: String(_0x2d94d5.scope || "selection"),
      useCache: !!_0x2d94d5.useCache,
      cacheTag: String(_0x2d94d5.cacheTag || "")
    } : _0x4bc5db(_0x4bad2c, _0x71ebdc);
    if (!_0x2cf885 || !_0x2cf885.context) {
      _0x43f47a.className = "ai-result-inline error";
      _0x43f47a.textContent = _0x3c9cec === "en" ? "Unable to prepare crypto-logic analysis context." : "无法准备加密逻辑分析上下文。";
      return;
    }
    const _0x337034 = await _0x933f2e(_0x2cf885.context, _0x2cf885.scope);
    if (!_0x337034) {
      return;
    }
    const _0x426db9 = _0x5c7ab1(_0x337034.extraPrompt || "");
    const _0x3080ee = (_0x2cf885.cacheTag || "scope:" + String(_0x2cf885.scope || "selection")) + "|target:" + String(_0x337034.targetRef || "-") + "|note:" + (_0x426db9 ? _0x25c43b(_0x426db9).slice(0, 12) : "default");
    if (_0x198cdc) {
      _0x2b4457.set(_0x198cdc, "crypto");
    }
    const _0x3b3bde = _0x198cdc ? _0x37d706.get(_0x198cdc) : null;
    if (!_0x4b074b && _0x2cf885.useCache && _0x3b3bde && _0x3b3bde.html && String(_0x3b3bde.cacheTag || "") === _0x3080ee) {
      _0x5ad7a7(_0x71ebdc, _0x198cdc || _0x4bad2c, "crypto");
      return;
    }
    _0x43f47a.style.display = "block";
    _0x43f47a.className = "ai-result-inline loading";
    _0x43f47a.textContent = _0x3c9cec === "en" ? "Analyzing crypto logic from request context and related JS clues..." : "正在结合请求上下文与相关 JS 线索分析加密逻辑...";
    const _0x3f3516 = await _0x4c0932(_0x2cf885.context, _0x2cf885.scope, {
      targetRef: _0x337034.targetRef || "",
      extraPrompt: _0x426db9
    });
    if (!_0x3f3516) {
      return;
    }
    _0x3f3516.inlineRecordId = _0x198cdc || _0x4bad2c;
    const _0x3af1a1 = await _0x38feb5(_0x3f3516);
    if (_0x3af1a1 && _0x3af1a1.ok) {
      _0x198cdc && _0x37d706.set(_0x198cdc, {
        className: "ai-result-inline md-rendered",
        html: _0x3af1a1.reportHtml,
        ts: _0x3af1a1.reportTs,
        cacheTag: _0x3080ee
      });
      if (!_0x5ad7a7(_0x71ebdc, _0x198cdc || _0x4bad2c, "crypto")) {
        {
          _0x43f47a.style.display = "block";
          _0x43f47a.className = "ai-result-inline md-rendered";
          _0x43f47a.innerHTML = "<section class=\"inline-report-section report-crypto\" data-report-kind=\"crypto\">" + String(_0x3af1a1.reportHtml || "") + "</section>";
          _0x9d1273(_0x71ebdc, _0x43f47a);
          _0xf30b52(_0x43f47a);
          _0x32ebe3(_0x43f47a);
        }
      }
      return;
    }
    const _0x13c7c5 = String(_0x3af1a1 && _0x3af1a1.error || _0x850dc("unknownError") || "Unknown error");
    if (_0x198cdc) {
      _0x37d706.set(_0x198cdc, {
        className: "ai-result-inline error",
        html: "<div class=\"threat-summary-report\"><div class=\"threat-row\">" + _0x47f251(_0x13c7c5) + "</div></div>",
        ts: Date.now(),
        cacheTag: _0x3080ee
      });
      _0x5ad7a7(_0x71ebdc, _0x198cdc || _0x4bad2c, "crypto");
      return;
    }
    _0x43f47a.className = "ai-result-inline error";
    _0x43f47a.textContent = _0x13c7c5;
  }
  function _0x4a1cde(_0x494468) {
    if (!_0x494468 || !_0x494468.length) {
      return "";
    }
    for (const _0x5ea2a7 of _0x494468) {
      const _0x283f21 = (Array.isArray(_0x5ea2a7) ? String(_0x5ea2a7[0]) : String(_0x5ea2a7.name || _0x5ea2a7[0] || "")).toLowerCase();
      if (_0x283f21 === "content-type") {
        const _0x488746 = Array.isArray(_0x5ea2a7) ? String(_0x5ea2a7[1] || "") : String(_0x5ea2a7.value || _0x5ea2a7[1] || "");
        return _0x488746 || "";
      }
    }
    return "";
  }
  function _0x5b2f6d(_0x405bcf) {
    const _0x49d672 = 24;
    const _0x57ded3 = 720;
    const _0x2df0b2 = 120;
    const _0x42e59e = 400;
    const _0x3db77d = 120;
    const _0x1dcbb5 = 800;
    const _0x3e6853 = 2048;
    if (!_0x405bcf || typeof _0x405bcf !== "object") {
      return {
        record: {},
        threats: [],
        totalThreats: 0
      };
    }
    const _0x3824ca = _0x405bcf.record || {};
    const _0x4425df = {
      id: _0x3824ca.id,
      url: String(_0x3824ca.url || "").slice(0, _0x3e6853),
      statusCode: _0x3824ca.statusCode,
      contentType: String(_0x3824ca.contentType || "").slice(0, 240)
    };
    const _0x3c3447 = Array.isArray(_0x405bcf.threats) ? _0x405bcf.threats : [];
    const _0x3f46db = _0x3c3447.length;
    const _0x2e2885 = _0x3c3447.slice(0, _0x49d672);
    const _0x18eacd = _0x2e2885.map(_0x4fbdaa => ({
      type: String(_0x4fbdaa.type || "").slice(0, _0x3db77d),
      reason: String(_0x4fbdaa.reason || "").slice(0, _0x42e59e),
      target: String(_0x4fbdaa.target || "").slice(0, _0x1dcbb5),
      snippet: String(_0x4fbdaa.snippet || "").slice(0, _0x57ded3),
      contextBefore: String(_0x4fbdaa.contextBefore || "").slice(0, _0x2df0b2),
      contextAfter: String(_0x4fbdaa.contextAfter || "").slice(0, _0x2df0b2)
    }));
    return {
      record: _0x4425df,
      threats: _0x18eacd,
      totalThreats: _0x3f46db
    };
  }
  function _0x3c7f35(_0x40c2e7, _0x14805b) {
    let _0x3630c7 = String(_0x40c2e7 || "");
    try {
      const _0x2757ec = JSON.parse(_0x3630c7);
      const _0x446347 = _0x2757ec && _0x2757ec.error && _0x2757ec.error.message;
      if (_0x446347) {
        _0x3630c7 = String(_0x446347);
      }
    } catch (_0x5d01ef) {}
    if (/maximum context length|context length is \d+/i.test(_0x3630c7)) {
      {
        return _0x14805b === "en" ? "The model context limit was exceeded. Hx0 now auto-compresses evidence; close and re-run dark-link scan, then click AI again. If it persists, reduce hits per response or analyze in smaller batches." : "超出模型上下文长度上限。请重新展开该条记录并再跑一次「检测暗链」后点 AI（证据会自动压缩后提交）；若仍失败，请减少单页命中条数或分批检测。";
      }
    }
    return _0x3630c7;
  }
  function _0x26c412(_0x31d777, _0x6b916a, _0x4c6d76 = 200) {
    const _0x1656a0 = String(_0x31d777 || "");
    const _0x27f8b1 = String(_0x6b916a || "").trim();
    if (!_0x1656a0 || !_0x27f8b1) {
      return {
        contextBefore: "",
        contextAfter: ""
      };
    }
    let _0xa4c68c = _0x1656a0.indexOf(_0x27f8b1);
    if (_0xa4c68c < 0) {
      return {
        contextBefore: _0x1656a0.slice(0, _0x4c6d76),
        contextAfter: _0x1656a0.slice(_0x4c6d76, _0x4c6d76 * 2)
      };
    }
    const _0x299063 = Math.max(0, _0xa4c68c - _0x4c6d76);
    const _0x3d7567 = Math.min(_0x1656a0.length, _0xa4c68c + _0x27f8b1.length + _0x4c6d76);
    return {
      contextBefore: _0x1656a0.slice(_0x299063, _0xa4c68c),
      contextAfter: _0x1656a0.slice(_0xa4c68c + _0x27f8b1.length, _0x3d7567)
    };
  }
  function _0x4e17cc(_0x5168d7, _0xb8747b) {
    if (!_0x3e8fd4()) {
      return;
    }
    if (!_0x266e37) {
      _0x34a884(_0x850dc("darkLinkNeedEnableAlert") || "Please enable dark-link detection in Settings first.");
      return;
    }
    const _0x483175 = typeof _0xb8747b === "string" ? _0x45bd18.querySelector(".record-item[data-id=\"" + _0xb8747b + "\"]") : _0xb8747b;
    if (!_0x483175) {
      return;
    }
    const _0x5e8b6e = _0x483175.querySelector(".ai-result-inline");
    if (!_0x5e8b6e) {
      return;
    }
    _0x5e8b6e.style.display = "block";
    const _0x4e2ba1 = String(_0x5168d7 || "");
    if (_0x4e2ba1) {
      _0x2b4457.set(_0x4e2ba1, "threat");
    }
    if (_0x4e2ba1 && _0x58db83.has(_0x4e2ba1)) {
      _0x5ad7a7(_0x483175, _0x4e2ba1, "threat");
      return;
    }
    _0x5e8b6e.className = "ai-result-inline loading threat-static-report";
    _0x5e8b6e.textContent = _0x850dc("darkLinkScanning") || "Scanning static response for dark links…";
    _0x4b6be4.runtime.sendMessage({
      type: "GET_RECORD",
      id: _0x5168d7
    }, _0x429bb2 => {
      const _0x13fe16 = _0x429bb2 && _0x429bb2.record;
      if (!_0x13fe16) {
        _0x5e8b6e.className = "ai-result-inline error";
        _0x5e8b6e.textContent = _0x850dc("darkLinkFetchFail") || "Failed to load packet content.";
        return;
      }
      const _0xa7f30f = String(_0x13fe16.responseBody || "");
      const _0xbcc24c = _0x4a1cde(_0x13fe16.responseHeaders || []);
      const _0xbc549c = window.hx0ThreatAnalyzer;
      if (!_0xbc549c || typeof _0xbc549c.analyze !== "function") {
        {
          _0x5e8b6e.className = "ai-result-inline error";
          _0x5e8b6e.textContent = _0x850dc("darkLinkEngineNotReady") || "Static threat engine is not ready.";
          return;
        }
      }
      const _0x3530a1 = _0xbc549c.analyze(_0xa7f30f, _0xbcc24c, {
        url: _0x13fe16.url || ""
      });
      if (_0x3530a1.tooLarge) {
        const _0xdb32ce = _0x850dc("darkLinkTooLarge") || "Body exceeds 3MB, DOM parsing skipped to avoid UI blocking.";
        const _0xcb8dcf = "<div class=\"threat-summary-report\"><div class=\"threat-row\">" + _0x47f251(_0xdb32ce) + "</div></div>";
        _0x4e2ba1 && _0x58db83.set(_0x4e2ba1, {
          className: "ai-result-inline threat-static-report",
          html: _0xcb8dcf,
          ts: Date.now()
        });
        _0x5ad7a7(_0x483175, _0x4e2ba1 || _0x5168d7, "threat");
        return;
      }
      const _0x1eba52 = Array.isArray(_0x3530a1.threats) ? _0x3530a1.threats.slice(0, 128) : [];
      if (!_0x1eba52.length) {
        const _0x3dedd0 = _0x850dc("darkLinkNone") || "Hx0 engine finished: no obvious static threats or dark-link traces found.";
        const _0x55c24c = "<div class=\"threat-summary-report\"><div class=\"threat-row\">" + _0x47f251(_0x3dedd0) + "</div></div>";
        _0x4e2ba1 && _0x58db83.set(_0x4e2ba1, {
          className: "ai-result-inline threat-static-report",
          html: _0x55c24c,
          ts: Date.now()
        });
        _0x5ad7a7(_0x483175, _0x4e2ba1 || _0x5168d7, "threat");
        return;
      }
      const _0x3f1227 = _0x3c9cec === "en";
      const _0x11a5fa = (_0x4c1a42, _0x318b7d) => _0x3f1227 ? _0x318b7d || _0x4c1a42 : _0x4c1a42;
      const _0x14321c = _0x17f13b => {
        {
          const _0x2afa73 = String(_0x17f13b || "");
          if (!_0x3f1227) {
            return _0x2afa73;
          }
          if (_0x2afa73 === "高") {
            return "High";
          }
          if (_0x2afa73 === "中") {
            return "Medium";
          }
          if (_0x2afa73 === "低") {
            return "Low";
          }
          return _0x2afa73;
        }
      };
      const _0x4e5411 = _0xad716d => {
        const _0x1571e1 = String(_0xad716d || "");
        if (!_0x3f1227) {
          return _0x1571e1;
        }
        const _0x1cb57c = {
          "隐藏元素": "Hidden element",
          "隐藏链接": "Hidden link",
          "隐匿或可疑外链": "Hidden / suspicious outbound link",
          "隐藏 iframe": "Hidden iframe",
          "隐藏探针 img": "Hidden tracking image",
          "可疑外部脚本": "Suspicious external script",
          "嵌入 iframe": "Embedded iframe",
          "Meta Refresh 跳转": "Meta refresh redirect",
          "动态写入 iframe/script": "Dynamic document.write iframe/script",
          "document.write 动态锚点": "document.write anchor injection",
          "noscript 原文中的外链": "Link inside noscript (raw markup)",
          "iframe srcdoc 内嵌外链": "Link inside iframe srcdoc",
          "脚本中的外链": "Outbound URL in script literal",
          "Base64 解码片段中的外链": "Link in Base64-decoded HTML",
          "DOM 注入字符串中的外链": "Link in DOM injection string",
          "硬编码 IPv4 地址": "Hard-coded IPv4 address",
          "硬编码 IPv6 地址": "Hard-coded IPv6 address",
          "未分类可疑项": "Uncategorized suspicious item"
        };
        return _0x1cb57c[_0x1571e1] || _0x1571e1;
      };
      const _0x17146d = _0x274135 => {
        const _0x1af829 = String(_0x274135 || "");
        if (!_0x3f1227) {
          return _0x1af829;
        }
        let _0xef0ab0 = _0x1af829;
        _0xef0ab0 = _0xef0ab0.replace(/隐藏样式\s*:\s*/g, "Hidden style: ");
        _0xef0ab0 = _0xef0ab0.replace(/可疑类名\s*:\s*/g, "Suspicious class: ");
        _0xef0ab0 = _0xef0ab0.replace(/容器\/父级\s*:\s*/g, "Container/ancestor: ");
        _0xef0ab0 = _0xef0ab0.replace(/祖先<([^>]+)>\s*样式:\s*/g, "Ancestor <$1> style: ");
        _0xef0ab0 = _0xef0ab0.replace(/祖先<([^>]+)>\s*类名:\s*/g, "Ancestor <$1> class: ");
        _0xef0ab0 = _0xef0ab0.replace(/脚本来源非常见统计\/分析域名白名单/g, "Script host is not in common analytics allowlist").replace(/静态 iframe 可能用于跳转或暗链/g, "Static iframe may be used for redirect or hidden links").replace(/meta http-equiv="refresh" 可能用于静态跳转或钓鱼/g, "meta http-equiv=\"refresh\" may be used for redirect or phishing").replace(/检测到 document\.write 动态输出 iframe\/img\/script 结构，常被用于暗链或挂马/g, "Detected document.write injecting iframe/img/script, often used for hidden links or malware").replace(/document\.write 输出含 <a href=…>，常见于暗链注入/g, "document.write emits <a href=...>, commonly used for hidden-link injection").replace(/解析器常忽略 noscript 内 DOM，改为原文扫描/g, "DOMParser often skips noscript internals; scanned raw markup instead").replace(/srcdoc 内链接不会进入主 document 的 DOM 遍历/g, "Links inside srcdoc are outside the main document DOM walk").replace(/静态脚本字符串内的 href，常为 document\.write \/ 拼接暗链/g, "href found inside static script literal, often tied to document.write or string-built hidden links").replace(/atob 等编码后注入的 HTML 片段/g, "HTML fragment injected after atob/Base64 decoding").replace(/insertAdjacentHTML \/ innerHTML 拼接暗链/g, "Hidden link assembled through insertAdjacentHTML / innerHTML").replace(/静态硬编码 IP 可能指向后门服务或恶意服务器/g, "Hard-coded IP may point to backdoor service or malicious host").replace(/URL 中的 IPv4 字面量（http\(s\):\/\/ 或 \/\/），降低版本号误报/g, "IPv4 literal inside URL (http(s):// or //); fewer version false positives").replace(/URL 中方括号 IPv6 字面量/g, "Bracketed IPv6 literal in URL").replace(/href、src、srcset、data-src、data-bg、data-url 等链接\/资源属性邻域内的 IPv4 字面量（有界窗口：名前 (\d+) 字 \+ 值向 (\d+) 字）/g, (_0x5768d5, _0x2a32c6, _0x7dc929) => "IPv4 near link/resource attrs (href, src, srcset, data-src, data-bg, data-url, …; bounded: " + _0x2a32c6 + " chars before name, up to " + _0x7dc929 + " into value tail)").replace(/前景色与链接自身背景色一致（变色龙伪装）/g, "Text color matches link own background (chameleon)").replace(/文字颜色与页面背景色一致或极接近（变色龙伪装）/g, "Text color matches page background (chameleon)").replace(/祖先<marquee> 极小尺寸/g, "Ancestor <marquee> tiny size").replace(/祖先<svg> 0×0/g, "Ancestor <svg> 0x0").replace(/空锚点或仅零宽字符/g, "Empty anchor or zero-width text only").replace(/已合并 style 标签中的类选择器规则/g, "merged class rules from <style>").replace(/URL 被拆成多段字符串拼接（如 "ht"\+"tp:\/\/…"），常见于暗链混淆/g, "URL split across string concatenation (common obfuscation)").replace(/检测到数组 \.join\(""\) 拼接字符，常用于隐藏 http 协议与域名（静态无法还原执行结果）/g, "Array .join(\"\") char stitching (static analysis cannot evaluate)").replace(/createElement\(String\.fromCharCode\(\.\.\.\)\) 标签名混淆，常与动态 href 组合/g, "createElement(String.fromCharCode) tag-name obfuscation");
        return _0xef0ab0;
      };
      const _0x4e4f13 = _0x110f1e => {
        {
          const _0x316c2d = String(_0x110f1e.type || "");
          let _0xa7f6b9 = 0.5;
          if (/隐藏链接|隐藏 iframe|隐藏探针|隐匿或可疑外链|noscript 原文|iframe srcdoc|脚本中的外链|Base64 解码|DOM 注入|document\.write 动态锚点|Hidden link|Hidden iframe|Hidden tracking|suspicious outbound|noscript \(raw|iframe srcdoc|script literal|Base64-decoded|DOM injection|document\.write anchor/i.test(_0x316c2d)) {
            _0xa7f6b9 = 0.9;
          } else {
            if (/Meta Refresh|动态写入 iframe|script|meta refresh|document\.write/i.test(_0x316c2d)) {
              _0xa7f6b9 = 0.85;
            } else {
              if (/可疑外部脚本|Suspicious external script/i.test(_0x316c2d)) {
                _0xa7f6b9 = 0.8;
              } else {
                if (/硬编码 IPv[46] 地址|硬-coded IPv[46]|Hard-coded IPv4|Hard-coded IPv6/i.test(_0x316c2d)) {
                  _0xa7f6b9 = 0.7;
                } else {
                  if (/嵌入 iframe|Embedded iframe/i.test(_0x316c2d)) {
                    _0xa7f6b9 = 0.7;
                  }
                }
              }
            }
          }
          const _0x3dd6e1 = String(_0x110f1e.reason || "");
          if (/黑名单|恶意|挖矿|钓鱼|后门|挂马/i.test(_0x3dd6e1)) {
            _0xa7f6b9 = Math.max(_0xa7f6b9, 0.9);
          }
          if (/同域|可信域|统计|分析/i.test(_0x3dd6e1)) {
            _0xa7f6b9 = Math.min(_0xa7f6b9, 0.7);
          }
          let _0x138c72 = _0x3f1227 ? "Medium" : "中";
          if (_0xa7f6b9 >= 0.85) {
            _0x138c72 = _0x3f1227 ? "High" : "高";
          } else {
            if (_0xa7f6b9 < 0.65) {
              _0x138c72 = _0x3f1227 ? "Low" : "低";
            }
          }
          let _0x428fb7 = _0x3f1227 ? "Medium" : "中";
          if (_0xa7f6b9 >= 0.85) {
            _0x428fb7 = _0x3f1227 ? "High" : "高";
          } else {
            if (_0xa7f6b9 < 0.65) {
              _0x428fb7 = _0x3f1227 ? "Low" : "低";
            }
          }
          return {
            level: _0x138c72,
            confidence: _0x428fb7,
            score: _0xa7f6b9
          };
        }
      };
      const _0x52cecf = Object.create(null);
      let _0x1a0232 = 0;
      _0x1eba52.forEach(_0x3ccab6 => {
        const _0x6ab885 = _0x3ccab6.type || _0x850dc("threatTypeUncategorized");
        _0x52cecf[_0x6ab885] = (_0x52cecf[_0x6ab885] || 0) + 1;
        const _0x25f2a4 = _0x4e4f13(_0x3ccab6);
        if (_0x25f2a4.score > _0x1a0232) {
          _0x1a0232 = _0x25f2a4.score;
        }
      });
      let _0x2be809 = _0x3f1227 ? "Medium" : "中";
      if (_0x1a0232 >= 0.85) {
        _0x2be809 = _0x3f1227 ? "High" : "高";
      } else {
        if (_0x1a0232 < 0.65) {
          _0x2be809 = _0x3f1227 ? "Low" : "低";
        }
      }
      const _0x36fcf2 = Object.keys(_0x52cecf).map(_0x3b248c => {
        {
          const _0x18f47f = _0x4e5411(_0x3b248c);
          return _0x47f251(_0x18f47f) + (_0x3f1227 ? " x" + _0x52cecf[_0x3b248c] : " ×" + _0x52cecf[_0x3b248c]);
        }
      }).join("；");
      const _0x4412ba = Date.now();
      const _0x55e01b = _0x18818a(_0x4412ba);
      const _0x24d662 = _0x225fa6(_0x4412ba);
      const _0x5e9e31 = _0x558ff2(_0x13fe16.url || "") || "-";
      const _0x5486ba = String(_0x13fe16.id || _0x5168d7 || "-");
      const _0x388282 = "<div class=\"threat-summary-report\"><div class=\"threat-row\"><strong>" + _0x47f251(_0x11a5fa("暗链检测分析报告", "Dark-link / Static threat report")) + "</strong></div>" + "<div class=\"threat-row\">" + _0x47f251(_0x11a5fa("本次静态暗链与隐匿元素检测共发现", "Detected")) + " <strong>" + _0x1eba52.length + "</strong> " + _0x47f251(_0x11a5fa("条可疑条目，涉及", "suspicious items across")) + " <strong>" + Object.keys(_0x52cecf).length + "</strong> " + _0x47f251(_0x11a5fa("种类型。", "types.")) + "</div>" + (_0x36fcf2 ? "<div class=\"threat-row\">" + _0x47f251(_0x11a5fa("按类型统计：", "By type: ")) + _0x36fcf2 + (_0x3f1227 ? "" : "。") + "</div>" : "") + "<div class=\"threat-row\">" + _0x47f251(_0x11a5fa("总体风险评估：", "Overall risk: ")) + "<strong>" + _0x47f251(_0x2be809) + "</strong>" + _0x47f251(_0x11a5fa("（仅基于静态规则判定，建议结合业务上下文与 AI 复核）。", " (rule-based only; review with context and AI if needed).")) + "</div>" + "</div>" + "<hr style=\"border:none;border-top:1px solid var(--ee-border);margin:8px 0 12px;\" />";
      const _0x211dea = _0x1eba52.map((_0x2a7cb9, _0xf2f843) => {
        const _0x2d3c1b = _0x47f251(_0x4e5411(_0x2a7cb9.type || (_0x3f1227 ? "Suspicious item #" + (_0xf2f843 + 1) : "可疑项 #" + (_0xf2f843 + 1))));
        const _0x286fa6 = _0x47f251(_0x17146d(_0x2a7cb9.reason || ""));
        const _0x336788 = _0x47f251(_0x2a7cb9.target || "");
        const _0xd557b7 = String((_0x2a7cb9.snippet || "").slice(0, 400));
        const _0x4cbc6d = _0x29aa26(_0xd557b7);
        const _0x2e2f47 = encodeURIComponent(_0xd557b7);
        const _0x269fae = _0xd557b7.replace(/\s+/g, " ").trim();
        const _0x5adf69 = encodeURIComponent(_0x269fae);
        const _0x59140b = _0x4e4f13(_0x2a7cb9);
        return "<div class=\"threat-item\"><div class=\"threat-row\"><strong>" + _0x47f251(_0x11a5fa("编号", "ID")) + "</strong>：#" + (_0xf2f843 + 1) + "</div>" + "<div class=\"threat-row\"><strong>" + _0x47f251(_0x11a5fa("类型", "Type")) + "</strong>：" + _0x2d3c1b + "</div>" + "<div class=\"threat-row\"><strong>" + _0x47f251(_0x11a5fa("风险等级", "Risk")) + "</strong>：" + _0x47f251(_0x59140b.level) + "</div>" + "<div class=\"threat-row\"><strong>" + _0x47f251(_0x11a5fa("可信度", "Confidence")) + "</strong>：" + _0x47f251(_0x59140b.confidence) + "</div>" + (_0x286fa6 ? "<div class=\"threat-row\"><strong>" + _0x47f251(_0x11a5fa("判定依据", "Reason")) + "</strong>：" + _0x286fa6 + "</div>" : "") + (_0x336788 ? "<div class=\"threat-row\"><strong>" + _0x47f251(_0x11a5fa("目标地址", "Target")) + "</strong>：" + _0x336788 + "</div>" : "") + (_0x4cbc6d ? "<div class=\"threat-row\"><strong>" + _0x47f251(_0x11a5fa("原始代码", "Snippet")) + "</strong>：<button type=\"button\" class=\"threat-snippet-link\" data-snippet=\"" + _0x2e2f47 + "\" data-snippet-fallback=\"" + _0x5adf69 + "\"><code class=\"threat-code\">" + _0x4cbc6d + "</code></button></div>" : "") + "</div>";
      }).join("<hr style=\"border:none;border-top:1px dashed var(--ee-border);margin:8px 0;\" />");
      const _0x247ea4 = _0x1eba52.map(_0x90b900 => {
        const _0x286fd7 = String(_0x90b900.snippet || "").slice(0, 800);
        const _0x37d621 = _0x26c412(_0xa7f30f, _0x286fd7, 200);
        return {
          type: _0x90b900.type || "",
          reason: _0x90b900.reason || "",
          target: _0x90b900.target || "",
          snippet: _0x286fd7,
          contextBefore: _0x37d621.contextBefore,
          contextAfter: _0x37d621.contextAfter
        };
      });
      const _0x21b5de = encodeURIComponent(JSON.stringify({
        record: {
          id: _0x13fe16.id,
          url: _0x13fe16.url,
          statusCode: _0x13fe16.statusCode,
          contentType: _0xbcc24c
        },
        threats: _0x247ea4
      }));
      const _0x2d6ddc = [_0x3f1227 ? "# Dark-link / Static Threat Report" : "# 暗链检测分析报告", "", "- Report ID: " + _0x24d662, "- " + (_0x3f1227 ? "Target Domain" : "目标域名") + ": " + _0x5e9e31, "- " + (_0x3f1227 ? "Request No" : "请求编号") + ": " + _0x5486ba, "- " + (_0x3f1227 ? "Generated" : "生成时间") + ": " + _0x55e01b, "- " + (_0x3f1227 ? "Model" : "模型") + ": Hx0 Static Engine", "", _0x3f1227 ? "Detected **" + _0x1eba52.length + "** suspicious items across **" + Object.keys(_0x52cecf).length + "** types." : "本次检测共发现 **" + _0x1eba52.length + "** 条可疑项，涉及 **" + Object.keys(_0x52cecf).length + "** 种类型。", "", (_0x3f1227 ? "Overall risk: " : "总体风险评估：") + "**" + _0x2be809 + "**", "", "## " + (_0x3f1227 ? "Evidence List" : "证据列表"), ""].concat(_0x1eba52.map((_0x202041, _0x2a3c78) => {
        const _0x3e6ed8 = _0x4e4f13(_0x202041);
        return ["### " + (_0x3f1227 ? "Item #" : "编号 #") + (_0x2a3c78 + 1), "- " + (_0x3f1227 ? "Type" : "类型") + ": " + _0x4e5411(_0x202041.type || ""), "- " + (_0x3f1227 ? "Risk" : "风险等级") + ": " + _0x3e6ed8.level, "- " + (_0x3f1227 ? "Confidence" : "可信度") + ": " + _0x3e6ed8.confidence, _0x202041.reason ? "- " + (_0x3f1227 ? "Reason" : "判定依据") + ": " + _0x17146d(_0x202041.reason) : "", _0x202041.target ? "- " + (_0x3f1227 ? "Target" : "目标地址") + ": " + String(_0x202041.target) : "", _0x202041.snippet ? "- " + (_0x3f1227 ? "Snippet" : "原始代码") + ":\n```html\n" + String(_0x202041.snippet).slice(0, 400) + "\n```" : "", ""].filter(Boolean).join("\n");
      })).join("\n");
      const _0x8c22c8 = _0x41925e({
        markdown: _0x2d6ddc,
        filePrefix: "HawkEye-DarkLink-Report",
        reportId: _0x24d662,
        targetDomain: _0x5e9e31,
        requestNo: _0x5486ba,
        generatedAt: _0x55e01b,
        model: "Hx0 Static Engine",
        lang: _0x3f1227 ? "en" : "zh_CN"
      });
      const _0x21ada1 = _0x11a5fa("下载报告", "Download report");
      const _0x24a552 = _0x388282 + _0x211dea + "<div class=\"ai-threat-actions\">" + "<button type=\"button\" class=\"btn primary btn-ask-ai-threat\" data-pro-feature=\"darklink_ai\" data-evidence=\"" + _0x21b5de + "\">" + _0x47f251(_0x11a5fa("AI 辅助分析暗链", "AI review (dark links)")) + "</button>" + "<button type=\"button\" class=\"btn btn-download-report ai-report-download-btn\" data-pro-feature=\"report_download\" data-download-key=\"" + _0x47f251(_0x8c22c8) + "\">" + _0x47f251(_0x21ada1) + "</button>" + "</div>";
      _0x4e2ba1 && _0x58db83.set(_0x4e2ba1, {
        className: "ai-result-inline threat-static-report",
        html: _0x24a552,
        ts: Date.now()
      });
      _0x5ad7a7(_0x483175, _0x4e2ba1 || _0x5168d7, "threat");
    });
  }
  function _0x21b6bf(_0xab1e9f) {
    if (!_0xab1e9f) {
      return;
    }
    if (!_0x3e8fd4()) {
      return;
    }
    _0xab1e9f.disabled = true;
    _0xab1e9f.textContent = _0x3c9cec === "en" ? "AI is reviewing evidence with context…" : "AI 正在结合上下文深度研判...";
    const _0x5d220d = _0xab1e9f.getAttribute("data-evidence") || "";
    let _0x251a09 = null;
    try {
      _0x251a09 = JSON.parse(decodeURIComponent(_0x5d220d));
    } catch (_0x17ec67) {
      _0x251a09 = null;
    }
    if (!_0x251a09 || !_0x251a09.threats || !_0x251a09.threats.length) {
      _0xab1e9f.textContent = _0x3c9cec === "en" ? "Evidence is incomplete; cannot start AI review." : "证据数据不完整，无法发起 AI 诊断。";
      return;
    }
    const _0x4a5019 = _0x5b2f6d(_0x251a09);
    _0x4b6be4.runtime.sendMessage({
      type: "GET_SETTINGS",
      keys: ["aiBaseUrl", "aiApiKey", "aiModel", "language"]
    }, _0x434cf1 => {
      const _0x494844 = _0x434cf1 && _0x434cf1.language || (_0x4b6be4.i18n && _0x4b6be4.i18n.getUILanguage ? _0x4b6be4.i18n.getUILanguage() : "") || "zh_CN";
      const _0x3beeac = {
        baseUrl: _0x434cf1 && _0x434cf1.aiBaseUrl || "https://api.openai.com",
        apiKey: _0x434cf1 && _0x434cf1.aiApiKey || "",
        model: _0x434cf1 && _0x434cf1.aiModel || "gpt-4o-mini",
        language: _0x494844,
        systemPrompt: _0x494844 === "en" ? "You are a senior Web security expert.\nPerform an AI-assisted review of evidence captured by Hx0 static analyzer (DOM node + surrounding context).\nDistinguish legitimate business-hidden components from real malicious behavior.\nOutput a concise Markdown report; use the title \"Dark-link detection — AI-assisted review report\" (or an equivalent).\nThe FIRST line of the body must be exactly: Risk Level: High/Medium/Low.\nClearly conclude either [Real threat] or [Likely false positive], and provide remediation advice." : "你是一个资深的 Web 安全专家。请对 Hx0 自动化引擎捕获的安全证据（包含原始节点及其上下文代码）进行 AI 辅助复核。注意识别正常的业务隐藏组件与真实恶意的区别。直接输出 Markdown 格式的研判报告；主标题请使用「暗链检测AI辅助复核报告」（或语义等价的标题），首行正文必须是“风险等级：高/中/低”，并明确结论是【真实威胁】还是【疑似误报】，最后简述修复建议。"
      };
      const _0x3ce240 = _0x4a5019.totalThreats > _0x4a5019.threats.length ? _0x494844 === "en" ? "Note: Only the first " + _0x4a5019.threats.length + " of " + _0x4a5019.totalThreats + " items are sent (model context limit).\n\n" : "说明：因模型上下文限制，仅提交前 " + _0x4a5019.threats.length + " 条证据（共 " + _0x4a5019.totalThreats + " 条）。\n\n" : "";
      const _0x36fd31 = (_0x494844 === "en" ? "Below is evidence extracted from one HTTP response by Hx0 static analyzer. Review it with context.\n\n" : "下面是 Hx0 静态引擎对某 HTTP 响应提取的可疑暗链/静态威胁证据，请结合上下文进行专业复核：\n\n") + _0x3ce240 + (_0x494844 === "en" ? "Basic info (JSON):\n" : "基础信息（JSON）：\n") + JSON.stringify(_0x4a5019.record) + "\n\n" + (_0x494844 === "en" ? "Evidence list (JSON; snippet + context, length-capped):\n" : "证据列表（JSON；含片段与上下文，已限长）：\n") + JSON.stringify(_0x4a5019.threats) + "\n\n" + (_0x494844 === "en" ? "Follow the system prompt and output the Markdown report." : "请按照系统提示词要求给出 Markdown 研判报告。");
      const _0x4eb6c8 = _0xab1e9f.closest(".ai-result-inline");
      _0x4b6be4.runtime.sendMessage({
        type: "AI_ANALYZE",
        task: "darklink_review",
        prompt: _0x36fd31,
        config: _0x3beeac,
        memoryUrl: _0x251a09 && _0x251a09.record && _0x251a09.record.url || "",
        memoryHost: _0x558ff2(_0x251a09 && _0x251a09.record && _0x251a09.record.url || "")
      }, _0x4d5746 => {
        {
          if (!_0x4eb6c8) {
            return;
          }
          if (_0x4d5746 && _0x4d5746.ok) {
            const _0x3a978d = Date.now();
            const _0x4f2fd0 = _0x251a09 && _0x251a09.record ? _0x251a09.record : {};
            const _0x3ce721 = _0xab1e9f.closest("[data-report-kind=\"threat\"]") || _0x4eb6c8;
            const _0x30ca62 = document.createElement("div");
            _0x30ca62.className = "ai-threat-ai-report md-rendered";
            _0x30ca62.innerHTML = _0x77a960(_0x4d5746.content || "", {
              model: _0x3beeac.model,
              baseUrl: _0x3beeac.baseUrl,
              generatedAt: _0x3a978d,
              lang: _0x494844,
              reportId: _0x225fa6(_0x3a978d),
              targetDomain: _0x558ff2(_0x4f2fd0.url || ""),
              requestNo: _0x4f2fd0.id || "-",
              url: _0x4f2fd0.url || "",
              filePrefix: "HawkEye-DarkLink-AI-Report",
              reportCoverTitle: _0x494844 === "en" ? "Dark-link detection — AI-assisted review report" : "暗链检测AI辅助复核报告"
            });
            _0x3ce721.appendChild(_0x30ca62);
            _0xf30b52(_0x30ca62);
            try {
              {
                const _0x1bb077 = _0x4eb6c8.closest(".record-item") && _0x4eb6c8.closest(".record-item").getAttribute ? _0x4eb6c8.closest(".record-item").getAttribute("data-id") : "";
                if (_0x1bb077) {
                  const _0x5f0371 = String(_0x1bb077);
                  const _0xdca37 = _0x3ce721 && _0x3ce721.innerHTML ? String(_0x3ce721.innerHTML) : "";
                  _0xdca37 && _0x58db83.set(_0x5f0371, {
                    className: "ai-result-inline threat-static-report",
                    html: _0xdca37,
                    ts: Date.now()
                  });
                }
              }
            } catch (_0x5c07a2) {}
            _0xab1e9f.textContent = _0x494844 === "en" ? "AI review completed" : "AI 已完成暗链辅助分析";
            _0xab1e9f.disabled = true;
          } else {
            const _0x22dbc1 = document.createElement("div");
            _0x22dbc1.className = "ai-threat-ai-report";
            _0x22dbc1.textContent = (_0x494844 === "en" ? "AI review failed: " : "AI 诊断失败：") + _0x3c7f35(_0x4d5746 && _0x4d5746.error || (_0x494844 === "en" ? "Unknown error" : "未知错误"), _0x494844);
            _0x4eb6c8.appendChild(_0x22dbc1);
            _0xab1e9f.textContent = _0x494844 === "en" ? "AI review failed — click to retry" : "AI 分析失败，点击重试";
            _0xab1e9f.disabled = false;
          }
        }
      });
    });
  }
  function _0x25a62d(_0x521b04) {
    if (_0x521b04 === "replay") {
      return;
    }
    _0x3a0472 = _0x521b04;
    if (_0x52bd48) {
      _0x52bd48.querySelectorAll("button").forEach(_0x3b1d53 => _0x3b1d53.classList.toggle("active", _0x3b1d53.getAttribute("data-view") === _0x521b04));
    }
    const _0x191c79 = _0x521b04 === "history";
    _0x191c79 ? (_0x15549e = "current", _0x56b676 = _0x170b0f || "", _0x2dde63 = _0x3e95a5) : (_0x15549e = "all", _0x56b676 = "", _0x2dde63 = null);
    _0x848d3();
    _0x44a653();
    if (_0x3b3dbf) {
      _0x3b3dbf.value = _0x56b676 || "";
    }
    const _0x5c5993 = document.getElementById("listWrap");
    if (_0x5c5993) {
      _0x5c5993.style.display = _0x191c79 ? "" : "none";
    }
    if (_0x3a3237) {
      _0x3a3237.style.display = _0x191c79 ? "none" : "";
    }
    if (_0x30a66a) {
      _0x30a66a.style.display = "";
    }
    _0x12f43f();
    if (_0x3b3dbf && _0x3b3dbf.parentElement) {
      _0x3b3dbf.parentElement.style.display = "";
    }
    if (_0x61a31c && _0x61a31c.parentElement) {
      _0x61a31c.parentElement.style.display = "";
    }
    if (_0x5220db && _0x5220db.parentElement) {
      _0x5220db.parentElement.style.display = "";
    }
    if (_0x29f48f) {
      _0x29f48f.style.display = _0x137574 ? "" : "none";
    }
    if (_0x5d5c4b) {
      _0x5d5c4b.style.display = _0x191c79 ? "" : "none";
    }
    if (_0x12a1dc && _0x12a1dc.parentElement) {
      _0x12a1dc.parentElement.style.display = "";
    }
    if (_0x51e2aa && _0x51e2aa.parentElement) {
      _0x51e2aa.parentElement.style.display = "";
    }
    if (_0x135714) {
      _0x135714.textContent = _0x191c79 ? _0x850dc("clearHistory") : _0x850dc("clearIntercept");
    }
    if (_0x1655e8) {
      _0x1655e8.style.display = _0x191c79 ? "none" : "";
    }
    if (_0xb86fc2) {
      _0xb86fc2.style.display = _0x191c79 ? "none" : "";
    }
    if (_0x52cf77) {
      _0x52cf77.style.display = _0x191c79 ? "none" : "";
    }
    if (_0x3d608c) {
      _0x3d608c.style.display = _0x191c79 ? "none" : "";
    }
    _0x3fcfe5();
    if (_0x191c79) {
      _0x5e6b83();
    } else {
      _0x28bd20();
      _0xd39273();
    }
    _0x48881b();
  }
  function _0x574aaf(_0x547038) {
    if (!_0x48f941) {
      return;
    }
    _0x48f941.classList.toggle("on", !!_0x547038);
    _0x48f941.setAttribute("aria-checked", _0x547038 ? "true" : "false");
    _0x48f941.dataset && (_0x48f941.dataset.defaultTitle = _0x547038 ? _0x850dc("interceptEnabled") || "" : _0x850dc("interceptDisabled") || "");
    _0x18561b();
  }
  function _0x25c730(_0x30ff24) {
    if (!_0x148c89) {
      return;
    }
    _0x6a6200 = !!_0x30ff24;
    _0x148c89.classList.toggle("on", !!_0x30ff24);
    _0x148c89.setAttribute("aria-checked", _0x30ff24 ? "true" : "false");
    _0x148c89.dataset && (_0x148c89.dataset.defaultTitle = _0x850dc("proxyFilterTitle") || "");
  }
  function _0x5e262f(_0x38e5b6) {
    {
      const _0x4aa191 = String(_0x38e5b6 || "").trim();
      if (!_0x4aa191) {
        return "";
      }
      if (_0x4aa191 === "missing_upstream_proxy") {
        return _0x850dc("proxyFilterStatusMissingUpstream");
      }
      if (_0x4aa191 === "proxy_control_not_available") {
        return _0x850dc("proxyFilterStatusNoControl");
      }
      if (_0x4aa191 === "proxy_api_unavailable") {
        return _0x850dc("proxyFilterStatusUnsupported");
      }
      if (_0x4aa191 === "private_access_required") {
        return _0x850dc("proxyFilterStatusPrivateAccess");
      }
      return _0x4aa191;
    }
  }
  function _0x38717d() {
    _0x25c730(_0x6a6200);
    if (!_0x4e7739) {
      return;
    }
    let _0x572821 = _0x850dc("proxyFilterStatusDisabled");
    if (_0x83370e === "active") {
      _0x572821 = _0x850dc("proxyFilterStatusActive", _0x171509 || _0x28196b && _0x28196b.value.trim() || "-");
    } else {
      if (_0x83370e === "missing_upstream") {
        _0x572821 = _0x850dc("proxyFilterStatusMissingUpstream");
      } else {
        if (_0x83370e === "no_control") {
          {
            _0x572821 = _0x850dc("proxyFilterStatusNoControl");
          }
        } else {
          if (_0x83370e === "restore_failed") {
            _0x572821 = _0x850dc("proxyFilterStatusRestoreFailed", _0x5e262f(_0x516e9b));
          } else {
            if (_0x83370e === "apply_failed") {
              {
                const _0x45ec80 = _0x5e262f(_0x516e9b);
                _0x572821 = _0x516e9b === "private_access_required" ? _0x850dc("proxyFilterStatusPrivateAccess") : _0x850dc("proxyFilterStatusApplyFailed", _0x45ec80 || _0x516e9b || "-");
              }
            } else {
              if (_0x83370e === "unsupported") {
                {
                  _0x572821 = _0x850dc("proxyFilterStatusUnsupported");
                }
              }
            }
          }
        }
      }
    }
    _0x4e7739.textContent = _0x572821;
    _0x4e7739.dataset.state = String(_0x83370e || "disabled");
  }
  function _0x413903(_0x309b93) {
    _0x6a6200 = !!(_0x309b93 && _0x309b93.proxyForwardFilterEnabled === true);
    _0x83370e = String(_0x309b93 && _0x309b93.proxyForwardRuntimeState || (_0x6a6200 ? "idle" : "disabled"));
    _0x171509 = String(_0x309b93 && _0x309b93.proxyForwardResolvedUpstream || "").trim();
    _0x516e9b = String(_0x309b93 && _0x309b93.proxyForwardLastError || "").trim();
    if (_0x28196b) {
      _0x28196b.value = String(_0x309b93 && _0x309b93.proxyForwardUpstream || "").trim();
    }
    if (_0x3b9aa8) {
      _0x3b9aa8.value = String(_0x309b93 && _0x309b93.proxyForwardFilterRules || "");
    }
    _0x38717d();
  }
  function _0xd39273() {
    _0x4b6be4.runtime.sendMessage({
      type: _0xebda08.MESSAGE.GET_PROXY_FORWARD_STATE || "GET_PROXY_FORWARD_STATE"
    }, _0xcbb87 => {
      {
        if (!_0xcbb87) {
          return;
        }
        _0x413903({
          proxyForwardFilterEnabled: _0xcbb87.enabled,
          proxyForwardRuntimeState: _0xcbb87.state,
          proxyForwardResolvedUpstream: _0xcbb87.resolvedUpstream,
          proxyForwardLastError: _0xcbb87.error,
          proxyForwardUpstream: _0xcbb87.upstream,
          proxyForwardFilterRules: Array.isArray(_0xcbb87.rules) ? _0xcbb87.rules.join("\n") : _0x3b9aa8 ? _0x3b9aa8.value : ""
        });
      }
    });
  }
  function _0x31f6ab(_0x5b7203) {
    if (!_0x28196b || !_0x3b9aa8) {
      return;
    }
    const _0x14a771 = _0x28196b.value.trim();
    const _0xd78a5a = _0x3b9aa8.value;
    const _0x3129a6 = !!_0x5b7203 || !!_0x6a6200;
    if (_0x3129a6) {
      _0x4b6be4.runtime.sendMessage({
        type: _0xebda08.MESSAGE.SET_PROXY_FORWARD_FILTER || "SET_PROXY_FORWARD_FILTER",
        enabled: true,
        upstream: _0x14a771,
        rules: _0xd78a5a
      }, _0x249730 => {
        {
          if (_0x249730 && _0x249730.licenseLocked) {
            _0x25c730(false);
            _0x321c5b();
            return;
          }
          _0x249730 && _0x413903({
            proxyForwardFilterEnabled: _0x249730.enabled,
            proxyForwardRuntimeState: _0x249730.state,
            proxyForwardResolvedUpstream: _0x249730.resolvedUpstream,
            proxyForwardLastError: _0x249730.error,
            proxyForwardUpstream: _0x14a771,
            proxyForwardFilterRules: _0xd78a5a
          });
        }
      });
      return;
    }
    _0x4b6be4.runtime.sendMessage({
      type: _0xebda08.MESSAGE.SAVE_SETTINGS || "SAVE_SETTINGS",
      settings: {
        proxyForwardUpstream: _0x14a771,
        proxyForwardFilterRules: _0xd78a5a
      }
    }, () => {
      _0x83370e = "disabled";
      _0x171509 = "";
      _0x516e9b = "";
      _0x38717d();
    });
  }
  function _0x28bd20() {
    {
      if (!_0x48f941) {
        return;
      }
      _0x4b6be4.runtime.sendMessage({
        type: _0xebda08.MESSAGE.GET_INTERCEPT_STATE || "GET_INTERCEPT_STATE"
      }, _0x2c5fce => {
        {
          _0x574aaf(_0x2c5fce && _0x2c5fce.enabled);
        }
      });
    }
  }
  try {
    _0x4b6be4 && _0x4b6be4.storage && _0x4b6be4.storage.onChanged && _0x4b6be4.storage.onChanged.addListener((_0x265282, _0x768fb) => {
      if (_0x768fb !== "local") {
        return;
      }
      const _0x3d2589 = typeof HAWK_EYE_CONSTANTS !== "undefined" && HAWK_EYE_CONSTANTS.USER_POLICY && HAWK_EYE_CONSTANTS.USER_POLICY.STORAGE_KEY || "eeUserPolicyAckV2";
      if (_0x265282[_0x3d2589]) {
        _0x4778bb();
      }
      if (_0x265282.eeLicenseFeaturesUnlocked && typeof _0x265282.eeLicenseFeaturesUnlocked.newValue === "boolean") {
        {
          const _0x42c900 = _0x187e38;
          _0x187e38 = !!_0x265282.eeLicenseFeaturesUnlocked.newValue;
          _0x18561b();
          _0x42c900 && !_0x187e38 && _0x41f248();
          _0x4b6be4.storage.local.get(["sensitiveBuiltins", "sensitiveBuiltinRegexes", "sensitiveCustomRules", "sensitiveKeywordRules", "deepSearchFullBody"], _0x54fc8d => {
            _0x1857bf = {};
            _0x78fbd = {};
            (_0x39b242() && Array.isArray(_0x54fc8d && _0x54fc8d.sensitiveCustomRules) ? _0x54fc8d.sensitiveCustomRules : []).forEach(_0x3a2acb => {
              if (_0x3a2acb && _0x3a2acb.name) {
                _0x1857bf[_0x3a2acb.name] = _0x3a2acb.color || _0x43b3a5.customRegex;
              }
            });
            (_0x39b242() && Array.isArray(_0x54fc8d && _0x54fc8d.sensitiveKeywordRules) ? _0x54fc8d.sensitiveKeywordRules : []).forEach(_0x496ae9 => {
              if (_0x496ae9 && _0x496ae9.name) {
                _0x78fbd[_0x496ae9.name] = _0x496ae9.color || _0x43b3a5.keyword;
              }
            });
            _0x110290 = _0x39b242() && !!(_0x54fc8d && _0x54fc8d.deepSearchFullBody === true);
            _0x338775(Object.assign({}, _0x54fc8d || {}, {
              sensitiveRuleColors: _0x43b3a5
            }));
            _0x48881b();
          });
        }
      }
      if (!_0x48f941) {
        return;
      }
      if (_0x265282.interceptEnabled && typeof _0x265282.interceptEnabled.newValue === "boolean") {
        {
          _0x574aaf(!!_0x265282.interceptEnabled.newValue);
        }
      }
    });
  } catch (_0x44406) {}
  _0x48f941 && _0x48f941.addEventListener("click", () => {
    {
      const _0x1e321d = !_0x48f941.classList.contains("on");
      if (_0x1e321d && !_0x187e38) {
        _0x321c5b();
        return;
      }
      _0x574aaf(_0x1e321d);
      _0x4b6be4.runtime.sendMessage({
        type: _0xebda08.MESSAGE.INTERCEPT_TOGGLE || "INTERCEPT_TOGGLE",
        enabled: _0x1e321d
      }, _0x3a042d => {
        {
          if (_0x3a042d && _0x3a042d.licenseLocked) {
            _0x574aaf(false);
            _0x321c5b();
            return;
          }
          _0x574aaf(_0x3a042d && _0x3a042d.enabled);
        }
      });
    }
  });
  _0x148c89 && _0x148c89.addEventListener("click", () => {
    const _0x4c4ae7 = !_0x148c89.classList.contains("on");
    if (_0x4c4ae7 && !_0x187e38) {
      {
        _0x321c5b();
        return;
      }
    }
    _0x4b6be4.runtime.sendMessage({
      type: _0xebda08.MESSAGE.SET_PROXY_FORWARD_FILTER || "SET_PROXY_FORWARD_FILTER",
      enabled: _0x4c4ae7,
      upstream: _0x28196b ? _0x28196b.value.trim() : "",
      rules: _0x3b9aa8 ? _0x3b9aa8.value : ""
    }, _0x44d676 => {
      if (_0x44d676 && _0x44d676.licenseLocked) {
        _0x25c730(false);
        _0x321c5b();
        return;
      }
      _0x413903({
        proxyForwardFilterEnabled: _0x44d676 && typeof _0x44d676.enabled === "boolean" ? _0x44d676.enabled : _0x4c4ae7,
        proxyForwardRuntimeState: _0x44d676 && _0x44d676.state ? _0x44d676.state : _0x4c4ae7 ? "active" : "disabled",
        proxyForwardResolvedUpstream: _0x44d676 && _0x44d676.resolvedUpstream ? _0x44d676.resolvedUpstream : "",
        proxyForwardLastError: _0x44d676 && _0x44d676.error ? _0x44d676.error : "",
        proxyForwardUpstream: _0x28196b ? _0x28196b.value.trim() : "",
        proxyForwardFilterRules: _0x3b9aa8 ? _0x3b9aa8.value : ""
      });
    });
  });
  function _0x3a0a97(_0x4fcfdc) {
    if (_0x4f896d) {
      clearTimeout(_0x4f896d);
    }
    _0x4f896d = setTimeout(() => _0x31f6ab(_0x4fcfdc), 220);
  }
  _0x28196b && (_0x28196b.addEventListener("input", () => _0x3a0a97(false)), _0x28196b.addEventListener("blur", () => _0x31f6ab(false)));
  _0x3b9aa8 && (_0x3b9aa8.addEventListener("input", () => _0x3a0a97(false)), _0x3b9aa8.addEventListener("blur", () => _0x31f6ab(false)));
  _0x14004 && _0x14004.addEventListener("click", () => {
    if (!_0x187e38) {
      _0x321c5b();
      return;
    }
    _0x4b6be4.runtime.sendMessage({
      type: _0xebda08.MESSAGE.SYNC_PROXY_FORWARD_UPSTREAM || "SYNC_PROXY_FORWARD_UPSTREAM"
    }, _0x5c0ddf => {
      if (_0x5c0ddf && _0x5c0ddf.licenseLocked) {
        _0x321c5b();
        return;
      }
      if (!_0x5c0ddf) {
        return;
      }
      _0x413903({
        proxyForwardFilterEnabled: typeof _0x5c0ddf.enabled === "boolean" ? _0x5c0ddf.enabled : _0x6a6200,
        proxyForwardRuntimeState: _0x5c0ddf.state || _0x83370e,
        proxyForwardResolvedUpstream: _0x5c0ddf.resolvedUpstream || "",
        proxyForwardLastError: _0x5c0ddf.error || "",
        proxyForwardUpstream: _0x5c0ddf.upstream || (_0x28196b ? _0x28196b.value : ""),
        proxyForwardFilterRules: _0x3b9aa8 ? _0x3b9aa8.value : ""
      });
    });
  });
  function _0x1df5e8(_0x3e6ec3) {
    {
      _0x4b6be4.runtime.sendMessage({
        type: _0xebda08.MESSAGE.GET_INTERCEPT_QUEUE || "GET_INTERCEPT_QUEUE"
      }, _0x379f65 => {
        const _0x16b9a0 = _0x379f65 && _0x379f65.list || [];
        _0x16b9a0.forEach(_0x914ca0 => {
          try {
            {
              if (!_0x914ca0) {
                return;
              }
              const _0x14902a = _0x914ca0.sizeBytes;
              if (_0x14902a != null && Number.isFinite(Number(_0x14902a)) && Number(_0x14902a) > 0) {
                return;
              }
              const _0x32fabb = _0x24e589(_0x914ca0);
              _0x32fabb && (_0x914ca0.sizeBytes = new TextEncoder().encode(_0x32fabb).length);
            }
          } catch (_0x2a4d23) {}
        });
        function _0xe6e2d7(_0x2e4d32) {
          {
            try {
              return new URL(String(_0x2e4d32 || "")).hostname || "";
            } catch (_0x7fe4a5) {
              {
                return "";
              }
            }
          }
        }
        function _0x553c68(_0x431d8c) {
          const _0x44c0b5 = new Set();
          try {
            (Array.isArray(_0x431d8c && _0x431d8c.sensitiveHits) ? _0x431d8c.sensitiveHits : []).forEach(_0x13af9d => {
              if (_0x13af9d) {
                _0x44c0b5.add(String(_0x13af9d));
              }
            });
          } catch (_0x2dc5dd) {}
          try {
            {
              _0x191e3c(_0x431d8c).forEach(_0x11e82e => _0x44c0b5.add(String(_0x11e82e)));
            }
          } catch (_0x5f5d9b) {}
          return Array.from(_0x44c0b5);
        }
        function _0x142198(_0x2b84c1) {
          if (!_0x2b84c1) {
            return false;
          }
          const _0x5917dc = "custom_suffix:";
          const _0x101f6c = String(_0x337d9b || "").startsWith(_0x5917dc) ? String(_0x337d9b || "").slice(_0x5917dc.length).trim().toLowerCase() : "";
          if (_0x337d9b) {
            if (_0x337d9b === "xhr_fetch") {
              const _0xaffe70 = String(_0x2b84c1.channelType || "").toLowerCase();
              if (_0xaffe70 !== "xhr" && _0xaffe70 !== "fetch") {
                return false;
              }
            } else {
              if (_0x101f6c) {
                const _0x1ee785 = String(_0x2b84c1.url || "").split("?")[0].toLowerCase();
                if (!_0x1ee785.endsWith("." + _0x101f6c)) {
                  return false;
                }
              } else {
                if (String(_0x2b84c1.resourceType || "") !== String(_0x337d9b || "")) {
                  return false;
                }
              }
            }
          }
          if (_0x56b676) {
            const _0x5628ce = String(_0x2b84c1.host || _0xe6e2d7(_0x2b84c1.url) || "").toLowerCase();
            if (_0x5628ce !== String(_0x56b676 || "").toLowerCase()) {
              return false;
            }
          }
          if (_0x34df96) {
            if (String(_0x2b84c1.method || "").toUpperCase() !== String(_0x34df96 || "").toUpperCase()) {
              return false;
            }
          }
          if (_0x4cbec6) {
            if (String(_0x2b84c1.statusCode != null ? _0x2b84c1.statusCode : "") !== String(_0x4cbec6 || "")) {
              return false;
            }
          }
          if (_0x594eca) {
            {
              const _0x52fff4 = _0x553c68(_0x2b84c1);
              if (_0x594eca === "__sensitive_only__") {
                {
                  if (!_0x52fff4.length) {
                    return false;
                  }
                }
              } else {
                if (!_0x52fff4.includes(String(_0x594eca))) {
                  return false;
                }
              }
            }
          }
          if (_0x40cc72) {
            const _0x38ba41 = String(_0x40cc72 || "").trim().toLowerCase().split(/[\s,，]+/).filter(Boolean);
            if (_0x38ba41.length) {
              {
                const _0x3688e1 = _0xec256b(_0x2b84c1);
                if (!_0x38ba41.every(_0x4715b7 => _0x3688e1.includes(_0x4715b7))) {
                  return false;
                }
              }
            }
          }
          return true;
        }
        try {
          const _0x11f64d = new Set();
          const _0x154c37 = new Set();
          const _0x5ec78f = new Set();
          const _0x453662 = new Set();
          _0x16b9a0.forEach(_0x4ce2f3 => {
            if (!_0x4ce2f3) {
              return;
            }
            const _0x2fec42 = String(_0x4ce2f3.host || _0xe6e2d7(_0x4ce2f3.url) || "");
            if (_0x2fec42) {
              _0x11f64d.add(_0x2fec42);
            }
            const _0x5ed1ca = String(_0x4ce2f3.method || "").toUpperCase();
            if (_0x5ed1ca) {
              _0x154c37.add(_0x5ed1ca);
            }
            const _0x28b31a = _0x4ce2f3.statusCode != null ? String(_0x4ce2f3.statusCode) : "";
            if (_0x28b31a) {
              _0x5ec78f.add(_0x28b31a);
            }
            _0x553c68(_0x4ce2f3).forEach(_0x2eb80a => _0x453662.add(String(_0x2eb80a)));
          });
          _0x44e9e3 = Array.from(_0x11f64d).sort();
          _0x552f2a = Array.from(_0x154c37).sort();
          _0xb65382 = Array.from(_0x5ec78f).sort((_0x5acd5c, _0x396ddf) => Number(_0x5acd5c) - Number(_0x396ddf));
          _0x5b1dca = Array.from(_0x453662);
          _0x44a653();
          _0x1356f0();
          _0x1e4558();
          _0x45eeb2();
        } catch (_0x206367) {}
        const _0x10c773 = _0x16b9a0.filter(_0x142198);
        _0x1777da(_0x10c773);
        _0xa02ab3 = _0x5f2b1b(_0x10c773);
        _0x1e04ba(_0xa02ab3);
        _0x3fcfe5();
        if (typeof _0x3e6ec3 === "function") {
          try {
            _0x3e6ec3();
          } catch (_0x44b70c) {}
        }
      });
    }
  }
  function _0x1e04ba(_0x104119) {
    if (!_0xd7a0ab) {
      return;
    }
    if (_0x167354) {
      _0x167354.style.display = _0x104119.length ? "none" : "block";
    }
    _0x1102dd(_0xd7a0ab, _0x104119, _0x56705d, () => {
      _0x3fcfe5();
      _0x3507();
      _0x14c7ff();
    });
  }
  function _0x45d822(_0x1d69a8) {
    let _0x43d613;
    try {
      const _0xffa3a0 = document.querySelector(".record-item[data-id=\"" + _0x1d69a8 + "\"]");
      const _0x2cf572 = _0xffa3a0 ? _0xffa3a0.querySelector(".record-detail-inline") : null;
      const _0x44796f = _0xa02ab3.find(_0x29482a => _0x29482a.id === _0x1d69a8) || null;
      if (_0x2cf572 && _0x2cf572.style.display === "block") {
        {
          const _0x22325a = String(_0x1d69a8 || "");
          const _0x59be26 = _0x4e4d20(_0x2cf572);
          const _0x4ed15 = _0x22fd21.get(_0x22325a) || (_0x44796f ? _0x137986(_0x44796f) : "");
          const _0x2ae7a3 = String(_0x59be26 || "") !== String(_0x4ed15 || "");
          if (_0x2ae7a3) {
            const _0x915257 = _0x2370d2(_0x59be26, _0x44796f ? _0x44796f.url || "" : "", {
              smartEncodeUrl: !!_0x59b777
            });
            const _0x2f58f2 = _0x915257.method === "GET" || _0x915257.method === "HEAD" ? _0x915257.body ? _0x915257.body : undefined : _0x915257.body;
            _0x43d613 = {
              ...(_0x43d613 || {}),
              url: _0x915257.url,
              method: _0x915257.method,
              requestHeaders: _0x915257.headers,
              requestBody: _0x2f58f2
            };
          }
          const _0x16f070 = _0x4449f6(_0x2cf572);
          const _0x316167 = _0x3449e4.get(_0x22325a) || (_0x44796f ? _0x24e589(_0x44796f) : "");
          const _0x3de48e = String(_0x16f070 || "") !== String(_0x316167 || "");
          if (_0x3de48e) {
            const _0x526b85 = _0x17a281(_0x16f070, _0x44796f);
            _0x43d613 = {
              ...(_0x43d613 || {}),
              statusCode: _0x526b85.statusCode,
              responseHeaders: _0x526b85.headers,
              responseBody: _0x526b85.body
            };
          }
        }
      }
    } catch (_0x3e108a) {}
    return _0x43d613;
  }
  function _0x1b51cf() {
    try {
      {
        const _0x5a930b = _0x4b6be4.runtime.lastError;
        if (_0x5a930b && _0x5a930b.message) {
          return String(_0x5a930b.message);
        }
      }
    } catch (_0x545668) {}
    return "";
  }
  function _0x39fed9(_0x56cd55) {
    try {
      const _0x13f05c = String(_0x56cd55 || "");
      _0x52e466.delete(_0x13f05c);
      _0x14b54d.delete(_0x13f05c);
      _0x22fd21.delete(_0x13f05c);
      _0x3449e4.delete(_0x13f05c);
    } catch (_0x3174f1) {}
  }
  function _0x29c412(_0x494fc3) {
    return new Promise(_0x4effdf => {
      const _0x5ceee4 = String(_0x494fc3 || "");
      if (!_0x5ceee4) {
        _0x4effdf({
          ok: false,
          error: "empty_id"
        });
        return;
      }
      const _0x1e9893 = _0x45d822(_0x5ceee4);
      _0x4b6be4.runtime.sendMessage({
        type: _0xebda08.MESSAGE.INTERCEPT_RELEASE || "INTERCEPT_RELEASE",
        id: _0x5ceee4,
        payload: _0x1e9893
      }, _0x2dba3b => {
        const _0x196614 = _0x1b51cf();
        if (_0x196614) {
          _0x4effdf({
            ok: false,
            error: _0x196614
          });
          return;
        }
        if (_0x2dba3b && _0x2dba3b.ok && _0x2dba3b.hard) {
          _0x39fed9(_0x5ceee4);
          _0x4effdf({
            ok: true,
            hard: true
          });
          return;
        }
        if (_0x2dba3b && _0x2dba3b.ok === false && _0x2dba3b.error) {
          _0x4effdf({
            ok: false,
            error: _0x2dba3b.error,
            hard: true
          });
          return;
        }
        _0x4b6be4.runtime.sendMessage({
          type: "GET_RECORD",
          id: _0x5ceee4
        }, _0x533db4 => {
          const _0x529cb8 = _0x1b51cf();
          if (_0x529cb8) {
            {
              _0x4effdf({
                ok: false,
                error: _0x529cb8
              });
              return;
            }
          }
          const _0x573d72 = _0x533db4 && _0x533db4.record;
          if (_0x573d72) {
            let _0x45301a = null;
            if (_0x1e9893 && _0x1e9893.url) {
              _0x45301a = {
                url: _0x1e9893.url,
                method: _0x1e9893.method,
                headers: _0x1e9893.requestHeaders || _0x1e9893.headers || {},
                body: _0x1e9893.requestBody !== undefined ? _0x1e9893.requestBody : _0x1e9893.body
              };
            } else {
              try {
                _0x45301a = _0x2370d2(_0x137986(_0x573d72), _0x573d72.url || "", {
                  smartEncodeUrl: !!_0x59b777
                });
              } catch (_0x3390fc) {}
            }
            _0x4b6be4.runtime.sendMessage({
              type: "REPLAY",
              url: _0x45301a && _0x45301a.url ? _0x45301a.url : _0x573d72.url,
              payload: {
                url: _0x45301a && _0x45301a.url ? _0x45301a.url : _0x573d72.url,
                method: _0x45301a && _0x45301a.method ? _0x45301a.method : _0x573d72.method || "GET",
                headers: _0x45301a && _0x45301a.headers ? _0x45301a.headers : {},
                body: _0x45301a && _0x45301a.body ? _0x45301a.body : _0x573d72.requestBody || undefined
              }
            }, () => {
              const _0x3c9bca = _0x1b51cf();
              if (_0x3c9bca) {
                {
                  _0x4effdf({
                    ok: false,
                    error: _0x3c9bca
                  });
                  return;
                }
              }
              _0x39fed9(_0x5ceee4);
              _0x4effdf({
                ok: true,
                hard: false
              });
            });
            return;
          }
          _0x39fed9(_0x5ceee4);
          _0x4effdf({
            ok: true,
            hard: false
          });
        });
      });
    });
  }
  function _0xf58f09(_0x5f0db4) {
    return _0x29c412(_0x5f0db4).then(_0x1da233 => {
      if (!_0x1da233.ok && _0x1da233.error) {
        try {
          {
            _0x34a884(_0x850dc("releaseFailedPrefix") + String(_0x1da233.error));
          }
        } catch (_0x30c69f) {}
      }
      _0x14eb9c("intercept");
      return _0x1da233;
    });
  }
  function _0x2a7261(_0x231ec0, _0x449829) {
    return new Promise(_0x2d31f3 => {
      let _0x583f76 = false;
      const _0x165588 = setTimeout(() => {
        {
          if (_0x583f76) {
            return;
          }
          _0x583f76 = true;
          _0x2d31f3(false);
        }
      }, Math.max(100, Number(_0x449829) || 0));
      Promise.resolve(_0x231ec0).then(() => {
        {
          if (_0x583f76) {
            return;
          }
          _0x583f76 = true;
          clearTimeout(_0x165588);
          _0x2d31f3(true);
        }
      }).catch(() => {
        if (_0x583f76) {
          return;
        }
        _0x583f76 = true;
        clearTimeout(_0x165588);
        _0x2d31f3(false);
      });
    });
  }
  function _0x2073c3(_0x502818) {
    {
      return new Promise(_0x133f9f => {
        _0x4b6be4.runtime.sendMessage({
          type: _0xebda08.MESSAGE.INTERCEPT_DROP || "INTERCEPT_DROP",
          id: _0x502818
        }, () => {
          _0x14eb9c("intercept");
          _0x133f9f(true);
        });
      });
    }
  }
  async function _0x2517ad() {
    {
      if (!_0x3e8fd4()) {
        return;
      }
      if (_0x28a7fd) {
        return;
      }
      _0x28a7fd = true;
      if (_0x1655e8) {
        _0x1655e8.disabled = true;
      }
      if (_0xb86fc2) {
        _0xb86fc2.disabled = true;
      }
      let _0x4e1d18 = false;
      let _0x254bd3 = false;
      try {
        const _0x5388f1 = 12000;
        const _0x1880dc = 300;
        const _0x3d719e = Date.now();
        let _0x42cdcf = 0;
        let _0x56d3c7 = 0;
        while (_0x42cdcf < _0x1880dc && Date.now() - _0x3d719e < _0x5388f1) {
          {
            const _0x41a701 = _0xa02ab3 || [];
            const _0x4921fa = _0x41a701[0] || null;
            const _0xbd0b71 = _0x4921fa && _0x4921fa.id != null ? String(_0x4921fa.id) : "";
            if (!_0xbd0b71) {
              return;
            }
            const _0xeca34b = await _0x2a7261(_0x29c412(_0xbd0b71), 2500);
            if (!_0xeca34b) {
              {
                _0x4e1d18 = true;
                break;
              }
            }
            _0x42cdcf += 1;
            const _0xb55ee8 = await _0x2a7261(new Promise(_0x273d6b => {
              _0x1df5e8(_0x273d6b);
            }), 1500);
            if (!_0xb55ee8) {
              {
                _0x4e1d18 = true;
                break;
              }
            }
            const _0x34e85b = _0xa02ab3 || [];
            if (!_0x34e85b.length) {
              return;
            }
            const _0x11297f = _0x34e85b[0] && _0x34e85b[0].id != null ? String(_0x34e85b[0].id) : "";
            if (_0x11297f && _0x11297f === _0xbd0b71) {
              _0x56d3c7 += 1;
              if (_0x56d3c7 >= 2) {
                _0x254bd3 = true;
                break;
              }
            } else {
              _0x56d3c7 = 0;
            }
          }
        }
        if (Date.now() - _0x3d719e >= _0x5388f1) {
          _0x4e1d18 = true;
        }
      } finally {
        _0x28a7fd = false;
        if (_0x1655e8) {
          _0x1655e8.disabled = false;
        }
        if (_0xb86fc2) {
          _0xb86fc2.disabled = false;
        }
      }
      (_0x4e1d18 || _0x254bd3) && _0x34a884(_0x850dc("releaseAllTimeoutBody"), _0x850dc("releaseAllTimeoutTitle"));
    }
  }
  function _0x493559() {
    if (!_0x3e8fd4()) {
      return;
    }
    const _0x3319a4 = (_0xa02ab3 || []).map(_0x22862a => _0x22862a && _0x22862a.id != null ? String(_0x22862a.id) : "").filter(Boolean);
    if (!_0x3319a4.length) {
      return;
    }
    for (const _0x574d3a of _0x3319a4) _0x2073c3(_0x574d3a);
  }
  function _0x3fe2ca(_0x535b47) {
    {
      if (!_0x535b47) {
        return;
      }
      _0x4b6be4.runtime.sendMessage({
        type: _0xebda08.MESSAGE.DELETE_RECORD || "DELETE_RECORD",
        id: _0x535b47
      }, () => {
        _0x37d6ec.delete(_0x535b47);
        _0x1f3d9b();
        _0x14eb9c(_0x3a0472 === "history" ? "history" : "intercept");
      });
    }
  }
  function _0x4c923f() {
    if (_0x3a0472 === "history") {
      _0x4b6be4.runtime.sendMessage({
        type: _0xebda08.MESSAGE.CLEAR_HISTORY || "CLEAR_HISTORY"
      }, () => {
        _0x2e87fe();
        _0x37d6ec.clear();
        _0x1f3d9b();
        _0x5e6b83();
      });
      return;
    }
    if (!_0x3e8fd4()) {
      return;
    }
    _0x4b6be4.runtime.sendMessage({
      type: _0xebda08.MESSAGE.CLEAR_INTERCEPT_QUEUE || "CLEAR_INTERCEPT_QUEUE"
    }, () => {
      _0x1ce468().forEach(_0x450abe => _0x37d6ec.delete(_0x450abe));
      _0x1f3d9b();
      _0x1df5e8();
    });
  }
  function _0x848d3() {
    if (!_0x5d5c4b) {
      return;
    }
    const _0x51161d = _0x15549e === "current" && _0x170b0f;
    _0x5d5c4b.classList.toggle("active", !!_0x51161d);
    const _0x5b4107 = _0x170b0f + (_0x3e95a5 != null ? " · #" + _0x3e95a5 : "");
    _0x5d5c4b.textContent = _0x51161d ? _0x850dc("scopeCurrent") + ": " + _0x5b4107 : _0x850dc("scopeAll");
    _0x5d5c4b.title = _0x51161d ? _0x5b4107 : _0x850dc("scopeAll");
  }
  function _0x558ff2(_0x1f1e4c) {
    try {
      const _0x58cc90 = new URL(String(_0x1f1e4c || ""));
      if (_0x58cc90.protocol !== "http:" && _0x58cc90.protocol !== "https:") {
        return "";
      }
      return _0x58cc90.hostname || "";
    } catch (_0x4964da) {
      return "";
    }
  }
  function _0x3f80c8(_0x517fe2) {
    if (!_0x4b6be4 || !_0x4b6be4.tabs || typeof _0x4b6be4.tabs.query !== "function") {
      return;
    }
    _0x4b6be4.tabs.query({
      active: true,
      currentWindow: true
    }, _0x233c93 => {
      {
        const _0x3e5cd4 = _0x233c93 && _0x233c93[0];
        if (!_0x3e5cd4) {
          return;
        }
        const _0x3233fb = _0x3e5cd4.id != null ? _0x3e5cd4.id : null;
        if (_0x3233fb == null) {
          return;
        }
        const _0x6b33ea = _0x558ff2(_0x3e5cd4.url || _0x3e5cd4.pendingUrl || "");
        if (!_0x6b33ea) {
          return;
        }
        const _0x4fadb1 = _0x40ac28.has(_0x3233fb);
        const _0x1c1030 = String(_0x170b0f || "").toLowerCase() !== String(_0x6b33ea || "").toLowerCase();
        const _0x2618ac = _0x3e95a5 !== _0x3233fb;
        const _0x11407e = !!_0x517fe2;
        const _0x2fa9bd = _0x11407e || !_0x4fadb1 && _0x15549e === "current";
        const _0x155ae2 = _0x2fa9bd ? String(_0x56b676 || "").toLowerCase() !== String(_0x6b33ea || "").toLowerCase() : false;
        const _0x4f5438 = _0x2fa9bd ? _0x2dde63 !== _0x3233fb : false;
        const _0x4ec450 = _0x4fadb1;
        const _0x18528f = _0x4ec450 ? _0x15549e !== "all" || _0x56b676 || _0x2dde63 != null : false;
        if (!_0x1c1030 && !_0x2618ac && !_0x155ae2 && !_0x4f5438 && !_0x18528f) {
          return;
        }
        _0x170b0f = _0x6b33ea;
        _0x3e95a5 = _0x3233fb;
        if (_0x4fadb1) {
          _0x15549e = "all";
          _0x56b676 = "";
          _0x2dde63 = null;
        } else {
          _0x2fa9bd && (_0x15549e = "current", _0x56b676 = _0x6b33ea, _0x2dde63 = _0x3233fb);
        }
        _0x848d3();
        _0x44a653();
        if (_0x3b3dbf) {
          _0x3b3dbf.value = _0x56b676 || "";
        }
        if (_0x3a0472 === "history") {
          _0x5e6b83();
        }
      }
    });
  }
  async function _0x43b331(_0x49d1ca) {
    const _0x464086 = [];
    for (const _0x143401 of _0x49d1ca) {
      const _0x3763eb = await _0x583d29({
        type: "GET_RECORD",
        id: _0x143401
      });
      if (_0x3763eb && _0x3763eb.record) {
        _0x464086.push(_0x3763eb.record);
      }
    }
    return _0x464086;
  }
  async function _0x1bf3fb() {
    if (!_0x3e8fd4()) {
      return;
    }
    const _0x1d2f12 = _0x35d6f4();
    if (!_0x1d2f12.length) {
      return;
    }
    const _0x89355b = await _0x43b331(_0x1d2f12);
    if (!_0x89355b.length) {
      return;
    }
    const _0x3af808 = _0x89355b.map((_0x4ac621, _0x4e0a49) => "##### #" + (_0x4e0a49 + 1) + " " + (_0x4ac621.id || "") + " #####\r\n" + _0x3502c7(_0x4ac621)).join("\r\n\r\n");
    const _0x21d85f = new Blob([_0x3af808], {
      type: "text/plain; charset=utf-8"
    });
    const _0x37a582 = document.createElement("a");
    _0x37a582.href = URL.createObjectURL(_0x21d85f);
    _0x37a582.download = "HawkEye-batch-" + Date.now() + ".txt";
    _0x37a582.click();
    URL.revokeObjectURL(_0x37a582.href);
  }
  async function _0x415ea7() {
    {
      if (!_0x3e8fd4()) {
        return;
      }
      const _0x4a2e59 = _0x35d6f4();
      if (!_0x4a2e59.length) {
        return;
      }
      const _0x220fc1 = "batch_ai_" + Date.now() + "_" + Math.random().toString(36).slice(2, 8);
      const _0x159e09 = {
        ids: _0x4a2e59,
        fromView: _0x3a0472,
        createdAt: Date.now()
      };
      await new Promise(_0x2a7de8 => {
        _0x4b6be4.storage.local.set({
          [_0x220fc1]: _0x159e09
        }, () => _0x2a7de8());
      });
      const _0x103450 = _0x4b6be4.runtime.getURL("src/sidepanel/batch-ai.html?taskId=" + encodeURIComponent(_0x220fc1));
      window.open(_0x103450, "_blank");
    }
  }
  async function _0x1d63ff() {
    if (!_0x3e8fd4()) {
      return;
    }
    const _0x261840 = _0x35d6f4();
    if (!_0x261840.length) {
      return;
    }
    if (!_0x266e37) {
      _0x34a884(_0x850dc("darkLinkNeedEnableAlert"));
      return;
    }
    const _0x2e8741 = "batch_darklink_" + Date.now() + "_" + Math.random().toString(36).slice(2, 8);
    const _0xf46fa0 = {
      ids: _0x261840,
      fromView: _0x3a0472,
      createdAt: Date.now(),
      type: "darklink"
    };
    await new Promise(_0x52c1f6 => {
      _0x4b6be4.storage.local.set({
        [_0x2e8741]: _0xf46fa0
      }, () => _0x52c1f6());
    });
    const _0x39809d = _0x4b6be4.runtime.getURL("src/sidepanel/batch-darklink.html?taskId=" + encodeURIComponent(_0x2e8741));
    window.open(_0x39809d, "_blank");
  }
  async function _0x2d4ba2() {
    if (!_0x3e8fd4()) {
      return;
    }
    const _0x20d453 = _0x35d6f4();
    if (!_0x20d453.length) {
      return;
    }
    for (const _0x1c310c of _0x20d453) {
      await _0x583d29({
        type: _0xebda08.MESSAGE.DELETE_RECORD || "DELETE_RECORD",
        id: _0x1c310c
      });
      _0x37d6ec.delete(_0x1c310c);
    }
    _0x1f3d9b();
    if (_0x3a0472 === "history") {
      _0x5e6b83();
    } else {
      _0x1df5e8();
    }
  }
  async function _0x2e4ea3() {
    if (!_0x3e8fd4()) {
      return;
    }
    const _0x2b3ccd = _0x35d6f4();
    if (!_0x2b3ccd.length) {
      try {
        await _0x34a884(_0x850dc("noPacketsSelected"));
      } catch (_0x2c8fdd) {}
      return;
    }
    let _0xdace7e = [];
    try {
      _0xdace7e = await _0x43b331(_0x2b3ccd);
    } catch (_0x293cf3) {
      {
        _0xdace7e = [];
      }
    }
    const _0x11ed0b = {};
    (_0xdace7e || []).forEach(_0x562013 => {
      if (_0x562013 && _0x562013.id != null) {
        _0x11ed0b[String(_0x562013.id)] = _0x562013;
      }
    });
    let _0x157100 = null;
    try {
      _0x157100 = await _0x37bc2b(_0x2b3ccd, _0x11ed0b);
    } catch (_0x5f4e87) {
      _0x157100 = null;
    }
    if (_0x157100 == null) {
      return;
    }
    if (!_0x157100.length) {
      return;
    }
    const _0x358d0a = await _0x43b331(_0x157100);
    if (!_0x358d0a || !_0x358d0a.length) {
      try {
        await _0x34a884(_0x850dc("noData") || "No replayable data.");
      } catch (_0x5b95e9) {}
      return;
    }
    try {
      const _0x3e923c = _0x358d0a[0];
      _0x5cf305("", _0x3e923c && _0x3e923c.url ? String(_0x3e923c.url) : "", _0x65db10(_0x3e923c));
      _0x5c9e4f();
    } catch (_0x5a85e6) {}
    let _0x53c020 = 0;
    let _0x40c130 = "";
    for (const _0x54d9d5 of _0x358d0a) {
      if (!_0x54d9d5) {
        continue;
      }
      const _0x22d784 = _0x137986(_0x54d9d5);
      const _0xb0e010 = _0x54d9d5.url || "";
      let _0x50dcc5 = null;
      try {
        _0x50dcc5 = _0x2370d2(_0x22d784, _0xb0e010, {
          smartEncodeUrl: !!_0x59b777
        });
      } catch (_0x72205f) {
        {
          _0x50dcc5 = {
            method: _0x54d9d5.method || "GET",
            url: _0x54d9d5.url || _0xb0e010,
            headers: {},
            body: _0x54d9d5.requestBody || ""
          };
        }
      }
      const _0x112d67 = _0x4f7e80(_0x54d9d5.url || "");
      _0x145f0a(_0x50dcc5, _0x112d67);
      const _0x3f1ca6 = performance.now();
      const _0x515518 = await _0x583d29({
        type: "REPLAY",
        url: _0x50dcc5.url || _0x54d9d5.url,
        payload: {
          url: _0x50dcc5.url || _0x54d9d5.url,
          method: _0x50dcc5.method || _0x54d9d5.method || "GET",
          headers: _0x50dcc5.headers || {},
          body: _0x50dcc5.body ? _0x50dcc5.body : _0x54d9d5.requestBody || undefined
        }
      });
      const _0x426a94 = Math.round(performance.now() - _0x3f1ca6);
      _0x39126c += 1;
      const _0x337d8b = "send_" + _0x39126c;
      _0x40c130 = _0x337d8b;
      if (_0x515518 && _0x515518.ok) {
        _0x53c020++;
        const _0x4e544a = String(_0x515518.status || "-");
        const _0x5c8519 = _0xbc6e93(_0x515518);
        const _0x398a61 = new TextEncoder().encode(_0x5c8519).length;
        _0x29a5ad({
          id: _0x337d8b,
          title: (_0x850dc("replaySendTag") || "Send") + " " + _0x39126c + " · " + _0x4e544a,
          requestRaw: _0x22d784,
          responseRaw: _0x5c8519,
          statusText: _0x4e544a,
          url: String(_0x50dcc5 && _0x50dcc5.url || _0x54d9d5.url || ""),
          sourceUrl: String(_0x54d9d5.url || ""),
          sourceRecordId: _0x54d9d5 && _0x54d9d5.id != null ? String(_0x54d9d5.id) : "",
          sourceTabId: _0x54d9d5 && _0x54d9d5.tabId != null ? _0x54d9d5.tabId : _0x2dde63,
          sourceTimestamp: _0x54d9d5 && _0x54d9d5.timestamp != null ? Number(_0x54d9d5.timestamp) : 0,
          responseSizeBytes: _0x398a61,
          responseDurationMs: _0x426a94,
          targetOriginOverride: _0x112d67
        });
        try {
          _0x6d2f22(_0x337d8b);
        } catch (_0x3eef20) {}
        await new Promise(_0x275258 => requestAnimationFrame(() => _0x275258()));
      } else {
        const _0x3d2877 = String(_0x515518 && _0x515518.error || "Replay failed");
        const _0x1a104c = new TextEncoder().encode(_0x3d2877).length;
        _0x29a5ad({
          id: _0x337d8b,
          title: (_0x850dc("replaySendTag") || "Send") + " " + _0x39126c + " · ERR",
          requestRaw: _0x22d784,
          responseRaw: _0x3d2877,
          statusText: "-",
          url: String(_0x50dcc5 && _0x50dcc5.url || _0x54d9d5.url || ""),
          sourceUrl: String(_0x54d9d5.url || ""),
          sourceRecordId: _0x54d9d5 && _0x54d9d5.id != null ? String(_0x54d9d5.id) : "",
          sourceTabId: _0x54d9d5 && _0x54d9d5.tabId != null ? _0x54d9d5.tabId : _0x2dde63,
          sourceTimestamp: _0x54d9d5 && _0x54d9d5.timestamp != null ? Number(_0x54d9d5.timestamp) : 0,
          responseSizeBytes: _0x1a104c,
          responseDurationMs: _0x426a94,
          targetOriginOverride: _0x112d67
        });
        try {
          _0x6d2f22(_0x337d8b);
        } catch (_0x1c5141) {}
        await new Promise(_0x1016bc => requestAnimationFrame(() => _0x1016bc()));
      }
    }
    if (_0x40c130) {
      {
        try {
          _0x6d2f22(_0x40c130);
        } catch (_0x25224c) {}
      }
    }
    await _0x34a884(_0x850dc("batchReplayDone") + ": " + _0x53c020 + "/" + _0x358d0a.length);
  }
  function _0x45bf16(_0x24ca30) {
    const _0x58b169 = _0x24ca30.target.closest(".row-select");
    if (!_0x58b169) {
      return;
    }
    const _0x298e75 = _0x58b169.getAttribute("data-id");
    if (!_0x298e75) {
      return;
    }
    if (_0x58b169.checked) {
      _0x37d6ec.add(_0x298e75);
    } else {
      _0x37d6ec.delete(_0x298e75);
    }
    _0x3fcfe5();
  }
  function _0xd63fda(_0x1ea845) {
    {
      if (_0x1ea845.target.closest(".row-select-wrap")) {
        return;
      }
      const _0x54de0a = _0x1ea845.target.closest(".record-actions [data-action]");
      if (_0x54de0a) {
        const _0x4b1ac2 = _0x54de0a.getAttribute("data-id");
        const _0x898313 = _0x54de0a.getAttribute("data-action");
        if (_0x898313 === "detail") {
          _0x2402eb(_0x4b1ac2);
        } else {
          if (_0x898313 === "download") {
            _0x407f30(_0x4b1ac2);
          } else {
            if (_0x898313 === "delete") {
              _0x3fe2ca(_0x4b1ac2);
            } else {
              if (_0x898313 === "replay") {
                _0x4b6be4.runtime.sendMessage({
                  type: "GET_RECORD",
                  id: _0x4b1ac2
                }, _0x29b58e => {
                  const _0x1a322c = _0x29b58e && _0x29b58e.record;
                  if (!_0x1a322c) {
                    return;
                  }
                  _0x5cf305(_0x137986(_0x1a322c), _0x1a322c.url || "", _0x65db10(_0x1a322c));
                });
              } else {
                if (_0x898313 === "ai") {
                  _0x2402eb(_0x4b1ac2, {
                    runAi: true
                  });
                }
              }
            }
          }
        }
        return;
      }
      const _0x1453b5 = _0x1ea845.target.closest(".record-row");
      if (!_0x1453b5) {
        return;
      }
      const _0x512c67 = _0x1453b5.closest(".record-item");
      if (!_0x512c67) {
        return;
      }
      const _0x1e3f74 = _0x512c67.getAttribute("data-id");
      if (_0x1e3f74) {
        _0x2402eb(_0x1e3f74);
      }
    }
  }
  function _0x2c4b23(_0x504b07) {
    {
      if (_0x504b07.target.closest(".row-select-wrap")) {
        return;
      }
      const _0x56971a = _0x504b07.target.closest(".record-actions [data-action]");
      if (_0x56971a) {
        const _0x1fbb64 = _0x56971a.getAttribute("data-id");
        const _0x5e5142 = _0x56971a.getAttribute("data-action");
        const _0x52c491 = !!_0x1fbb64 && String(_0x24ce8b || "") === String(_0x1fbb64) && _0xb9d2f8(_0x1fbb64);
        if (_0x5e5142 === "detail") {
          _0x2402eb(_0x1fbb64);
        } else {
          if (_0x5e5142 === "delete") {
            _0x3fe2ca(_0x1fbb64);
          } else {
            if (_0x5e5142 === "replay") {
              _0x4b6be4.runtime.sendMessage({
                type: "GET_RECORD",
                id: _0x1fbb64
              }, _0x34595d => {
                const _0x4bb379 = _0x34595d && _0x34595d.record;
                if (!_0x4bb379) {
                  return;
                }
                _0x5cf305(_0x137986(_0x4bb379), _0x4bb379.url || "", _0x65db10(_0x4bb379));
              });
            } else {
              if (_0x5e5142 === "release") {
                {
                  const _0x3f508b = _0xf58f09(_0x1fbb64);
                  _0x52c491 && Promise.resolve(_0x3f508b).finally(() => {
                    _0x1f3d9b({
                      skipRefresh: true
                    });
                  });
                }
              } else {
                if (_0x5e5142 === "drop") {
                  {
                    const _0x37e891 = _0x2073c3(_0x1fbb64);
                    _0x52c491 && Promise.resolve(_0x37e891).finally(() => {
                      _0x1f3d9b({
                        skipRefresh: true
                      });
                    });
                  }
                }
              }
            }
          }
        }
        return;
      }
      const _0x15a336 = _0x504b07.target.closest(".record-row");
      if (!_0x15a336) {
        return;
      }
      const _0x41b848 = _0x15a336.closest(".record-item");
      if (!_0x41b848) {
        return;
      }
      const _0x71a479 = _0x41b848.getAttribute("data-id");
      if (_0x71a479) {
        _0x2402eb(_0x71a479);
      }
    }
  }
  _0x52bd48 && _0x52bd48.addEventListener("click", _0x32f02f => {
    const _0x4b92aa = _0x32f02f.target.closest("button[data-view]");
    if (!_0x4b92aa) {
      return;
    }
    const _0x502ae7 = _0x4b92aa.getAttribute("data-view");
    if (_0x502ae7 === "intercept" && !_0x3e8fd4()) {
      return;
    }
    _0x502ae7 === "replay" ? _0x1898fa && !_0x1898fa.classList.contains("hidden") ? _0x347a72() : _0x5c9e4f() : _0x25a62d(_0x502ae7);
  });
  if (_0x57e6c9) {
    {
      _0x57e6c9.addEventListener("click", () => {
        {
          if (_0x3a0472 === "history") {
            _0x5e6b83();
          } else {
            _0x3a0472 === "intercept" && _0x1df5e8();
          }
        }
      });
    }
  }
  _0x33f2bd && _0x4b6be4 && _0x4b6be4.tabs && typeof _0x4b6be4.tabs.query === "function" && _0x33f2bd.addEventListener("click", () => {
    {
      try {
        _0x4b6be4.tabs.query({
          active: true,
          currentWindow: true
        }, _0x129968 => {
          const _0x45a885 = _0x129968 && _0x129968[0];
          _0x45a885 && _0x45a885.id != null && typeof _0x4b6be4.tabs.reload === "function" && _0x4b6be4.tabs.reload(_0x45a885.id);
        });
      } catch (_0x3a104d) {}
    }
  });
  function _0x22ff2d() {
    if (!_0x5bc7b3) {
      return;
    }
    try {
      const _0x5a15c6 = _0xe1460a ? "collapseToSidepanel" : "enterFullscreen";
      const _0x884172 = _0x850dc(_0x5a15c6) || (_0xe1460a ? "收起到侧边栏" : "全屏");
      _0x5bc7b3.setAttribute("data-i18n", _0x5a15c6);
      _0x5bc7b3.setAttribute("data-i18n-title", _0x5a15c6);
      _0x5bc7b3.setAttribute("data-i18n-aria-label", _0x5a15c6);
      _0x5bc7b3.textContent = _0x884172;
      _0x5bc7b3.setAttribute("title", _0x884172);
      _0x5bc7b3.setAttribute("aria-label", _0x884172);
    } catch (_0x55b582) {}
  }
  if (_0x5bc7b3) {
    {
      _0x22ff2d();
      _0x5bc7b3.addEventListener("click", async () => {
        try {
          {
            const _0x9ee27e = _0xebda08 && _0xebda08.MESSAGE && _0xebda08.MESSAGE.OPEN_SIDEPANEL ? _0xebda08.MESSAGE.OPEN_SIDEPANEL : "OPEN_SIDEPANEL";
            if (_0xe1460a) {
              await new Promise(_0xf220e5 => {
                try {
                  _0x4b6be4.runtime.sendMessage({
                    type: _0x9ee27e,
                    toggle: false
                  }, () => _0xf220e5());
                } catch (_0x29c2da) {
                  _0xf220e5();
                }
              });
              try {
                window.close();
              } catch (_0x594a0a) {}
              setTimeout(() => {
                {
                  try {
                    {
                      if (!document.hidden) {
                        _0x34a884(_0x850dc("collapseToSidepanelCloseHint") || "Side panel capture is open. Close this tab manually if it did not close.");
                      }
                    }
                  } catch (_0x398253) {}
                }
              }, 200);
              return;
            }
            let _0x1d89be = null;
            try {
              {
                const _0x3c13da = _0x4b6be4.runtime.getURL("src/sidepanel/sidepanel.html?standalone=1");
                _0x1d89be = window.open(_0x3c13da, "_blank");
              }
            } catch (_0x2d3156) {
              _0x1d89be = null;
            }
            try {
              _0x4b6be4.windows && _0x4b6be4.windows.getCurrent ? _0x4b6be4.windows.getCurrent(_0x437fbe => {
                const _0x465ac2 = _0x437fbe && _0x437fbe.id != null ? _0x437fbe.id : undefined;
                _0x4b6be4.runtime.sendMessage({
                  type: _0x9ee27e,
                  toggle: true,
                  windowId: _0x465ac2
                });
              }) : _0x4b6be4.runtime.sendMessage({
                type: _0x9ee27e,
                toggle: true
              });
            } catch (_0x2f4175) {}
            if (!_0x1d89be) {
              {
                try {
                  await _0x34a884(_0x850dc("fullscreenPopupBlocked") || "Could not open standalone page — the browser may have blocked the popup. Allow popups and try again.");
                } catch (_0x49ce2d) {}
              }
            }
          }
        } catch (_0x3020c2) {
          try {
            {
              await _0x34a884((_0x850dc("fullscreenFailed") || "Fullscreen failed: ") + String(_0x3020c2 && _0x3020c2.message ? _0x3020c2.message : _0x3020c2));
            }
          } catch (_0x2a2023) {}
        } finally {
          {
            _0x22ff2d();
          }
        }
      });
    }
  }
  _0x30a66a.addEventListener("click", _0x3dafac => {
    const _0xb8c101 = _0x3dafac.target.closest("button[data-type]");
    if (!_0xb8c101) {
      return;
    }
    _0x30a66a.querySelectorAll("button").forEach(_0x5ed231 => _0x5ed231.classList.remove("active"));
    _0xb8c101.classList.add("active");
    _0x337d9b = _0xb8c101.getAttribute("data-type") || "";
    _0x48881b();
  });
  _0x3b3dbf && (_0x3b3dbf.title = _0x850dc("filterByHost"), _0x3b3dbf.addEventListener("change", () => {
    {
      _0x56b676 = _0x3b3dbf.value || "";
      _0x15549e = _0x56b676 ? "current" : "all";
      if (_0x3e95a5 != null) {
        if (_0x15549e === "all") {
          _0x40ac28.add(_0x3e95a5);
        } else {
          _0x40ac28.delete(_0x3e95a5);
        }
      }
      _0x2dde63 = _0x15549e === "current" ? _0x3e95a5 : null;
      _0x848d3();
      _0x48881b();
    }
  }));
  _0x61a31c && (_0x61a31c.title = _0x850dc("filterByMethod"), _0x61a31c.addEventListener("change", () => {
    if ((_0x61a31c.value || "") === "__custom__") {
      {
        _0x3a20df().then(_0x507ad7 => {
          {
            if (!_0x507ad7) {
              _0x61a31c.value = _0x34df96 || "";
            }
            _0x48881b();
          }
        });
        return;
      }
    } else {
      _0x34df96 = (_0x61a31c.value || "").toUpperCase();
    }
    _0x48881b();
  }));
  _0x5220db && (_0x5220db.title = _0x850dc("filterByStatus"), _0x5220db.addEventListener("change", () => {
    if ((_0x5220db.value || "") === "__custom__") {
      _0x23f8ee().then(_0x343a47 => {
        if (!_0x343a47) {
          _0x5220db.value = _0x4cbec6 || "";
        }
        _0x48881b();
      });
      return;
    } else {
      _0x4cbec6 = String(_0x5220db.value || "").trim();
    }
    _0x48881b();
  }));
  _0x15a85a && (_0x15a85a.title = _0x850dc("filterBySensitive"), _0x15a85a.addEventListener("change", () => {
    _0x594eca = String(_0x15a85a.value || "").trim();
    _0x48881b();
  }));
  _0x5d5c4b && _0x5d5c4b.addEventListener("click", () => {
    if (!_0x170b0f) {
      return;
    }
    _0x15549e = _0x15549e === "current" ? "all" : "current";
    _0x56b676 = _0x15549e === "current" ? _0x170b0f : "";
    if (_0x3e95a5 != null) {
      if (_0x15549e === "all") {
        _0x40ac28.add(_0x3e95a5);
      } else {
        _0x40ac28.delete(_0x3e95a5);
      }
    }
    _0x2dde63 = _0x15549e === "current" ? _0x3e95a5 : null;
    _0x848d3();
    _0x5e6b83();
  });
  _0x12a1dc && _0x12a1dc.addEventListener("change", () => {
    _0x15d341 = _0x12a1dc.value || "time_desc";
    _0x48881b();
  });
  function _0x5677f8() {
    const _0x321e60 = String(_0x15d341 || "");
    if (_0x321e60 === "time_asc") {
      return {
        col: "time",
        dir: "asc"
      };
    }
    if (_0x321e60 === "time_desc") {
      return {
        col: "time",
        dir: "desc"
      };
    }
    if (_0x321e60 === "seq_asc") {
      return {
        col: "seq",
        dir: "asc"
      };
    }
    if (_0x321e60 === "seq_desc") {
      return {
        col: "seq",
        dir: "desc"
      };
    }
    if (_0x321e60 === "size_desc") {
      return {
        col: "size",
        dir: "desc"
      };
    }
    if (_0x321e60 === "duration_desc") {
      return {
        col: "duration",
        dir: "desc"
      };
    }
    if (_0x321e60 === "type_asc") {
      return {
        col: "type",
        dir: "asc"
      };
    }
    return {
      col: "time",
      dir: "desc"
    };
  }
  function _0x17ed20(_0xb02b00, _0xc000cc) {
    {
      if (_0xb02b00 === "time") {
        _0x15d341 = _0xc000cc === "asc" ? "time_asc" : "time_desc";
      } else {
        if (_0xb02b00 === "seq") {
          _0x15d341 = _0xc000cc === "asc" ? "seq_asc" : "seq_desc";
        } else {
          if (_0xb02b00 === "size") {
            _0x15d341 = "size_desc";
          } else {
            if (_0xb02b00 === "duration") {
              _0x15d341 = "duration_desc";
            } else {
              if (_0xb02b00 === "type") {
                _0x15d341 = "type_asc";
              } else {
                _0x15d341 = "time_desc";
              }
            }
          }
        }
      }
      if (_0x12a1dc) {
        _0x12a1dc.value = _0x15d341;
      }
    }
  }
  function _0x36fd1f() {
    const {
      col: _0x2f385d,
      dir: _0x3e8dbe
    } = _0x5677f8();
    document.querySelectorAll(".header-sort[data-sort-col]").forEach(_0x3725e4 => {
      const _0x233516 = _0x3725e4.getAttribute("data-sort-col");
      if (_0x233516 === _0x2f385d) {
        _0x3725e4.setAttribute("data-sort-dir", _0x3e8dbe);
      } else {
        _0x3725e4.setAttribute("data-sort-dir", "none");
      }
    });
  }
  function _0x483f3d() {
    document.querySelectorAll(".record-header-row").forEach(_0x3effcc => {
      _0x3effcc.addEventListener("click", _0xc37bf2 => {
        const _0x541131 = _0xc37bf2.target.closest(".header-sort[data-sort-col]");
        if (!_0x541131) {
          return;
        }
        _0xc37bf2.preventDefault();
        _0xc37bf2.stopPropagation();
        const _0x5f1d6c = _0x541131.getAttribute("data-sort-col");
        const _0x4b63b3 = _0x5677f8();
        let _0x292160 = "desc";
        if (_0x5f1d6c === _0x4b63b3.col) {
          _0x292160 = _0x4b63b3.dir === "desc" ? "asc" : "desc";
        }
        if (_0x5f1d6c === "size" || _0x5f1d6c === "duration" || _0x5f1d6c === "type") {
          _0x292160 = _0x5f1d6c === "type" ? "asc" : "desc";
        }
        _0x17ed20(_0x5f1d6c, _0x292160);
        _0x36fd1f();
        if (_0x3a0472 === "history") {
          _0x5e6b83();
        } else {
          _0x1df5e8();
        }
      });
    });
  }
  _0x135714 && _0x135714.addEventListener("click", _0x4c923f);
  _0x45bd18 && (_0x45bd18.addEventListener("click", _0xd63fda), _0x45bd18.addEventListener("change", _0x45bf16));
  if (_0xd7a0ab) {
    {
      _0xd7a0ab.addEventListener("click", _0x2c4b23);
      _0xd7a0ab.addEventListener("change", _0x45bf16);
    }
  }
  _0x33f4e8 && _0x33f4e8.addEventListener("change", () => {
    const _0x1f574f = _0x1ce468();
    if (_0x33f4e8.checked) {
      _0x1f574f.forEach(_0x3fde33 => _0x37d6ec.add(_0x3fde33));
    } else {
      _0x1f574f.forEach(_0x137b66 => _0x37d6ec.delete(_0x137b66));
    }
    const _0x5cb7c5 = _0x3a0472 === "history" ? _0x45bd18 : _0xd7a0ab;
    _0x5cb7c5 && _0x5cb7c5.querySelectorAll(".row-select").forEach(_0x34fc60 => {
      _0x34fc60.checked = !!_0x33f4e8.checked;
    });
    _0x3fcfe5();
  });
  if (_0xb5ab8e) {
    _0xb5ab8e.addEventListener("click", () => _0x1bf3fb());
  }
  if (_0x531db7) {
    _0x531db7.addEventListener("click", () => _0x2d4ba2());
  }
  if (_0x48c42a) {
    _0x48c42a.addEventListener("click", () => _0x415ea7());
  }
  if (_0x47c42f) {
    _0x47c42f.addEventListener("click", () => _0x1d63ff());
  }
  if (_0x4b2878) {
    _0x4b2878.addEventListener("click", () => _0x2e4ea3());
  }
  if (_0x1655e8) {
    _0x1655e8.addEventListener("click", () => _0x2517ad());
  }
  if (_0xb86fc2) {
    _0xb86fc2.addEventListener("click", () => _0x493559());
  }
  _0x378bec && _0x378bec.addEventListener("click", _0x5bb44f => {
    _0x5bb44f.stopPropagation();
    _0x48b695 = !_0x48b695;
    _0x3fcfe5();
  });
  document.addEventListener("click", _0x4fabdd => {
    if (!_0x48b695) {
      return;
    }
    if (_0xa5818e && _0xa5818e.contains(_0x4fabdd.target)) {
      return;
    }
    _0x48b695 = false;
    _0x3fcfe5();
  });
  let _0x22471c;
  _0x51e2aa.addEventListener("input", () => {
    {
      clearTimeout(_0x22471c);
      _0x22471c = setTimeout(() => {
        _0x40cc72 = _0x51e2aa.value.trim();
        _0x48881b();
        _0x156848();
      }, 200);
    }
  });
  try {
    _0x4b6be4.storage.local.get(["eagleOpenHost", "language", "captureTypes", "customSuffixes", "sensitiveEnabled", "uiColUrlW", "sensitiveRuleColors", "sensitiveBuiltins", "sensitiveBuiltinRegexes", "sensitiveCustomRules", "sensitiveKeywordRules", "darkLinkDetectionEnabled", "darkLinkTrustedRoots", "darkLinkTrustedRootsSeedsRev", "payloadEncodingEnabled", "payloadEncodingChars", "microFuzzConcurrency", "microFuzzThrottleMs", "deepSearchFullBody", "eeLicenseFeaturesUnlocked", "proxyForwardFilterEnabled", "proxyForwardFilterRules", "proxyForwardUpstream", "proxyForwardRuntimeState", "proxyForwardResolvedUpstream", "proxyForwardLastError"], async _0x3177b2 => {
      _0x187e38 = !!(_0x3177b2 && _0x3177b2.eeLicenseFeaturesUnlocked === true);
      await _0x5c0fca(_0x3177b2 && _0x3177b2.language || "zh_CN");
      _0x2545e1(_0x3177b2 || {});
      _0x137574 = _0x3177b2 && typeof _0x3177b2.sensitiveEnabled === "boolean" ? _0x3177b2.sensitiveEnabled : true;
      _0x266e37 = _0x3177b2 && typeof _0x3177b2.darkLinkDetectionEnabled === "boolean" ? !!_0x3177b2.darkLinkDetectionEnabled : true;
      let _0x5efd96 = Array.isArray(_0x3177b2 && _0x3177b2.darkLinkTrustedRoots) ? _0x3177b2.darkLinkTrustedRoots : [];
      try {
        if (typeof globalThis.hx0ResolveDarkLinkTrustedRootsFromStorage === "function") {
          const _0x1a84ce = globalThis.hx0ResolveDarkLinkTrustedRootsFromStorage(_0x3177b2);
          _0x5efd96 = _0x1a84ce.roots;
          if (_0x1a84ce.persist && _0x4b6be4.storage && _0x4b6be4.storage.local) {
            {
              await new Promise(_0x596e07 => {
                {
                  try {
                    _0x4b6be4.storage.local.set(_0x1a84ce.persist, _0x596e07);
                  } catch (_0x3220b3) {
                    _0x596e07();
                  }
                }
              });
            }
          }
        }
      } catch (_0x38d071) {}
      try {
        const _0x585fc2 = window.hx0ThreatAnalyzer;
        _0x585fc2 && typeof _0x585fc2.setUserTrustedRoots === "function" && _0x585fc2.setUserTrustedRoots(_0x5efd96);
      } catch (_0x4f46e5) {}
      _0x59b777 = _0x3177b2 && typeof _0x3177b2.payloadEncodingEnabled === "boolean" ? !!_0x3177b2.payloadEncodingEnabled : true;
      _0x2503e9 = _0x3177b2 && typeof _0x3177b2.payloadEncodingChars === "string" && _0x3177b2.payloadEncodingChars ? _0x3177b2.payloadEncodingChars : _0x2503e9;
      _0x5bc376 = _0x3177b2 && Number.isFinite(Number(_0x3177b2.microFuzzConcurrency)) ? Math.max(1, Math.min(20, Math.floor(Number(_0x3177b2.microFuzzConcurrency)))) : _0x5bc376;
      _0x59da29 = _0x3177b2 && Number.isFinite(Number(_0x3177b2.microFuzzThrottleMs)) ? Math.max(0, Math.min(60000, Math.floor(Number(_0x3177b2.microFuzzThrottleMs)))) : _0x59da29;
      _0x110290 = _0x39b242() && !!(_0x3177b2 && _0x3177b2.deepSearchFullBody === true);
      if (_0x12823c) {
        _0x12823c.value = String(_0x5bc376);
      }
      if (_0x5b808c) {
        _0x5b808c.value = String(_0x59da29);
      }
      _0x137e6f = Array.isArray(_0x3177b2 && _0x3177b2.captureTypes) && _0x3177b2.captureTypes.length ? _0x3177b2.captureTypes : ["xhr_fetch", "json", "html", "js", "xml", "other_text"];
      _0x560cc2 = String(_0x3177b2 && _0x3177b2.customSuffixes || "").split(/[\n,，\s]+/).map(_0x36255c => _0x36255c.trim().toLowerCase().replace(/^\./, "")).filter(Boolean);
      _0x3177b2 && _0x3177b2.sensitiveRuleColors && typeof _0x3177b2.sensitiveRuleColors === "object" && (_0x43b3a5 = Object.assign({}, _0x9a0db4, _0x3177b2.sensitiveRuleColors));
      _0x1857bf = {};
      _0x78fbd = {};
      (_0x39b242() && Array.isArray(_0x3177b2 && _0x3177b2.sensitiveCustomRules) ? _0x3177b2.sensitiveCustomRules : []).forEach(_0x505139 => {
        if (_0x505139 && _0x505139.name) {
          _0x1857bf[_0x505139.name] = _0x505139.color || _0x43b3a5.customRegex;
        }
      });
      (_0x39b242() && Array.isArray(_0x3177b2 && _0x3177b2.sensitiveKeywordRules) ? _0x3177b2.sensitiveKeywordRules : []).forEach(_0x40559f => {
        if (_0x40559f && _0x40559f.name) {
          _0x78fbd[_0x40559f.name] = _0x40559f.color || _0x43b3a5.keyword;
        }
      });
      _0x338775(_0x3177b2 || {});
      _0x4a6633();
      _0x413903(_0x3177b2 || {});
      _0x18561b();
      _0x3507();
      _0x14c7ff();
      _0x8c4bee();
      _0x170b0f = _0x3177b2 && _0x3177b2.eagleOpenHost || "";
      _0x3e95a5 = null;
      _0x15549e = "current";
      _0x56b676 = _0x170b0f || "";
      _0x2dde63 = null;
      if (_0x12a1dc) {
        _0x12a1dc.value = _0x15d341;
      }
      _0x848d3();
      _0x12f43f();
      _0x331035();
      _0x25a62d("history");
      _0x3f80c8(true);
    });
  } catch (_0x5e6269) {
    {
      _0x137e6f = ["xhr_fetch", "json", "html", "js", "xml", "other_text"];
      _0x560cc2 = [];
      if (_0x12a1dc) {
        _0x12a1dc.value = _0x15d341;
      }
      _0x848d3();
      _0x12f43f();
      _0x331035();
      _0x25a62d("history");
      _0x3f80c8(true);
    }
  }
  try {
    _0x4b6be4 && _0x4b6be4.tabs && _0x4b6be4.tabs.onActivated && _0x4b6be4.tabs.onActivated.addListener(() => {
      _0x3f80c8(_0x3a0472 === "history");
    });
  } catch (_0x273b44) {}
  try {
    {
      _0x4b6be4 && _0x4b6be4.tabs && _0x4b6be4.tabs.onUpdated && _0x4b6be4.tabs.onUpdated.addListener((_0x3a6894, _0x545923, _0x203da4) => {
        if (!_0x545923 || _0x545923.status !== "complete") {
          return;
        }
        if (!_0x203da4 || !_0x203da4.active) {
          return;
        }
        _0x3f80c8(_0x3a0472 === "history");
      });
    }
  } catch (_0x4c8318) {}
  window.addEventListener("resize", () => _0x2e6a95());
  _0x4b6be4.storage && _0x4b6be4.storage.onChanged && _0x4b6be4.storage.onChanged.addListener((_0x2759fb, _0x544b47) => {
    {
      if (_0x544b47 !== "local") {
        return;
      }
      _0x2759fb.sensitiveRuleColors && _0x2759fb.sensitiveRuleColors.newValue && (_0x43b3a5 = Object.assign({}, _0x9a0db4, _0x2759fb.sensitiveRuleColors.newValue));
      (_0x2759fb.sensitiveCustomRules || _0x2759fb.sensitiveKeywordRules || _0x2759fb.sensitiveRuleColors || _0x2759fb.sensitiveBuiltins || _0x2759fb.sensitiveBuiltinRegexes) && _0x4b6be4.storage.local.get(["sensitiveBuiltins", "sensitiveBuiltinRegexes", "sensitiveCustomRules", "sensitiveKeywordRules"], _0x346f7b => {
        _0x1857bf = {};
        _0x78fbd = {};
        (_0x39b242() && Array.isArray(_0x346f7b && _0x346f7b.sensitiveCustomRules) ? _0x346f7b.sensitiveCustomRules : []).forEach(_0x1e175f => {
          if (_0x1e175f && _0x1e175f.name) {
            _0x1857bf[_0x1e175f.name] = _0x1e175f.color || _0x43b3a5.customRegex;
          }
        });
        (_0x39b242() && Array.isArray(_0x346f7b && _0x346f7b.sensitiveKeywordRules) ? _0x346f7b.sensitiveKeywordRules : []).forEach(_0x4c8b6f => {
          if (_0x4c8b6f && _0x4c8b6f.name) {
            _0x78fbd[_0x4c8b6f.name] = _0x4c8b6f.color || _0x43b3a5.keyword;
          }
        });
        _0x338775(Object.assign({}, _0x346f7b || {}, {
          sensitiveRuleColors: _0x43b3a5
        }));
        if (_0x3a0472 === "history") {
          _0x2000d6();
        } else {
          _0x1e04ba(_0xa02ab3);
        }
        _0x8c4bee();
      });
      if (_0x2759fb.sensitiveEnabled) {
        _0x137574 = typeof _0x2759fb.sensitiveEnabled.newValue === "boolean" ? !!_0x2759fb.sensitiveEnabled.newValue : true;
        if (!_0x137574) {
          _0x594eca = "";
        }
        _0x3507();
        _0x14c7ff();
        _0x8c4bee();
        _0x25a62d(_0x3a0472);
      }
      _0x2759fb.darkLinkDetectionEnabled && (_0x266e37 = !!_0x2759fb.darkLinkDetectionEnabled.newValue);
      if (_0x2759fb.darkLinkTrustedRoots) {
        try {
          const _0x6278f2 = window.hx0ThreatAnalyzer;
          const _0x46b4f8 = _0x2759fb.darkLinkTrustedRoots.newValue;
          _0x6278f2 && typeof _0x6278f2.setUserTrustedRoots === "function" && _0x6278f2.setUserTrustedRoots(Array.isArray(_0x46b4f8) ? _0x46b4f8 : []);
        } catch (_0x6c324c) {}
      }
      _0x2759fb.deepSearchFullBody && (_0x110290 = _0x39b242() && _0x2759fb.deepSearchFullBody.newValue === true, _0x48881b());
      if (_0x2759fb.captureTypes) {
        const _0x4250fc = _0x2759fb.captureTypes.newValue;
        _0x137e6f = Array.isArray(_0x4250fc) && _0x4250fc.length ? _0x4250fc : ["xhr_fetch", "json", "html", "js", "xml", "other_text"];
        _0x12f43f();
        if (_0x3a0472 === "history") {
          _0x5e6b83();
        }
      }
      if (_0x2759fb.customSuffixes) {
        {
          _0x560cc2 = String(_0x2759fb.customSuffixes.newValue || "").split(/[\n,，\s]+/).map(_0x1046aa => _0x1046aa.trim().toLowerCase().replace(/^\./, "")).filter(Boolean);
          _0x12f43f();
          if (_0x3a0472 === "history") {
            _0x5e6b83();
          } else {
            if (_0x3a0472 === "intercept") {
              _0x1df5e8();
            }
          }
        }
      }
      (_0x2759fb.proxyForwardFilterEnabled || _0x2759fb.proxyForwardFilterRules || _0x2759fb.proxyForwardUpstream || _0x2759fb.proxyForwardRuntimeState || _0x2759fb.proxyForwardResolvedUpstream || _0x2759fb.proxyForwardLastError) && _0x413903({
        proxyForwardFilterEnabled: _0x2759fb.proxyForwardFilterEnabled ? _0x2759fb.proxyForwardFilterEnabled.newValue : _0x6a6200,
        proxyForwardFilterRules: _0x2759fb.proxyForwardFilterRules ? _0x2759fb.proxyForwardFilterRules.newValue : _0x3b9aa8 ? _0x3b9aa8.value : "",
        proxyForwardUpstream: _0x2759fb.proxyForwardUpstream ? _0x2759fb.proxyForwardUpstream.newValue : _0x28196b ? _0x28196b.value : "",
        proxyForwardRuntimeState: _0x2759fb.proxyForwardRuntimeState ? _0x2759fb.proxyForwardRuntimeState.newValue : _0x83370e,
        proxyForwardResolvedUpstream: _0x2759fb.proxyForwardResolvedUpstream ? _0x2759fb.proxyForwardResolvedUpstream.newValue : _0x171509,
        proxyForwardLastError: _0x2759fb.proxyForwardLastError ? _0x2759fb.proxyForwardLastError.newValue : _0x516e9b
      });
      if (_0x2759fb.language) {
        {
          const _0x5bbf6e = _0x2759fb.language.newValue || "zh_CN";
          _0x5c0fca(_0x5bbf6e).then(() => {
            _0x4a6633();
            _0x18561b();
            _0xdaab54();
            if (_0x3b3dbf) {
              _0x3b3dbf.title = _0x850dc("filterByHost");
            }
            if (_0x61a31c) {
              _0x61a31c.title = _0x850dc("filterByMethod");
            }
            if (_0x5220db) {
              _0x5220db.title = _0x850dc("filterByStatus");
            }
            if (_0x15a85a) {
              _0x15a85a.title = _0x850dc("filterBySensitive");
            }
            _0x44a653();
            _0x1356f0();
            _0x1e4558();
            _0x45eeb2();
            _0x848d3();
            _0x38717d();
            _0x25a62d(_0x3a0472);
          });
        }
      }
    }
  });
  if (_0x47d2d8) {
    _0x47d2d8.addEventListener("click", _0x347a72);
  }
  _0x1898fa && _0x1898fa.addEventListener("click", _0x21ca22 => {
    if (_0x21ca22.target === _0x1898fa) {
      _0x347a72();
    }
  });
  _0x216123 && _0x2f943c && _0x1073d3 && _0x216123.addEventListener("click", () => {
    {
      if (!_0x170fd0 || !_0x170fd0.length) {
        const _0x426e9a = _0x3cb71f(_0x1073d3);
        const _0x2536e2 = (_0x426e9a.match(/§/g) || []).length;
        if (_0x2536e2 < 2) {
          _0x34a884(_0x850dc("microFuzzNeedMarkAlert") || "Please mark an injection point in the request first (wrap one parameter with §...§).");
          return;
        }
        if (_0x2536e2 > 2) {
          _0x34a884(_0x850dc("microFuzzOnlySinglePointAlert") || "Only single injection point is supported. Please keep exactly one pair of § marks.");
          return;
        }
      }
      _0x2f943c.classList.remove("hidden");
      if (_0x2f943c && !_0x2f943c.dataset.fuzzDetailSearchBound) {
        {
          _0x2f943c.dataset.fuzzDetailSearchBound = "1";
          _0x219155(_0x2f943c, "#fuzzDetailReqSearchInput", "#fuzzDetailRequest", "#fuzzDetailReqSearchPrev", "#fuzzDetailReqSearchNext", "#fuzzDetailReqSearchCount");
          _0x219155(_0x2f943c, "#fuzzDetailRespSearchInput", "#fuzzDetailResponse", "#fuzzDetailRespSearchPrev", "#fuzzDetailRespSearchNext", "#fuzzDetailRespSearchCount");
        }
      }
      if (_0x2b9f36.fuzz) {
        _0x2b9f36.fuzz();
      }
    }
  });
  _0xc43b1f && _0x2f943c && _0xc43b1f.addEventListener("click", () => {
    _0x2f943c.classList.add("hidden");
  });
  _0x2f943c && _0x2f943c.addEventListener("click", _0x2b0420 => {
    if (_0x2b0420.target === _0x2f943c) {
      _0x2f943c.classList.add("hidden");
    }
  });
  {
    {
      const _0x43344e = _0x4821f9(_0x1898fa, _0x1898fa && _0x1898fa.querySelector(".replay-modal-card"), "replayModalLayout", {
        minW: 560,
        minH: 400
      });
      if (_0x43344e) {
        _0x2b9f36.replay = _0x43344e.resetToMaxCentered;
      }
    }
  }
  {
    const _0x5701b6 = _0x4821f9(_0x2f943c, _0x2f943c && _0x2f943c.querySelector(".replay-modal-card"), "replayFuzzModalLayout", {
      minW: 520,
      minH: 380
    });
    if (_0x5701b6) {
      _0x2b9f36.fuzz = _0x5701b6.resetToMaxCentered;
    }
  }
  if (_0x489be6 && _0x2896ab) {
    {
      _0x5d5247();
      _0x489be6.addEventListener("input", () => {
        _0x5d5247();
      });
    }
  }
  _0x12823c && _0x12823c.addEventListener("input", () => {
    {
      const _0x46272 = Math.max(1, Math.min(20, Math.floor(Number(_0x12823c.value || "3") || 3)));
      _0x5bc376 = _0x46272;
      try {
        _0x4b6be4.storage.local.set({
          microFuzzConcurrency: _0x46272
        });
      } catch (_0x15796a) {}
    }
  });
  _0x5b808c && _0x5b808c.addEventListener("input", () => {
    const _0x399ee4 = Math.max(0, Math.min(60000, Math.floor(Number(_0x5b808c.value || "0") || 0)));
    _0x59da29 = _0x399ee4;
    try {
      _0x4b6be4.storage.local.set({
        microFuzzThrottleMs: _0x399ee4
      });
    } catch (_0x201fb3) {}
  });
  _0x353b32 && _0x1073d3 && _0x353b32.addEventListener("click", () => {
    const _0x4fffe6 = _0x1073d3 && _0x1073d3.dataset ? _0x1073d3.dataset.viewMode || "raw" : "raw";
    const _0x219c9a = _0x3cb71f(_0x1073d3) || _0x307492(_0x1073d3) || "";
    _0x9fe1e1(_0x1073d3, _0x219c9a);
    const _0x5d666b = (_0x219c9a.match(/§/g) || []).length;
    if (_0x5d666b >= 2) {
      const _0x19906e = _0x219c9a.replace(/§/g, "");
      _0x9fe1e1(_0x1073d3, _0x19906e);
      _0x5d3ef2(_0x1073d3, _0x4fffe6, false);
      _0x9bd96d();
      return;
    }
    const _0x88eaf0 = _0x219c9a;
    const _0x145f16 = _0x295787();
    if (!_0x145f16) {
      _0x34a884(_0x850dc("microFuzzSelectInjectionPoint"));
      return;
    }
    let _0x4b2264 = _0x145f16.start;
    let _0x49eb78 = _0x145f16.end;
    if (_0x4b2264 === _0x49eb78) {
      {
        const _0x474717 = Math.max(0, Math.min(_0x88eaf0.length, _0x4b2264));
        const _0x161cf9 = _0x3fba8b => /[A-Za-z0-9_.\-]/.test(_0x3fba8b);
        let _0x3adb9d = _0x474717;
        let _0x3179f6 = _0x474717;
        if (_0x3adb9d > 0 && !_0x161cf9(_0x88eaf0[_0x3adb9d]) && _0x161cf9(_0x88eaf0[_0x3adb9d - 1])) {
          _0x3adb9d = _0x3adb9d - 1;
        }
        while (_0x3adb9d > 0 && _0x161cf9(_0x88eaf0[_0x3adb9d - 1])) {
          _0x3adb9d--;
        }
        while (_0x3179f6 < _0x88eaf0.length && _0x161cf9(_0x88eaf0[_0x3179f6])) {
          _0x3179f6++;
        }
        _0x3179f6 > _0x3adb9d && (_0x4b2264 = _0x3adb9d, _0x49eb78 = _0x3179f6);
      }
    }
    const _0x4456bd = _0x88eaf0.slice(0, _0x4b2264);
    const _0xc668e8 = _0x88eaf0.slice(_0x4b2264, _0x49eb78);
    const _0x1fb592 = _0x88eaf0.slice(_0x49eb78);
    let _0x3e0406;
    if (_0x4b2264 === _0x49eb78) {
      _0x3e0406 = _0x4456bd + "§" + _0x1fb592;
    } else {
      _0x3e0406 = _0x4456bd + "§" + _0xc668e8 + "§" + _0x1fb592;
    }
    _0x9fe1e1(_0x1073d3, _0x3e0406);
    _0x5d3ef2(_0x1073d3, _0x4fffe6, false);
    _0x9bd96d();
  });
  async function _0x514ae0(_0x2a4268) {
    if (!_0x3e8fd4()) {
      return;
    }
    if (!_0x1073d3 || !_0x489be6 || !_0x10a231) {
      return;
    }
    if (_0x5af9fa) {
      return;
    }
    _0x2a4268 = !!_0x2a4268;
    const _0x21b2ca = _0x33d5a5 && _0x158eac ? _0x33d5a5.find(_0x11a577 => _0x11a577.id === _0x158eac) : null;
    const _0x55b62a = _0x2ec227();
    const _0x193461 = _0x1073d3 && _0x1073d3.dataset ? _0x1073d3.dataset.viewMode || "raw" : "raw";
    _0x193461 !== "raw" && (_0x1073d3.dataset.viewMode = "raw", _0x50f57b(_0x1898fa && _0x1898fa.querySelector(".replay-req-toggle"), "raw"), _0x5d3ef2(_0x1073d3, "raw", false));
    const _0x2b942c = _0x307492(_0x1073d3);
    const _0x4aac22 = (_0x2b942c.match(/§/g) || []).length;
    if (_0x4aac22 < 2) {
      _0x34a884(_0x850dc("microFuzzNeedMarkAlert") || "Please mark an injection point in the request first (wrap one parameter with §...§).");
      return;
    }
    if (_0x4aac22 > 2) {
      _0x34a884(_0x850dc("microFuzzOnlySinglePointAlert") || "Only single injection point is supported. Please keep exactly one pair of § marks.");
      return;
    }
    const _0x24daea = _0x2b942c.indexOf("§");
    const _0x505f83 = _0x2b942c.indexOf("§", _0x24daea + 1);
    if (_0x24daea < 0 || _0x505f83 <= _0x24daea) {
      _0x34a884(_0x850dc("microFuzzInvalidMarkAlert") || "Invalid injection mark. Please re-mark it.");
      return;
    }
    const _0x42128e = _0x489be6.value || "";
    const _0x1db1cd = _0x42128e.split(/\r?\n/).map(_0xd6c1ae => _0xd6c1ae).filter(_0x5a49a8 => _0x5a49a8.trim() !== "");
    if (!_0x1db1cd.length) {
      _0x34a884(_0x850dc("microFuzzNeedPayloadAlert") || "Please enter at least one payload (one per line).");
      return;
    }
    if (_0x2a4268) {
      {
        const _0xe1d9a0 = _0x2b942c.replace(/§/g, "");
        let _0x5f5826;
        try {
          {
            _0x5f5826 = _0x2370d2(_0xe1d9a0, _0x4ddb66, {
              smartEncodeUrl: !!_0x59b777
            });
          }
        } catch (_0x586e54) {
          _0x5f5826 = {
            method: "GET",
            url: ""
          };
        }
        _0x145f0a(_0x5f5826, _0x55b62a);
        if (String(_0x5f5826.method || "GET").toUpperCase() !== "GET") {
          _0x34a884(_0x850dc("replayDomGetOnly") || "In-page replay supports GET requests only.");
          return;
        }
      }
    }
    _0x5af9fa = true;
    _0x170fd0 = [];
    _0x10a231.innerHTML = "";
    let _0x30b04a = null;
    let _0x2ae1b0 = 0;
    let _0x2841dd = 0;
    if (_0x2ca848 && _0x1779e1) {
      {
        _0x2ca848.style.display = "none";
        if (_0x1a4598) {
          _0x1a4598.style.display = "none";
        }
        _0x1779e1.style.display = "";
      }
    }
    const _0x1a20c6 = async (_0x187767, _0x51b877) => {
      const _0x1ed3ab = _0x51b877 && typeof _0x51b877.payload === "string" ? _0x51b877.payload : "";
      const _0x1ade60 = _0x51b877 && typeof _0x51b877.payloadOriginal === "string" ? _0x51b877.payloadOriginal : "";
      const _0x3c2e19 = _0x51b877 && _0x51b877.ordinal != null ? Number(_0x51b877.ordinal) : 0;
      const _0x18bee3 = _0x51b877 && _0x51b877.storeIndex != null ? Number(_0x51b877.storeIndex) : 0;
      const _0xc53406 = !!(_0x51b877 && _0x51b877.isBaseline);
      let _0x53919f;
      let _0x179b72 = false;
      try {
        _0x53919f = _0x2370d2(_0x187767, _0x4ddb66, {
          smartEncodeUrl: !!_0x59b777
        });
        _0x179b72 = true;
      } catch (_0xbbd8a8) {
        try {
          _0x53919f = _0x2370d2(_0x2b942c, _0x4ddb66, {
            smartEncodeUrl: !!_0x59b777
          });
        } catch (_0x3b0a10) {
          _0x53919f = null;
        }
      }
      if (_0x53919f) {
        _0x145f0a(_0x53919f, _0x55b62a);
      }
      const _0x2cb90c = performance.now();
      let _0x1205e9 = null;
      const _0x4f066d = _0x2a4268 ? _0xebda08.MESSAGE.REPLAY_DOM || "REPLAY_DOM" : _0xebda08.MESSAGE.REPLAY || "REPLAY";
      const _0x1bb6ec = _0x2a4268 ? {
        url: _0x53919f && _0x53919f.url,
        domWaitMs: 3500
      } : {
        url: _0x53919f && _0x53919f.url,
        method: _0x53919f && _0x53919f.method,
        headers: _0x53919f && _0x53919f.headers,
        body: _0x53919f && _0x53919f.body || undefined
      };
      try {
        _0x1205e9 = await _0x583d29({
          type: _0x4f066d,
          url: _0x53919f && _0x53919f.url,
          payload: _0x1bb6ec
        });
      } catch (_0x3d0dff) {
        _0x1205e9 = {
          ok: false,
          error: String(_0x3d0dff && _0x3d0dff.message ? _0x3d0dff.message : _0x3d0dff || "Fuzz replay failed")
        };
      }
      const _0x4ad7d9 = Math.round(performance.now() - _0x2cb90c);
      let _0x4cb5bd = "-";
      let _0x23809c = "";
      let _0xe83b0c = 0;
      const _0x31bea1 = !!(_0x1205e9 && _0x1205e9.methodAutoFixed);
      let _0x5cca32 = [];
      if (_0x1205e9 && _0x1205e9.ok) {
        _0x4cb5bd = String(_0x1205e9.status || "-");
        _0x23809c = _0xbc6e93(_0x1205e9);
        _0x5cca32 = _0x3b791b(_0x23809c);
      } else {
        _0x4cb5bd = "ERR";
        _0x23809c = String(_0x1205e9 && _0x1205e9.error || "Replay failed");
        if (_0x31bea1) {
          _0x23809c = "Method auto-fixed to POST\n" + _0x23809c;
        }
      }
      _0xe83b0c = new TextEncoder().encode(_0x23809c).length;
      const _0x214aaf = {
        index: _0x18bee3,
        ordinal: _0x3c2e19,
        payload: _0x1ed3ab,
        requestRaw: _0x255e86(_0x187767, _0x179b72 ? _0x53919f : null, _0x4ddb66),
        responseRaw: _0x23809c,
        status: _0x4cb5bd,
        sizeBytes: _0xe83b0c,
        durationMs: _0x4ad7d9,
        targetOriginOverride: _0x55b62a,
        isBaseline: _0xc53406,
        methodAutoFixed: _0x31bea1,
        sensitiveHits: _0x5cca32
      };
      _0x170fd0[_0x18bee3] = _0x214aaf;
      const _0x3435ed = document.createElement("tr");
      _0x3435ed.dataset.idx = String(_0x18bee3);
      if (_0xc53406) {
        _0x3435ed.classList.add("replay-fuzz-baseline-row");
      }
      const _0x214dd4 = document.createElement("td");
      _0x214dd4.className = "fuzz-col-idx";
      _0x214dd4.textContent = _0xc53406 ? "0" : String(_0x3c2e19);
      const _0x17eeea = document.createElement("td");
      _0x17eeea.className = "fuzz-col-payload";
      _0x17eeea.textContent = _0xc53406 ? _0x850dc("microFuzzBaselineLabel") || "[BASELINE] Raw packet" : _0x1ed3ab;
      !_0xc53406 && _0x1ade60 && _0x1ed3ab !== _0x1ade60 && (_0x17eeea.title = (_0x850dc("microFuzzPayloadOriginalTitle") || "Original: ") + _0x1ade60);
      const _0x383e66 = document.createElement("td");
      _0x383e66.className = "fuzz-col-status";
      _0x383e66.textContent = _0x4cb5bd;
      if (_0x4cb5bd === "200") {
        _0x383e66.classList.add("replay-fuzz-status-ok");
      }
      if (/^[45]\d\d$/.test(_0x4cb5bd) || _0x4cb5bd === "ERR") {
        _0x383e66.classList.add("replay-fuzz-status-error");
      }
      if (_0x31bea1) {
        _0x383e66.classList.add("replay-fuzz-status-autofix");
      }
      const _0x4b6c46 = document.createElement("td");
      _0x4b6c46.className = "fuzz-col-length";
      _0x4b6c46.textContent = String(_0xe83b0c);
      if (_0x30b04a && _0x30b04a > 0) {
        {
          const _0x23615b = Math.abs(_0xe83b0c - _0x30b04a) / _0x30b04a;
          if (_0x23615b > 0.2) {
            _0x4b6c46.classList.add("replay-fuzz-length-anomaly");
          }
        }
      }
      const _0x1d6520 = document.createElement("td");
      _0x1d6520.className = "fuzz-col-time";
      _0x1d6520.textContent = String(_0x4ad7d9) + " ms";
      const _0x231ddc = document.createElement("td");
      _0x231ddc.className = "fuzz-col-sensitive";
      _0x231ddc.innerHTML = _0x152d54(_0x5cca32);
      if (!_0x137574) {
        _0x231ddc.style.display = "none";
      }
      const _0x3c2881 = document.createElement("td");
      _0x3c2881.className = "fuzz-col-ops";
      const _0x5236e6 = document.createElement("button");
      _0x5236e6.type = "button";
      _0x5236e6.textContent = _0x850dc("microFuzzView") || _0x850dc("detail") || "View";
      _0x5236e6.className = "btn replay-fuzz-view-btn";
      _0x3c2881.appendChild(_0x5236e6);
      if (_0x31bea1) {
        const _0x5dbe94 = document.createElement("div");
        _0x5dbe94.className = "replay-fuzz-method-fix-note";
        _0x5dbe94.textContent = "Method auto-fixed to POST";
        _0x3c2881.appendChild(_0x5dbe94);
      }
      _0x3435ed.appendChild(_0x214dd4);
      _0x3435ed.appendChild(_0x17eeea);
      _0x3435ed.appendChild(_0x383e66);
      _0x3435ed.appendChild(_0x4b6c46);
      _0x3435ed.appendChild(_0x1d6520);
      _0x3435ed.appendChild(_0x231ddc);
      _0x3435ed.appendChild(_0x3c2881);
      _0x10a231.appendChild(_0x3435ed);
      return _0x214aaf;
    };
    try {
      const _0x5ec8f5 = _0x2b942c.replace(/§/g, "");
      const _0x35fac9 = await _0x1a20c6(_0x5ec8f5, {
        payload: "",
        ordinal: 0,
        storeIndex: 0,
        isBaseline: true
      });
      _0x30b04a = _0x35fac9 ? _0x35fac9.sizeBytes : null;
    } catch (_0xb63e36) {
      _0x30b04a = null;
    }
    const _0x175408 = _0x33f0c4 => new Promise(_0x4db168 => setTimeout(_0x4db168, Math.max(0, _0x33f0c4 | 0)));
    const _0x5ea9e2 = Math.max(1, Math.min(20, Number(_0x5bc376) || 3));
    const _0x33eede = Math.max(0, Number(_0x59da29) || 0);
    const _0x4f3897 = () => {
      {
        if (_0x2ae1b0 >= _0x1db1cd.length) {
          return -1;
        }
        const _0x18409e = _0x2ae1b0;
        _0x2ae1b0 += 1;
        return _0x18409e;
      }
    };
    const _0x2f853c = async () => {
      while (_0x5af9fa) {
        const _0xb0d662 = _0x4f3897();
        if (_0xb0d662 < 0) {
          break;
        }
        _0x2841dd += 1;
        try {
          const _0x37f80e = _0x1db1cd[_0xb0d662];
          const _0x1f9395 = _0xb0d662 + 1;
          const _0x381141 = !!_0x59b777;
          const _0x284bcb = String(_0x2503e9 || "");
          const _0x38ee41 = _0x381141 ? _0x5f2ad2(_0x284bcb) : null;
          const _0xe44d22 = _0x381141 ? _0x1add2a(_0x37f80e, _0x38ee41) : _0x37f80e;
          const _0x2fd390 = _0x2b942c.slice(0, _0x24daea) + _0xe44d22 + _0x2b942c.slice(_0x505f83 + 1);
          await _0x1a20c6(_0x2fd390, {
            payload: _0xe44d22,
            payloadOriginal: _0x37f80e,
            ordinal: _0x1f9395,
            storeIndex: _0xb0d662 + 1,
            isBaseline: false
          });
        } finally {
          _0x2841dd -= 1;
        }
        if (!_0x5af9fa) {
          break;
        }
        if (_0x33eede > 0) {
          await _0x175408(_0x33eede);
        }
      }
    };
    const _0xca6444 = [];
    for (let _0x3fab91 = 0; _0x3fab91 < _0x5ea9e2; _0x3fab91++) {
      _0xca6444.push(_0x2f853c());
    }
    Promise.allSettled(_0xca6444).then(() => {
      if (!_0x5af9fa) {
        return;
      }
      _0x5af9fa = false;
      if (_0x2ca848 && _0x1779e1) {
        {
          _0x2ca848.style.display = "";
          if (_0x1a4598) {
            _0x1a4598.style.display = "";
          }
          _0x1779e1.style.display = "none";
        }
      }
    });
  }
  _0x2ca848 && _0x2ca848.addEventListener("click", () => _0x514ae0(false));
  if (_0x1a4598) {
    {
      _0x1a4598.addEventListener("click", () => _0x514ae0(true));
    }
  }
  if (_0x1779e1) {
    {
      _0x1779e1.addEventListener("click", () => {
        {
          _0x5af9fa = false;
          if (_0x2ca848 && _0x1779e1) {
            {
              _0x2ca848.style.display = "";
              if (_0x1a4598) {
                _0x1a4598.style.display = "";
              }
              _0x1779e1.style.display = "none";
            }
          }
        }
      });
    }
  }
  _0x9cf3cc && _0x9cf3cc.addEventListener("click", () => {
    {
      _0x5af9fa = false;
      if (_0x2ca848 && _0x1779e1) {
        _0x2ca848.style.display = "";
        if (_0x1a4598) {
          _0x1a4598.style.display = "";
        }
        _0x1779e1.style.display = "none";
      }
      if (_0x489be6) {
        _0x489be6.value = "";
        _0x5d5247();
      }
      _0x170fd0 = [];
      if (_0x10a231) {
        _0x10a231.innerHTML = "";
      }
      _0xc41ff8 && (_0x9fe1e1(_0xc41ff8, ""), _0xc41ff8.innerHTML = "");
      _0x3025ed && (_0x9fe1e1(_0x3025ed, ""), _0x3025ed.innerHTML = "");
      try {
        _0x8c4bee();
      } catch (_0x3d7ac4) {}
      try {
        _0x1582b6();
      } catch (_0x19c7c5) {}
    }
  });
  _0x889ae9 && _0x889ae9.addEventListener("click", async () => {
    if (!_0x489be6) {
      return;
    }
    const _0xf7056e = await _0x40a53e();
    if (!_0xf7056e) {
      return;
    }
    const _0x312481 = _0xf7056e.picked || [];
    const _0x36e7c1 = _0xf7056e.custom || null;
    const _0x3b89fc = _0x312481.reduce((_0x4965cc, _0x337b56) => _0x4965cc + (_0x337b56.count || 0), 0) + (_0x36e7c1 ? _0x36e7c1.count || 0 : 0);
    if (!_0x3b89fc) {
      return;
    }
    try {
      if (_0x889ae9.dataset._origText == null) {
        _0x889ae9.dataset._origText = _0x889ae9.textContent || "";
      }
      _0x889ae9.textContent = _0x850dc("microFuzzAiPayloadLoading") || "Generating…";
      _0x889ae9.disabled = true;
    } catch (_0x393671) {}
    _0x4b6be4.runtime.sendMessage({
      type: "GET_SETTINGS",
      keys: ["aiProvider", "aiBaseUrl", "aiApiKey", "aiModel", "language"]
    }, _0x3ac0ed => {
      const _0x5f482b = _0x3ac0ed && _0x3ac0ed.language || (_0x4b6be4.i18n && _0x4b6be4.i18n.getUILanguage ? _0x4b6be4.i18n.getUILanguage() : "") || "zh_CN";
      const _0x22ec2b = _0x3ac0ed && _0x3ac0ed.aiApiKey ? String(_0x3ac0ed.aiApiKey) : "";
      if (!_0x791874(_0x3ac0ed) && !_0x22ec2b.trim()) {
        try {
          _0x34a884(_0x850dc("microFuzzAiNeedApiKey") || "Please configure your AI API Key in Settings first.");
        } catch (_0x37a938) {}
        try {
          _0x889ae9.textContent = _0x889ae9.dataset._origText || _0x850dc("microFuzzAiPayload") || "AI Payload";
          _0x889ae9.disabled = false;
        } catch (_0x373755) {}
        return;
      }
      const _0x346d84 = [].concat(_0x312481.map(_0x6bd346 => ({
        type: _0x6bd346.type,
        count: _0x6bd346.count
      }))).concat(_0x36e7c1 ? [{
        type: _0x850dc("replayAiCaseTypeCustom"),
        count: _0x36e7c1.count,
        prompt: _0x36e7c1.prompt
      }] : []);
      const _0x36a78c = {
        baseUrl: _0x3ac0ed && _0x3ac0ed.aiBaseUrl || "https://api.openai.com",
        apiKey: _0x22ec2b,
        model: _0x3ac0ed && _0x3ac0ed.aiModel || "gpt-4o-mini",
        language: _0x5f482b,
        systemPrompt: "你是微型Fuzz Payload生成器。只输出严格JSON，不要解释/markdown/代码块/多余文本；payload为字符串数组，去重。输出必须可被 JSON.parse 直接解析。"
      };
      const _0x4bb2f3 = (() => {
        try {
          const _0x1cdd23 = _0x1073d3 ? _0x307492(_0x1073d3) : "";
          return String(_0x1cdd23 || "").slice(0, 6000);
        } catch (_0x12724e) {
          return "";
        }
      })();
      const _0x1b6ffc = "输出严格JSON（不要任何额外文字），格式固定为：{\"items\":[{\"type\":\"类型\",\"payloads\":[\"p1\",\"p2\"]}]}\n规则：payloads 数量>=count；payload 仅为字符串本体；尽量短；去重。\ntypeSpec=" + JSON.stringify(_0x346d84) + "\n" + (_0x36e7c1 && _0x36e7c1.prompt ? "customPrompt=" + String(_0x36e7c1.prompt).slice(0, 800) + "\n" : "") + (_0x4bb2f3.trim() ? "reqContext=" + _0x4bb2f3 + "\n" : "") + "只输出JSON：";
      _0x4b6be4.runtime.sendMessage({
        type: "AI_ANALYZE",
        task: "microfuzz_payload_gen",
        prompt: _0x1b6ffc,
        config: _0x36a78c
      }, _0x393487 => {
        try {
          _0x889ae9 && (_0x889ae9.textContent = _0x889ae9.dataset._origText || _0x850dc("microFuzzAiPayload") || "AI Payload", _0x889ae9.disabled = false);
        } catch (_0x60f3dc) {}
        if (!_0x393487 || !_0x393487.ok) {
          try {
            _0x34a884((_0x850dc("microFuzzAiFailedPrefix") || "AI generation failed: ") + String(_0x393487 && _0x393487.error || _0x850dc("unknownError")));
          } catch (_0x53a6bc) {}
          return;
        }
        const _0x5e6d8d = _0x206d37(_0x393487.parsed != null ? _0x393487.parsed : _0x393487.content || "");
        const _0x47fc68 = _0x5e6d8d && Array.isArray(_0x5e6d8d.items) ? _0x5e6d8d.items : null;
        if (!_0x47fc68 || !_0x47fc68.length) {
          const _0x57d7f3 = "仅输出严格JSON（不要任何额外文字/markdown/代码块）。格式：{\"items\":[{\"type\":\"类型\",\"payloads\":[\"p1\",\"p2\"]}]}\n" + String(_0x393487.content || "").slice(0, 8000);
          _0x4b6be4.runtime.sendMessage({
            type: "AI_ANALYZE",
            task: "microfuzz_payload_gen",
            prompt: _0x57d7f3,
            config: _0x36a78c
          }, _0x1c9848 => {
            if (!_0x1c9848 || !_0x1c9848.ok) {
              try {
                {
                  _0x34a884(_0x850dc("microFuzzAiPayloadBadFormat") || "AI returned an invalid format. Cannot parse payload JSON.");
                }
              } catch (_0x593a3c) {}
              return;
            }
            const _0x2f445b = _0x206d37(_0x1c9848.parsed != null ? _0x1c9848.parsed : _0x1c9848.content || "");
            const _0x516980 = _0x2f445b && Array.isArray(_0x2f445b.items) ? _0x2f445b.items : null;
            if (!_0x516980 || !_0x516980.length) {
              {
                try {
                  _0x34a884(_0x850dc("microFuzzAiPayloadBadFormat") || "AI returned an invalid format. Cannot parse payload JSON.");
                } catch (_0x1e54b2) {}
                return;
              }
            }
            _0x1b07ca(_0x516980);
          });
          return;
        }
        _0x1b07ca(_0x47fc68);
        function _0x1b07ca(_0x597a9c) {
          if (!_0x597a9c || !_0x597a9c.length) {
            {
              try {
                {
                  _0x34a884(_0x850dc("microFuzzAiPayloadBadFormat") || "AI returned an invalid format. Cannot parse payload JSON.");
                }
              } catch (_0x502e96) {}
              return;
            }
          }
          const _0x580460 = [];
          const _0x8b7172 = new Map();
          _0x346d84.forEach(_0xfabc97 => {
            if (_0xfabc97 && _0xfabc97.type) {
              _0x8b7172.set(String(_0xfabc97.type), Math.max(1, Number(_0xfabc97.count) || 20));
            }
          });
          _0x346d84.forEach(_0x2c3278 => {
            const _0x123818 = _0x2c3278 && _0x2c3278.type ? String(_0x2c3278.type) : "";
            if (!_0x123818) {
              return;
            }
            const _0x507013 = Math.max(1, Number(_0x2c3278.count) || 20);
            const _0x5c91b7 = _0x597a9c.find(_0x1fe2d3 => _0x1fe2d3 && String(_0x1fe2d3.type || "") === _0x123818) || null;
            const _0x30b8ac = _0x5c91b7 && Array.isArray(_0x5c91b7.payloads) ? _0x5c91b7.payloads : [];
            _0x30b8ac.slice(0, _0x507013).forEach(_0x3acd52 => {
              const _0x31d971 = String(_0x3acd52 == null ? "" : _0x3acd52).trim();
              if (_0x31d971) {
                _0x580460.push(_0x31d971);
              }
            });
          });
          _0x580460.length < _0x3b89fc && _0x597a9c.forEach(_0x5c50f4 => {
            const _0x1ae769 = _0x5c50f4 && _0x5c50f4.type != null ? String(_0x5c50f4.type) : "";
            if (!_0x1ae769 || _0x8b7172.has(_0x1ae769)) {
              return;
            }
            const _0x5603d6 = _0x5c50f4 && Array.isArray(_0x5c50f4.payloads) ? _0x5c50f4.payloads : [];
            _0x5603d6.forEach(_0x7033c4 => {
              const _0x23fc79 = String(_0x7033c4 == null ? "" : _0x7033c4).trim();
              if (_0x23fc79) {
                _0x580460.push(_0x23fc79);
              }
            });
          });
          const _0x4c838b = _0x580460.map(_0xbf4dc7 => _0xbf4dc7.trim()).filter(Boolean).slice(0, Math.min(2000, _0x3b89fc + 200));
          const _0x3bceb3 = String(_0x489be6.value || "").split(/\r?\n/).map(_0x5116be => _0x5116be.trim()).filter(Boolean);
          const _0x11cdc4 = new Set(_0x3bceb3);
          let _0x322779 = 0;
          _0x4c838b.forEach(_0x562b2c => {
            if (_0x11cdc4.has(_0x562b2c)) {
              return;
            }
            _0x11cdc4.add(_0x562b2c);
            _0x3bceb3.push(_0x562b2c);
            _0x322779++;
          });
          _0x489be6.value = _0x3bceb3.join("\n");
          _0x5d5247();
          try {
            _0x34a884((_0x850dc("microFuzzAiPayloadDone") || "Generated and appended payloads: ") + String(_0x322779));
          } catch (_0x40a691) {}
        }
      });
    });
  });
  function _0x58e840(_0x3e1356) {
    if (!_0x3e1356) {
      return "";
    }
    const _0x2bdfe7 = _0x3e1356.dataset && _0x3e1356.dataset.viewMode || "pretty";
    const _0x5e3fcd = _0x307492(_0x3e1356);
    if (_0x2bdfe7 === "ai" || _0x2bdfe7 === "sensitive") {
      {
        return _0x3e1356.textContent || "";
      }
    }
    if (_0x2bdfe7 === "hex") {
      return _0x37c872(_0x5e3fcd || "");
    }
    if (_0x2bdfe7 === "raw") {
      return _0x233161(_0x5e3fcd || "", "raw");
    }
    return _0x233161(_0x5e3fcd || "", "pretty");
  }
  function _0x1582b6() {
    if (!_0x2f943c || !_0xc41ff8 || !_0x3025ed) {
      return;
    }
    const _0x4c55bc = [["#fuzzDetailReqSearchInput", _0xc41ff8, "#fuzzDetailReqSearchCount"], ["#fuzzDetailRespSearchInput", _0x3025ed, "#fuzzDetailRespSearchCount"]];
    for (let _0x3e00fd = 0; _0x3e00fd < _0x4c55bc.length; _0x3e00fd++) {
      const _0x35d976 = _0x4c55bc[_0x3e00fd][0];
      const _0x5860ff = _0x4c55bc[_0x3e00fd][1];
      const _0x1793af = _0x4c55bc[_0x3e00fd][2];
      const _0x4b8357 = _0x2f943c.querySelector(_0x35d976);
      const _0x47eb79 = _0x1793af ? _0x2f943c.querySelector(_0x1793af) : null;
      if (!_0x5860ff || !_0x4b8357) {
        continue;
      }
      _0x25fc83(_0x5860ff, _0x4b8357, _0x47eb79);
      _0x4b415a(_0x5860ff, _0x4b8357.value);
    }
  }
  _0x22bbed && _0xc41ff8 && _0x22bbed.addEventListener("click", () => {
    const _0x19e7c2 = _0xc41ff8.dataset && _0xc41ff8.dataset.viewMode || "raw";
    if (_0x19e7c2 === "render") {
      _0x34a884(_0x850dc("microFuzzCopyRenderNotSupported"));
      return;
    }
    const _0x5c3687 = _0x58e840(_0xc41ff8);
    if (!_0x5c3687) {
      _0x34a884(_0x850dc("microFuzzCopyRequestEmpty"));
      return;
    }
    _0x3f2596(_0x5c3687).catch(() => {});
  });
  _0x26650f && _0x3025ed && _0x26650f.addEventListener("click", () => {
    const _0x2e0e8f = _0x3025ed.dataset && _0x3025ed.dataset.viewMode || "pretty";
    if (_0x2e0e8f === "render") {
      _0x34a884(_0x850dc("microFuzzCopyRenderNotSupported"));
      return;
    }
    const _0x42d8c2 = _0x58e840(_0x3025ed);
    if (!_0x42d8c2) {
      _0x34a884(_0x850dc("microFuzzCopyResponseEmpty"));
      return;
    }
    _0x3f2596(_0x42d8c2).catch(() => {});
  });
  function _0x35a16b(_0x40ce3c) {
    if (!_0x10a231 || !_0x40ce3c) {
      return;
    }
    Array.from(_0x10a231.querySelectorAll("tr")).forEach(_0x367ab5 => {
      _0x367ab5.classList.remove("active");
    });
    _0x40ce3c.classList.add("active");
    const _0x5a6a34 = _0x40ce3c.dataset.idx;
    const _0x1829cd = _0x5a6a34 != null ? Number(_0x5a6a34) : -1;
    if (_0x1829cd < 0 || !_0x170fd0 || _0x1829cd >= _0x170fd0.length) {
      return;
    }
    const _0x183bcf = _0x170fd0[_0x1829cd];
    if (!_0x183bcf) {
      return;
    }
    if (_0xc41ff8) {
      _0x9fe1e1(_0xc41ff8, _0x183bcf.requestRaw || "");
      _0xc41ff8.dataset.viewMode = "raw";
      _0x5d3ef2(_0xc41ff8, "raw", false);
      try {
        const _0xfa9456 = _0x2f943c && _0x2f943c.querySelector(".fuzz-req-toggle");
        if (_0xfa9456) {
          _0x50f57b(_0xfa9456, "raw");
        }
      } catch (_0x516c25) {}
    }
    if (_0x3025ed) {
      _0x9fe1e1(_0x3025ed, _0x183bcf.responseRaw || "");
      _0x3025ed.dataset.viewMode = "pretty";
      _0x5d3ef2(_0x3025ed, "pretty", false);
      try {
        const _0x251b90 = _0x2f943c && _0x2f943c.querySelector(".fuzz-resp-toggle");
        if (_0x251b90) {
          _0x50f57b(_0x251b90, "pretty");
        }
      } catch (_0x3d530c) {}
    }
    try {
      _0x8c4bee();
    } catch (_0x27a495) {}
    try {
      _0x40ce3c.scrollIntoView({
        block: "nearest",
        behavior: "smooth"
      });
    } catch (_0x4b49e0) {
      try {
        _0x40ce3c.scrollIntoView(false);
      } catch (_0x19747d) {}
    }
    try {
      {
        _0x1582b6();
      }
    } catch (_0x39fa0d) {}
  }
  function _0x212d74() {
    try {
      {
        const _0x71e5a3 = _0x10a231 && _0x10a231.querySelector("tr.active");
        const _0xc8506c = _0x71e5a3 && _0x71e5a3.dataset ? _0x71e5a3.dataset.idx : null;
        const _0x3351cd = _0xc8506c != null ? Number(_0xc8506c) : -1;
        return Number.isFinite(_0x3351cd) ? _0x3351cd : -1;
      }
    } catch (_0x350604) {
      return -1;
    }
  }
  function _0x10cd4b(_0x4043c4, _0x2b8409) {
    if (!_0x2f943c || !_0xc41ff8 || !_0x3025ed) {
      return;
    }
    const _0x428cd0 = _0x4043c4 != null && String(_0x4043c4).trim() !== "" ? Number(_0x4043c4) : _0x212d74();
    if (!Number.isFinite(_0x428cd0) || _0x428cd0 < 0 || !_0x170fd0 || !_0x170fd0[_0x428cd0]) {
      return;
    }
    const _0x27c36a = !!(_0x2b8409 && _0x2b8409.preserveCurrentView);
    const _0x54191c = !!(_0x2b8409 && _0x2b8409.forceRerun);
    const _0x16cabe = _0x170fd0[_0x428cd0];
    const _0x26bf7e = _0x10a231 ? _0x10a231.querySelector("tr[data-idx=\"" + String(_0x428cd0) + "\"]") : null;
    if (_0x26bf7e && !_0x26bf7e.classList.contains("active")) {
      _0x35a16b(_0x26bf7e);
    }
    const _0x4f1222 = _0x3025ed;
    const _0xb8eead = _0x2f943c.querySelector(".fuzz-resp-toggle");
    const _0x4b1ad9 = String(_0x16cabe && _0x16cabe.requestRaw || _0x307492(_0xc41ff8) || "");
    const _0x3871c3 = String(_0x16cabe && _0x16cabe.responseRaw || _0x307492(_0x3025ed) || "");
    if (!_0x4b1ad9.trim() && !_0x3871c3.trim()) {
      _0x34a884(_0x850dc("microFuzzAiNoContentToAnalyze"));
      if (!_0x27c36a) {
        _0x4f1222.dataset.viewMode = "pretty";
        _0x5d3ef2(_0x4f1222, "pretty", false);
        _0x50f57b(_0xb8eead, "pretty");
        try {
          {
            _0x1582b6();
          }
        } catch (_0x391a05) {}
      }
      return;
    }
    const _0x97db0 = _0x278dcc(_0x4b1ad9, _0x3871c3);
    _0x4b6be4.runtime.sendMessage({
      type: "GET_SETTINGS",
      keys: ["aiProvider", "aiBaseUrl", "aiApiKey", "aiModel", "language"]
    }, _0x363782 => {
      const _0x533983 = _0x363782 && _0x363782.aiBaseUrl || "https://api.openai.com";
      const _0x23243d = _0x363782 && _0x363782.aiApiKey || "";
      const _0x362c1f = _0x363782 && _0x363782.aiModel || "gpt-4o-mini";
      const _0x31a27a = _0x363782 && _0x363782.language || (_0x4b6be4.i18n && _0x4b6be4.i18n.getUILanguage ? _0x4b6be4.i18n.getUILanguage() : "") || "zh_CN";
      if (!_0x791874(_0x363782) && !String(_0x23243d).trim()) {
        {
          _0x34a884(_0x850dc("microFuzzAiNeedApiKey") || "Please configure your AI API Key in Settings before using \"AI Result\".");
          if (!_0x27c36a) {
            _0x4f1222.dataset.viewMode = "pretty";
            _0x5d3ef2(_0x4f1222, "pretty", false);
            _0x50f57b(_0xb8eead, "pretty");
            try {
              _0x1582b6();
            } catch (_0x436576) {}
          }
          return;
        }
      }
      if (!_0x54191c && _0x16cabe.microFuzzAiHtml && _0x16cabe.microFuzzAiFp === _0x97db0 && _0x16cabe.microFuzzAiModel === _0x362c1f) {
        _0x4f1222.dataset.viewMode = "ai";
        _0x4f1222.classList.add("ai-mode");
        _0x4f1222.innerHTML = _0x16cabe.microFuzzAiHtml;
        _0xf30b52(_0x4f1222);
        _0x50f57b(_0xb8eead, "ai");
        try {
          {
            _0x1582b6();
          }
        } catch (_0x301efe) {}
        return;
      }
      _0x4f1222.dataset.viewMode = "ai";
      _0x4f1222.classList.add("ai-mode");
      _0x4f1222.textContent = _0x850dc("microFuzzAiLoading") || "Analyzing…";
      _0x50f57b(_0xb8eead, "ai");
      try {
        {
          _0x1582b6();
        }
      } catch (_0x2ddd33) {}
      const _0x31cd34 = {
        baseUrl: _0x533983,
        apiKey: _0x23243d,
        model: _0x362c1f,
        language: _0x31a27a,
        systemPrompt: _0x850dc("microFuzzAiSystemPrompt") || (String(_0x31a27a).toLowerCase().startsWith("en") ? "You are a senior Web security expert and penetration tester.\nGiven one Micro Fuzz request and its response, assess potential security risks and suggest next test steps.\nAnswer in English using short headings and bullet points. Be concise but technically deep.\nThe first line must be: Risk Level: High/Medium/Low.\nThen include a separate Technology fingerprint section: infer language/runtime, web server and version if visible, frameworks/middleware, front-end stack, and suspected CMS/enterprise suite (e.g. Weaver OA) with brief evidence; if unknown, say what evidence is missing." : "你是资深 Web 安全专家和渗透测试工程师。\n现在给你一次微型 Fuzz 的单条请求与响应，请判断是否存在安全风险，并给出进一步测试建议。\n回答必须使用简体中文，使用分点和小标题，简洁但要有技术深度。\n首行必须输出：风险等级：高/中/低。\n随后请单独给出「技术指纹」小节：依据报文尽量识别实现语言/运行时、Web 服务器及版本（若可辨）、框架/中间件、前端栈，以及疑似 CMS/OA/行业软件（如泛微 OA 等），并附关键字或路径等依据；无法判断则说明缺什么信息。")
      };
      const _0x170bd9 = "【Fuzz 请求报文】\n" + String(_0x4b1ad9).slice(0, 180000) + "\n\n" + "【Fuzz 响应报文】\n" + String(_0x3871c3).slice(0, 180000);
      _0x4b6be4.runtime.sendMessage({
        type: "AI_ANALYZE",
        task: "microfuzz_review",
        prompt: _0x170bd9,
        config: _0x31cd34,
        memoryUrl: _0x4ddb66 || "",
        memoryHost: _0x558ff2(_0x4ddb66 || "")
      }, _0x9e0799 => {
        {
          if (!_0x9e0799 || !_0x9e0799.ok) {
            _0x4f1222.classList.remove("ai-mode");
            _0x4f1222.textContent = (_0x850dc("microFuzzAiFailedPrefix") || "AI analysis failed: ") + String(_0x9e0799 && _0x9e0799.error || _0x850dc("unknownError") || "Unknown error");
            try {
              _0x1582b6();
            } catch (_0x331051) {}
            return;
          }
          const _0x4a474d = Date.now();
          const _0x253511 = _0x77a960(String(_0x9e0799.content || "").trim() || _0x850dc("microFuzzAiEmpty") || "(empty result)", {
            model: _0x31cd34.model,
            baseUrl: _0x31cd34.baseUrl,
            generatedAt: _0x4a474d,
            lang: _0x31a27a,
            reportId: _0x225fa6(_0x4a474d),
            targetDomain: _0x558ff2(_0x16cabe && _0x16cabe.targetOriginOverride || _0x4ddb66 || ""),
            requestNo: "MicroFuzz",
            url: _0x16cabe && _0x16cabe.targetOriginOverride || _0x4ddb66 || "",
            filePrefix: "HawkEye-MicroFuzz-AI-Report",
            reanalyzeKind: "microfuzz",
            recordId: String(_0x428cd0)
          });
          _0x4f1222.classList.add("ai-mode");
          _0x4f1222.innerHTML = _0x253511;
          _0xf30b52(_0x4f1222);
          _0x16cabe.microFuzzAiFp = _0x97db0;
          _0x16cabe.microFuzzAiModel = _0x362c1f;
          _0x16cabe.microFuzzAiHtml = _0x253511;
          try {
            _0x1582b6();
          } catch (_0x418275) {}
        }
      });
    });
  }
  function _0x278dcc(_0x5b73fd, _0x55e982) {
    const _0x1daaa = String(_0x5b73fd || "");
    const _0x525202 = String(_0x55e982 || "");
    function _0xb052ad(_0x185f01) {
      const _0x2c9f82 = _0x185f01.length > 80000 ? _0x185f01.slice(0, 40000) + _0x185f01.slice(-40000) : _0x185f01;
      let _0x59138c = 5381;
      for (let _0x2a89b0 = 0; _0x2a89b0 < _0x2c9f82.length; _0x2a89b0++) {
        _0x59138c = (_0x59138c << 5) + _0x59138c ^ _0x2c9f82.charCodeAt(_0x2a89b0);
      }
      return _0x185f01.length + ":" + (_0x59138c >>> 0).toString(16);
    }
    return _0xb052ad(_0x1daaa) + "|" + _0xb052ad(_0x525202);
  }
  _0x10a231 && _0x10a231.addEventListener("click", _0x293c31 => {
    const _0x13f2ce = _0x293c31.target.closest(".replay-fuzz-view-btn");
    if (!_0x13f2ce) {
      return;
    }
    const _0x128e37 = _0x13f2ce.closest("tr");
    if (!_0x128e37) {
      return;
    }
    _0x35a16b(_0x128e37);
  });
  _0x2f943c && _0x10a231 && _0x2f943c.addEventListener("keydown", _0x34ae6d => {
    if (_0x2f943c.classList.contains("hidden")) {
      return;
    }
    if (_0x34ae6d.key !== "ArrowUp" && _0x34ae6d.key !== "ArrowDown") {
      return;
    }
    let _0x2aeff6 = _0x34ae6d.target;
    if (_0x2aeff6 && _0x2aeff6.nodeType === 3) {
      _0x2aeff6 = _0x2aeff6.parentElement;
    }
    if (_0x2aeff6 && _0x2aeff6.closest) {
      if (_0x2aeff6.closest("input, textarea, select, [contenteditable=\"true\"], [contenteditable=\"plaintext-only\"]")) {
        return;
      }
      if (_0x2aeff6.closest("#fuzzDetailRequest, #fuzzDetailResponse")) {
        return;
      }
    }
    const _0x1f4714 = Array.from(_0x10a231.querySelectorAll("tr"));
    if (!_0x1f4714.length) {
      return;
    }
    _0x34ae6d.preventDefault();
    _0x34ae6d.stopPropagation();
    let _0x3f3f2c = _0x1f4714.findIndex(_0x5d12a9 => _0x5d12a9.classList.contains("active"));
    if (_0x3f3f2c < 0) {
      _0x3f3f2c = 0;
    }
    if (_0x34ae6d.key === "ArrowDown") {
      if (_0x3f3f2c < _0x1f4714.length - 1) {
        _0x3f3f2c += 1;
      }
    } else {
      _0x3f3f2c > 0 && (_0x3f3f2c -= 1);
    }
    _0x35a16b(_0x1f4714[_0x3f3f2c]);
  }, true);
  const _0x5f0bc4 = _0x465916 && _0x465916.querySelector(".replay-fuzz-table thead tr");
  _0x5f0bc4 && _0x10a231 && _0x5f0bc4.addEventListener("click", _0xe7b58 => {
    {
      const _0x5d71f0 = _0xe7b58.target.closest("th[data-fuzz-sort]");
      if (!_0x5d71f0) {
        return;
      }
      const _0x4e50eb = _0x5d71f0.getAttribute("data-fuzz-sort");
      if (!_0x4e50eb) {
        return;
      }
      _0x373eb9 === _0x4e50eb ? _0x12c10d = _0x12c10d === "asc" ? "desc" : "asc" : (_0x373eb9 = _0x4e50eb, _0x12c10d = "asc");
      _0x5f0bc4.querySelectorAll("th[data-fuzz-sort]").forEach(_0x278bc1 => {
        _0x278bc1.classList.remove("fuzz-sort-asc", "fuzz-sort-desc");
      });
      _0x5d71f0.classList.add(_0x12c10d === "asc" ? "fuzz-sort-asc" : "fuzz-sort-desc");
      const _0x59b654 = Array.from(_0x10a231.querySelectorAll("tr"));
      if (!_0x59b654.length) {
        return;
      }
      const _0x5b5c86 = _0x35f002 => {
        if (_0x4e50eb === "idx") {
          const _0x3a3dc3 = _0x35f002.querySelector(".fuzz-col-idx");
          return Number(_0x3a3dc3 && _0x3a3dc3.textContent ? _0x3a3dc3.textContent.trim() : "0") || 0;
        }
        if (_0x4e50eb === "payload") {
          const _0x23f38a = _0x35f002.querySelector(".fuzz-col-payload");
          return _0x23f38a && _0x23f38a.textContent ? _0x23f38a.textContent.trim() : "";
        }
        if (_0x4e50eb === "status") {
          const _0x5645dc = _0x35f002.querySelector(".fuzz-col-status");
          const _0x38ccb9 = _0x5645dc && _0x5645dc.textContent ? _0x5645dc.textContent.trim() : "";
          const _0x2b5a95 = Number(_0x38ccb9);
          return Number.isNaN(_0x2b5a95) ? _0x38ccb9 : _0x2b5a95;
        }
        if (_0x4e50eb === "length") {
          const _0x35740f = _0x35f002.querySelector(".fuzz-col-length");
          return Number(_0x35740f && _0x35740f.textContent ? _0x35740f.textContent.trim() : "0") || 0;
        }
        if (_0x4e50eb === "time") {
          const _0x470e18 = _0x35f002.querySelector(".fuzz-col-time");
          const _0x1441f2 = _0x470e18 && _0x470e18.textContent ? _0x470e18.textContent.trim() : "";
          const _0x33f0d7 = _0x1441f2.match(/(\d+(?:\.\d+)?)\s*ms/i);
          return _0x33f0d7 ? Number(_0x33f0d7[1]) || 0 : 0;
        }
        return 0;
      };
      _0x59b654.sort((_0x28df85, _0x277cd) => {
        const _0x430077 = _0x5b5c86(_0x28df85);
        const _0x2cac66 = _0x5b5c86(_0x277cd);
        if (typeof _0x430077 === "number" && typeof _0x2cac66 === "number") {
          return _0x12c10d === "asc" ? _0x430077 - _0x2cac66 : _0x2cac66 - _0x430077;
        }
        const _0x1ae071 = String(_0x430077);
        const _0x1055a4 = String(_0x2cac66);
        if (_0x1ae071 === _0x1055a4) {
          return 0;
        }
        if (_0x12c10d === "asc") {
          return _0x1ae071 < _0x1055a4 ? -1 : 1;
        }
        return _0x1ae071 > _0x1055a4 ? -1 : 1;
      });
      _0x59b654.forEach(_0x5659dc => _0x10a231.appendChild(_0x5659dc));
    }
  });
  if (_0x2f943c && _0xc41ff8 && _0x3025ed) {
    const _0x4929d1 = _0x2f943c.querySelectorAll(".fuzz-req-toggle .view-btn, .fuzz-resp-toggle .view-btn");
    _0x4929d1.forEach(_0x4b5646 => {
      if (_0x4b5646.dataset.bound) {
        return;
      }
      _0x4b5646.dataset.bound = "1";
      _0x4b5646.addEventListener("click", _0x2f38a2 => {
        _0x2f38a2.preventDefault();
        _0x2f38a2.stopPropagation();
        const _0x41b5ec = _0x4b5646.getAttribute("data-mode") || "pretty";
        const _0xada0e2 = !!_0x4b5646.closest(".fuzz-req-toggle");
        const _0x470dcb = _0xada0e2 ? _0xc41ff8 : _0x3025ed;
        const _0x2f6ee1 = _0x4b5646.closest(".view-toggle");
        if (!_0x470dcb || !_0x2f6ee1) {
          return;
        }
        _0x2f6ee1.querySelectorAll(".view-btn").forEach(_0x4c5c96 => {
          _0x4c5c96.classList.toggle("active", _0x4c5c96 === _0x4b5646);
        });
        const _0x13a8e5 = _0x41b5ec;
        if (!_0xada0e2 && _0x13a8e5 === "ai" && !_0x3e8fd4()) {
          {
            _0x50f57b(_0x2f6ee1, "pretty");
            _0x470dcb.dataset.viewMode = "pretty";
            _0x5d3ef2(_0x470dcb, "pretty", false);
            try {
              {
                _0x1582b6();
              }
            } catch (_0x3e0f1a) {}
            return;
          }
        }
        if (_0x13a8e5 !== "pretty" && _0x13a8e5 !== "raw" && _0x13a8e5 !== "hex" && _0x13a8e5 !== "render" && _0x13a8e5 !== "sensitive" && _0x13a8e5 !== "ai") {
          {
            const _0x343d35 = _0x38b968(_0x470dcb);
            _0x470dcb.dataset.viewMode = _0x343d35;
            _0x5d3ef2(_0x470dcb, _0x343d35, false);
            _0x50f57b(_0x2f6ee1, _0x343d35);
            try {
              _0x1582b6();
            } catch (_0x43a33f) {}
            return;
          }
        }
        _0x470dcb.dataset.viewMode = _0x13a8e5;
        if (!_0xada0e2 && _0x13a8e5 === "ai") {
          {
            _0x10cd4b(null, {
              forceRerun: false,
              preserveCurrentView: false
            });
          }
        } else {
          try {
            if (_0x13a8e5 === "sensitive" && _0x10a231 && _0x170fd0 && _0x170fd0.length) {
              {
                const _0x309ace = _0x10a231.querySelector("tr.active");
                const _0x36bf52 = _0x309ace && _0x309ace.dataset ? _0x309ace.dataset.idx : null;
                const _0x4f4b5e = _0x36bf52 != null ? Number(_0x36bf52) : -1;
                const _0x11267c = _0x4f4b5e >= 0 && _0x4f4b5e < _0x170fd0.length ? _0x170fd0[_0x4f4b5e] : null;
                const _0x23c5bd = _0x11267c ? _0xada0e2 ? _0x11267c.requestRaw || "" : _0x11267c.responseRaw || "" : "";
                const _0x19ba7a = _0x307492(_0x470dcb) || "";
                (!_0x19ba7a || !String(_0x19ba7a).trim()) && _0x23c5bd && String(_0x23c5bd).trim() && _0x9fe1e1(_0x470dcb, String(_0x23c5bd || ""));
              }
            }
          } catch (_0x3cf5a7) {}
          _0x5d3ef2(_0x470dcb, _0x13a8e5, false);
          try {
            {
              _0x1582b6();
            }
          } catch (_0x12150e) {}
        }
      });
    });
  }
  _0x3d8a13 && (_0x3d8a13.addEventListener("click", _0x2f2ca4 => {
    const _0x3f823d = _0x2f2ca4.target.closest(".replay-tab-close");
    if (_0x3f823d) {
      _0x2f2ca4.preventDefault();
      _0x2f2ca4.stopPropagation();
      _0xd0847d(_0x3f823d.getAttribute("data-rid") || "");
      return;
    }
    const _0x1aedfd = _0x2f2ca4.target.closest(".replay-history-tab[data-rid]");
    if (!_0x1aedfd) {
      return;
    }
    _0x301233();
    _0x6d2f22(_0x1aedfd.getAttribute("data-rid") || "");
  }), _0x3d8a13.addEventListener("contextmenu", _0x209da6 => {
    {
      if (_0x209da6.target.closest(".replay-tab-close")) {
        return;
      }
      const _0x31bc8b = _0x209da6.target.closest(".replay-history-tab[data-rid]");
      if (!_0x31bc8b) {
        return;
      }
      _0x209da6.preventDefault();
      const _0x20e0a0 = _0x31bc8b.getAttribute("data-rid") || "";
      _0x30ba6c(_0x20e0a0);
    }
  }), _0x3d8a13.addEventListener("keydown", _0x12bd05 => {
    const _0x3ceb01 = _0x12bd05.target.closest(".replay-history-tab[data-rid]");
    if (!_0x3ceb01 || _0x12bd05.target.closest(".replay-tab-close")) {
      return;
    }
    (_0x12bd05.key === "Enter" || _0x12bd05.key === " ") && (_0x12bd05.preventDefault(), _0x301233(), _0x6d2f22(_0x3ceb01.getAttribute("data-rid") || ""));
  }));
  _0x1898fa && _0x1898fa.querySelectorAll(".replay-req-toggle .view-btn, .replay-resp-toggle .view-btn").forEach(_0x3829de => {
    {
      if (_0x3829de.dataset.bound) {
        return;
      }
      _0x3829de.dataset.bound = "1";
      _0x3829de.addEventListener("click", _0x206a83 => {
        {
          _0x206a83.preventDefault();
          _0x206a83.stopPropagation();
          const _0xe92ab8 = _0x3829de.getAttribute("data-mode") || "pretty";
          const _0x1340e7 = !!_0x3829de.closest(".replay-req-toggle");
          const _0x535fd = _0x1340e7 ? _0x1073d3 : _0x39c18b;
          const _0x22661b = _0x1898fa.querySelector(_0x1340e7 ? ".replay-req-toggle" : ".replay-resp-toggle");
          if (!_0x535fd) {
            return;
          }
          if (!_0x1340e7 && _0xe92ab8 === "ai" && !_0x3e8fd4()) {
            _0x50f57b(_0x22661b, "pretty");
            _0x5d3ef2(_0x535fd, "pretty", false);
            return;
          }
          if (_0x1340e7) {
            _0x301233();
          }
          _0x50f57b(_0x22661b, _0xe92ab8);
          _0x5d3ef2(_0x535fd, _0xe92ab8, false);
          !_0x1340e7 && _0xe92ab8 === "ai" && _0x2f0211(_0x158eac, {
            forceRerun: false
          });
          const _0x35c333 = document.getElementById("replayReqSearchInput");
          const _0x58a8f0 = document.getElementById("replayReqSearchCount");
          const _0x4eadfe = document.getElementById("replayRespSearchInput");
          const _0x160951 = document.getElementById("replayRespSearchCount");
          if (_0x1073d3 && _0x35c333 && _0x58a8f0) {
            _0x25fc83(_0x1073d3, _0x35c333, _0x58a8f0);
          }
          if (_0x39c18b && _0x4eadfe && _0x160951) {
            _0x25fc83(_0x39c18b, _0x4eadfe, _0x160951);
          }
        }
      });
    }
  });
  _0x1073d3 && _0x1073d3.addEventListener("input", () => {
    const _0x444631 = _0x33d5a5.find(_0x18ec17 => _0x18ec17.id === _0x158eac);
    if (!_0x444631) {
      return;
    }
    const _0x5527de = _0x1073d3.dataset && _0x1073d3.dataset.viewMode ? _0x1073d3.dataset.viewMode : _0x1504f6();
    if (_0x5527de !== "raw") {
      return;
    }
    const _0x2e8e6f = _0x3cb71f(_0x1073d3);
    _0x381ebc(_0x2e8e6f, {
      immediate: false
    });
    _0x444631.requestRaw = _0x2e8e6f;
    _0x9fe1e1(_0x1073d3, _0x2e8e6f);
    _0x8c4bee();
    _0x5eea39(_0x1073d3);
  });
  _0x1cb8b2 && _0x1cb8b2.addEventListener("click", () => {
    if (!_0x158eac) {
      return;
    }
    _0x30ba6c(_0x158eac);
  });
  if (_0x3ed608) {
    {
      _0x3ed608.addEventListener("click", () => {
        if (!_0x3e8fd4()) {
          return;
        }
        if (!_0x1073d3) {
          return;
        }
        const _0x588841 = _0x307492(_0x1073d3) || _0x3cb71f(_0x1073d3);
        if (!String(_0x588841 || "").trim()) {
          return;
        }
        const _0x5b9ed8 = _0x43b0ee();
        const _0x3a7770 = _0x44770a(_0x588841, _0x5b9ed8);
        if (!_0x3a7770) {
          _0x34a884(_0x850dc("cryptoEncodeNeedUrlLine") || "No valid request-line URL found for one-click processing.");
          return;
        }
        if (_0x3a7770 === _0x588841) {
          return;
        }
        _0x381ebc(_0x588841, {
          immediate: true
        });
        _0x381ebc(_0x3a7770, {
          immediate: true
        });
        _0x33da0b(_0x3a7770);
      });
    }
  }
  _0x45957b && (_0x45957b.addEventListener("pointerdown", () => {
    _0x447463(_0x45957b, _0x203608());
  }, true), _0x45957b.addEventListener("click", _0x402e08 => {
    {
      _0x402e08.preventDefault();
      _0x402e08.stopPropagation();
      _0x244212(_0x45957b, {
        kind: "replay",
        selectionSnapshot: _0x529f19(_0x45957b)
      });
    }
  }));
  function _0x5ac72c(_0x2f742e) {
    if (Array.isArray(_0x2f742e)) {
      return _0x2f742e;
    }
    if (_0x2f742e && typeof _0x2f742e === "object") {
      if (Array.isArray(_0x2f742e.cases)) {
        return _0x2f742e.cases;
      }
      if (Array.isArray(_0x2f742e.items)) {
        return _0x2f742e.items;
      }
      return null;
    }
    const _0x41cfcf = String(_0x2f742e || "").trim();
    if (!_0x41cfcf) {
      return null;
    }
    let _0x30f3ff = _0x41cfcf.replace(/^```(?:json)?/i, "").replace(/```$/i, "").trim();
    const _0x2d30d1 = _0x30f3ff.indexOf("[");
    const _0x23ceba = _0x30f3ff.lastIndexOf("]");
    if (_0x2d30d1 >= 0 && _0x23ceba > _0x2d30d1) {
      _0x30f3ff = _0x30f3ff.slice(_0x2d30d1, _0x23ceba + 1);
    }
    try {
      {
        const _0x55991a = JSON.parse(_0x30f3ff);
        return Array.isArray(_0x55991a) ? _0x55991a : null;
      }
    } catch (_0x2c61fc) {
      return null;
    }
  }
  function _0x2945de(_0x4cbf79) {
    const _0x6db28e = String(_0x4cbf79 || "");
    if (!_0x6db28e.trim()) {
      return _0x6db28e;
    }
    const _0x4b00ed = _0x6db28e.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
    const _0xb0611 = _0x4b00ed.split("\n");
    if (!_0xb0611.length) {
      return _0x6db28e;
    }
    const _0x4b1bab = [_0xb0611[0]];
    let _0x3ffed8 = 1;
    function _0x46b096(_0x15ae18) {
      const _0x68bbd0 = String(_0x15ae18);
      if (!_0x68bbd0.length) {
        return false;
      }
      if (/^[ \t]/.test(_0x68bbd0)) {
        return true;
      }
      return /^[!#$%&'*+.^_`|~0-9A-Za-z-]+\s*:/.test(_0x68bbd0);
    }
    function _0x368cc0(_0x39ecba) {
      const _0xd72f30 = String(_0x39ecba || "").replace(/\r\n/g, "\n").replace(/\r/g, "\n").replace(/\n{2,}/g, "\n");
      return _0xd72f30.replace(/\n/g, "\r\n");
    }
    while (_0x3ffed8 < _0xb0611.length) {
      const _0x44c8df = _0xb0611[_0x3ffed8];
      if (_0x3ffed8 > 0 && !_0x46b096(_0x44c8df) && _0x44c8df.trim() !== "") {
        const _0x1f4afa = _0xb0611.slice(_0x3ffed8).join("\n");
        const _0x40bc1b = _0x368cc0(_0x4b1bab.join("\n"));
        return _0x1f4afa.length ? _0x40bc1b + "\r\n\r\n" + _0x1f4afa : _0x40bc1b + "\r\n\r\n";
      }
      if (_0x44c8df.trim() === "") {
        let _0x52f257 = _0x3ffed8 + 1;
        while (_0x52f257 < _0xb0611.length && _0xb0611[_0x52f257].trim() === "") {
          _0x52f257++;
        }
        if (_0x52f257 >= _0xb0611.length) {
          break;
        }
        if (_0x46b096(_0xb0611[_0x52f257])) {
          _0x3ffed8 = _0x52f257;
          continue;
        }
        const _0x3f5874 = _0xb0611.slice(_0x52f257).join("\n");
        const _0x2fb2b5 = _0x368cc0(_0x4b1bab.join("\n"));
        return _0x3f5874.length ? _0x2fb2b5 + "\r\n\r\n" + _0x3f5874 : _0x2fb2b5 + "\r\n\r\n";
      }
      _0x4b1bab.push(_0x44c8df);
      _0x3ffed8++;
    }
    return _0x368cc0(_0x4b1bab.join("\n"));
  }
  function _0x438d57(_0x11dda9) {
    if (_0x11dda9 && typeof _0x11dda9 === "object" && !Array.isArray(_0x11dda9)) {
      return _0x11dda9;
    }
    const _0x57f7f3 = String(_0x11dda9 || "").trim();
    if (!_0x57f7f3) {
      return null;
    }
    let _0x4d6b2e = _0x57f7f3.replace(/^```(?:json)?/i, "").replace(/```$/i, "").trim();
    const _0x2e459d = _0x4d6b2e.indexOf("{");
    const _0x528cc7 = _0x4d6b2e.lastIndexOf("}");
    if (_0x2e459d >= 0 && _0x528cc7 > _0x2e459d) {
      _0x4d6b2e = _0x4d6b2e.slice(_0x2e459d, _0x528cc7 + 1);
    }
    try {
      const _0x5e5a62 = JSON.parse(_0x4d6b2e);
      return _0x5e5a62 && typeof _0x5e5a62 === "object" && !Array.isArray(_0x5e5a62) ? _0x5e5a62 : null;
    } catch (_0x308246) {
      return null;
    }
  }
  function _0x206d37(_0x37ae0e) {
    const _0x37e776 = _0x438d57(_0x37ae0e || "");
    if (_0x37e776 && Array.isArray(_0x37e776.items)) {
      return {
        items: _0x37e776.items
      };
    }
    const _0x2b3cd1 = _0x5ac72c(_0x37ae0e || "");
    if (Array.isArray(_0x2b3cd1) && _0x2b3cd1.length) {
      {
        if (_0x2b3cd1.every(_0xd0e58a => typeof _0xd0e58a === "string")) {
          return {
            items: [{
              type: "AI",
              payloads: _0x2b3cd1
            }]
          };
        }
        if (_0x2b3cd1.every(_0x3ee2e8 => _0x3ee2e8 && typeof _0x3ee2e8 === "object" && !Array.isArray(_0x3ee2e8))) {
          if (_0x2b3cd1.some(_0x576f2b => Array.isArray(_0x576f2b.payloads))) {
            return {
              items: _0x2b3cd1
            };
          }
        }
      }
    }
    return null;
  }
  function _0x40a53e() {
    if (!_0x46ea0e || !_0x5a7288 || !_0x29b9f5 || !_0x52a1e2) {
      return Promise.resolve(null);
    }
    _0x29b9f5.textContent = _0x850dc("microFuzzAiPayloadTitle") || "AI Payload Generator";
    if (_0x52a1e2) {
      _0x52a1e2.textContent = _0x850dc("ok") || "OK";
    }
    if (_0xb4c151) {
      _0xb4c151.textContent = _0x850dc("cancel") || "Cancel";
    }
    if (_0xb4c151) {
      _0xb4c151.style.display = "";
    }
    _0x4a56f7 && (_0x4a56f7.classList.add("hidden"), _0x4a56f7.value = "");
    const _0x37bfdd = [{
      key: "常用用户名",
      label: _0x850dc("microFuzzAiTypeUsernames") || "Common usernames"
    }, {
      key: "常用弱密码",
      label: _0x850dc("microFuzzAiTypeWeakPasswords") || "Common weak passwords"
    }, {
      key: "常用文件路径",
      label: _0x850dc("microFuzzAiTypeFilePaths") || "Common file paths"
    }, {
      key: "命令注入与系统命令",
      label: _0x850dc("microFuzzAiTypeCmdInject") || "Command injection & system commands"
    }, {
      key: "SQL注入",
      label: _0x850dc("microFuzzAiTypeSql") || "SQL injection"
    }, {
      key: "跨站脚本",
      label: _0x850dc("microFuzzAiTypeXss") || "XSS"
    }, {
      key: "服务器端模板注入",
      label: _0x850dc("microFuzzAiTypeSsti") || "SSTI"
    }, {
      key: "XXE",
      label: "XXE"
    }, {
      key: "数字与边界值",
      label: _0x850dc("microFuzzAiTypeNumbers") || "Numbers & boundary values"
    }];
    const _0x4ac829 = document.createElement("div");
    _0x4ac829.className = "ee-ai-case-config";
    _0x4ac829.innerHTML = "<div class=\"ee-target-tip\">" + _0x47f251(_0x850dc("microFuzzAiPayloadHint") || "Select payload types and set count per type (default 20). You can also add a custom prompt.") + "</div>" + "<div class=\"ee-ai-case-list\"></div>" + "<div class=\"ee-ai-custom\">" + "<div class=\"ee-ai-custom-head\">" + "<label class=\"ee-target-check\"><input type=\"checkbox\" id=\"eeAiCustomOn\" /> " + _0x47f251(_0x850dc("microFuzzAiCustomLabel") || "Custom type / prompt") + "</label>" + "<div class=\"ee-stepper disabled\" data-stepper=\"custom\">" + "<button type=\"button\" class=\"ee-stepper-btn\" data-step=\"-1\" aria-label=\"minus\">-</button>" + "<input type=\"number\" id=\"eeAiCustomCount\" class=\"ee-stepper-input\" value=\"20\" min=\"1\" max=\"200\" step=\"1\" inputmode=\"numeric\" />" + "<button type=\"button\" class=\"ee-stepper-btn\" data-step=\"1\" aria-label=\"plus\">+</button>" + "</div>" + "</div>" + "<textarea id=\"eeAiCustomPrompt\" class=\"ee-ai-custom-text\" rows=\"3\" placeholder=\"" + _0x47f251(_0x850dc("microFuzzAiCustomPlaceholder") || "Example: common JWT bypass payloads for header/payload/signature...") + "\"></textarea>" + "</div>";
    const _0x3660b2 = _0x4ac829.querySelector(".ee-ai-case-list");
    (_0x37bfdd || []).forEach(_0x5c8f82 => {
      const _0x26543c = document.createElement("div");
      _0x26543c.className = "ee-ai-case-item";
      _0x26543c.innerHTML = "<label class=\"ee-target-check\"><input type=\"checkbox\" data-key=\"" + _0x47f251(_0x5c8f82.key) + "\" /> " + _0x47f251(_0x5c8f82.label) + "</label>" + "<div class=\"ee-stepper\" data-stepper=\"" + _0x47f251(_0x5c8f82.key) + "\">" + "<button type=\"button\" class=\"ee-stepper-btn\" data-step=\"-1\" aria-label=\"minus\">-</button>" + "<input type=\"number\" class=\"ee-stepper-input\" data-count-for=\"" + _0x47f251(_0x5c8f82.key) + "\" value=\"20\" min=\"1\" max=\"200\" step=\"1\" inputmode=\"numeric\" />" + "<button type=\"button\" class=\"ee-stepper-btn\" data-step=\"1\" aria-label=\"plus\">+</button>" + "</div>";
      _0x3660b2.appendChild(_0x26543c);
    });
    const _0x3f7ffd = _0x4ac829.querySelector("#eeAiCustomPrompt");
    const _0x56ca23 = _0x4ac829.querySelector("#eeAiCustomOn");
    const _0x14150c = _0x4ac829.querySelector("#eeAiCustomCount");
    if (_0x3f7ffd) {
      _0x3f7ffd.disabled = true;
    }
    if (_0x14150c) {
      _0x14150c.disabled = true;
    }
    function _0x56a41d(_0x3c3f0c) {
      let _0x278797 = String(_0x3c3f0c == null ? "" : _0x3c3f0c).trim();
      _0x278797 = _0x278797.replace(/[^\d]/g, "");
      let _0x579b19 = _0x278797 ? parseInt(_0x278797, 10) : 20;
      if (!Number.isFinite(_0x579b19) || _0x579b19 <= 0) {
        _0x579b19 = 20;
      }
      if (_0x579b19 > 200) {
        _0x579b19 = 200;
      }
      return _0x579b19;
    }
    function _0x2459a1(_0x2e7f81, _0x1f3720) {
      {
        if (!_0x2e7f81) {
          return;
        }
        const _0x7c5e6b = _0x2e7f81.querySelector(".ee-stepper-input");
        if (!_0x7c5e6b) {
          return;
        }
        const _0x593bfc = _0x56a41d(_0x1f3720);
        _0x7c5e6b.value = String(_0x593bfc);
        const _0xfda8c4 = _0x2e7f81.querySelector(".ee-stepper-btn[data-step=\"-1\"]");
        const _0x3bbe40 = _0x2e7f81.querySelector(".ee-stepper-btn[data-step=\"1\"]");
        if (_0xfda8c4) {
          _0xfda8c4.disabled = _0x593bfc <= 1;
        }
        if (_0x3bbe40) {
          _0x3bbe40.disabled = _0x593bfc >= 200;
        }
      }
    }
    function _0x3284ba(_0x1a5478, _0x2313d0) {
      {
        const _0x2c0935 = _0x1a5478 && _0x1a5478.querySelector ? _0x1a5478.querySelector(".ee-stepper-input") : null;
        const _0x2c85dd = _0x2c0935 ? _0x56a41d(_0x2c0935.value) : 20;
        _0x2459a1(_0x1a5478, _0x2c85dd + (_0x2313d0 || 0));
      }
    }
    _0x4ac829.querySelectorAll(".ee-stepper").forEach(_0x19ac21 => {
      const _0x1d2971 = _0x19ac21.querySelector(".ee-stepper-input");
      _0x2459a1(_0x19ac21, _0x1d2971 ? _0x1d2971.value : 20);
    });
    _0x56ca23 && _0x56ca23.addEventListener("change", () => {
      const _0x2a383b = !!_0x56ca23.checked;
      if (_0x3f7ffd) {
        _0x3f7ffd.disabled = !_0x2a383b;
      }
      if (_0x14150c) {
        _0x14150c.disabled = !_0x2a383b;
      }
      const _0x5b9c66 = _0x4ac829.querySelector(".ee-stepper[data-stepper=\"custom\"]");
      if (_0x5b9c66) {
        _0x5b9c66.classList.toggle("disabled", !_0x2a383b);
      }
    });
    let _0x159231 = null;
    let _0x3d3d66 = null;
    function _0x30d900() {
      {
        if (_0x159231) {
          clearTimeout(_0x159231);
        }
        if (_0x3d3d66) {
          clearInterval(_0x3d3d66);
        }
        _0x159231 = null;
        _0x3d3d66 = null;
      }
    }
    _0x4ac829.addEventListener("click", _0x1e0274 => {
      const _0x141832 = _0x1e0274.target && _0x1e0274.target.closest ? _0x1e0274.target.closest(".ee-stepper-btn") : null;
      if (!_0x141832) {
        return;
      }
      const _0x1911c5 = _0x141832.closest(".ee-stepper");
      if (!_0x1911c5 || _0x1911c5.classList.contains("disabled")) {
        return;
      }
      const _0x234496 = parseInt(_0x141832.getAttribute("data-step") || "0", 10) || 0;
      _0x3284ba(_0x1911c5, _0x234496);
    });
    _0x4ac829.addEventListener("input", _0x1a1fb7 => {
      const _0x1a0f9b = _0x1a1fb7.target && _0x1a1fb7.target.closest ? _0x1a1fb7.target.closest(".ee-stepper-input") : null;
      if (!_0x1a0f9b) {
        return;
      }
      const _0x2e023e = _0x1a0f9b.closest ? _0x1a0f9b.closest(".ee-stepper") : null;
      if (!_0x2e023e || _0x2e023e.classList.contains("disabled")) {
        return;
      }
      _0x2459a1(_0x2e023e, _0x1a0f9b.value);
    });
    _0x4ac829.addEventListener("blur", _0x3a4976 => {
      const _0x548583 = _0x3a4976.target && _0x3a4976.target.classList && _0x3a4976.target.classList.contains("ee-stepper-input") ? _0x3a4976.target : null;
      if (!_0x548583) {
        return;
      }
      const _0x27b739 = _0x548583.closest ? _0x548583.closest(".ee-stepper") : null;
      if (!_0x27b739 || _0x27b739.classList.contains("disabled")) {
        return;
      }
      _0x2459a1(_0x27b739, _0x548583.value);
    }, true);
    _0x4ac829.addEventListener("mousedown", _0x5a2b08 => {
      const _0x24a965 = _0x5a2b08.target && _0x5a2b08.target.closest ? _0x5a2b08.target.closest(".ee-stepper-btn") : null;
      if (!_0x24a965) {
        return;
      }
      const _0x5ad8c0 = _0x24a965.closest(".ee-stepper");
      if (!_0x5ad8c0 || _0x5ad8c0.classList.contains("disabled")) {
        return;
      }
      const _0x59bb66 = parseInt(_0x24a965.getAttribute("data-step") || "0", 10) || 0;
      _0x30d900();
      _0x159231 = setTimeout(() => {
        {
          _0x3d3d66 = setInterval(() => _0x3284ba(_0x5ad8c0, _0x59bb66), 80);
        }
      }, 350);
    });
    document.addEventListener("mouseup", _0x30d900, {
      capture: true
    });
    document.addEventListener("mouseleave", _0x30d900, {
      capture: true
    });
    _0x5a7288.innerHTML = "";
    _0x5a7288.appendChild(_0x4ac829);
    _0x46ea0e.classList.remove("hidden");
    _0x46ea0e.setAttribute("aria-hidden", "false");
    return new Promise(_0x328f59 => {
      {
        const _0x27439d = _0x2947aa => {
          try {
            {
              if (_0x2947aa && typeof _0x2947aa.preventDefault === "function") {
                _0x2947aa.preventDefault();
              }
              if (_0x2947aa && typeof _0x2947aa.stopImmediatePropagation === "function") {
                _0x2947aa.stopImmediatePropagation();
              }
            }
          } catch (_0x36af05) {}
          const _0x1e5a7b = [];
          _0x4ac829.querySelectorAll("input[type=\"checkbox\"][data-key]").forEach(_0x224f38 => {
            if (!_0x224f38.checked) {
              return;
            }
            const _0x1c0208 = _0x224f38.getAttribute("data-key") || "";
            const _0x4a7964 = _0x4ac829.querySelector("input[data-count-for=\"" + CSS.escape(_0x1c0208) + "\"]");
            const _0x2311b2 = _0x4a7964 ? _0x56a41d(_0x4a7964.value || "20") : 20;
            _0x1e5a7b.push({
              type: _0x1c0208,
              count: _0x2311b2
            });
          });
          const _0x3c4ec3 = !!(_0x56ca23 && _0x56ca23.checked);
          let _0x44f5be = null;
          if (_0x3c4ec3) {
            const _0x4cf3a1 = _0x14150c ? _0x56a41d(_0x14150c.value || "20") : 20;
            const _0x15dc6d = _0x3f7ffd ? String(_0x3f7ffd.value || "").trim() : "";
            if (_0x15dc6d) {
              _0x44f5be = {
                type: _0x850dc("replayAiCaseTypeCustom"),
                count: _0x4cf3a1,
                prompt: _0x15dc6d
              };
            }
          }
          try {
            _0x52a1e2.removeEventListener("click", _0x27439d, {
              capture: true
            });
          } catch (_0x16582c) {}
          _0x2f6ad3();
          if (!_0x1e5a7b.length && !_0x44f5be) {
            _0x328f59(null);
          } else {
            _0x328f59({
              picked: _0x1e5a7b,
              custom: _0x44f5be
            });
          }
        };
        const _0x5b74b9 = () => {
          try {
            _0xb4c151 && _0xb4c151.removeEventListener("click", _0x5b74b9);
          } catch (_0x52cc60) {}
          _0x328f59(null);
        };
        try {
          _0x52a1e2.addEventListener("click", _0x27439d, {
            once: true,
            capture: true
          });
        } catch (_0x12675a) {}
        try {
          _0xb4c151 && _0xb4c151.addEventListener("click", _0x5b74b9, {
            once: true
          });
        } catch (_0x3893b7) {}
        setTimeout(() => {
          {
            try {
              (_0x4ac829.querySelector("input[type=\"checkbox\"][data-key]") || _0x52a1e2).focus();
            } catch (_0x3c6229) {}
          }
        }, 0);
      }
    });
  }
  function _0x263ab2(_0xa67c7b, _0x3f1bf7) {
    if (!_0xa67c7b) {
      return;
    }
    if (_0x3f1bf7) {
      if (_0xa67c7b.dataset._origText == null) {
        _0xa67c7b.dataset._origText = _0xa67c7b.textContent || "";
      }
      _0xa67c7b.textContent = _0x850dc("replayAiGenLoading");
      _0xa67c7b.disabled = true;
    } else {
      {
        _0xa67c7b.textContent = _0xa67c7b.dataset._origText || _0x850dc("replayAiGenCase");
        _0xa67c7b.disabled = false;
      }
    }
  }
  function _0x33beec() {
    if (!_0x39c18b) {
      return "";
    }
    const _0x33cc8b = String(_0x307492(_0x39c18b) || "");
    const _0x1733bd = _0x33cc8b.trim();
    if (!_0x1733bd) {
      return "";
    }
    const _0x2ab918 = _0x850dc("replayAiCaseWaitingSend");
    if (_0x1733bd === _0x2ab918) {
      return "";
    }
    const _0x2778f3 = /^\s*HTTP\/\d/i.test(_0x1733bd);
    if (!_0x2778f3 && _0x1733bd.indexOf(_0x2ab918) >= 0) {
      return "";
    }
    if (!_0x2778f3 && _0x1733bd.length < 8) {
      return "";
    }
    return _0x33cc8b;
  }
  _0x3819bb && _0x3819bb.addEventListener("click", async () => {
    if (!_0x3e8fd4()) {
      return;
    }
    if (!_0x158eac) {
      return;
    }
    const _0x4763de = _0x33d5a5 && _0x158eac ? _0x33d5a5.find(_0x307715 => _0x307715.id === _0x158eac) : null;
    const _0x5aa1d3 = _0x307492(_0x1073d3);
    if (!_0x5aa1d3 || !String(_0x5aa1d3).trim()) {
      _0x34a884(_0x850dc("microFuzzAiRequestEmpty"));
      return;
    }
    const _0x3376dc = await _0x477904();
    if (!_0x3376dc) {
      return;
    }
    const _0x2790f0 = _0x3376dc.picked || [];
    const _0x314b52 = _0x3376dc.custom || null;
    const _0x4f7dcd = _0x2790f0.reduce((_0x461c4b, _0x277fdd) => _0x461c4b + (_0x277fdd.count || 0), 0) + (_0x314b52 ? _0x314b52.count || 0 : 0);
    if (!_0x4f7dcd) {
      return;
    }
    _0x263ab2(_0x3819bb, true);
    _0x4b6be4.runtime.sendMessage({
      type: "GET_SETTINGS",
      keys: ["aiProvider", "aiBaseUrl", "aiApiKey", "aiModel", "language"]
    }, _0x52ff68 => {
      const _0x35ad80 = _0x52ff68 && _0x52ff68.language || (_0x4b6be4.i18n && _0x4b6be4.i18n.getUILanguage ? _0x4b6be4.i18n.getUILanguage() : "") || "zh_CN";
      if (!_0x791874(_0x52ff68) && !String(_0x52ff68 && _0x52ff68.aiApiKey || "").trim()) {
        {
          _0x263ab2(_0x3819bb, false);
          try {
            _0x34a884(_0x850dc("microFuzzAiNeedApiKey"));
          } catch (_0x11f898) {}
          return;
        }
      }
      const _0x12b19f = [].concat(_0x2790f0.map(_0x46c392 => ({
        type: _0x46c392.type,
        count: _0x46c392.count
      }))).concat(_0x314b52 ? [{
        type: _0x850dc("replayAiCaseTypeCustom"),
        count: _0x314b52.count,
        prompt: _0x314b52.prompt
      }] : []);
      const _0x9fa05d = {
        baseUrl: _0x52ff68 && _0x52ff68.aiBaseUrl || "https://api.openai.com",
        apiKey: _0x52ff68 && _0x52ff68.aiApiKey || "",
        model: _0x52ff68 && _0x52ff68.aiModel || "gpt-4o-mini",
        language: _0x35ad80,
        systemPrompt: _0x850dc("replayAiCaseSystemPrompt")
      };
      const _0x480480 = _0x33beec();
      const _0x3d7890 = _0x480480 ? 150000 : 220000;
      const _0x1dec2e = 80000;
      let _0x2c5311 = _0x850dc("replayAiCaseUserTypesIntro") + "\n" + JSON.stringify(_0x12b19f, null, 2) + "\n\n" + (_0x314b52 && _0x314b52.prompt ? _0x850dc("replayAiCaseUserCustomIntro") + _0x314b52.prompt + "\n\n" : "") + _0x850dc("replayAiCaseUserRequestIntro") + "\n\n" + String(_0x5aa1d3).slice(0, _0x3d7890);
      _0x480480 && (_0x2c5311 += "\n\n" + _0x850dc("replayAiCaseUserResponseIntro") + "\n\n" + String(_0x480480).slice(0, _0x1dec2e));
      _0x4b6be4.runtime.sendMessage({
        type: "AI_ANALYZE",
        task: "replay_case_gen",
        prompt: _0x2c5311,
        config: _0x9fa05d,
        memoryUrl: _0x4ddb66 || "",
        memoryHost: _0x558ff2(_0x4ddb66 || "")
      }, _0x2adb7f => {
        _0x263ab2(_0x3819bb, false);
        if (!_0x2adb7f || !_0x2adb7f.ok) {
          _0x34a884(_0x850dc("replayAiRequestFailed", String(_0x2adb7f && _0x2adb7f.error || _0x850dc("unknownError"))));
          return;
        }
        const _0x3c5e79 = _0x5ac72c(_0x2adb7f.parsed != null ? _0x2adb7f.parsed : _0x2adb7f.content || "");
        if (!_0x3c5e79 || !_0x3c5e79.length) {
          _0x34a884(_0x850dc("replayAiCasesInvalidJson"));
          return;
        }
        let _0x1f8596 = 0;
        const _0x2c9736 = [];
        _0x3c5e79.slice(0, Math.min(20, _0x4f7dcd || 8)).forEach(_0x2465c8 => {
          const _0x2aeeed = _0x2465c8 && _0x2465c8.modifiedRequest ? String(_0x2465c8.modifiedRequest) : "";
          if (!_0x2aeeed.trim()) {
            return;
          }
          const _0x1c157e = _0x2945de(_0x2aeeed);
          _0x39126c += 1;
          const _0x34980c = "ai_case_" + _0x39126c + "_" + Date.now();
          const _0x1b79a5 = _0x2465c8 && _0x2465c8.vulnType ? String(_0x2465c8.vulnType).trim() : "AI";
          const _0x38411e = _0x2465c8 && _0x2465c8.description ? String(_0x2465c8.description).trim() : "";
          _0x29a5ad({
            id: _0x34980c,
            title: "[AI] " + _0x1b79a5,
            requestRaw: _0x1c157e,
            responseRaw: (_0x38411e ? _0x850dc("replayAiCaseDescPrefix") + _0x38411e + "\n\n" : "") + _0x850dc("replayAiCaseWaitingSend"),
            statusText: _0x850dc("replayAiCaseStatusReady"),
            aiCaseType: _0x1b79a5,
            aiCaseDesc: _0x38411e,
            url: String(_0x4763de && _0x4763de.url || _0x4ddb66 || ""),
            sourceUrl: String(_0x4763de && (_0x4763de.sourceUrl || _0x4763de.url) || _0x4ddb66 || ""),
            sourceRecordId: _0x4763de && _0x4763de.sourceRecordId ? String(_0x4763de.sourceRecordId) : "",
            sourceTabId: _0x4763de && _0x4763de.sourceTabId != null ? _0x4763de.sourceTabId : _0x2dde63,
            sourceTimestamp: _0x4763de && _0x4763de.sourceTimestamp ? Number(_0x4763de.sourceTimestamp) : 0,
            targetOriginOverride: _0x2ec227()
          });
          _0x2c9736.push(_0x34980c);
          _0x1f8596++;
        });
        if (!_0x1f8596) {
          _0x34a884(_0x850dc("replayAiCasesNoModifiedRequest"));
          return;
        }
        _0x6d2f22(_0x2c9736[_0x2c9736.length - 1]);
        _0x34a884(_0x850dc("replayAiCasesCreated", String(_0x1f8596)));
      });
    });
  });
  function _0x6a3eb1(_0x59d74d) {
    if (!_0x59d74d) {
      return false;
    }
    const _0x40f994 = String(_0x59d74d.id || "");
    const _0x194a4b = String(_0x59d74d.title || "");
    return _0x40f994.startsWith("ai_case_") || _0x194a4b.startsWith("[AI]") || !!_0x59d74d.aiCaseType || !!_0x59d74d.aiCaseDesc;
  }
  function _0x5aec1b(_0x5dfd60) {
    if (!_0x5dfd60) {
      return false;
    }
    const _0x25ad5b = String(_0x5dfd60.id || "");
    if (_0x25ad5b === "send_0") {
      return true;
    }
    const _0x4097a4 = _0x850dc("replayDraft") || "Draft";
    const _0x5c765a = String(_0x5dfd60.title || "");
    return !!_0x5c765a && (_0x5c765a === _0x4097a4 || _0x5c765a === "草稿" || _0x5c765a === "Draft");
  }
  const _0x7fe38a = [{
    id: "sqli",
    msgKey: "replayAiCaseTypeSqli"
  }, {
    id: "xss",
    msgKey: "replayAiCaseTypeXss"
  }, {
    id: "xxe",
    msgKey: "replayAiCaseTypeXxe"
  }, {
    id: "idor",
    msgKey: "replayAiCaseTypeIdor"
  }, {
    id: "host",
    msgKey: "replayAiCaseTypeHost"
  }, {
    id: "upload",
    msgKey: "replayAiCaseTypeUpload"
  }, {
    id: "deser",
    msgKey: "replayAiCaseTypeDeser"
  }, {
    id: "leak",
    msgKey: "replayAiCaseTypeLeak"
  }];
  function _0x477904() {
    if (!_0x46ea0e || !_0x5a7288 || !_0x29b9f5 || !_0x52a1e2) {
      return Promise.resolve(null);
    }
    _0x29b9f5.textContent = _0x850dc("replayAiGenCase");
    if (_0x52a1e2) {
      _0x52a1e2.textContent = _0x850dc("ok") || "OK";
    }
    if (_0xb4c151) {
      _0xb4c151.textContent = _0x850dc("cancel") || "Cancel";
    }
    if (_0xb4c151) {
      _0xb4c151.style.display = "";
    }
    if (_0x4a56f7) {
      {
        _0x4a56f7.classList.add("hidden");
        _0x4a56f7.value = "";
      }
    }
    const _0x287306 = document.createElement("div");
    _0x287306.className = "ee-ai-case-config";
    _0x287306.innerHTML = "<div class=\"ee-target-tip\">" + _0x47f251(_0x850dc("replayAiCaseConfigHint")) + "</div>" + "<div class=\"ee-target-tip ee-ai-case-replay-hint\">" + _0x47f251(_0x850dc("replayAiCaseGenReplayTip")) + "</div>" + "<div class=\"ee-ai-case-list\"></div>" + "<div class=\"ee-ai-custom\">" + "<div class=\"ee-ai-custom-head\">" + "<label class=\"ee-target-check\"><input type=\"checkbox\" id=\"eeAiCustomOn\" /> " + _0x47f251(_0x850dc("replayAiCaseCustomCheckLabel")) + "</label>" + "<div class=\"ee-stepper disabled\" data-stepper=\"custom\">" + "<button type=\"button\" class=\"ee-stepper-btn\" data-step=\"-1\" aria-label=\"minus\">-</button>" + "<input type=\"text\" id=\"eeAiCustomCount\" class=\"ee-stepper-input\" value=\"1\" readonly />" + "<button type=\"button\" class=\"ee-stepper-btn\" data-step=\"1\" aria-label=\"plus\">+</button>" + "</div>" + "</div>" + "<textarea id=\"eeAiCustomPrompt\" class=\"ee-ai-custom-text\" rows=\"3\" placeholder=\"" + _0x47f251(_0x850dc("replayAiCaseCustomPlaceholder")) + "\"></textarea>" + "</div>";
    const _0x3b9b88 = _0x287306.querySelector(".ee-ai-case-list");
    (_0x7fe38a || []).forEach(_0x2c042e => {
      const _0xd80bf = document.createElement("div");
      _0xd80bf.className = "ee-ai-case-item";
      const _0xdae835 = _0x850dc(_0x2c042e.msgKey);
      _0xd80bf.innerHTML = "<label class=\"ee-target-check\"><input type=\"checkbox\" data-case-id=\"" + _0x47f251(_0x2c042e.id) + "\" /> " + _0x47f251(_0xdae835) + "</label>" + "<div class=\"ee-stepper\" data-stepper=\"" + _0x47f251(_0x2c042e.id) + "\">" + "<button type=\"button\" class=\"ee-stepper-btn\" data-step=\"-1\" aria-label=\"minus\">-</button>" + "<input type=\"text\" class=\"ee-stepper-input\" data-count-for=\"" + _0x47f251(_0x2c042e.id) + "\" value=\"1\" readonly />" + "<button type=\"button\" class=\"ee-stepper-btn\" data-step=\"1\" aria-label=\"plus\">+</button>" + "</div>";
      _0x3b9b88.appendChild(_0xd80bf);
    });
    const _0x40e282 = _0x287306.querySelector("#eeAiCustomPrompt");
    const _0x23d91f = _0x287306.querySelector("#eeAiCustomOn");
    const _0x160498 = _0x287306.querySelector("#eeAiCustomCount");
    if (_0x40e282) {
      _0x40e282.disabled = true;
    }
    if (_0x160498) {
      _0x160498.disabled = true;
    }
    function _0x1e8aeb(_0x83d1d4) {
      let _0x41eeb1 = String(_0x83d1d4 == null ? "" : _0x83d1d4).trim();
      _0x41eeb1 = _0x41eeb1.replace(/[^\d]/g, "");
      let _0x4c3fe4 = _0x41eeb1 ? parseInt(_0x41eeb1, 10) : 1;
      if (!Number.isFinite(_0x4c3fe4) || _0x4c3fe4 <= 0) {
        _0x4c3fe4 = 1;
      }
      if (_0x4c3fe4 > 10) {
        _0x4c3fe4 = 10;
      }
      return _0x4c3fe4;
    }
    function _0x5e5f22(_0x2941d2, _0x455a59) {
      if (!_0x2941d2) {
        return;
      }
      const _0x1c927a = _0x2941d2.querySelector(".ee-stepper-input");
      if (!_0x1c927a) {
        return;
      }
      const _0x3a62e3 = _0x1e8aeb(_0x455a59);
      _0x1c927a.value = String(_0x3a62e3);
      const _0x4cb04f = _0x2941d2.querySelector(".ee-stepper-btn[data-step=\"-1\"]");
      const _0x206f45 = _0x2941d2.querySelector(".ee-stepper-btn[data-step=\"1\"]");
      if (_0x4cb04f) {
        _0x4cb04f.disabled = _0x3a62e3 <= 1;
      }
      if (_0x206f45) {
        _0x206f45.disabled = _0x3a62e3 >= 10;
      }
    }
    function _0x310b3e(_0x17e374, _0x3be87d) {
      const _0x2f9d9 = _0x17e374 && _0x17e374.querySelector ? _0x17e374.querySelector(".ee-stepper-input") : null;
      const _0x3261ba = _0x2f9d9 ? _0x1e8aeb(_0x2f9d9.value) : 1;
      _0x5e5f22(_0x17e374, _0x3261ba + (_0x3be87d || 0));
    }
    _0x287306.querySelectorAll(".ee-stepper").forEach(_0x4dba0d => {
      {
        const _0x57b970 = _0x4dba0d.querySelector(".ee-stepper-input");
        _0x5e5f22(_0x4dba0d, _0x57b970 ? _0x57b970.value : 1);
      }
    });
    _0x23d91f && _0x23d91f.addEventListener("change", () => {
      const _0x8b0f88 = !!_0x23d91f.checked;
      if (_0x40e282) {
        _0x40e282.disabled = !_0x8b0f88;
      }
      if (_0x160498) {
        _0x160498.disabled = !_0x8b0f88;
      }
      const _0x55bea5 = _0x287306.querySelector(".ee-stepper[data-stepper=\"custom\"]");
      if (_0x55bea5) {
        _0x55bea5.classList.toggle("disabled", !_0x8b0f88);
      }
    });
    let _0x375762 = null;
    let _0x17b853 = null;
    function _0x590a70() {
      if (_0x375762) {
        clearTimeout(_0x375762);
      }
      if (_0x17b853) {
        clearInterval(_0x17b853);
      }
      _0x375762 = null;
      _0x17b853 = null;
    }
    _0x287306.addEventListener("click", _0x5e8f31 => {
      {
        const _0x278ce3 = _0x5e8f31.target && _0x5e8f31.target.closest ? _0x5e8f31.target.closest(".ee-stepper-btn") : null;
        if (!_0x278ce3) {
          return;
        }
        const _0x23dd3c = _0x278ce3.closest(".ee-stepper");
        if (!_0x23dd3c || _0x23dd3c.classList.contains("disabled")) {
          return;
        }
        const _0x2e5c21 = parseInt(_0x278ce3.getAttribute("data-step") || "0", 10) || 0;
        _0x310b3e(_0x23dd3c, _0x2e5c21);
      }
    });
    _0x287306.addEventListener("mousedown", _0x520300 => {
      const _0x25dc02 = _0x520300.target && _0x520300.target.closest ? _0x520300.target.closest(".ee-stepper-btn") : null;
      if (!_0x25dc02) {
        return;
      }
      const _0x2bed73 = _0x25dc02.closest(".ee-stepper");
      if (!_0x2bed73 || _0x2bed73.classList.contains("disabled")) {
        return;
      }
      const _0x35aef2 = parseInt(_0x25dc02.getAttribute("data-step") || "0", 10) || 0;
      _0x590a70();
      _0x375762 = setTimeout(() => {
        _0x17b853 = setInterval(() => _0x310b3e(_0x2bed73, _0x35aef2), 80);
      }, 350);
    });
    document.addEventListener("mouseup", _0x590a70, {
      capture: true
    });
    document.addEventListener("mouseleave", _0x590a70, {
      capture: true
    });
    _0x5a7288.innerHTML = "";
    _0x5a7288.appendChild(_0x287306);
    _0x46ea0e.classList.remove("hidden");
    _0x46ea0e.setAttribute("aria-hidden", "false");
    return new Promise(_0x2fb1ad => {
      const _0x4600a4 = _0x55a0a3 => {
        try {
          if (_0x55a0a3 && typeof _0x55a0a3.preventDefault === "function") {
            _0x55a0a3.preventDefault();
          }
          if (_0x55a0a3 && typeof _0x55a0a3.stopImmediatePropagation === "function") {
            _0x55a0a3.stopImmediatePropagation();
          }
        } catch (_0x484cea) {}
        const _0x515491 = [];
        _0x287306.querySelectorAll("input[type=\"checkbox\"][data-case-id]").forEach(_0x2d69ea => {
          {
            if (!_0x2d69ea.checked) {
              return;
            }
            const _0x2fee26 = _0x2d69ea.getAttribute("data-case-id") || "";
            const _0x3963e7 = _0x287306.querySelector("input[data-count-for=\"" + CSS.escape(_0x2fee26) + "\"]");
            const _0x4d754f = _0x3963e7 ? _0x1e8aeb(_0x3963e7.value || "1") : 1;
            const _0x2d36c7 = _0x7fe38a.find(_0x19ffa1 => _0x19ffa1.id === _0x2fee26);
            const _0x990ea2 = _0x2d36c7 ? _0x850dc(_0x2d36c7.msgKey) : _0x2fee26;
            _0x515491.push({
              type: _0x990ea2,
              count: _0x4d754f
            });
          }
        });
        const _0x3d3764 = !!(_0x23d91f && _0x23d91f.checked);
        let _0x4874a6 = null;
        if (_0x3d3764) {
          const _0x28e9ce = _0x160498 ? _0x1e8aeb(_0x160498.value || "1") : 1;
          const _0x52bf25 = _0x40e282 ? String(_0x40e282.value || "").trim() : "";
          if (_0x52bf25) {
            _0x4874a6 = {
              type: _0x850dc("replayAiCaseTypeCustom"),
              count: _0x28e9ce,
              prompt: _0x52bf25
            };
          }
        }
        try {
          {
            _0x52a1e2.removeEventListener("click", _0x4600a4, {
              capture: true
            });
          }
        } catch (_0x2f5c9c) {}
        _0x2f6ad3();
        if (!_0x515491.length && !_0x4874a6) {
          _0x2fb1ad(null);
        } else {
          _0x2fb1ad({
            picked: _0x515491,
            custom: _0x4874a6
          });
        }
      };
      const _0x1c5787 = () => {
        try {
          _0xb4c151 && _0xb4c151.removeEventListener("click", _0x1c5787);
        } catch (_0x438647) {}
        _0x2fb1ad(null);
      };
      try {
        _0x52a1e2.addEventListener("click", _0x4600a4, {
          once: true,
          capture: true
        });
      } catch (_0x455720) {}
      try {
        _0xb4c151 && _0xb4c151.addEventListener("click", _0x1c5787, {
          once: true
        });
      } catch (_0x4ef5fe) {}
      setTimeout(() => {
        {
          try {
            (_0x287306.querySelector("input[type=\"checkbox\"][data-case-id]") || _0x52a1e2).focus();
          } catch (_0x3f4670) {}
        }
      }, 0);
    });
  }
  function _0x7343fe(_0x2b3140) {
    {
      if (!_0x46ea0e || !_0x5a7288 || !_0x29b9f5 || !_0x52a1e2) {
        return Promise.resolve(null);
      }
      const _0x5cd0c3 = _0x556b16(_0x2b3140);
      _0x29b9f5.textContent = _0x850dc("targetConfigTitle") || "Configure target details";
      if (_0x52a1e2) {
        _0x52a1e2.textContent = _0x850dc("ok") || "OK";
      }
      if (_0xb4c151) {
        _0xb4c151.textContent = _0x850dc("cancel") || "Cancel";
      }
      if (_0xb4c151) {
        _0xb4c151.style.display = "";
      }
      if (_0x4a56f7) {
        {
          _0x4a56f7.classList.add("hidden");
          _0x4a56f7.value = "";
        }
      }
      const _0x41a909 = document.createElement("div");
      _0x41a909.className = "ee-target-edit";
      _0x41a909.innerHTML = "<div class=\"ee-target-tip\">" + _0x47f251(_0x850dc("targetConfigTip") || "Specify the details of the server to which the request will be sent.") + "</div>" + "<div class=\"ee-target-row\"><label>" + _0x47f251(_0x850dc("hostLabel") || "Host") + ":</label><input id=\"eeTargetHost\" type=\"text\" value=\"" + _0x47f251(_0x5cd0c3.host || "") + "\" /></div>" + "<div class=\"ee-target-row\"><label>" + _0x47f251(_0x850dc("portLabel") || "Port") + ":</label><input id=\"eeTargetPort\" type=\"text\" value=\"" + _0x47f251(_0x5cd0c3.port || "") + "\" /></div>" + "<div class=\"ee-target-row ee-target-row-check\"><label></label><label class=\"ee-target-check\"><input id=\"eeTargetHttps\" type=\"checkbox\"" + (_0x5cd0c3.https ? " checked" : "") + " /> " + _0x47f251(_0x850dc("useHttps") || "Use HTTPS") + "</label></div>";
      _0x5a7288.innerHTML = "";
      _0x5a7288.appendChild(_0x41a909);
      _0x46ea0e.classList.remove("hidden");
      _0x46ea0e.setAttribute("aria-hidden", "false");
      return new Promise(_0x36f068 => {
        const _0x2effa7 = _0xb3f4d3 => {
          try {
            if (_0xb3f4d3 && typeof _0xb3f4d3.preventDefault === "function") {
              _0xb3f4d3.preventDefault();
            }
            if (_0xb3f4d3 && typeof _0xb3f4d3.stopImmediatePropagation === "function") {
              _0xb3f4d3.stopImmediatePropagation();
            }
          } catch (_0x3b4caf) {}
          const _0x446524 = _0x41a909.querySelector("#eeTargetHost") && _0x41a909.querySelector("#eeTargetHost").value || "";
          const _0x2d465d = _0x41a909.querySelector("#eeTargetPort") && _0x41a909.querySelector("#eeTargetPort").value || "";
          const _0x23c942 = !!(_0x41a909.querySelector("#eeTargetHttps") && _0x41a909.querySelector("#eeTargetHttps").checked);
          try {
            _0x52a1e2.removeEventListener("click", _0x2effa7, {
              capture: true
            });
          } catch (_0x4c0af3) {}
          _0x2f6ad3();
          _0x36f068({
            host: _0x446524,
            port: _0x2d465d,
            https: _0x23c942
          });
        };
        try {
          {
            _0x52a1e2.addEventListener("click", _0x2effa7, {
              once: true,
              capture: true
            });
          }
        } catch (_0x157534) {}
        setTimeout(() => {
          try {
            (_0x41a909.querySelector("#eeTargetHost") || _0x52a1e2).focus();
          } catch (_0x648661) {}
        }, 0);
      });
    }
  }
  _0x4528b0 && _0x4528b0.addEventListener("click", () => {
    if (!_0x3e8fd4()) {
      return;
    }
    const _0x40c84d = _0x33d5a5 && _0x158eac ? _0x33d5a5.find(_0x2f5336 => _0x2f5336.id === _0x158eac) : null;
    const _0x500ce3 = _0x40c84d && _0x40c84d.targetOriginOverride ? _0x40c84d.targetOriginOverride : _0x4f7e80(_0x4ddb66) || "";
    _0x7343fe(_0x500ce3).then(_0x166170 => {
      if (!_0x166170) {
        return;
      }
      const _0x4baf63 = _0x20df35(_0x166170);
      if (!_0x4baf63) {
        return;
      }
      if (_0x40c84d) {
        _0x40c84d.targetOriginOverride = _0x4baf63;
      }
      _0x4ddb66 = _0x4baf63 + "/";
      _0x4bb03d(_0x4baf63);
    });
  });
  _0x75e3bc && _0x75e3bc.addEventListener("click", async () => {
    const _0x4debc7 = (_0x33d5a5 || []).filter(_0x57f384 => !_0x5aec1b(_0x57f384)).length;
    if (!_0x4debc7) {
      _0x34a884(_0x850dc("replayAiClearNoCases"));
      return;
    }
    const _0x3fe59e = await _0x2c72ac(_0x850dc("replayAiClearConfirm", String(_0x4debc7)), _0x850dc("replayAiClearConfirmTitle"));
    if (!_0x3fe59e) {
      return;
    }
    const _0x4fbc35 = (_0x33d5a5 || []).filter(_0x347d74 => _0x5aec1b(_0x347d74));
    _0x33d5a5 = _0x4fbc35;
    if (!_0x33d5a5.length) {
      _0x29a5ad({
        id: "send_0",
        title: _0x850dc("replayDraft") || "Draft",
        requestRaw: "",
        responseRaw: "",
        statusText: "-"
      });
      _0x6d2f22("send_0");
      return;
    }
    const _0x4b85fe = _0x33d5a5.some(_0x281d87 => _0x281d87.id === _0x158eac);
    const _0x1b3b48 = _0x4b85fe ? _0x158eac : _0x33d5a5[0] && _0x33d5a5[0].id;
    _0x4f1326();
    if (_0x1b3b48) {
      _0x6d2f22(_0x1b3b48);
    }
    _0x34a884(_0x850dc("replayAiCleared"));
  });
  document.addEventListener("keydown", _0xde1c59 => {
    if (_0xde1c59.key !== "Escape") {
      return;
    }
    if (_0x2f943c && !_0x2f943c.classList.contains("hidden")) {
      _0x2f943c.classList.add("hidden");
      return;
    }
    if (_0x1898fa && !_0x1898fa.classList.contains("hidden")) {
      {
        _0x347a72();
      }
    }
  });
  function _0x1fad8a(_0x5c6f11) {
    if (_0x5c6f11 && !_0x3e8fd4()) {
      return;
    }
    const _0x282a76 = _0x33d5a5 && _0x158eac ? _0x33d5a5.find(_0x5d4c84 => _0x5d4c84.id === _0x158eac) : null;
    const _0x21ecb9 = _0x282a76 && _0x282a76.aiCaseType ? String(_0x282a76.aiCaseType) : "";
    const _0x5ef05e = _0x282a76 && _0x282a76.aiCaseDesc ? String(_0x282a76.aiCaseDesc) : "";
    const _0x1e3ea3 = _0x2ec227();
    const _0x1577e4 = _0x1073d3 && _0x1073d3.dataset ? _0x1073d3.dataset.viewMode || _0x1504f6() : _0x1504f6();
    if (_0x1577e4 === "raw") {
      const _0x4f7606 = _0x3cb71f(_0x1073d3);
      _0x9fe1e1(_0x1073d3, _0x4f7606);
    }
    const _0x35256e = _0x307492(_0x1073d3);
    const _0x37c409 = _0x13d066(_0x35256e);
    const _0x543197 = _0x37c409 && typeof _0x37c409.raw === "string" ? _0x37c409.raw : _0x35256e;
    const _0x4c6449 = _0x2370d2(_0x543197, _0x4ddb66, {
      smartEncodeUrl: !!_0x59b777
    });
    _0x145f0a(_0x4c6449, _0x1e3ea3);
    if (_0x5c6f11 && String(_0x4c6449.method || "GET").toUpperCase() !== "GET") {
      _0x34a884(_0x850dc("replayDomGetOnly") || "In-page replay supports GET requests only.");
      return;
    }
    const _0x3b0b3b = performance.now();
    const _0x8554ba = _0x5c6f11 ? _0xebda08.MESSAGE.REPLAY_DOM || "REPLAY_DOM" : _0xebda08.MESSAGE.REPLAY || "REPLAY";
    const _0x5a10d1 = _0x5c6f11 ? {
      url: _0x4c6449.url,
      domWaitMs: 3500
    } : {
      url: _0x4c6449.url,
      method: _0x4c6449.method,
      headers: _0x4c6449.headers,
      body: _0x4c6449.body || undefined
    };
    _0x4b6be4.runtime.sendMessage({
      type: _0x8554ba,
      url: _0x4c6449.url,
      payload: _0x5a10d1
    }, _0x283ad2 => {
      {
        const _0x3f4f7b = Math.round(performance.now() - _0x3b0b3b);
        _0x39126c += 1;
        const _0xabcce8 = "send_" + _0x39126c;
        if (_0x283ad2 && _0x283ad2.ok) {
          const _0x37e42f = String(_0x283ad2.status || "-");
          const _0x59439a = _0xbc6e93(_0x283ad2);
          const _0x36b5e6 = new TextEncoder().encode(_0x59439a).length;
          const _0xba392 = _0x5c6f11 ? _0x850dc("replayDomTag") || "DOM" : _0x850dc("replaySendTag") || "Send";
          _0x29a5ad({
            id: _0xabcce8,
            title: _0xba392 + " " + _0x39126c + " · " + _0x37e42f,
            requestRaw: _0x543197,
            responseRaw: _0x59439a,
            statusText: _0x37e42f,
            url: String(_0x4c6449.url || _0x282a76 && _0x282a76.url || _0x4ddb66 || ""),
            sourceUrl: String(_0x282a76 && (_0x282a76.sourceUrl || _0x282a76.url) || _0x4ddb66 || ""),
            sourceRecordId: _0x282a76 && _0x282a76.sourceRecordId ? String(_0x282a76.sourceRecordId) : "",
            sourceTabId: _0x282a76 && _0x282a76.sourceTabId != null ? _0x282a76.sourceTabId : _0x2dde63,
            sourceTimestamp: _0x282a76 && _0x282a76.sourceTimestamp ? Number(_0x282a76.sourceTimestamp) : 0,
            responseSizeBytes: _0x36b5e6,
            responseDurationMs: _0x3f4f7b,
            aiCaseType: _0x21ecb9,
            aiCaseDesc: _0x5ef05e,
            targetOriginOverride: _0x1e3ea3
          });
          _0x6d2f22(_0xabcce8);
        } else {
          const _0x5e4471 = String(_0x283ad2 && _0x283ad2.error || "Replay failed");
          const _0x246f60 = new TextEncoder().encode(_0x5e4471).length;
          const _0x389f7c = _0x5c6f11 ? _0x850dc("replayDomTag") || "DOM" : _0x850dc("replaySendTag") || "Send";
          _0x29a5ad({
            id: _0xabcce8,
            title: _0x389f7c + " " + _0x39126c + " · ERR",
            requestRaw: _0x543197,
            responseRaw: _0x5e4471,
            statusText: "-",
            url: String(_0x4c6449.url || _0x282a76 && _0x282a76.url || _0x4ddb66 || ""),
            sourceUrl: String(_0x282a76 && (_0x282a76.sourceUrl || _0x282a76.url) || _0x4ddb66 || ""),
            sourceRecordId: _0x282a76 && _0x282a76.sourceRecordId ? String(_0x282a76.sourceRecordId) : "",
            sourceTabId: _0x282a76 && _0x282a76.sourceTabId != null ? _0x282a76.sourceTabId : _0x2dde63,
            sourceTimestamp: _0x282a76 && _0x282a76.sourceTimestamp ? Number(_0x282a76.sourceTimestamp) : 0,
            responseSizeBytes: _0x246f60,
            responseDurationMs: _0x3f4f7b,
            aiCaseType: _0x21ecb9,
            aiCaseDesc: _0x5ef05e,
            targetOriginOverride: _0x1e3ea3
          });
          _0x6d2f22(_0xabcce8);
        }
      }
    });
  }
  if (_0x12d68c) {
    _0x12d68c.addEventListener("click", () => _0x1fad8a(false));
  }
  if (_0x24f815) {
    _0x24f815.addEventListener("click", () => _0x1fad8a(true));
  }
  if (_0x58d8c2) {
    _0x58d8c2.addEventListener("click", () => {
      const _0x5f007b = _0x1073d3 && _0x1073d3.dataset ? _0x1073d3.dataset.viewMode || _0x1504f6() : _0x1504f6();
      const _0x5d8d3b = _0x307492(_0x1073d3);
      const _0x1a3705 = _0x5f007b === "hex" ? _0x37c872(_0x5d8d3b) : _0x5f007b === "raw" ? _0x233161(_0x5d8d3b, "raw") : _0x233161(_0x5d8d3b, "pretty");
      _0x3f2596(_0x1a3705).then(() => _0x3212e3(_0x58d8c2, _0x850dc("copied"), 1200)).catch(() => _0x3212e3(_0x58d8c2, _0x850dc("copyFailed"), 1400));
    });
  }
  if (_0x57c129) {
    _0x57c129.addEventListener("click", () => {
      const _0x28495e = _0x39c18b && _0x39c18b.dataset ? _0x39c18b.dataset.viewMode || "pretty" : "pretty";
      const _0x22cd2c = _0x33d5a5 && _0x158eac ? _0x33d5a5.find(_0x39913e => _0x39913e.id === _0x158eac) : null;
      if (_0x28495e === "ai") {
        const _0x260780 = _0x22cd2c && _0x22cd2c.aiJudgeResultText ? String(_0x22cd2c.aiJudgeResultText) : "";
        _0x3f2596(_0x260780).then(() => _0x3212e3(_0x57c129, _0x850dc("copied"), 1200)).catch(() => _0x3212e3(_0x57c129, _0x850dc("copyFailed"), 1400));
        return;
      }
      if (_0x28495e === "render") {
        _0x34a884(_0x850dc("microFuzzCopyRenderNotSupported"));
        return;
      }
      const _0x5bcac4 = _0x307492(_0x39c18b);
      const _0xcb3c4d = _0x28495e === "hex" ? _0x37c872(_0x5bcac4) : _0x28495e === "raw" ? _0x233161(_0x5bcac4, "raw") : _0x233161(_0x5bcac4, "pretty");
      _0x3f2596(_0xcb3c4d).then(() => _0x3212e3(_0x57c129, _0x850dc("copied"), 1200)).catch(() => _0x3212e3(_0x57c129, _0x850dc("copyFailed"), 1400));
    });
  }
  function _0x3b6804() {
    const _0x387285 = _0x158eac || "";
    if (!_0x387285) {
      return;
    }
    const _0x40a9e6 = _0x565b91.get(_0x387285) || [];
    const _0x599c54 = _0x4387a7.get(_0x387285) || [];
    const _0x2b2441 = _0x122ddd.has(_0x387285) ? String(_0x122ddd.get(_0x387285) || "") : _0x307492(_0x1073d3) || "";
    if (!_0x40a9e6.length) {
      return;
    }
    const _0x53b40c = _0x40a9e6.pop();
    _0x599c54.push(_0x2b2441);
    _0x4387a7.set(_0x387285, _0x599c54);
    _0x565b91.set(_0x387285, _0x40a9e6);
    _0x122ddd.set(_0x387285, String(_0x53b40c || ""));
    _0x33da0b(_0x53b40c);
    _0xfcba4c();
  }
  function _0x704e45() {
    const _0x5e50b3 = _0x158eac || "";
    if (!_0x5e50b3) {
      return;
    }
    const _0x2e3ed5 = _0x565b91.get(_0x5e50b3) || [];
    const _0x2a203e = _0x4387a7.get(_0x5e50b3) || [];
    const _0x38efb8 = _0x122ddd.has(_0x5e50b3) ? String(_0x122ddd.get(_0x5e50b3) || "") : _0x307492(_0x1073d3) || "";
    if (!_0x2a203e.length) {
      return;
    }
    const _0x5b7b26 = _0x2a203e.pop();
    _0x2e3ed5.push(_0x38efb8);
    _0x4387a7.set(_0x5e50b3, _0x2a203e);
    _0x565b91.set(_0x5e50b3, _0x2e3ed5);
    _0x122ddd.set(_0x5e50b3, String(_0x5b7b26 || ""));
    _0x33da0b(_0x5b7b26);
    _0xfcba4c();
  }
  if (_0x487a10) {
    _0x487a10.addEventListener("click", _0x3b6804);
  }
  if (_0x311d1c) {
    _0x311d1c.addEventListener("click", _0x704e45);
  }
  _0x45d1fb();
  _0x4778bb();
  const _0xea7377 = document.getElementById("btnPolicySideOpenPopup");
  if (_0xea7377) {
    {
      _0xea7377.addEventListener("click", () => _0x29e36d());
    }
  }
  document.addEventListener("click", _0x5ec182 => {
    const _0x17fd5f = _0x5ec182.target;
    if (!_0x17fd5f || !_0x17fd5f.closest) {
      return;
    }
    const _0x473818 = _0x17fd5f.closest(".hx-copy-req-full-url");
    if (_0x473818) {
      {
        const _0x5b42a4 = _0x473818.closest(".record-detail-inline");
        if (_0x5b42a4) {
          _0x5ec182.preventDefault();
          _0x5ec182.stopPropagation();
          const _0x26a8be = _0x5b42a4.querySelector(".req-raw");
          const _0x50e2d2 = _0x26a8be ? _0x307492(_0x26a8be) : "";
          _0x2e2843(_0x50e2d2, _0x271dbe(_0x5b42a4));
          return;
        }
        if (_0x1898fa && !_0x1898fa.classList.contains("hidden") && _0x473818.closest("#replayModal") && _0x1073d3) {
          {
            _0x5ec182.preventDefault();
            _0x5ec182.stopPropagation();
            _0x2e2843(_0x307492(_0x1073d3), _0x43b0ee());
            return;
          }
        }
        if (_0x2f943c && !_0x2f943c.classList.contains("hidden") && _0x473818.closest("#replayFuzzModal") && _0xc41ff8) {
          {
            _0x5ec182.preventDefault();
            _0x5ec182.stopPropagation();
            _0x2e2843(_0x307492(_0xc41ff8), _0x43b0ee());
            return;
          }
        }
        return;
      }
    }
    const _0x4c7adb = _0x17fd5f.closest(".hx-download-req-resp-txt");
    if (!_0x4c7adb) {
      return;
    }
    const _0x4c5437 = _0x4c7adb.closest(".record-detail-inline");
    if (_0x4c5437) {
      {
        _0x5ec182.preventDefault();
        _0x5ec182.stopPropagation();
        _0x52e2e1(_0x4c5437.querySelector(".req-raw"), _0x4c5437.querySelector(".resp-raw"));
        return;
      }
    }
    if (_0x1898fa && !_0x1898fa.classList.contains("hidden") && _0x4c7adb.closest("#replayModal") && _0x1073d3 && _0x39c18b) {
      _0x5ec182.preventDefault();
      _0x5ec182.stopPropagation();
      _0x52e2e1(_0x1073d3, _0x39c18b);
      return;
    }
    if (_0x2f943c && !_0x2f943c.classList.contains("hidden") && _0x4c7adb.closest("#replayFuzzModal") && _0xc41ff8 && _0x3025ed) {
      _0x5ec182.preventDefault();
      _0x5ec182.stopPropagation();
      _0x52e2e1(_0xc41ff8, _0x3025ed);
      return;
    }
  }, true);
  document.addEventListener("click", _0x4f1ad9 => {
    if (!_0x7f2651) {
      return;
    }
    if (!_0x17beeb) {
      const _0x109ea5 = _0x4f1ad9.target;
      if (_0x109ea5 && _0x109ea5.closest && _0x109ea5.closest("#userPolicySideOverlay")) {
        return;
      }
      _0x4f1ad9.preventDefault();
      _0x4f1ad9.stopImmediatePropagation();
      _0x29e36d();
      return;
    }
    const _0x4b7638 = _0x4f1ad9.target;
    if (!_0x4b7638 || !_0x4b7638.closest) {
      return;
    }
    if (!_0x187e38) {
      const _0x4fffd1 = _0x31cb28(_0x4b7638);
      _0x4fffd1 && (_0x4f1ad9.preventDefault(), _0x4f1ad9.stopImmediatePropagation(), void _0xd671d8(_0x4fffd1));
    }
  }, true);
  document.addEventListener("change", _0x1fc31d => {
    {
      if (_0x187e38) {
        return;
      }
      const _0x37b74c = _0x1fc31d.target;
      if (!_0x37b74c || !_0x37b74c.closest) {
        return;
      }
      const _0x53c203 = _0x31cb28(_0x37b74c);
      if (!_0x53c203) {
        return;
      }
      _0x1fc31d.preventDefault();
      _0x1fc31d.stopImmediatePropagation();
      if (_0x37b74c.tagName === "SELECT") {
        _0x37b74c.value = "";
      }
      void _0xd671d8(_0x53c203);
    }
  }, true);
  document.addEventListener("keydown", _0x5dbca1 => {
    {
      if (_0x187e38) {
        return;
      }
      if (_0x5dbca1.key !== "Enter" && _0x5dbca1.key !== " ") {
        return;
      }
      const _0x2f4395 = _0x31cb28(_0x5dbca1.target);
      if (!_0x2f4395) {
        return;
      }
      _0x5dbca1.preventDefault();
      _0x5dbca1.stopImmediatePropagation();
      void _0xd671d8(_0x2f4395);
    }
  }, true);
})();