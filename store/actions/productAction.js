import axios from 'axios'
import * as types from '../types'

export const fetchProducts = () => async (dispatch) => {
  try {
    dispatch({ type: types.PRODUCT_LIST_REQUEST })

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJkaGFrYWkuY29tIiwiZGF0YSI6eyJlbWFpbCI6InJhamliMkBnbWFpbC5jb20iLCJkZXZpY2VVdWlkIjoiMTIxM3Nkc2ZzNDU2c2RzZDc3OHNkczg3Nzg3ZHNkIiwidXNlclVpZCI6IkJVLTFNSlZGIiwibmFtZSI6Ik1kIFR1c2hlciBIZWxsbyIsImNvbXBhbnlOYW1lIjoiRGhha2FpIEJhbmdsYWRlc2giLCJ1c2VyVHlwZSI6IkJVWUVSIiwidXNlclJvbGUiOiJCVVlFUiIsImxvZ2luVHlwZSI6IkVNQUlMIn0sImlhdCI6MTY0NDY2MzYxMCwiZXhwIjoxNjUyNDM5NjEwfQ.iTWlJlpNlFBkba5gxELuBM7aeKxk43I8PzMbGDQyjNa6n-UzP5nIINNDQVyVwRoGnLrst2Tu2ioeChY8ehH3yeMlIeGr_UgCWC9Be7obWFVgKqixMv5uCfIPqxbKBtmuCYiPKLKatr5qLb0shx7d8Qp_RFiJwNXBz7jo_R_lfRhInEP7GXd6hHDe_uTVWMVj7PTyNqDc-caT71pmTUHqdK385v8lNwTUXDVN9Bdts7hKTFFgKXb0s0_fHY0fc839qUd_4NxMHg3IWHYfAyoJFWDGONxLP6IK2ALNZC1cU7alUIkg78k5AjYTSY3mV3uRZN-bxgOaB_aEm5Hn-5pAsCp5AD8tK_k_521gD07ZOR88JQ5AbOgx_LVDIf3RqoFvZPZbKkZvsjx0SVWu5RnxTvKBmymJbJo_6TMnKOIa--RE0au9S3P7wOeR633bvPdcHd6geomdNWHutSk9Ee_RwQCpA5k4LpLkviSgOTrLjmUKtv4yvT7ZbVBNTRaX4294q3Y6FvzSEU8aU6BtRkSYY5gDBi_RYUgaODx6FPQAEn5_51eeur9C-uYSkVVCM8N5W0Rdqma3pQuPuvYZYm-Hp4noI_qDpWcimNMPH-jRDX5o4Nfohz2xRsqI8LTLxBKBLWirmhFuUgI0ZWRR-6RtwTAJFYoJ5m0etnjhJOLvA3Y`,
      },
    }

    const { data } = await axios.get(
      'https://devapi.dhakai.com/api/v2/manufacturers',config
    )

    dispatch({
      type: types.PRODUCT_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: types.PRODUCT_LIST_FAIL,
      payload: error.response,
    })
  }
  // dispatch({
  //   type: types.PRODUCT_LIST_SUCCESS,
  //   payload: ['1st post', '1st post', '1st post', '1st post', '1st post'],
  // })
}
