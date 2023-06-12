const typeTemplate = "${label} không phải kiểu ${type}";

const localeValues = {
  locale: "vi",
  global: {
    placeholder: "Vui lòng chọn",
  },
  Table: {
    filterTitle: "Bộ lọc",
    filterConfirm: "OK",
    filterReset: "Reset",
    filterEmptyText: "Không có bộ lọc nào",
    emptyText: "Không có dữ liệu",
    selectAll: "Chọn tất cả",
    selectInvert: "Chọn ngược lại",
    selectNone: "Bỏ chọn tất cả",
    selectionAll: "Chọn tất cả",
    sortTitle: "Sắp xếp",
    expand: "Mở rộng",
    collapse: "Thu gọn",
    triggerDesc: "Sắp xếp giảm dần",
    triggerAsc: "Sắp xếp tăng dần",
    cancelSort: "Huỷ sắp xếp",
  },
  Modal: {
    okText: "OK",
    cancelText: "Huỷ",
    justOkText: "OK",
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Huỷ",
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Tìm kiếm",
    itemUnit: "item",
    itemsUnit: "items",
    remove: "Bỏ chọn",
    selectCurrent: "Chọn cả trang hiện tại",
    removeCurrent: "Bỏ chọn cả trang hiện tại",
    selectAll: "Chọn tất cả",
    removeAll: "Bỏ chọn tất cả",
    selectInvert: "Chọn ngược lại",
  },
  Upload: {
    uploading: "Đang tải lên...",
    removeFile: "Xoá file",
    uploadError: "Tải lên không thành công",
    previewFile: "Xem trước",
    downloadFile: "Tải xuống",
  },
  Empty: {
    description: "Không có dữ liệu",
  },
  Icon: {
    icon: "icon",
  },
  Text: {
    edit: "Sửa",
    copy: "Copy",
    copied: "Đã copy",
    expand: "Mở rộng",
  },
  PageHeader: {
    back: "Trở về",
  },
  Form: {
    optional: "(tuỳ chọn)",
    defaultValidateMessages: {
      default: "Field validation error for ${label}",
      required: "Vui lòng nhập ${label}",
      enum: "${label} phải lằ một trong [${enum}]",
      whitespace: "${label} không được phép là khoảng trắng",
      date: {
        format: "${label} không đúng định dạng ngày",
        parse: "${label} không thể chuyển sang định dạng ngày",
        invalid: "${label} không phải ngày",
      },
      types: {
        string: typeTemplate,
        method: typeTemplate,
        array: typeTemplate,
        object: typeTemplate,
        number: typeTemplate,
        date: typeTemplate,
        boolean: typeTemplate,
        integer: typeTemplate,
        float: typeTemplate,
        regexp: typeTemplate,
        email: typeTemplate,
        url: typeTemplate,
        hex: typeTemplate,
      },
      string: {
        len: "${label} phải có ${len} ký tự",
        min: "${label} có ít nhất ${min} ký tự",
        max: "${label} có nhiếu nhất ${max} ký tự",
        range: "${label} phải có từ ${min} đến ${max} ký tự",
      },
      number: {
        len: "${label} phải bằng ${len}",
        min: "${label} phải lớn hơn ${min}",
        max: "${label} phải nhỏ hơn ${max}",
        range: "${label} phải nằm trong khoảng ${min}-${max}",
      },
      array: {
        len: "Phải có ${len} ${label}",
        min: "Cần ít nhất ${min} ${label}",
        max: "Có nhiều nhất ${max} ${label}",
        range: "Số lượng ${label} phải nằm trong khoảng ${min}-${max}",
      },
      pattern: {
        mismatch: "${label} không khớp với mẫu ${pattern}",
      },
    },
  },
  Image: {
    preview: "Xem trước",
  },
};

export default localeValues;
