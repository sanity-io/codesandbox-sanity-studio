import S from "@sanity/desk-tool/structure-builder";

export default () => S.list().items([...S.documentTypeList()]);
