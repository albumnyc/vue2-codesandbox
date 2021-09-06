import createProvider, { LogPlugin, SubscribePlugin } from "dobux-vue";
import { reactive, watch, computed } from "@vue/composition-api";

const { useContext, createContext, trigger } = createProvider((ctx) => {
    console.log({
        ctx
    });

    const obj1 = {
        a: {
            b: 1,
        }
    };
    const obj2 = {
        a: {
            b: 2,
            c: 2,
        }
    };
    const data = reactive({
        counter: 0,
        isEven: false,
        input: 'init',
        obj: obj1
    });
    trigger('computed2Input', 4, 5, 6);

    const vModelInput = computed({
        get() {
            return data.input;
        },
        set(val: string) {
            trigger('composeState', 'data', { input: val });
        }
    });

    watch(() => data.counter, () => {
        if (data.counter % 2) {
            trigger('composeState', 'data', {
                isEven: true,
                obj: obj2,
            });
        } else {
            trigger('composeState', 'data', {
                isEven: false,
                obj: obj1
            });
        }
    });

    const computed2Input = (a: number, b: number, c: number) => {
        data.counter = parseInt(vModelInput.value) || 666;
    };

    return {
        state: {
            data,
        },
        getters: {
            vModelInput,
        },
        effects: {

        },
        reducers: {
            computed2Input,
        }
    };
}, {
    strict: true,
    moduleName: 'strict',
    plugins: [
        {
            plugin: LogPlugin,
            params: {
                reducersFilter: (reducerName: string, store: any) => {
                    if (reducerName === 'composeState') {
                        return false;
                    }
                    return true;
                }
            }
        },
        {
            plugin: SubscribePlugin,
            params: {
                // observe: (store: any) => store.state.data.input
            }
        }
    ]
});

export const useStrictModel = useContext;
export const createStrictModel = createContext;