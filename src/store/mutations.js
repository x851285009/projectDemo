/*
直接更新state的多个方法的对象
 */
import {
    REACT_TEST
} from './mutation-type'

export default {
    [REACT_TEST] (state) {
        state.test = !state.test
    },
}