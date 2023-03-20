import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

interface initialAuthState {
    title: string;
    point: string;
    chart: number[];
}

const initialState: initialAuthState = {
    title: '광고비',
    point: '',
    chart: [],
};

export const stateSlice = createSlice({
    name: 'state',
    initialState,
    reducers: {
        changeTitle: (
            state: { title: string; point: string },
            action: PayloadAction<string>,
        ): void => {
            switch (action.payload) {
                case '광고비': {
                    state.title = action.payload;
                    state.point = '원';
                }
                case '노출수': {
                    state.title = action.payload;
                    state.point = '건';
                }
                case '클릭수': {
                    state.title = action.payload;
                    state.point = '건';
                }
                case '전환수': {
                    state.title = action.payload;
                    state.point = '건';
                }
                case '전환매출액': {
                    state.title = action.payload;
                    state.point = '원';
                }
                case 'CPC': {
                    state.title = action.payload;
                    state.point = '%';
                }
                case 'CPM': {
                    state.title = action.payload;
                    state.point = '원';
                }
                case 'CTR': {
                    state.title = action.payload;
                    state.point = '원';
                }
                case 'ROAS': {
                    state.title = action.payload;
                    state.point = '%';
                }
            }
        },
        changeFetchData: (state, action: PayloadAction) => {
            switch (state.title) {
                case '광고비':
                    return action.payload;
            }
        },
    },
});

export const { changeTitle, changeFetchData } = stateSlice.actions;
export default stateSlice.reducer;
