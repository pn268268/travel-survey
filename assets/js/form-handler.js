/**
 * Club Med 線上諮詢表 - 共用表單驗證、日期格式轉換與 Google 表單送出模組
 * 保留所有原始 Google Forms entry.* 欄位名稱與 action URL，確保後端收件相容。
 */
(function () {
  "use strict";

  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const ALPHA_SPACE_REGEX = /^[A-Za-z\s]+$/;
  const ALNUM_REGEX = /^[A-Za-z0-9]+$/;
  const INT_REGEX = /^\d+$/;

  function formatDateToSlash(isoDate) {
    if (!isoDate) return "";
    return isoDate.trim().replace(/-/g, "/");
  }

  function syncDateHiddenInputs(form) {
    const datePickers = form.querySelectorAll("input[type='date'][data-hidden-name]");
    datePickers.forEach(function (picker) {
      const hiddenName = picker.getAttribute("data-hidden-name");
      const hiddenInput = form.querySelector("input[type='hidden'][name='" + hiddenName + "']");
      if (hiddenInput) {
        hiddenInput.value = formatDateToSlash(picker.value);
      }
    });
  }

  function showFieldError(fieldEl, message) {
    if (!fieldEl) return;
    fieldEl.classList.add("is-invalid");
    fieldEl.setAttribute("aria-invalid", "true");
    const wrapper = fieldEl.closest(".form-field, .participant-item, .consent-item");
    if (wrapper) {
      const errEl = wrapper.querySelector(".field-error");
      if (errEl) {
        errEl.textContent = message;
        errEl.classList.add("is-visible");
      }
    }
  }

  function clearFieldError(fieldEl) {
    if (!fieldEl) return;
    fieldEl.classList.remove("is-invalid");
    fieldEl.removeAttribute("aria-invalid");
    const wrapper = fieldEl.closest(".form-field, .participant-item, .consent-item");
    if (wrapper) {
      const errEl = wrapper.querySelector(".field-error");
      if (errEl) {
        errEl.textContent = "";
        errEl.classList.remove("is-visible");
      }
    }
  }

  function clearAllErrors(form) {
    form.querySelectorAll(".is-invalid").forEach(function (el) {
      el.classList.remove("is-invalid");
      el.removeAttribute("aria-invalid");
    });
    form.querySelectorAll(".field-error").forEach(function (el) {
      el.textContent = "";
      el.classList.remove("is-visible");
    });
    const summary = form.querySelector(".form-error-summary");
    if (summary) {
      summary.classList.remove("is-visible");
      summary.innerHTML = "";
    }
  }

  function initCharCounters(form) {
    form.querySelectorAll("[data-maxlength]").forEach(function (el) {
      const max = parseInt(el.getAttribute("data-maxlength"), 10);
      const counter = el.closest(".form-field")?.querySelector(".char-count");
      if (!counter || isNaN(max)) return;
      const update = function () {
        counter.textContent = el.value.length + " / " + max;
      };
      el.addEventListener("input", update);
      update();
    });
  }

  function initPrivacyModal() {
    const modal = document.getElementById("privacyModal");
    if (!modal) return;

    const openers = document.querySelectorAll("[data-open-privacy]");
    const closers = modal.querySelectorAll("[data-close-modal]");

    function openModal(e) {
      e.preventDefault();
      modal.classList.add("is-open");
      modal.setAttribute("aria-hidden", "false");
      const closeBtn = modal.querySelector(".btn-modal-ok");
      if (closeBtn) closeBtn.focus();
    }

    function closeModal() {
      modal.classList.remove("is-open");
      modal.setAttribute("aria-hidden", "true");
    }

    openers.forEach(function (btn) {
      btn.addEventListener("click", openModal);
    });
    closers.forEach(function (btn) {
      btn.addEventListener("click", closeModal);
    });
    modal.addEventListener("click", function (e) {
      if (e.target === modal) closeModal();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && modal.classList.contains("is-open")) {
        closeModal();
      }
    });
  }

  function validateQuoteForm(form) {
    const errors = [];

    function addError(el, msg) {
      showFieldError(el, msg);
      errors.push({ el: el, msg: msg });
    }

    const name = form.elements["entry.460518941"];
    if (!name.value.trim()) {
      addError(name, "請填寫姓名");
    } else if (name.value.trim().length > 20) {
      addError(name, "姓名最多 20 個字元");
    }

    const phone = form.elements["entry.1678893250"];
    if (!phone.value.trim()) {
      addError(phone, "請填寫電話");
    } else if (phone.value.trim().length > 50) {
      addError(phone, "電話最多 50 個字元");
    }

    const email = form.elements["entry.2004844878"];
    if (!email.value.trim() || !EMAIL_REGEX.test(email.value.trim())) {
      addError(email, "請填寫正確的 Email 格式");
    } else if (email.value.trim().length > 50) {
      addError(email, "Email 最多 50 個字元");
    }

    const departPicker = document.getElementById("dk_dday");
    if (!departPicker.value.trim()) {
      addError(departPicker, "請選擇出發日期");
    }

    const place = form.elements["entry.60787040"];
    if (!place.value || place.value === "000") {
      addError(place, "請選擇度假村");
    }

    const nights = form.elements["entry.167125722"];
    if (!nights.value || nights.value === "000") {
      addError(nights, "請選擇住宿晚數");
    }

    const adults = form.elements["entry.52322945"];
    if (!adults.value.trim()) {
      addError(adults, "請至少填寫成人參加人數");
    } else if (!INT_REGEX.test(adults.value.trim()) || parseInt(adults.value.trim(), 10) < 1) {
      addError(adults, "成人參加人數請填寫大於 0 的數字");
    }

    const childNames = [
      "entry.1861928357",
      "entry.1462017762",
      "entry.1299715814",
      "entry.1277234257",
      "entry.847134535"
    ];
    childNames.forEach(function (fieldName) {
      const el = form.elements[fieldName];
      if (el && el.value.trim() !== "" && !INT_REGEX.test(el.value.trim())) {
        addError(el, "參加人數限填非負整數");
      }
    });

    const ptype = form.elements["entry.776469579"];
    if (!ptype.value || ptype.value === "000") {
      addError(ptype, "請選擇行程類型");
    }

    const remarks = form.elements["entry.1067166830"];
    if (remarks.value.length > 100) {
      addError(remarks, "備註文字限制 100 個字元以內");
    }

    const consent = form.elements["entry.836360585"];
    if (!consent.checked) {
      addError(consent, "請勾選同意個資使用條款");
    }

    return errors;
  }

  function validateBookingForm(form) {
    const errors = [];

    function addError(el, msg) {
      showFieldError(el, msg);
      errors.push({ el: el, msg: msg });
    }

    // Section 1: 假期資訊
    const place = form.elements["entry.1899266587"];
    if (!place.value || place.value === "000") {
      addError(place, "請選擇度假村據點");
    }

    const ptype = form.elements["entry.1102204105"];
    if (!ptype.value || ptype.value === "000") {
      addError(ptype, "請選擇行程類型");
    }

    const departPicker = document.getElementById("dk_dday");
    if (!departPicker.value.trim()) {
      addError(departPicker, "請選擇出發日期");
    }

    const nights = form.elements["entry.1778902707"];
    if (!nights.value || nights.value === "000") {
      addError(nights, "請選擇住宿晚數");
    }

    const advisor = form.elements["entry.942315830"];
    if (!advisor.value || advisor.value === "000") {
      addError(advisor, "請選擇您的旅遊顧問");
    }

    const roomRemarks = form.elements["entry.393548609"];
    if (!roomRemarks.value.trim()) {
      addError(roomRemarks, "請填寫房型備註");
    } else if (roomRemarks.value.length > 200) {
      addError(roomRemarks, "房型備註文字限制 200 個字元以內");
    }

    // Section 2: 旅客 1 (必填)
    const t1Last = form.elements["entry.1768911321"];
    if (!t1Last.value.trim()) {
      addError(t1Last, "請填寫旅客 1 護照英文姓氏");
    } else if (!ALPHA_SPACE_REGEX.test(t1Last.value.trim())) {
      addError(t1Last, "旅客 1 護照英文姓氏限填英文字母");
    } else if (t1Last.value.trim().length > 50) {
      addError(t1Last, "旅客 1 護照英文姓氏最多 50 個字元");
    }

    const t1First = form.elements["entry.907295165"];
    if (!t1First.value.trim()) {
      addError(t1First, "請填寫旅客 1 護照英文名字");
    } else if (!ALPHA_SPACE_REGEX.test(t1First.value.trim())) {
      addError(t1First, "旅客 1 護照英文名字限填英文字母");
    } else if (t1First.value.trim().length > 50) {
      addError(t1First, "旅客 1 護照英文名字最多 50 個字元");
    }

    const t1Birth = document.getElementById("traveler1_birthday");
    if (!t1Birth.value.trim()) {
      addError(t1Birth, "請選擇旅客 1 生日");
    }

    const t1SexChecked = form.querySelector("input[name='entry.1166802696']:checked");
    if (!t1SexChecked) {
      addError(form.querySelector("input[name='entry.1166802696']"), "請選擇旅客 1 性別");
    }

    const t1Ch = form.elements["entry.1880712568"];
    if (!t1Ch.value.trim()) {
      addError(t1Ch, "請填寫旅客 1 中文姓名");
    } else if (t1Ch.value.trim().length > 20) {
      addError(t1Ch, "旅客 1 中文姓名最多 20 個字元");
    }

    const t1Id = form.elements["entry.2089118623"];
    if (!t1Id.value.trim()) {
      addError(t1Id, "請填寫旅客 1 身分證字號（外籍旅客請填寫護照號碼）");
    } else if (!ALNUM_REGEX.test(t1Id.value.trim())) {
      addError(t1Id, "旅客 1 身分證字號或護照號碼限填英文字母與數字");
    } else if (t1Id.value.trim().length > 50) {
      addError(t1Id, "旅客 1 身分證字號最多 50 個字元");
    }

    const t1Remarks = form.elements["entry.1077391629"];
    if (t1Remarks.value.length > 100) {
      addError(t1Remarks, "旅客 1 備註限制 100 個字元以內");
    }

    // 旅客 2~6 (選填，若有填寫則檢查格式)
    const optionalTravelers = [
      { idx: 2, last: "entry.1225752999", first: "entry.263422874", id: "entry.1833635982", remarks: "entry.536279059" },
      { idx: 3, last: "entry.520771796", first: "entry.1844228608", id: "entry.2022334957", remarks: "entry.1894652481" },
      { idx: 4, last: "entry.736081265", first: "entry.1877323413", id: "entry.1219255899", remarks: "entry.815173610" },
      { idx: 5, last: "entry.1039440231", first: "entry.1198415163", id: "entry.1474160666", remarks: "entry.2146408207" },
      { idx: 6, last: "entry.1632924311", first: "entry.436617425", id: "entry.45342084", remarks: "entry.2014244989" }
    ];
    optionalTravelers.forEach(function (t) {
      const lastEl = form.elements[t.last];
      const firstEl = form.elements[t.first];
      const idEl = form.elements[t.id];
      const remEl = form.elements[t.remarks];

      if (lastEl && lastEl.value.trim() && !ALPHA_SPACE_REGEX.test(lastEl.value.trim())) {
        addError(lastEl, "旅客 " + t.idx + " 護照英文姓氏限填英文字母");
      }
      if (firstEl && firstEl.value.trim() && !ALPHA_SPACE_REGEX.test(firstEl.value.trim())) {
        addError(firstEl, "旅客 " + t.idx + " 護照英文名字限填英文字母");
      }
      if (idEl && idEl.value.trim() && !ALNUM_REGEX.test(idEl.value.trim())) {
        addError(idEl, "旅客 " + t.idx + " 身分證字號或護照號碼限填英文字母與數字");
      }
      if (remEl && remEl.value.length > 100) {
        addError(remEl, "旅客 " + t.idx + " 備註限制 100 個字元以內");
      }
    });

    // Section 3: 聯絡方式
    const contactSexChecked = form.querySelector("input[name='entry.714104447']:checked");
    if (!contactSexChecked) {
      addError(form.querySelector("input[name='entry.714104447']"), "請選擇聯絡人稱謂");
    }

    const contactName = form.elements["entry.949400710"];
    if (!contactName.value.trim()) {
      addError(contactName, "請填寫聯絡人姓名");
    } else if (contactName.value.trim().length > 20) {
      addError(contactName, "聯絡人姓名最多 20 個字元");
    }

    const contactPhone = form.elements["entry.1246019802"];
    if (!contactPhone.value.trim()) {
      addError(contactPhone, "請填寫聯絡電話");
    } else if (contactPhone.value.trim().length > 50) {
      addError(contactPhone, "聯絡電話最多 50 個字元");
    }

    const contactEmail = form.elements["entry.998837620"];
    if (!contactEmail.value.trim() || !EMAIL_REGEX.test(contactEmail.value.trim())) {
      addError(contactEmail, "請填寫正確的 Email 格式");
    } else if (contactEmail.value.trim().length > 50) {
      addError(contactEmail, "Email 最多 50 個字元");
    }

    const contactAdd = form.elements["entry.1316820184"];
    if (!contactAdd.value.trim()) {
      addError(contactAdd, "請填寫聯絡備註");
    } else if (contactAdd.value.length > 200) {
      addError(contactAdd, "聯絡備註限制 200 個字元以內");
    }

    const termsAgree = form.elements["entry.1464847301"];
    if (!termsAgree.checked) {
      addError(termsAgree, "請勾選同意訂位需知條款");
    }

    const privacyAgree = form.elements["entry.40777154"];
    if (!privacyAgree.checked) {
      addError(privacyAgree, "請勾選同意個資使用條款");
    }

    return errors;
  }

  function initSurveyForm() {
    initPrivacyModal();

    const form = document.querySelector("form[data-form-type]");
    if (!form) return;

    const formType = form.getAttribute("data-form-type");
    const submitBtn = form.querySelector("button[type='submit']");
    const iframe = document.getElementById("hidden_iframe");
    let isSubmitting = false;

    initCharCounters(form);

    // Sync date pickers on change
    form.querySelectorAll("input[type='date'][data-hidden-name]").forEach(function (picker) {
      picker.addEventListener("change", function () {
        syncDateHiddenInputs(form);
        clearFieldError(picker);
      });
    });

    // Clear individual field error on user interaction
    form.addEventListener("input", function (e) {
      clearFieldError(e.target);
    });
    form.addEventListener("change", function (e) {
      clearFieldError(e.target);
    });

    function redirectToFinished() {
      if (!isSubmitting) return;
      isSubmitting = false;
      window.location.href = "../finished/finished.html";
    }

    if (iframe) {
      iframe.addEventListener("load", function () {
        if (isSubmitting) {
          redirectToFinished();
        }
      });
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (isSubmitting) return;

      clearAllErrors(form);
      syncDateHiddenInputs(form);

      const errors =
        formType === "quote"
          ? validateQuoteForm(form)
          : formType === "booking"
            ? validateBookingForm(form)
            : [];

      if (errors.length > 0) {
        const summary = form.querySelector(".form-error-summary");
        if (summary) {
          const items = errors
            .map(function (err) {
              return "<li>" + err.msg + "</li>";
            })
            .join("");
          summary.innerHTML = "<strong>請確認以下必填或格式有誤的欄位：</strong><ul>" + items + "</ul>";
          summary.classList.add("is-visible");
        }
        const firstEl = errors[0].el;
        if (firstEl) {
          firstEl.scrollIntoView({ behavior: "smooth", block: "center" });
          if (typeof firstEl.focus === "function") {
            firstEl.focus({ preventScroll: true });
          }
        }
        return;
      }

      isSubmitting = true;
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "送出中...";
      }

      // Safety fallback in case cross-origin iframe load event is delayed
      window.setTimeout(function () {
        if (isSubmitting) {
          redirectToFinished();
        }
      }, 3500);

      HTMLFormElement.prototype.submit.call(form);
    });
  }

  document.addEventListener("DOMContentLoaded", initSurveyForm);
})();
