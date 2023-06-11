import { initReactI18next } from 'gatsby-plugin-react-i18next';
import i18n from 'i18next';
import RichTrans from ".";
import { appSkeletonRender } from "../../../__mocks__/examples/app_skeleton";

const possibleElems = (container: HTMLElement) => [
    container.getElementsByTagName('em'),
    container.getElementsByTagName('b'),
    container.getElementsByTagName('u'),
].filter(i => i.length);

describe('Rich Trans Component', () => {
    i18n.use(initReactI18next)
    .init({
        lng: 'en',
        fallbackLng: 'en',
        ns: ['default'],
        defaultNS: 'default',
        resources: {
            en: {
                default: {
                    'without_format': 'Without Format',
                    'with_em': 'With the <0>EM</0> formatter.',
                    'with_b': 'With the <1>B</1> formatter.',
                    'with_u': 'With the <2>U</2> formatter.',
                }
            }
        },
    });

    it('should remove all formatting elements.', () => {
        const rendered = appSkeletonRender(RichTrans, {i18nKey: 'without_format', id: 'trans', i18n});
        console.log(rendered.container.innerHTML);
        const pe = possibleElems(rendered.container);
        expect(pe.length).toBe(0);
    })

    const testEach = (i18nkey: string, elemType: string) => {
        const rendered = appSkeletonRender(RichTrans, {i18nKey: i18nkey, i18n});
        console.log(rendered.container.innerHTML);
        const pe = possibleElems(rendered.container);
        expect(pe.length).toBe(1);
        expect(rendered.getByText(elemType).tagName).toBe(elemType);
    }

    it('should add only an EM around the formatted text.', () => {
        return testEach('with_em', 'EM');
    })

    it('should add only a B around the formatted text.', () => {
        return testEach('with_b', 'B');
    })

    it('should add only an U around the formatted text.', () => {
        return testEach('with_u', 'U');
    })
});