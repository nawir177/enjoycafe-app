import React from 'react'
import CardPayment from '../../components/card/CardPayment'
import App from '../App'
export default function PaymentList() {
    return (
        <App>
            <div className="mb-6">
                {/* address */}
                <div className="flex gap-2 items-center text-primary">
                    <div className="col">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                        </svg>

                    </div>
                    <div className="col">
                        Alamat Pengeriman
                    </div>
                </div>
                <div className="my-4 p-4 bg-yellow-50 shadow text-primary rounded-xl text-xs font-semi-bold mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                    </svg>
                    Pengeriman Barang Hanya berlaku untuk daerah Desa Sekapung.Kecamatan Pulau Sebuku
                </div>
                <div className="mb-4 bg-white rounded-xl shadow p-4">
                    <h2 className='text-lg mb-3 text-primary'>Masukkan RT tempat tinggal kamu (Khusus Area Desa Sekapung)</h2>
                    <div class="flex items-center mb-4">
                        <input id="rt1" type="radio" value="1" name="rt" className="size-3 text-primary bg-gray-100 border-gray-300" />
                        <label for="rt1" class="ms-2 text-sm font-medium text-gray-900 ">Sekapung Rt 1</label>
                    </div>
                    <div class="flex items-center mb-4">
                        <input id="2" type="radio" value="2" name="rt" className="size-3 text-primary bg-gray-100 border-gray-300" />
                        <label for="2" class="ms-2 text-sm font-medium text-gray-900 ">Sekapung Rt 2</label>
                    </div>
                    <div class="flex items-center mb-4">
                        <input id="3" type="radio" value="3" name="rt" className="size-3 text-primary bg-gray-100 border-gray-300" />
                        <label for="3" class="ms-2 text-sm font-medium text-gray-900 ">Sekapung Rt 3</label>
                    </div>
                    <div class="flex items-center mb-4">
                        <input id="4" type="radio" value="4" name="rt" className="size-3 text-primary bg-gray-100 border-gray-300" />
                        <label for="4" class="ms-2 text-sm font-medium text-gray-900 ">Sekapung Rt 4</label>
                    </div>
                    <div class="flex items-center mb-4">
                        <input id="5" type="radio" value="5" name="rt" className="size-3 text-primary bg-gray-100 border-gray-300" />
                        <label for="5" class="ms-2 text-sm font-medium text-gray-900 ">Sekapung Rt 5</label>
                    </div>

                    <div className="my-4">
                        <label for="message" className="block mb-2 text-xl  text-primary">Detail Alamat</label>
                        <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="contoh di dekat mesjid/sekolah SD ..."></textarea>

                    </div>
                </div>
            </div>
            <h1 className='text-xl text-primary mb-4'>Product yang di pesan </h1>
            <div className="relative overflow-x-scroll max-w-sm">
                <table className='w-full font-normal text-sm text-left'>
                    <thead className='font-thin text-xs'>
                        <tr>
                            <th scope='col' className='px-4 py-2 w-36'>Nama</th>
                            <th scope='col' className='px-4 py-2'>Jml</th>
                            <th scope='col' className='px-4 py-2'>Harga Satuan</th>
                            <th scope='col' className='px-4 py-2 w-24'>Sub Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='px-4 py-2'>
                                <div className="flex gap-2 items-center">
                                    <div className="col">
                                        <div className="size-10 bg-gray-200"></div>
                                    </div>
                                    <div className="col">
                                        Nama Produk
                                    </div>
                                </div>
                            </td>
                            <td className='px-4 py-2'>2</td>
                            <td className='px-4 py-2'>Rp 6000</td>
                            <td className='px-4 py-2'>Rp 12.000</td>
                        </tr>
                        <tr>
                            <td className='px-4 py-2'>
                                <div className="flex gap-2 items-center">
                                    <div className="col">
                                        <div className="size-10 bg-gray-200"></div>
                                    </div>
                                    <div className="col">
                                        Nama Produk
                                    </div>
                                </div>
                            </td>
                            <td className='px-4 py-2'>2</td>
                            <td className='px-4 py-2'>Rp 6000</td>
                            <td className='px-4 py-2'>Rp 12.000</td>
                        </tr>
                        <tr>
                            <td className='px-4 py-2'>
                                <div className="flex gap-2 items-center">
                                    <div className="col">
                                        <div className="size-10 bg-gray-200"></div>
                                    </div>
                                    <div className="col">
                                        Nama Produk
                                    </div>
                                </div>
                            </td>
                            <td className='px-4 py-2'>2</td>
                            <td className='px-4 py-2'>Rp 6000</td>
                            <td className='px-4 py-2'>Rp 12.000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <hr />
            <div className="flex w-full justify-between items-center font-semibold">
                <div className="col text-primary">
                    Subtotal 
                </div>
                <div className="col text-gray-500">
                    Rp. 30.000
                </div>
            </div>
            <div className="flex w-full justify-between items-center font-semibold">
                <div className="col text-primary">
                    Ongkir
                </div>
                <div className="col text-gray-500">
                    Rp. 3000
                </div>
            </div>
            <div className="flex w-full justify-between items-center font-semibold mb-2">
                <div className="col text-primary">
                    Total
                </div>
                <div className="col">
                    Rp. 33.000
                </div>
            </div>
    
            <button className='w-full rounded-full bg-primary text-white py-2 font-medium mt-4 hover:bg-orange-400'>
                Buat Pesanan
            </button>
        </App>
    )
}
