import useSWR from 'swr'
import http from '../http'

export default function useHomePageData() {
    const { data, error } = useSWR('home-pages', http.get)
    if (error) return error
    const dataObj = data?.data.data[0];
    return { data: dataObj, error }
}

